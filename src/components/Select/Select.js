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

export const SelectOptions = props => {
  const {
    native,
    options,
    optionClickCallback,
    selectionCallback,
    keyUpCallback,
    testId,
    value
  } = props;

  const OptionComponent = native ? StyledNativeOption : StyledDropdownMenuItem;

  return options.map((opt, idx) => {
    const optionProps = {
      key: `${value}-${idx}`,
      onClick: optionClickCallback(opt),
      onKeyUp: keyUpCallback,
      'data-testid': getTestId(testId, `MenuItem${idx}`)
    };

    if (!native) {
      optionProps.onMouseDown = evt => selectionCallback(evt, opt);
    } else {
      optionProps.value = opt.value;
    }

    return <OptionComponent {...optionProps}>{opt.label}</OptionComponent>;
  });
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

  const [valueDerived, setValueState] = useControlledOrUncontrolled({
    value,
    defaultValue: getDefaultValue(defaultValue, options)
  });

  const [openDerived, setOpenState] = useControlledOrUncontrolled({
    defaultValue: false,
    value: menuOpen
  });

  const update = (isOpening, evt) => {
    if (isOpening) {
      if (onOpen) {
        onOpen(evt);
      }
    } else if (onClose) {
      onClose(evt);
    }

    setOpenState(isOpening);
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

  const handleClose = evt => {
    update(false, evt);
  };

  const handleOptionClick = opt => evt => {
    update(false, evt);

    const newValue = opt.value;

    setValueState(newValue);

    if (onChange) {
      evt.persist();
      onChange(evt, opt);
    }
  };

  const handleKeyDown = evt => {
    const validKeys = [
      ' ',
      'ArrowUp',
      'ArrowDown',
      // the native select doesn't respond to enter on mac, but it's recommended by
      // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      'Enter'
    ];

    if (validKeys.indexOf(evt.key) !== -1) {
      evt.preventDefault();
      update(true, evt);
    }
  };

  const open = displayNode !== null && openDerived;

  const handleBlur = evt => {
    // if open event.stopImmediatePropagation
    if (!open && onBlur) {
      evt.persist();
      onBlur(evt);
    }

    handleClose(evt);
  };

  const handleOptionKeyUp = evt => {
    if (evt.key === ' ') {
      // otherwise our MenuItems dispatches a click event
      // it's not behavior of the native <option> and causes
      // the select to close immediately since we open on space keydown
      evt.preventDefault();
    }
  };

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

  const isEnabled = !disabled;
  const selectedOption = getSelectedOption();
  const displayLabel = getDisplayLabel(selectedOption, formatLabel);

  // const handleToggleOpen = evt => {
  //   evt.stopPropagation();
  //
  //   const isBlur = isEventOfType(evt, 'blur');
  //   const isFocus = isEventOfType(evt, 'focus');
  //
  //   const isOpening = isFocus && !openDerived;
  //
  //   // the menu is opening...
  //   if (isOpening) {
  //     if (onOpen) {
  //       onOpen(evt);
  //     }
  //
  //     // if this is a focus event, trigger callback
  //     if (isFocus && onFocus) {
  //       onFocus(evt);
  //     }
  //   } else {
  //     // the menu is closing
  //     if (onClose) {
  //       onClose(evt);
  //     }
  //
  //     // if this is a blur event, trigger callback
  //     if (isBlur && onBlur) {
  //       onBlur(evt);
  //     }
  //   }
  //
  //   setOpenState(isOpening);
  // };

  const handleSelection = (evt, opt) => {
    evt.stopPropagation();

    const nextSelection = opt || getSelectedOption(evt.target.value);

    if (onChange) {
      onChange(evt, nextSelection, valueDerived);
    }

    setValueState(nextSelection.value);
  };

  const selectionCallback = isEnabled ? handleSelection : () => {};
  const optionClickCallback = isEnabled ? handleOptionClick : () => () => {};
  const keyUpCallback = isEnabled ? handleOptionKeyUp : () => {};
  const tabIndex = isEnabled ? '0' : undefined;

  const Wrapper = getWrapper(variant, native);

  const optionsContent = (
    <SelectOptions
      native={native}
      options={options}
      selectionCallback={selectionCallback}
      optionClickCallback={optionClickCallback}
      keyUpCallback={keyUpCallback}
      testId={testId}
      value={value}
    />
  );

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
        onChange={selectionCallback}
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
          shadow={shadow}
          style={
            menuMaxHeight && { overflow: 'scroll', maxHeight: menuMaxHeight }
          }
          tabIndex={tabIndex}
          data-testid={getTestId(testId, 'Menu')}
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
