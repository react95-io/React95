import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react';

import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import useForkRef from '../common/hooks/useForkRef';
import { clamp } from '../common/utils';
import { CommonStyledProps } from '../types';

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
import {
  SelectChangeEvent,
  SelectFormatDisplayCallback,
  SelectOption,
  SelectRef,
  SelectVariants
} from './Select.types';

type AnyEvent = MouseEvent | React.MouseEvent | React.KeyboardEvent;

type OmittedNativeProps =
  | 'className'
  | 'defaultValue'
  | 'disabled'
  | 'name'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'readOnly'
  | 'style'
  | 'value';

type SelectCustomProps = {
  native?: undefined | false;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, OmittedNativeProps>;

type SelectNativeProps = {
  native: true;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, OmittedNativeProps>;

type SelectProps = {
  'aria-label'?: string;
  className?: string;
  defaultValue?: unknown;
  disabled?: boolean;
  formatDisplay?: SelectFormatDisplayCallback;
  inputRef?: React.RefObject<SelectRef>;
  menuMaxHeight?: string | number;
  name?: string;
  /**
   * @default [false]
   */
  native?: boolean;
  onBlur?: React.FocusEventHandler<HTMLDivElement | HTMLSelectElement>;
  onChange?: (event: SelectChangeEvent, option: SelectOption) => void;
  onClose?: (event: AnyEvent) => void;
  onFocus?: React.FocusEventHandler<HTMLDivElement | HTMLSelectElement>;
  onOpen?: (event: AnyEvent) => void;
  labelId?: string;
  open?: boolean;
  options?: (SelectOption | null)[];
  readOnly?: boolean;
  SelectDisplayProps?: Record<string, unknown>;
  shadow?: boolean;
  style?: React.CSSProperties;
  value?: unknown;
  variant?: SelectVariants;
  width?: string | number;
} & (SelectCustomProps | SelectNativeProps) &
  CommonStyledProps;

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

function areEqualValues(a: unknown, b: unknown) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}

const getWrapper = (variant: SelectVariants) =>
  variant === 'flat' ? StyledFlatSelectWrapper : StyledSelectWrapper;

const getDisplayLabel = (
  selectedOption: SelectOption | undefined,
  formatDisplay: SelectFormatDisplayCallback | undefined
) => {
  if (!selectedOption) {
    return '';
  }
  if (formatDisplay) {
    return formatDisplay(selectedOption);
  }
  return selectedOption.label;
};

const getDefaultValue = (defaultValue: unknown, options: SelectOption[]) => {
  if (defaultValue) {
    return defaultValue;
  }
  if (options && options[0]) {
    return options[0].value;
  }
  return undefined;
};

const getFocusedNodeIndex = (dropdownElement: HTMLUListElement) =>
  dropdownElement
    ? Array.from(dropdownElement.childNodes).findIndex(
        node => node === document.activeElement
      )
    : -1;

const getOptionWithValue = (value: unknown, options: SelectOption[]) => {
  const isValueString = typeof value === 'string';
  return options.find(
    option =>
      option.value === value ||
      (typeof option.value === 'number' &&
        isValueString &&
        option.value === parseInt(value, 10))
  );
};

const Select = forwardRef<SelectRef, SelectProps>(function Select(
  {
    'aria-label': ariaLabel,
    className,
    defaultValue,
    disabled = false,
    formatDisplay,
    inputRef: inputRefProp = null,
    labelId,
    menuMaxHeight,
    name,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp = null,
    options: optionsProp = [],
    readOnly,
    SelectDisplayProps,
    shadow = true,
    style,
    value: valueProp,
    variant = 'default',
    width = 'auto',
    ...otherProps
  },
  ref
) {
  const { native } = otherProps;

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const displayNode = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const handleRef = useForkRef(ref, inputRefProp);

  const options = useMemo(
    () => optionsProp.filter(Boolean) as SelectOption[],
    [optionsProp]
  );
  const [value, setValueState] = useControlledOrUncontrolled({
    value: valueProp,
    defaultValue: getDefaultValue(defaultValue, options)
  });

  const [openState, setOpenState] = useState(false);
  const isOpenControlled = openProp !== null;
  const open = isOpenControlled ? openProp : openState;

  // to hijack native focus. when somebody passes ref
  // and triggers focus, we focus displayNode instead of input
  useImperativeHandle(
    handleRef,
    () => ({
      focus: () => {
        displayNode.current?.focus();
      },
      node: inputRef.current,
      value
    }),
    [displayNode, value]
  );

  const selectedOption = useMemo(
    () => getOptionWithValue(value, options),
    [options, value]
  );

  const update = useCallback(
    (opens: boolean, event: AnyEvent) => {
      if (opens) {
        onOpen?.(event);
      } else {
        onClose?.(event);
      }

      if (!isOpenControlled) {
        setOpenState(opens);
      }
    },
    [isOpenControlled, onClose, onOpen]
  );

  const handleOpen = useCallback(
    (event: AnyEvent) => {
      update(true, event);
    },
    [update]
  );

  const handleClose = useCallback(
    (event: AnyEvent) => {
      update(false, event);
    },
    [update]
  );

  const toggleOpen = useCallback(
    (event: AnyEvent) => {
      update(!open, event);
    },
    [open, update]
  );

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!openState) {
        return;
      }

      const target = event.target as Node;

      if (!wrapperRef.current?.contains(target)) {
        event.preventDefault();
        handleClose(event);
        displayNode.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClose, openState]);

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      // ignore everything but left-click
      if (event.button !== 0) {
        return;
      }

      // hijack the default focus behavior.
      event.preventDefault();
      displayNode.current?.focus();

      if (open) {
        handleClose(event.nativeEvent);
      } else {
        handleOpen(event.nativeEvent);
      }
    },
    [handleClose, handleOpen, open]
  );

  const handleOptionClick = useCallback(
    (option: SelectOption) => (event: AnyEvent) => {
      const newValue = option.value;
      setValueState(newValue);

      if (onChange) {
        if ('persist' in event) {
          event.persist();
        }
        Object.defineProperty(event, 'target', {
          writable: true,
          value: { value: newValue, name }
        });
        // TODO: Unweirdify this event argument
        onChange(event as unknown as SelectChangeEvent, option);
      }

      handleClose(event);
      displayNode.current?.focus();
    },
    [handleClose, name, onChange, setValueState]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement | HTMLUListElement>) => {
      const { key } = event;
      // the native select doesn't respond to enter on mac, but it's recommended by
      // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      const { ARROW_DOWN, ARROW_UP, ENTER, SPACE, TAB } = KEYS;

      if (key === TAB) {
        if (open) {
          // if dropdown is open- close it
          // prevent default behaviour (focusing on next element)
          // and focus select instead
          event.preventDefault();
          toggleOpen(event);
          displayNode.current?.focus();
        }
      } else {
        event.preventDefault();
        if (key === SPACE) {
          // space toggles the dropdown (open/closed) while keeping focus
          toggleOpen(event);
          displayNode.current?.focus();
        } else if ([ARROW_DOWN, ARROW_UP, ENTER].includes(key)) {
          if (!open) {
            handleOpen(event);
          }
          if (!dropdownRef.current) {
            return;
          }
          const currentFocusIndex = getFocusedNodeIndex(dropdownRef.current);
          if ([ARROW_UP, ARROW_DOWN].includes(key)) {
            const change = key === ARROW_UP ? -1 : 1;
            const nextOptionIndex = clamp(
              currentFocusIndex + change,
              0,
              options.length - 1
            );
            const nextOption = dropdownRef.current.childNodes[
              nextOptionIndex
            ] as HTMLElement;
            nextOption?.focus();
          } else if (key === ENTER && currentFocusIndex > -1) {
            setValueState(options[currentFocusIndex].value);
            handleClose(event);
            displayNode.current?.focus();

            if (onChange) {
              const option = options[currentFocusIndex];
              event.persist();
              Object.defineProperty(event, 'target', {
                writable: true,
                value: { value: option.value, name }
              });
              onChange(event as unknown as SelectChangeEvent, option);
            }
          }
        }
      }
    },
    [
      handleClose,
      handleOpen,
      name,
      onChange,
      open,
      options,
      setValueState,
      toggleOpen
    ]
  );

  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      // trigger onBlur only when dropdown is closesd
      // otherwise onBlur would be triggered when switching focus
      // from display node to
      if (!open && onBlur) {
        event.persist();
        // Preact support, target is read only property on a native event.
        Object.defineProperty(event, 'target', {
          writable: true,
          value: { value, name }
        });
        onBlur(event);
      }
    },
    [name, onBlur, open, value]
  );

  const handleOptionKeyUp = useCallback(
    (event: React.KeyboardEvent<HTMLLIElement | HTMLSelectElement>) => {
      if (event.key === KEYS.SPACE) {
        // otherwise our MenuItems dispatches a click event
        // it's not behavior of the native <option> and causes
        // the select to close immediately since we open on space keydown
        event.preventDefault();
      }
    },
    []
  );

  // function below to enable using
  // value/defaultValue in native select
  const handleNativeSelection = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      event.stopPropagation();

      const nextSelection = getOptionWithValue(event.target.value, options);
      if (!nextSelection) {
        return;
      }

      onChange?.(event, nextSelection);
      setValueState(nextSelection.value);
      displayNode.current?.focus();
    },
    [onChange, options, setValueState]
  );

  const isEnabled = !(disabled || readOnly);
  const displayLabel = getDisplayLabel(selectedOption, formatDisplay);
  const tabIndex = isEnabled ? 1 : undefined;
  const Wrapper = getWrapper(variant);

  const optionsContent = useMemo(
    () =>
      options.map((option, index) => {
        const key = `${value}-${index}`;

        if (native) {
          return (
            <StyledNativeOption key={key} value={String(option.value)}>
              {option.label}
            </StyledNativeOption>
          );
        }

        const selected = areEqualValues(option.value, value);
        return (
          <StyledDropdownMenuItem
            ref={el => {
              if (el && option.value === value) {
                el.focus();
              }
            }}
            aria-selected={selected ? 'true' : undefined}
            data-value={option.value}
            key={key}
            onClick={handleOptionClick(option)}
            onKeyUp={handleOptionKeyUp}
            role='option'
            tabIndex={0}
          >
            {option.label}
          </StyledDropdownMenuItem>
        );
      }),
    [handleOptionClick, handleOptionKeyUp, native, options, value]
  );

  const wrapperCommonProps: React.HTMLAttributes<HTMLDivElement> = {
    className,
    style: { ...style, width }
  };

  const DropdownButton = (
    <StyledDropdownButton
      as='div'
      data-testid='select-button'
      $disabled={disabled}
      native={native}
      tabIndex={-1}
      variant={variant}
    >
      <StyledDropdownIcon data-testid='select-icon' $disabled={disabled} />
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

  const buttonId = SelectDisplayProps?.id
    ? String(SelectDisplayProps?.id)
    : name
    ? `react95-component-select-${name}`
    : undefined;

  return (
    <Wrapper
      {...wrapperCommonProps}
      $disabled={disabled}
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
        onMouseDown={isEnabled ? handleMouseDown : undefined}
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
          style={
            menuMaxHeight
              ? { overflow: 'auto', maxHeight: menuMaxHeight }
              : undefined
          }
          tabIndex={0}
          variant={variant}
        >
          {optionsContent}
        </StyledDropdownMenu>
      )}
    </Wrapper>
  );
});

export { Select, SelectProps };
