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

const Key = {
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ENTER: 'Enter',
  ESC: 'Escape',
  SPACE: ' '
};

export const isObject = val => typeof val === 'object' && !Array.isArray(val);
export const isNumber = val => typeof val === 'number';
export const isString = val => typeof val === 'string';
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
  const inputRef = React.useRef();
  const menuNode = React.useRef();
  const [activeOption, setActiveOption] = React.useState(-1);
  const [valueDerived, setValueState] = useControlledOrUncontrolled({
    value,
    defaultValue: getDefaultValue(defaultValue, options)
  });
  const [openDerived, setOpenState] = useControlledOrUncontrolled({
    defaultValue: false,
    value: menuOpen
  });

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

  const getFocusedNodeIndex = () => {
    let focusedIndex = -1;

    if (menuNode && menuNode.current) {
      const optionNodes = menuNode.current.childNodes;

      for (let i = 0, len = optionNodes.length; i < len; i += 1) {
        if (optionNodes[i] === document.activeElement) {
          focusedIndex = i;
          break;
        }
      }
    }

    return focusedIndex;
  };

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

  const handleOpen = evt => {
    update(true, evt);
  };

  const handleClose = evt => {
    update(false, evt);
  };

  const handleMouseDown = evt => {
    // ignore everything but left-click
    if (evt.button !== 0) {
      return;
    }

    // hijack the default focus behavior.
    evt.preventDefault();
    displayNode.current.focus();

    if (openDerived) {
      handleClose(evt);
    } else {
      handleOpen(evt);
    }
  };

  const handleOptionClick = opt => evt => {
    handleClose(evt);

    const newValue = opt.value;

    setValueState(newValue);

    if (onChange) {
      evt.persist();
      onChange(evt, opt);
    }

    displayNode.current.focus();
  };

  const getNextFocusIndex = (evtKey, currentFocusIndex) => {
    let nextFocus = -1;

    if (evtKey === Key.ARROW_DOWN || evtKey === Key.ARROW_RIGHT) {
      if (currentFocusIndex < options.length - 1) {
        nextFocus = currentFocusIndex + 1;
      }
    } else if (evtKey === Key.ARROW_UP) {
      if (currentFocusIndex > 0) {
        nextFocus = currentFocusIndex - 1;
      }
    } else if (evtKey === Key.ENTER) {
      nextFocus = currentFocusIndex;
    }

    return nextFocus;
  };

  const updateFocus = evt => {
    const currentFocusIndex = getFocusedNodeIndex();
    const nextFocus = getNextFocusIndex(evt && evt.key, currentFocusIndex);

    if (nextFocus > -1 && menuNode.current) {
      const focusNode = menuNode.current.childNodes[nextFocus];

      if (focusNode) {
        if (currentFocusIndex === nextFocus) {
          focusNode.click();
        } else {
          focusNode.focus();
        }
      }

      setActiveOption(nextFocus);
    }
  };

  const handleKeyDown = evt => {
    const { key } = evt;

    const validKeys = [
      Key.SPACE,
      Key.ARROW_UP,
      Key.ARROW_RIGHT,
      Key.ARROW_LEFT,
      Key.ARROW_DOWN,
      // the native select doesn't respond to enter on mac, but it's recommended by
      // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      Key.ENTER,
      Key.ESC
    ];

    if (validKeys.indexOf(key) > -1) {
      evt.preventDefault();

      if (key === Key.ARROW_LEFT) {
        handleClose(evt);
        displayNode.current.focus();
      } else if (key === Key.SPACE) {
        update(!openDerived, evt);
        displayNode.current.focus();
      } else if (key === Key.ESC) {
        handleClose(evt);
        displayNode.current.blur();
      } else {
        handleOpen(evt);
        updateFocus(evt);
      }
    }
  };

  const handleBlur = evt => {
    if (!openDerived) {
      evt.persist();

      if (onBlur) {
        onBlur(evt);
      }

      handleClose(evt);
    }
  };

  const handleOptionKeyUp = evt => {
    if (evt.key === Key.SPACE) {
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

    if (displayNode.current) {
      displayNode.current.focus();
    }
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
