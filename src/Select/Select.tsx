import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react';

import { useId } from '../common/hooks/useId';
import { CommonStyledProps } from '../types';

import {
  StyledDropdownMenu,
  StyledDropdownMenuItem,
  StyledInner,
  StyledSelectContent
} from './Select.styles';
import { SelectOption, SelectInnerProps, SelectRef } from './Select.types';
import { useSelectCommon } from './useSelectCommon';
import { useSelectState } from './useSelectState';

type SelectProps<T> = SelectInnerProps<T> &
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'defaultValue' | 'name' | 'onChange' | 'onFocus' | 'style' | 'value'
  > &
  CommonStyledProps;

function SelectInnerOption<T>({
  activateOptionIndex,
  active,
  index,
  onClick,
  option,
  selected,
  setRef
}: {
  activateOptionIndex: (optionIndex: number) => void;
  active: boolean;
  index: number;
  onClick: React.MouseEventHandler<HTMLLIElement>;
  option: SelectOption<T>;
  selected: boolean;
  setRef: (ref: HTMLLIElement | null, optionIndex: number) => void;
}) {
  const handleOnMouseEnter = useCallback(() => {
    activateOptionIndex(index);
  }, [activateOptionIndex, index]);

  const handleSetRef = useCallback(
    (ref: HTMLLIElement | null) => {
      setRef(ref, index);
    },
    [index, setRef]
  );

  const id = useId();

  return (
    <StyledDropdownMenuItem
      active={active}
      aria-selected={selected ? 'true' : undefined}
      data-value={option.value}
      id={id}
      onClick={onClick}
      onMouseEnter={handleOnMouseEnter}
      ref={handleSetRef}
      role='option'
      tabIndex={0}
    >
      {option.label}
    </StyledDropdownMenuItem>
  );
}

function SelectInner<T>(
  {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    className,
    defaultValue,
    disabled = false,
    formatDisplay,
    inputProps,
    labelId,
    menuMaxHeight,
    name,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onKeyDown,
    onMouseDown,
    onOpen,
    open: openProp,
    options: optionsProp,
    readOnly,
    shadow = true,
    style,
    variant = 'default',
    value: valueProp,
    width = 'auto',
    ...otherProps
  }: SelectProps<T>,
  ref: React.ForwardedRef<SelectRef>
) {
  const {
    isEnabled,
    options,
    setValue,
    value,
    wrapperProps,
    DropdownButton,
    Wrapper
  } = useSelectCommon<T>({
    className,
    defaultValue,
    disabled,
    native: false,
    onChange,
    options: optionsProp,
    style,
    readOnly,
    value: valueProp,
    variant,
    width
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const {
    activeOption,
    handleActivateOptionIndex,
    handleBlur,
    handleButtonKeyDown,
    handleDropdownKeyDown,
    handleFocus,
    handleMouseDown,
    handleOptionClick,
    handleSetDropdownRef,
    handleSetOptionRef,
    open,
    selectedOption
  } = useSelectState<T>({
    onBlur,
    onChange,
    onClose,
    onFocus,
    onKeyDown,
    onMouseDown,
    onOpen,
    open: openProp,
    options,
    value,
    selectRef,
    setValue,
    wrapperRef
  });

  // to hijack native focus. when somebody passes ref
  // and triggers focus, we focus displayNode instead of input
  useImperativeHandle(
    ref,
    () => ({
      focus: focusOptions => {
        selectRef.current?.focus(focusOptions);
      },
      node: inputRef.current,
      value: String(value)
    }),
    [value]
  );

  const displayLabel = useMemo(
    () =>
      !selectedOption
        ? ''
        : typeof formatDisplay === 'function'
        ? formatDisplay(selectedOption)
        : selectedOption.label,
    [formatDisplay, selectedOption]
  );
  const tabIndex = isEnabled ? 1 : undefined;

  const dropdownMenuStyle = useMemo(
    () =>
      menuMaxHeight
        ? { overflow: 'auto', maxHeight: menuMaxHeight }
        : undefined,
    [menuMaxHeight]
  );

  const dropdownMenuId = useId();

  const optionsContent = useMemo(
    () =>
      options.map((option, index) => {
        const key = `${value}-${index}`;
        const active = option === activeOption;
        const selected = option === selectedOption;
        return (
          <SelectInnerOption
            activateOptionIndex={handleActivateOptionIndex}
            active={active}
            index={index}
            key={key}
            onClick={handleOptionClick}
            option={option}
            selected={selected}
            setRef={handleSetOptionRef}
          />
        );
      }),
    [
      activeOption,
      handleActivateOptionIndex,
      handleOptionClick,
      handleSetOptionRef,
      options,
      selectedOption,
      value
    ]
  );

  return (
    <Wrapper
      {...wrapperProps}
      $disabled={disabled}
      ref={wrapperRef}
      shadow={shadow}
      style={{ ...style, width }}
    >
      <input
        name={name}
        ref={inputRef}
        type='hidden'
        value={String(value)}
        {...inputProps}
      />
      <StyledInner
        aria-disabled={disabled}
        aria-expanded={open}
        aria-haspopup='listbox'
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy ?? labelId}
        aria-owns={isEnabled && open ? dropdownMenuId : undefined}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleButtonKeyDown}
        onMouseDown={isEnabled ? handleMouseDown : onMouseDown}
        ref={selectRef}
        role='button'
        tabIndex={tabIndex}
        {...otherProps}
      >
        <StyledSelectContent>{displayLabel}</StyledSelectContent>

        {DropdownButton}
      </StyledInner>
      {isEnabled && open && (
        <StyledDropdownMenu
          id={dropdownMenuId}
          onKeyDown={handleDropdownKeyDown}
          ref={handleSetDropdownRef}
          role='listbox'
          style={dropdownMenuStyle}
          tabIndex={0}
          variant={variant}
        >
          {optionsContent}
        </StyledDropdownMenu>
      )}
    </Wrapper>
  );
}

/* eslint-disable no-use-before-define */
const Select = forwardRef(SelectInner) as <T>(
  props: SelectProps<T> & { ref?: React.ForwardedRef<SelectRef> }
) => ReturnType<typeof SelectInner<T>>;
/* eslint-enable no-use-before-define */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Select.displayName = 'Select';

export * from './SelectNative';

export { Select, SelectProps };
