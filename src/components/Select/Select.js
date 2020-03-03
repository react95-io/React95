import React from 'react';
import propTypes from 'prop-types';

import classNames from '../common/classNames';
import getTestId from '../common/getTestId';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';

import {
  StyledDropdownButton,
  StyledDropdownIcon,
  StyledDropdownMenu,
  StyledDropdownMenuItem,
  StyledFlatSelectWrapper,
  StyledNativeOption,
  StyledNativeSelect,
  StyledSelectContent,
  StyledSelectWrapper
} from './Select.styles';

export const isEventOfType = (evt, eventType) => evt && evt.type === eventType;

export const isEventKey = (evt, key) => evt && evt.key === key;

export const isNumber = val => typeof val === 'number';

export const isString = val => typeof val === 'string';

export const isObject = val => typeof val === 'object' && !Array.isArray(val);

export const isStringOrNumber = val => isString(val) || isNumber(val);

export const getWrapper = variant =>
  variant === 'flat' ? StyledFlatSelectWrapper : StyledSelectWrapper;

export const getDisplayLabel = (selectedOption, formatLabel) => {
  if (selectedOption) {
    if (formatLabel) {
      return formatLabel(selectedOption);
    }

    return selectedOption.label;
  }

  return '';
};

export const getDefaultValue = (defaultValue, options) => {
  if (defaultValue) {
    return defaultValue;
  }

  if (options && options[0]) {
    return options[0].value;
  }

  return undefined;
};

