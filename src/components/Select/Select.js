import React from 'react';
import propTypes from 'prop-types';

import classNames from '../common/classNames';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import { getTestId, isEventType } from '../common/util';

import {
  StyledDropdownButton,
  StyledDropdownIcon,
  StyledDropdownMenu,
  StyledDropdownMenuItem,
  StyledFlatSelectWrapper,
  StyledSelectContent,
  StyledSelectWrapper
} from './Select.styles';

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
  const [valueDerived, setValueState] = useControlledOrUncontrolled({
    value,
    defaultValue: getDefaultValue(defaultValue, options)
  });

  const [openDerived, setOpenState] = useControlledOrUncontrolled({
    defaultValue: false,
    value: menuOpen
  });

  const isEnabled = !disabled;
  const selectedOption = options.find(opt => opt.value === valueDerived);
  const displayLabel = getDisplayLabel(selectedOption, formatLabel);

  const handleToggleOpen = evt => {
    evt.stopPropagation();

    const isBlur = isEventType(evt, 'blur');
    const isFocus = isEventType(evt, 'focus');

    const isOpening = isFocus && !openDerived;

    // the menu is opening...
    if (isOpening) {
      if (onOpen) {
        onOpen(evt);
      }

      // if this is a focus event, trigger callback
      if (isFocus && onFocus) {
        onFocus(evt);
      }
    } else {
      // the menu is closing
      if (onClose) {
        onClose(evt);
      }

      // if this is a blur event, trigger callback
      if (isBlur && onBlur) {
        onBlur(evt);
      }
    }

    setOpenState(isOpening);
  };

  const handleSelection = (evt, opt) => {
    evt.stopPropagation();

    if (onChange) {
      onChange(evt, opt, valueDerived);
    }

    setValueState(opt.value);
  };

  const selectionCallback = isEnabled ? handleSelection : () => {};
  const toggleOpenCallback = isEnabled ? handleToggleOpen : () => {};
  const tabIndex = isEnabled ? '0' : undefined;

  const Wrapper = getWrapper(variant, native);

  const optionsContent = options.map((opt, idx) => (
    <StyledDropdownMenuItem
      key={`${value}-${idx}`}
      onMouseDown={evt => selectionCallback(evt, opt)}
      data-testid={getTestId(testId, `MenuItem${idx}`)}
    >
      {opt.label}
    </StyledDropdownMenuItem>
  ));

  return (
    <Wrapper
      className={classNames(className, {
        'is-disabled': disabled,
        'is-open': openDerived
      })}
      data-testid={testId}
      isDisabled={disabled}
      onBlur={toggleOpenCallback}
      onBlurCapture={toggleOpenCallback}
      onFocus={toggleOpenCallback}
      onFocusCapture={toggleOpenCallback}
      shadow={shadow}
      style={{ ...style, width }}
      tabIndex={tabIndex}
      {...otherProps}
    >
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
