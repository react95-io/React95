import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import { KEYBOARD_KEY_CODES } from '../common/constants';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled';
import { clamp } from '../common/utils';

import { SelectOption, SelectInnerProps } from './Select.types';

const TYPING_RESET_DELAY = 1000;

export const useSelectState = <T>({
  onBlur,
  onChange,
  onClose,
  onFocus,
  onKeyDown,
  onMouseDown,
  onOpen,
  open: openProp,
  options,
  readOnly,
  value,
  selectRef,
  setValue,
  wrapperRef
}: Omit<SelectInnerProps<T>, 'options' | 'value'> & {
  options: SelectOption<T>[];
  selectRef: React.MutableRefObject<HTMLDivElement | null>;
  setValue: (newValue: React.SetStateAction<T>) => void;
  value: T;
  wrapperRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  // Element references for scrolling to the active option
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

  // State references so callbacks are not reset on every change
  const selectedIndex = useRef<number>(0);
  const activeIndex = useRef(0);

  // Buffer to focus option after it is rendered and the reference becomes known
  const focusIndexWhenSet = useRef<number>();

  // Typing state references so callbacks are not reset on every change
  const typingMode = useRef<'search' | 'cycleFirstLetter'>('search');
  const typedString = useRef<string>('');
  const typingTimer = useRef<ReturnType<typeof setTimeout>>();

  // Open state
  const [open, setOpen] = useControlledOrUncontrolled({
    defaultValue: false,
    onChange: onOpen,
    onChangePropName: 'onOpen',
    readOnly,
    value: openProp,
    valuePropName: 'open'
  });

  // Exposed selected option
  const selectedOption = useMemo(() => {
    const index = options.findIndex(option => option.value === value);
    selectedIndex.current = clamp(index, 0, null);
    return options[index];
  }, [options, value]);

  // Exposed active option
  const [activeOption, setActiveOption] = useState(options[0]);

  // Focuses and scrolls to the option, pinning it to the top or bottom of the
  // scroll area. The default focus behavior scrolls inconsistently.
  const focusOption = useCallback(
    (index: number) => {
      const dropdownEl = dropdownRef.current;
      const optionEl = optionRefs.current[index];
      if (!optionEl || !dropdownEl) {
        focusIndexWhenSet.current = index;
        return;
      }
      focusIndexWhenSet.current = undefined;

      const dropdownHeight = dropdownEl.clientHeight;
      const dropdownScrollTop = dropdownEl.scrollTop;
      const dropdownScrollEnd = dropdownEl.scrollTop + dropdownHeight;
      const optionTop = optionEl.offsetTop;
      const optionHeight = optionEl.offsetHeight;
      const optionBottom = optionEl.offsetTop + optionEl.offsetHeight;

      if (optionTop < dropdownScrollTop) {
        dropdownEl.scrollTo(0, optionTop);
      }
      if (optionBottom > dropdownScrollEnd) {
        dropdownEl.scrollTo(0, optionTop - dropdownHeight + optionHeight);
      }
      optionEl.focus({ preventScroll: true });
    },
    [dropdownRef]
  );

  // Activates an option relatively or absolutely
  const activateOption = useCallback(
    (
      indexOrOption:
        | number
        | 'first'
        | 'last'
        | 'next'
        | 'previous'
        | 'selected',
      { scroll }: { scroll?: boolean } = {}
    ) => {
      const lastIndex = options.length - 1;
      let index;
      switch (indexOrOption) {
        case 'first': {
          index = 0;
          break;
        }
        case 'last': {
          index = lastIndex;
          break;
        }
        case 'next': {
          index = clamp(activeIndex.current + 1, 0, lastIndex);
          break;
        }
        case 'previous': {
          index = clamp(activeIndex.current - 1, 0, lastIndex);
          break;
        }
        case 'selected': {
          index = clamp(selectedIndex.current ?? 0, 0, lastIndex);
          break;
        }
        default:
          index = indexOrOption;
      }

      activeIndex.current = index;
      setActiveOption(options[index]);

      if (scroll) {
        focusOption(index);
      }
    },
    [activeIndex, options, focusOption]
  );

  // Opens the dropdown and activates the selected option
  const openDropdown = useCallback(
    ({ fromEvent }: { fromEvent: React.SyntheticEvent }) => {
      setOpen(true);
      activateOption('selected', { scroll: true });
      onOpen?.({ fromEvent });
    },
    [activateOption, onOpen, setOpen]
  );

  // Resets the typing states and clears timers
  const clearSearchFromTyping = useCallback(() => {
    typingMode.current = 'search';
    typedString.current = '';
    clearTimeout(typingTimer.current);
  }, []);

  // Closes the dropdown and resets its state
  const closeDropdown = useCallback(
    ({
      focusSelect,
      fromEvent
    }: {
      focusSelect: boolean;
      fromEvent: Event | React.SyntheticEvent;
    }) => {
      onClose?.({ fromEvent });
      setOpen(false);
      setActiveOption(options[0]);
      clearSearchFromTyping();
      focusIndexWhenSet.current = undefined;
      if (focusSelect) {
        selectRef.current?.focus();
      }
    },
    [clearSearchFromTyping, onClose, options, selectRef, setOpen]
  );

  // Toggles the dropdown open state
  const toggleDropdown = useCallback(
    ({ fromEvent }: { fromEvent: React.SyntheticEvent }) => {
      if (open) {
        closeDropdown({ focusSelect: false, fromEvent });
      } else {
        openDropdown({ fromEvent });
      }
    },
    [closeDropdown, openDropdown, open]
  );

  // Selects an option and updates the exposed state
  const selectOptionIndex = useCallback(
    (
      optionIndex: number,
      { fromEvent }: { fromEvent: Event | React.SyntheticEvent }
    ) => {
      if (selectedIndex.current === optionIndex) {
        return;
      }

      selectedIndex.current = optionIndex;
      setValue(options[optionIndex].value);
      onChange?.(options[optionIndex], { fromEvent });
    },
    [onChange, options, setValue]
  );

  // Selects the active option and close the dropdown
  const selectActiveOptionAndClose = useCallback(
    ({
      focusSelect,
      fromEvent
    }: {
      focusSelect: boolean;
      fromEvent: Event | React.SyntheticEvent;
    }) => {
      selectOptionIndex(activeIndex.current, { fromEvent });
      closeDropdown({ focusSelect, fromEvent });
    },
    [closeDropdown, selectOptionIndex]
  );

  // Searches options for the typed letter and activates it (if open) or selects
  // it (if closed)
  const searchFromTyping = useCallback(
    (
      letter: string,
      {
        fromEvent,
        select
      }: { fromEvent: React.SyntheticEvent; select: boolean }
    ) => {
      if (
        typingMode.current === 'cycleFirstLetter' &&
        letter !== typedString.current
      ) {
        typingMode.current = 'search';
      }

      if (letter === typedString.current) {
        typingMode.current = 'cycleFirstLetter';
      } else {
        typedString.current += letter;
      }

      switch (typingMode.current) {
        case 'search': {
          let foundOptionIndex = options.findIndex(
            option =>
              option.label?.toLocaleUpperCase().indexOf(typedString.current) ===
              0
          );
          if (foundOptionIndex < 0) {
            foundOptionIndex = options.findIndex(
              option => option.label?.toLocaleUpperCase().indexOf(letter) === 0
            );
            typedString.current = letter;
          }
          if (foundOptionIndex >= 0) {
            if (select) {
              selectOptionIndex(foundOptionIndex, { fromEvent });
            } else {
              activateOption(foundOptionIndex, { scroll: true });
            }
          }
          break;
        }
        case 'cycleFirstLetter': {
          const currentOptionIndex = select
            ? selectedIndex.current ?? -1
            : activeIndex.current;
          let foundOptionIndex = options.findIndex(
            (option, index) =>
              index > currentOptionIndex &&
              option.label?.toLocaleUpperCase().indexOf(letter) === 0
          );
          if (foundOptionIndex < 0) {
            foundOptionIndex = options.findIndex(
              option => option.label?.toLocaleUpperCase().indexOf(letter) === 0
            );
          }
          if (foundOptionIndex >= 0) {
            if (select) {
              selectOptionIndex(foundOptionIndex, { fromEvent });
            } else {
              activateOption(foundOptionIndex, { scroll: true });
            }
          }

          break;
        }
        default:
      }

      clearTimeout(typingTimer.current);
      typingTimer.current = setTimeout(() => {
        if (typingMode.current === 'search') {
          typedString.current = '';
        }
      }, TYPING_RESET_DELAY);
    },
    [activateOption, options, selectOptionIndex]
  );

  // MouseDown handler for the select button
  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      // ignore everything but left-click
      if (event.button !== 0) {
        return;
      }

      // hijack the default focus behavior.
      event.preventDefault();
      selectRef.current?.focus();

      toggleDropdown({ fromEvent: event });

      onMouseDown?.(event);
    },
    [onMouseDown, selectRef, toggleDropdown]
  );

  // Click handler for every option
  const handleOptionClick = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      selectActiveOptionAndClose({ focusSelect: true, fromEvent: event });
    },
    [selectActiveOptionAndClose]
  );

  // KeyDown handler for select button and dropdown menu, implementing
  // recommended keyboard interactions from [ARIA's document][1] as well as some
  // common practices for listboxes on Windows and macOS.
  // [1]: https://www.w3.org/WAI/ARIA/apg/patterns/listbox/#keyboard-interaction-11
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement | HTMLUListElement>) => {
      const { altKey, code, ctrlKey, metaKey, shiftKey } = event;
      const { ARROW_DOWN, ARROW_UP, END, ENTER, ESC, HOME, SPACE, TAB } =
        KEYBOARD_KEY_CODES;

      const modifierKey = altKey || ctrlKey || metaKey || shiftKey;
      const modifierKeyButShift = altKey || ctrlKey || metaKey;

      // Skips handling if any modifier key is set, but allows shift + tab to select the
      if (
        (code === TAB && modifierKeyButShift) ||
        (code !== TAB && modifierKey)
      ) {
        return;
      }

      switch (code) {
        case ARROW_DOWN: {
          event.preventDefault();

          if (!open) {
            openDropdown({ fromEvent: event });
            return;
          }

          activateOption('next', { scroll: true });
          break;
        }
        case ARROW_UP: {
          event.preventDefault();

          if (!open) {
            openDropdown({ fromEvent: event });
            return;
          }

          activateOption('previous', { scroll: true });
          break;
        }
        case END: {
          event.preventDefault();

          if (!open) {
            openDropdown({ fromEvent: event });
            return;
          }

          activateOption('last', { scroll: true });
          break;
        }
        case ENTER: {
          if (!open) {
            return;
          }

          event.preventDefault();

          selectActiveOptionAndClose({ focusSelect: true, fromEvent: event });
          break;
        }
        case ESC: {
          if (!open) {
            return;
          }

          event.preventDefault();

          closeDropdown({ focusSelect: true, fromEvent: event });
          break;
        }
        case HOME: {
          event.preventDefault();

          if (!open) {
            openDropdown({ fromEvent: event });
            return;
          }

          activateOption('first', { scroll: true });
          break;
        }
        case SPACE: {
          event.preventDefault();
          if (open) {
            selectActiveOptionAndClose({ focusSelect: true, fromEvent: event });
          } else {
            openDropdown({ fromEvent: event });
          }

          break;
        }
        case TAB: {
          if (!open) {
            return;
          }

          if (!shiftKey) {
            event.preventDefault();
          }

          selectActiveOptionAndClose({
            focusSelect: !shiftKey,
            fromEvent: event
          });
          break;
        }
        default:
          if (!modifierKey && code.match(/^Key/)) {
            event.preventDefault();
            event.stopPropagation();

            searchFromTyping(code.replace(/^Key/, ''), {
              select: !open,
              fromEvent: event
            });
          }
      }
    },
    [
      activateOption,
      closeDropdown,
      open,
      openDropdown,
      searchFromTyping,
      selectActiveOptionAndClose
    ]
  );

  // KeyDown handler for the select button
  const handleButtonKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      handleKeyDown(event);
      onKeyDown?.(event);
    },
    [handleKeyDown, onKeyDown]
  );

  // Activate handler when MouseEntering an option
  const handleActivateOptionIndex = useCallback(
    (index: number) => {
      activateOption(index);
    },
    [activateOption]
  );

  // Blur handler for the select button
  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      // Trigger onBlur only when dropdown is closed, otherwise it would be
      // triggered when switching focus to the menu.
      if (open) {
        return;
      }
      clearSearchFromTyping();
      onBlur?.(event);
    },
    [clearSearchFromTyping, onBlur, open]
  );

  // Focus handler for the select button
  const handleFocus = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      clearSearchFromTyping();
      onFocus?.(event);
    },
    [clearSearchFromTyping, onFocus]
  );

  // Handles setting the dropdown ref and focusing the active option
  const handleSetDropdownRef = useCallback(
    (ref: HTMLUListElement | null) => {
      dropdownRef.current = ref;
      if (focusIndexWhenSet.current !== undefined) {
        focusOption(focusIndexWhenSet.current);
      }
    },
    [focusOption]
  );

  // Handles setting each option ref and focusing the active option
  const handleSetOptionRef = useCallback(
    (optionRef: HTMLLIElement | null, index: number) => {
      optionRefs.current[index] = optionRef;
      if (focusIndexWhenSet.current === index) {
        focusOption(focusIndexWhenSet.current);
      }
    },
    [focusOption]
  );

  // Listen to mousedown outside of the element to close the dropdown
  useEffect(() => {
    if (!open) {
      return () => {};
    }

    const outsideMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (!wrapperRef.current?.contains(target)) {
        event.preventDefault();
        closeDropdown({ focusSelect: false, fromEvent: event });
      }
    };

    document.addEventListener('mousedown', outsideMouseDown);
    return () => {
      document.removeEventListener('mousedown', outsideMouseDown);
    };
  }, [closeDropdown, open, wrapperRef]);

  return useMemo(
    () => ({
      activeOption,
      handleActivateOptionIndex,
      handleBlur,
      handleButtonKeyDown,
      handleDropdownKeyDown: handleKeyDown,
      handleFocus,
      handleMouseDown,
      handleOptionClick,
      handleSetDropdownRef,
      handleSetOptionRef,
      open,
      selectedOption
    }),
    [
      activeOption,
      handleActivateOptionIndex,
      handleBlur,
      handleButtonKeyDown,
      handleFocus,
      handleKeyDown,
      handleMouseDown,
      handleOptionClick,
      handleSetDropdownRef,
      handleSetOptionRef,
      open,
      selectedOption
    ]
  );
};
