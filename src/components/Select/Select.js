import React from 'react';
import propTypes from 'prop-types';

import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import useForkRef from '../common/hooks/useForkRef';

import { clamp } from '../common/utils';

import {
  StyledDropdownButton,
  StyledDropdownIcon,
  StyledDropdownMenu,
  StyledDropdownMenuItem,
  StyledFlatSelectWrapper,
  StyledInner,
  StyledNativeOption,
  StyledNativeSelect,
  StyledSelectContent,
  StyledSelectWrapper
} from './Select.styles';

const KEYS = {
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ENTER: 'Enter',
  ESC: 'Escape',
  SPACE: ' ',
  TAB: 'Tab'
};

function areEqualValues(a, b) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}

const getWrapper = variant =>
  variant === 'flat' ? StyledFlatSelectWrapper : StyledSelectWrapper;

const getDisplayLabel = (selectedOption, formatDisplay) => {
  if (selectedOption) {
    if (formatDisplay) {
      return formatDisplay(selectedOption);
    }
    return selectedOption.label;
  }
  return '';
};

const getDefaultValue = (defaultValue, options) => {
  if (defaultValue) {
    return defaultValue;
  }
  if (options && options[0]) {
    return options[0].value;
  }
  return undefined;
};

const Select = React.forwardRef(function Select(props, ref) {
  const {
    'aria-label': ariaLabel,
    className,
    defaultValue,
    disabled,
    formatDisplay,
    inputRef: inputRefProp,
    labelId,
    menuMaxHeight,
    name,
    native,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    options: optionsProp,
    readOnly,
    SelectDisplayProps,
    shadow,
    style,
    value: valueProp,
    variant,
    width,
    ...otherProps
  } = props;
  const wrapperRef = React.useRef();
  const displayNode = React.useRef();
  const inputRef = React.useRef();
  const dropdownRef = React.useRef();
  const options = optionsProp.filter(Boolean);
  const [value, setValueState] = useControlledOrUncontrolled({
    value: valueProp,
    defaultValue: getDefaultValue(defaultValue, options)
  });

  const { current: isOpenControlled } = React.useRef(openProp != null);
  const [openState, setOpenState] = React.useState(false);
  const open =
    displayNode !== null && (isOpenControlled ? openProp : openState);
  const handleRef = useForkRef(ref, inputRefProp);

  // to hijack native focus. when somebody passes ref
  // and triggers focus, we focus displayNode instead of input
  React.useImperativeHandle(
    handleRef,
    () => ({
      focus: () => {
        displayNode.current.focus();
      },
      node: inputRef.current,
      value
    }),
    [displayNode, value]
  );

  const getSelectedOption = selectedValue =>
    options.find(opt => {
      if (selectedValue) {
        return (
          opt.value === selectedValue ||
          opt.value === parseInt(selectedValue, 10)
        );
      }
      return opt.value === value;
    });

  const getFocusedNodeIndex = () => {
    let focusedIndex = -1;

    if (dropdownRef && dropdownRef.current) {
      const optionNodes = Array.from(dropdownRef.current.childNodes);
      focusedIndex = optionNodes.findIndex(
        node => node === document.activeElement
      );
    }
    return focusedIndex;
  };

  const update = (opens, e) => {
    if (opens) {
      if (onOpen) {
        onOpen(e);
      }
    } else if (onClose) {
      onClose(e);
    }

    if (!isOpenControlled) {
      setOpenState(opens);
    }
  };

  const handleOpen = e => {
    update(true, e);
  };

  const handleClose = e => {
    update(false, e);
  };

  const toggleOpen = e => {
    update(!open, e);
  };

  React.useEffect(() => {
    const handleClick = e => {
      if (openState) {
        if (!wrapperRef.current.contains(e.target)) {
          e.preventDefault();
          handleClose(e);
          displayNode.current.focus();
        }
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  const handleMouseDown = e => {
    // ignore everything but left-click
    if (e.button !== 0) {
      return;
    }
    // hijack the default focus behavior.
    e.preventDefault();
    displayNode.current.focus();

    if (open) {
      handleClose(e);
    } else {
      handleOpen(e);
    }
  };

  const handleOptionClick = opt => e => {
    const newValue = opt.value;
    setValueState(newValue);

    if (onChange) {
      e.persist();
      Object.defineProperty(e, 'target', {
        writable: true,
        value: { value: newValue, name }
      });
      onChange(e, opt);
    }
    handleClose(e);
    displayNode.current.focus();
  };

  const handleKeyDown = e => {
    const { key } = e;
    // the native select doesn't respond to enter on mac, but it's recommended by
    // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
    const { ARROW_DOWN, ARROW_UP, ENTER, SPACE, TAB } = KEYS;

    if (key === TAB) {
      if (open) {
        // if dropdown is open- close it
        // prevent default behaviour (focusing on next element)
        // and focus select instead
        e.preventDefault();
        toggleOpen(e);
        displayNode.current.focus();
      }
    } else {
      e.preventDefault();
      if (key === SPACE) {
        // space toggles the dropdown (open/closed) while keeping focus
        toggleOpen(e);
        displayNode.current.focus();
      } else if ([ARROW_DOWN, ARROW_UP, ENTER].includes(key)) {
        if (!open) {
          handleOpen(e);
        }
        const currentFocusIndex = getFocusedNodeIndex();
        if ([ARROW_UP, ARROW_DOWN].includes(key)) {
          const change = key === ARROW_UP ? -1 : 1;
          const nextOptionIndex = clamp(
            currentFocusIndex + change,
            0,
            options.length - 1
          );
          if (dropdownRef.current) {
            const nextOption = dropdownRef.current.childNodes[nextOptionIndex];
            nextOption.focus();
          }
        } else if (
          key === ENTER &&
          currentFocusIndex > -1 &&
          dropdownRef.current
        ) {
          setValueState(options[currentFocusIndex].value);
          handleClose(e);
          displayNode.current.focus();
          if (onChange) {
            const option = options[currentFocusIndex];
            e.persist();
            Object.defineProperty(e, 'target', {
              writable: true,
              value: { value: option.value, name }
            });
            onChange(e, option);
          }
        }
      }
    }
  };

  const handleBlur = e => {
    // trigger onBlur only when dropdown is closesd
    // otherwise onBlur would be triggered when switching focus
    // from display node to
    if (!open && onBlur) {
      e.persist();
      // Preact support, target is read only property on a native event.
      Object.defineProperty(e, 'target', {
        writable: true,
        value: { value, name }
      });
      onBlur(e);
    }
  };

  const handleOptionKeyUp = e => {
    if (e.key === KEYS.SPACE) {
      // otherwise our MenuItems dispatches a click event
      // it's not behavior of the native <option> and causes
      // the select to close immediately since we open on space keydown
      e.preventDefault();
    }
  };

  // function below to enable using
  // value/defaultValue in native select
  const handleNativeSelection = (e, opt) => {
    e.stopPropagation();

    const nextSelection = opt || getSelectedOption(e.target.value);

    if (onChange) {
      onChange(e, nextSelection);
    }

    setValueState(nextSelection.value);

    if (displayNode.current) {
      displayNode.current.focus();
    }
  };

  const isEnabled = !(disabled || readOnly);
  const selectedOption = getSelectedOption();
  const displayLabel = getDisplayLabel(selectedOption, formatDisplay);
  const tabIndex = isEnabled ? '1' : undefined;
  const Wrapper = getWrapper(variant, native);
  const OptionComponent = native ? StyledNativeOption : StyledDropdownMenuItem;

  const optionsContent = options.map((opt, i) => {
    const optionProps = {
      'data-value': native ? undefined : opt.value,
      key: `${value}-${i}`,
      onClick: native ? undefined : handleOptionClick(opt),
      onKeyUp: native ? undefined : handleOptionKeyUp,
      role: native ? null : 'option',
      tabIndex: native ? undefined : '0'
    };

    const selected = areEqualValues(opt.value, value);
    if (!native) {
      optionProps['aria-selected'] = selected ? 'true' : undefined;
    } else {
      optionProps.value = opt.value;
    }

    return (
      <OptionComponent
        ref={el => {
          if (el && opt.value === value) {
            el.focus();
          }
        }}
        {...optionProps}
      >
        {opt.label}
      </OptionComponent>
    );
  });

  const wrapperCommonProps = {
    className,
    style: { ...style, width }
  };

  const DropdownButton = (
    <StyledDropdownButton
      as='div'
      data-testid='select-button'
      isDisabled={disabled}
      native={native}
      tabIndex={-1}
      variant={variant}
    >
      <StyledDropdownIcon data-testid='select-icon' isDisabled={disabled} />
    </StyledDropdownButton>
  );
  if (native) {
    return (
      <Wrapper {...wrapperCommonProps}>
        <StyledInner>
          <StyledNativeSelect
            {...otherProps}
            onBlur={onBlur}
            onFocus={onFocus}
            onClose={onClose}
            disabled={disabled}
            onChange={isEnabled ? handleNativeSelection : undefined}
            ref={displayNode}
            value={value}
          >
            {optionsContent}
          </StyledNativeSelect>
          {DropdownButton}
        </StyledInner>
      </Wrapper>
    );
  }
  const buttonId =
    SelectDisplayProps.id ||
    (name ? `react95-component-select-${name}` : undefined);
  return (
    <>
      <Wrapper
        {...wrapperCommonProps}
        isDisabled={disabled}
        ref={wrapperRef}
        shadow={shadow}
        style={{ ...style, width }}
      >
        <input
          name={name}
          ref={inputRef}
          type='hidden'
          value={value}
          {...otherProps}
        />
        <StyledInner
          aria-disabled={disabled}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='listbox'
          aria-label={ariaLabel}
          aria-labelledby={
            [labelId, buttonId].filter(Boolean).join(' ') || undefined
          }
          // The id is required for proper a11y
          id={buttonId}
          onBlur={handleBlur}
          onFocus={onFocus}
          onKeyDown={handleKeyDown}
          onMouseDown={isEnabled ? handleMouseDown : null}
          ref={displayNode}
          role='button'
          tabIndex={tabIndex}
          {...SelectDisplayProps}
        >
          <StyledSelectContent>{displayLabel}</StyledSelectContent>

          {DropdownButton}
        </StyledInner>
        {isEnabled && open && (
          <StyledDropdownMenu
            aria-labelledby={labelId}
            onKeyDown={handleKeyDown}
            ref={dropdownRef}
            role='listbox'
            shadow={shadow}
            style={
              menuMaxHeight && { overflow: 'scroll', maxHeight: menuMaxHeight }
            }
            tabIndex={0}
            variant={variant}
          >
            {optionsContent}
          </StyledDropdownMenu>
        )}
      </Wrapper>
    </>
  );
});

Select.defaultProps = {
  'aria-label': undefined,
  className: undefined,
  defaultValue: undefined,
  disabled: undefined,
  formatDisplay: undefined,
  inputRef: undefined,
  labelId: undefined,
  menuMaxHeight: undefined,
  name: undefined,
  native: false,
  onBlur: undefined,
  onChange: undefined,
  onClose: undefined,
  onFocus: undefined,
  onOpen: undefined,
  open: undefined,
  options: [],
  readOnly: undefined,
  SelectDisplayProps: {},
  shadow: true,
  style: {},
  value: undefined,
  variant: 'default',
  width: 'auto'
};

Select.propTypes = {
  'aria-label': propTypes.string,
  className: propTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  defaultValue: propTypes.any,
  disabled: propTypes.bool,
  formatDisplay: propTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  inputRef: propTypes.any,
  menuMaxHeight: propTypes.oneOfType([propTypes.string, propTypes.number]),
  name: propTypes.string,
  native: propTypes.bool,
  onBlur: propTypes.func,
  onChange: propTypes.func,
  onClose: propTypes.func,
  onFocus: propTypes.func,
  onOpen: propTypes.func,
  labelId: propTypes.string,
  open: propTypes.bool,
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.any
    })
  ),
  readOnly: propTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  SelectDisplayProps: propTypes.object,
  shadow: propTypes.bool,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  // eslint-disable-next-line react/forbid-prop-types
  value: propTypes.any,
  variant: propTypes.oneOf(['default', 'flat']),
  width: propTypes.oneOfType([propTypes.string, propTypes.number])
};

export default Select;