const Select = ({
  className,
  defaultValue,
  disabled,
  formatLabel,
  menuMaxHeight,
  menuOpen,
  name,
  native,
  onBlur,
  onChange,
  onClose,
  onFocus,
  onOpen,
  options,
  shadow,
  style,
  testId,
  value,
  variant,
  width,
  ...otherProps
}) => {
  const displayNode = React.useRef();

  const menuNode = React.useRef();

  const inputRef = React.useRef();

  const [valueDerived, setValueState] = useControlledOrUncontrolled({
    value,
    defaultValue: getDefaultValue(defaultValue, options)
  });

  const [openDerived, setOpenState] = useControlledOrUncontrolled({
    defaultValue: false,
    value: menuOpen
  });

  const open = displayNode !== null && openDerived;

  const [activeOption, setActiveOption] = React.useState(-1);

  const getSelectedOption = selectedValue =>
    options.find(opt => {
      if (selectedValue) {
        return (
          opt.value === selectedValue ||
          opt.value === parseInt(selectedValue, 10)
        );
      }

      return opt.value === valueDerived;
    });

  const update = (isOpen, evt) => {
    if (isOpen) {
      if (onOpen) {
        onOpen(evt);
      }

      if (!openDerived) {
        const selectedOpt = getSelectedOption();
        const selectedIdx = options.indexOf(selectedOpt);
        if (selectedIdx > -1) {
          setActiveOption(selectedIdx);
        } else {
          setActiveOption(0);
        }
      }
    } else {
      setActiveOption(-1);

      if (onClose) {
        onClose(evt);
      }
    }

    setOpenState(isOpen);
  };

  const handleMouseDown = evt => {
    // ignore everything but left-click
    if (evt.button !== 0) {
      return;
    }

    // hijack the default focus behavior.
    evt.preventDefault();
    displayNode.current.focus();

    update(true, evt);
  };

  const handleOptionClick = opt => evt => {
    update(false, evt);

    const newValue = opt.value;

    setValueState(newValue);

    if (onChange) {
      evt.persist();
      onChange(evt, opt);
    }

    displayNode.current.focus();
  };

  const handleKeyDown = evt => {
    const validKeys = [
      ' ',
      'ArrowUp',
      'ArrowRight',
      'ArrowLeft',
      'ArrowDown',
      // the native select doesn't respond to enter on mac, but it's recommended by
      // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      'Enter'
    ];

    if (validKeys.indexOf(evt.key) > -1) {
      evt.preventDefault();

      update(true, evt);

      if (isEventKey(evt, 'ArrowDown')) {
        if (activeOption < options.length - 1) {
          const nextFocus = activeOption + 1;
          setActiveOption(nextFocus);
          if (menuNode.current) {
            const focusNode = menuNode.current.childNodes[nextFocus];
            if (focusNode) {
              focusNode.focus();
            }
          }
        }
      } else if (isEventKey(evt, 'ArrowUp')) {
        if (activeOption > 0) {
          const nextFocus = activeOption - 1;
          setActiveOption(nextFocus);
          if (menuNode.current) {
            const focusNode = menuNode.current.childNodes[nextFocus];
            if (focusNode) {
              focusNode.focus();
            }
          }
        }
      } else if (isEventKey(evt, 'Enter')) {
        if (menuNode.current) {
          const focusNode = menuNode.current.childNodes[activeOption];
          if (focusNode) {
            focusNode.click();
          }
        }
      } else if (isEventKey(evt, 'ArrowRight')) {
        update(true, evt);
      } else if (isEventKey(evt, 'ArrowLeft')) {
        update(false, evt);
        displayNode.current.focus();
      } else if (isEventKey(evt, ' ')) {
        update(!openDerived, evt);
        displayNode.current.focus();
      }
    }
  };

  const handleBlur = evt => {
    // if open event.stopImmediatePropagation
    if (!open && onBlur) {
      evt.persist();
      onBlur(evt);
    }
  };

  const handleOptionKeyUp = evt => {
    if (evt.key === ' ') {
      // otherwise our MenuItems dispatches a click event
      // it's not behavior of the native <option> and causes
      // the select to close immediately since we open on space keydown
      evt.preventDefault();
    }
  };

  const isEnabled = !disabled;
  const selectedOption = getSelectedOption();
  const displayLabel = getDisplayLabel(selectedOption, formatLabel);
  const tabIndex = isEnabled ? '0' : undefined;

  const handleSelection = (evt, opt) => {
    evt.stopPropagation();

    const nextSelection = opt || getSelectedOption(evt.target.value);

    if (onChange) {
      onChange(evt, nextSelection, valueDerived);
    }

    setValueState(nextSelection.value);

    displayNode.current.focus();
  };

  const Wrapper = getWrapper(variant, native);
  const OptionComponent = native ? StyledNativeOption : StyledDropdownMenuItem;

  const optionsContent = options.map((opt, idx) => {
    const optionProps = {
      key: `${value}-${idx}`,
      onClick: native ? undefined : handleOptionClick(opt),
      onKeyUp: native ? undefined : handleOptionKeyUp,
      tabIndex: native ? undefined : '0',
      'data-testid': getTestId(testId, `MenuItem${idx}`)
    };

    if (!native) {
      optionProps.onMouseDown = evt => handleSelection(evt, opt);
    } else {
      optionProps.value = opt.value;
    }

    return (
      <OptionComponent
        ref={el => {
          if (el && activeOption === idx) {
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
    className: classNames(className, {
      'is-disabled': disabled,
      'is-open': openDerived
    }),
    'data-testid': testId,
    style: { ...style, width }
  };

  if (native) {
    return (
      <StyledNativeSelect
        {...wrapperCommonProps}
        disabled={disabled}
        onChange={isEnabled ? handleSelection : undefined}
        {...otherProps}
      >
        {optionsContent}
      </StyledNativeSelect>
    );
  }

  return (
    <Wrapper
      {...wrapperCommonProps}
      isDisabled={disabled}
      onKeyDown={handleKeyDown}
      onMouseDown={isEnabled ? handleMouseDown : null}
      onBlur={handleBlur}
      onFocus={onFocus}
      // onBlur={toggleOpenCallback}
      // onBlurCapture={toggleOpenCallback}
      // onFocus={toggleOpenCallback}
      // onFocusCapture={toggleOpenCallback}
      ref={displayNode}
      shadow={shadow}
      style={{ ...style, width }}
      tabIndex={tabIndex}
      {...otherProps}
    >
      <input value={value} name={name} ref={inputRef} type='hidden' />

      <StyledSelectContent data-testid={getTestId(testId, 'Content')}>
        {displayLabel}
      </StyledSelectContent>

      <StyledDropdownButton
        data-testid={getTestId(testId, 'Button')}
        disabled={disabled}
        variant={variant}
      >
        <StyledDropdownIcon
          data-testid={getTestId(testId, 'Icon')}
          isDisabled={disabled}
        />
      </StyledDropdownButton>

      {isEnabled && openDerived && (
        <StyledDropdownMenu
          data-testid={getTestId(testId, 'Menu')}
          ref={menuNode}
          shadow={shadow}
          style={
            menuMaxHeight && { overflow: 'scroll', maxHeight: menuMaxHeight }
          }
          tabIndex={tabIndex}
          variant={variant}
        >
          {optionsContent}
        </StyledDropdownMenu>
      )}
    </Wrapper>
  );
};

Select.defaultProps = {
  className: undefined,
  defaultValue: undefined,
  disabled: undefined,
  formatLabel: undefined,
  menuMaxHeight: undefined,
  menuOpen: undefined,
  name: undefined,
  native: false,
  onBlur: undefined,
  onChange: undefined,
  onClose: undefined,
  onFocus: undefined,
  onOpen: undefined,
  shadow: true,
  style: {},
  testId: undefined,
  value: undefined,
  variant: 'default',
  width: 'auto'
};

Select.propTypes = {
  className: propTypes.string,
  defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number]),
  disabled: propTypes.bool,
  formatLabel: propTypes.func,
  menuMaxHeight: propTypes.oneOfType([propTypes.string, propTypes.number]),
  menuOpen: propTypes.bool,
  name: propTypes.string,
  native: propTypes.bool,
  onBlur: propTypes.func,
  onChange: propTypes.func,
  onClose: propTypes.func,
  onFocus: propTypes.func,
  onOpen: propTypes.func,
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      value: propTypes.oneOfType([propTypes.string, propTypes.number])
        .isRequired
    })
  ).isRequired,
  shadow: propTypes.bool,
  style: propTypes.shape([propTypes.string, propTypes.number]),
  testId: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  variant: propTypes.oneOf(['default', 'flat']),
  width: propTypes.oneOfType([propTypes.string, propTypes.number])
};

export default Select;
