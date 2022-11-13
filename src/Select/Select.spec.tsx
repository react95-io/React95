import { fireEvent, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { renderWithTheme } from '../../test/utils';
import { noOp } from '../common/utils';
import { Select } from './Select';
import { SelectOption, SelectRef } from './Select.types';

const options: SelectOption<number>[] = [
  { label: 'ten', value: 10 },
  { label: 'twenty', value: 20 },
  { label: 'thirty', value: 30 }
];

describe('<Select />', () => {
  it('should be able to mount the component', () => {
    const { container } = renderWithTheme(
      <Select defaultValue={10} options={options} />
    );

    const input = container.querySelector('input') as HTMLInputElement;
    expect(input.value).toBe('10');
  });

  it('renders dropdown button with icon', () => {
    renderWithTheme(<Select defaultValue={10} options={options} />);

    const button = screen.getByTestId('select-button');
    expect(button).toBeInTheDocument();
    // we render styled.button, but as='div'
    // because it's used only for aesthetic purposes
    expect(button.tagName).not.toBe('BUTTON');
    expect(button.firstChild).toHaveAttribute('data-testid', 'select-icon');
  });

  it('the trigger is in tab order', () => {
    renderWithTheme(<Select defaultValue={10} options={options} />);
    expect(screen.getByRole('button')).toHaveProperty('tabIndex', 1);
  });

  it('should accept null child', () => {
    renderWithTheme(<Select defaultValue={10} options={[...options, null]} />);
  });

  it('should have an input with [type="hidden"] and string value by default', () => {
    const { container } = renderWithTheme(
      <Select defaultValue={10} options={options} />
    );
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('type', 'hidden');
    expect(input).toHaveAttribute('value', '10');
  });

  it('passes through the blur event when menu is closed', () => {
    const handleBlur = jest.fn();
    renderWithTheme(
      <Select
        onBlur={handleBlur}
        options={[
          { label: 'ten', value: '10' },
          { label: 'none', value: '' }
        ]}
      />
    );

    const trigger = screen.getByRole('button');
    fireEvent.focus(trigger);
    fireEvent.blur(trigger);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('should ignore onBlur when the menu opens', () => {
    // mousedown calls focus while click opens moving the focus to an item
    // this means the trigger is blurred immediately
    const handleBlur = jest.fn();
    renderWithTheme(
      <Select
        onBlur={handleBlur}
        defaultValue=''
        onMouseDown={event => {
          // simulating certain platforms that focus on mousedown
          if (event.defaultPrevented === false) {
            event.currentTarget.focus();
          }
        }}
        options={[
          { label: 'ten', value: '10' },
          { label: 'none', value: '' }
        ]}
      />
    );
    const trigger = screen.getByRole('button');
    fireEvent.mouseDown(trigger);
    expect(handleBlur).toHaveBeenCalledTimes(0);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    const o = screen.getAllByRole('option');
    fireEvent.mouseDown(o[0]);
    o[0].click();
    expect(handleBlur).toHaveBeenCalledTimes(0);
    expect(screen.queryByRole('listbox', { hidden: false })).toBe(null);
  });

  it('options should have a data-value attribute', () => {
    renderWithTheme(
      <Select defaultValue={10} onOpen={noOp} open options={options} />
    );
    const o = screen.getAllByRole('option');
    expect(o[0]).toHaveAttribute('data-value', '10');
    expect(o[1]).toHaveAttribute('data-value', '20');
  });

  it('should call onClose when user clicks outside of component', async () => {
    const handleClose = jest.fn();
    renderWithTheme(
      <div>
        <Select onClose={handleClose} options={options} />
        <div data-testid='el'>swag</div>
      </div>
    );
    expect(handleClose).toHaveBeenCalledTimes(0);
    fireEvent.mouseDown(screen.getByRole('button'));
    fireEvent.mouseDown(screen.getByText('swag'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should open and close on mouseDown', async () => {
    renderWithTheme(<Select options={options} />);

    fireEvent.mouseDown(screen.getByRole('button'));
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByRole('button'));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  describe('prop: inputProps', () => {
    it('should apply additional props to trigger element', () => {
      renderWithTheme(
        <Select
          defaultValue={10}
          inputProps={{ 'data-testid': 'SelectInput' }}
          options={options}
        />
      );
      expect(screen.getByTestId('SelectInput')).toHaveProperty(
        'tagName',
        'INPUT'
      );
    });
  });

  describe('prop: menuMaxHeight', () => {
    it('sets max-height to dropdown', () => {
      renderWithTheme(
        <Select
          defaultValue={10}
          onOpen={noOp}
          open
          options={options}
          menuMaxHeight={220}
        />
      );

      const listbox = screen.getByRole('listbox') as HTMLElement;
      expect(
        listbox.getAttribute('style')?.includes('max-height: 220px')
      ).toBeTruthy();
    });
  });

  describe('prop: onClose, onFocus, onKeyDown, onOpen', () => {
    it('passes event through', () => {
      const handler = jest.fn();

      renderWithTheme(
        <>
          <Select
            defaultValue={10}
            onClose={handler}
            onFocus={handler}
            onKeyDown={handler}
            onOpen={handler}
            options={options}
          />
          <div>outside</div>
        </>
      );

      const button = screen.getByRole('button');

      fireEvent.focus(button);
      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'focus' })
      );
      handler.mockClear();

      fireEvent.keyDown(button);
      expect(handler).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'keydown' })
      );
      handler.mockClear();

      fireEvent.mouseDown(button);
      expect(handler).toHaveBeenCalledWith({
        fromEvent: expect.objectContaining({ type: 'mousedown' })
      });
      handler.mockClear();

      fireEvent.mouseDown(screen.getByText('outside'));
      expect(handler).toHaveBeenCalledWith({
        fromEvent: expect.objectContaining({ type: 'mousedown' })
      });
      handler.mockClear();
    });
  });

  describe('prop: onChange', () => {
    it('should get selected option from arguments', () => {
      const onChange = jest.fn();
      renderWithTheme(
        <Select onChange={onChange} defaultValue={0} options={options} />
      );
      fireEvent.mouseDown(screen.getByRole('button'));

      const option = screen.getAllByRole('option')[1];
      fireEvent.mouseEnter(option);
      fireEvent.click(option);

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(options[1], {
        fromEvent: expect.anything()
      });
    });
  });

  describe('prop: readOnly', () => {
    it('should not trigger any event with readOnly', () => {
      renderWithTheme(<Select readOnly defaultValue={10} options={options} />);
      screen.getByRole('button').focus();
      const focusedButton = document.activeElement as HTMLElement;
      fireEvent.keyDown(focusedButton, { key: 'ArrowDown' });
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      fireEvent.keyUp(focusedButton, { key: 'ArrowDown' });
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('prop: value', () => {
    it('should select the option based on the value', () => {
      renderWithTheme(
        <Select defaultValue={20} options={options} open onOpen={noOp} />
      );
      const o = screen.getAllByRole('option');
      expect(o[0]).not.toHaveAttribute('aria-selected');
      expect(o[1]).toHaveAttribute('aria-selected', 'true');
      expect(o[2]).not.toHaveAttribute('aria-selected');
    });

    it('should select only the option that matches the object', () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 2 };
      renderWithTheme(
        <Select
          open
          onOpen={noOp}
          defaultValue={obj1}
          options={[
            { label: '1', value: obj1 },
            { label: '2', value: obj2 }
          ]}
        />
      );
      const o = screen.getAllByRole('option');
      expect(o[0]).toHaveAttribute('aria-selected', 'true');
      expect(o[1]).not.toHaveAttribute('aria-selected');
    });

    it('should be able to use an object', () => {
      const value = {};
      renderWithTheme(
        <Select
          open
          onOpen={noOp}
          defaultValue={value}
          options={[...options, { value, label: 'object-label' }]}
        />
      );
      expect(screen.getByRole('button')).toHaveTextContent('object-label');
    });
  });

  describe('prop: open (controlled)', () => {
    // TODO add more tests
    it('should be open when initially true', () => {
      renderWithTheme(<Select open onOpen={noOp} options={options} />);
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('open only with the left mouse button click', () => {
      // Right/middle mouse click shouldn't open the Select
      renderWithTheme(<Select defaultValue={10} options={options} />);
      const trigger = screen.getByRole('button');
      // If clicked by the right/middle mouse button, no options list should be opened
      fireEvent.mouseDown(trigger, { button: 1 });
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      fireEvent.mouseDown(trigger, { button: 2 });
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('prop: formatDisplay', () => {
    it('should use the prop to render the value', () => {
      const formatDisplay = (x: SelectOption<number>) =>
        `0b${Number(x.value).toString(2)}`;
      renderWithTheme(
        <Select
          formatDisplay={formatDisplay}
          options={[{ value: 2, label: '2' }]}
        />
      );
      expect(screen.getByRole('button')).toHaveTextContent('0b10');
    });
  });

  describe('prop: ref', () => {
    it('should be able to return the input node via a ref object', () => {
      const ref = React.createRef<SelectRef>();
      renderWithTheme(<Select ref={ref} defaultValue='' />);
      expect(ref.current?.node).toHaveProperty('tagName', 'INPUT');
    });

    it('should be able focus the trigger imperatively', () => {
      const ref = React.createRef<SelectRef>();
      renderWithTheme(<Select ref={ref} defaultValue='' />);
      ref.current?.focus();
      expect(screen.getByRole('button')).toHaveFocus();
    });
  });

  describe('spread props', () => {
    it('should apply additional props to trigger element', () => {
      renderWithTheme(
        <Select data-test='SelectDisplay' defaultValue={10} options={options} />
      );
      expect(screen.getByRole('button')).toHaveAttribute(
        'data-test',
        'SelectDisplay'
      );
    });
  });

  describe('keyboard', () => {
    it.each(['Space', 'ArrowUp', 'ArrowDown', 'Home', 'End'])(
      `should open menu when pressed %s key on select`,
      code => {
        renderWithTheme(
          <Select defaultValue='' options={[{ label: 'none', value: '' }]} />
        );
        screen.getByRole('button').focus();
        const focusedButton = document.activeElement as HTMLButtonElement;
        fireEvent.keyDown(focusedButton, { code });
        expect(
          screen.getByRole('listbox', { hidden: false })
        ).toBeInTheDocument();
        fireEvent.keyUp(focusedButton, { code });
        expect(
          screen.getByRole('listbox', { hidden: false })
        ).toBeInTheDocument();
      }
    );

    it('closes menu when pressing Escape', async () => {
      const onClose = jest.fn();
      renderWithTheme(
        <Select defaultValue={10} options={options} onClose={onClose} />
      );
      const button = screen.getByRole('button');
      fireEvent.mouseDown(button);

      const listbox = screen.getByRole('listbox');

      expect(screen.getByRole('option', { name: 'ten' })).toBeInTheDocument();

      fireEvent.keyDown(listbox, { code: 'ArrowDown' });
      expect(screen.getByRole('option', { name: 'twenty' })).toHaveFocus();

      fireEvent.keyDown(listbox, { code: 'Escape' });

      await waitFor(() => {
        expect(onClose).toHaveBeenCalled();
      });
      expect(listbox).not.toBeInTheDocument();

      expect(button).toHaveFocus();
    });

    it.each(['Enter', 'Space', 'Tab'])(
      'selects the active option by pressing %s, closes menu and maintains focus',
      async keyCode => {
        const onClose = jest.fn();
        const onKeyDown = jest.fn();
        renderWithTheme(
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div onKeyDown={onKeyDown}>
            <Select defaultValue={10} options={options} onClose={onClose} />
          </div>
        );
        const button = screen.getByRole('button');
        fireEvent.mouseDown(button);

        const listbox = screen.getByRole('listbox');

        expect(screen.getByRole('option', { name: 'ten' })).toBeInTheDocument();

        fireEvent.keyDown(listbox, { code: 'ArrowDown' });
        expect(screen.getByRole('option', { name: 'twenty' })).toHaveFocus();

        fireEvent.keyDown(listbox, { code: keyCode });

        await waitFor(() => {
          expect(onClose).toHaveBeenCalled();
        });
        expect(listbox).not.toBeInTheDocument();

        expect(button).toHaveFocus();
        expect(onKeyDown).toHaveBeenCalledWith(
          expect.objectContaining({ defaultPrevented: true })
        );
      }
    );

    it('passes through Enter, Escape, Tab and Shift + Tab when closed', () => {
      const onKeyDown = jest.fn();
      renderWithTheme(
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div onKeyDown={onKeyDown}>
          <Select defaultValue={10} options={options} />
        </div>
      );

      const button = screen.getByRole('button');

      const eventOptions = [
        { code: 'Enter' },
        { code: 'Escape' },
        { code: 'Tab' },
        { code: 'Tab', shiftKey: true }
      ];
      eventOptions.forEach(eventOption => {
        fireEvent.keyDown(button, eventOption);
        expect(onKeyDown).toHaveBeenCalledWith(
          expect.objectContaining({ defaultPrevented: false })
        );
      });
    });

    it('passes through keyDown events when modifier keys are pressed', () => {
      const onKeyDown = jest.fn();
      renderWithTheme(
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div onKeyDown={onKeyDown}>
          <Select defaultValue={10} options={options} />
        </div>
      );

      const button = screen.getByRole('button');
      button.focus();

      const eventOptions = [
        { altKey: true },
        { ctrlKey: true },
        { metaKey: true },
        { shiftKey: true }
      ];
      eventOptions.forEach(eventOption => {
        fireEvent.keyDown(button, { ...eventOption, code: 'KeyT' });
        expect(button).toHaveTextContent('ten');
        expect(onKeyDown).toHaveBeenCalledWith(
          expect.objectContaining({ defaultPrevented: false })
        );
      });
    });

    it('moves options using ArrowUp, ArrowDown, Home and End', async () => {
      renderWithTheme(<Select defaultValue={10} options={options} />);
      const button = screen.getByRole('button');
      fireEvent.mouseDown(button);

      const listbox = screen.getByRole('listbox');

      expect(screen.getByRole('option', { name: 'ten' })).toBeInTheDocument();

      fireEvent.keyDown(listbox, { code: 'ArrowDown' });
      expect(screen.getByRole('option', { name: 'twenty' })).toHaveFocus();

      fireEvent.keyDown(listbox, { code: 'ArrowUp' });
      expect(screen.getByRole('option', { name: 'ten' })).toHaveFocus();

      fireEvent.keyDown(listbox, { code: 'End' });
      expect(screen.getByRole('option', { name: 'thirty' })).toHaveFocus();

      fireEvent.keyDown(listbox, { code: 'Home' });
      expect(screen.getByRole('option', { name: 'ten' })).toHaveFocus();
    });

    it('cycles through options when pressing the same key (open menu)', async () => {
      renderWithTheme(<Select defaultValue={10} options={options} />);
      const button = screen.getByRole('button');
      fireEvent.mouseDown(button);

      const listbox = screen.getByRole('listbox');

      expect(screen.getByRole('option', { name: 'ten' })).toBeInTheDocument();

      fireEvent.keyDown(listbox, { code: 'KeyT' });
      expect(screen.getByRole('option', { name: 'ten' })).toHaveFocus();

      fireEvent.keyDown(listbox, { code: 'KeyT' });
      expect(screen.getByRole('option', { name: 'twenty' })).toHaveFocus();

      fireEvent.keyDown(listbox, { code: 'KeyT' });
      expect(screen.getByRole('option', { name: 'thirty' })).toHaveFocus();

      fireEvent.keyDown(listbox, { code: 'KeyT' });
      expect(screen.getByRole('option', { name: 'ten' })).toHaveFocus();
    });

    it('cycles through options when pressing the same key (closed menu)', async () => {
      renderWithTheme(<Select defaultValue={10} options={options} />);
      const button = screen.getByRole('button');
      fireEvent.focus(button);

      fireEvent.keyDown(button, { code: 'KeyT' });
      fireEvent.keyDown(button, { code: 'KeyT' });
      expect(button).toHaveTextContent('twenty');

      fireEvent.keyDown(button, { code: 'KeyT' });
      expect(button).toHaveTextContent('thirty');

      fireEvent.keyDown(button, { code: 'KeyT' });
      expect(button).toHaveTextContent('ten');
    });

    it('switches to search after cycling', async () => {
      renderWithTheme(<Select defaultValue={10} options={options} />);
      const button = screen.getByRole('button');
      fireEvent.mouseDown(button);

      const listbox = screen.getByRole('listbox');

      expect(screen.getByRole('option', { name: 'ten' })).toBeInTheDocument();

      fireEvent.keyDown(listbox, { code: 'KeyT' });
      expect(screen.getByRole('option', { name: 'ten' })).toHaveFocus();

      fireEvent.keyDown(listbox, { code: 'KeyT' });
      expect(screen.getByRole('option', { name: 'twenty' })).toHaveFocus();

      fireEvent.keyDown(listbox, { code: 'KeyE' });
      expect(screen.getByRole('option', { name: 'ten' })).toHaveFocus();
    });

    it('switches to cycling after search', async () => {
      renderWithTheme(<Select defaultValue={10} options={options} />);
      const button = screen.getByRole('button');
      fireEvent.mouseDown(button);

      const listbox = screen.getByRole('listbox');

      expect(screen.getByRole('option', { name: 'ten' })).toBeInTheDocument();

      fireEvent.keyDown(listbox, { code: 'KeyT' });
      expect(screen.getByRole('option', { name: 'ten' })).toHaveFocus();

      fireEvent.keyDown(listbox, { code: 'KeyH' });
      expect(screen.getByRole('option', { name: 'thirty' })).toHaveFocus();

      fireEvent.keyDown(listbox, { code: 'KeyT' });
      expect(screen.getByRole('option', { name: 'ten' })).toHaveFocus();

      fireEvent.keyDown(listbox, { code: 'KeyT' });
      expect(screen.getByRole('option', { name: 'twenty' })).toHaveFocus();
    });

    it('moves to specific option when typing', async () => {
      renderWithTheme(<Select defaultValue={10} options={options} />);
      const button = screen.getByRole('button');
      fireEvent.mouseDown(button);

      const listbox = screen.getByRole('listbox');

      expect(screen.getByRole('option', { name: 'ten' })).toBeInTheDocument();

      fireEvent.keyDown(listbox, { code: 'KeyT' });
      expect(screen.getByRole('option', { name: 'ten' })).toHaveFocus();

      fireEvent.keyDown(listbox, { code: 'KeyH' });
      fireEvent.keyDown(listbox, { code: 'KeyI' });
      fireEvent.keyDown(listbox, { code: 'KeyR' });
      expect(screen.getByRole('option', { name: 'thirty' })).toHaveFocus();
    });

    it('resets typing after timeout', async () => {
      jest.useFakeTimers();
      renderWithTheme(<Select defaultValue={10} options={options} />);
      const button = screen.getByRole('button');
      fireEvent.mouseDown(button);

      const listbox = screen.getByRole('listbox');

      expect(screen.getByRole('option', { name: 'ten' })).toBeInTheDocument();

      fireEvent.keyDown(listbox, { code: 'KeyT' });
      fireEvent.keyDown(listbox, { code: 'KeyH' });
      fireEvent.keyDown(listbox, { code: 'KeyI' });
      fireEvent.keyDown(listbox, { code: 'KeyR' });
      expect(screen.getByRole('option', { name: 'thirty' })).toHaveFocus();
      jest.runAllTimers();

      fireEvent.keyDown(listbox, { code: 'KeyT' });
      expect(screen.getByRole('option', { name: 'ten' })).toHaveFocus();

      jest.useRealTimers();
    });
  });

  describe('accessibility', () => {
    it('sets aria-expanded="true" when the listbox is displayed', () => {
      // since we make the rest of the UI inaccessible when open this doesn't
      // technically matter. This is only here in case we keep the rest accessible
      renderWithTheme(<Select open onOpen={noOp} defaultValue='' />);
      expect(screen.getByRole('button', { hidden: true })).toHaveAttribute(
        'aria-expanded',
        'true'
      );
    });

    it("aria-expanded is false if the listbox isn't displayed", () => {
      renderWithTheme(<Select defaultValue='' />);
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-expanded',
        'false'
      );
    });

    it('indicates that activating the button displays a listbox', () => {
      renderWithTheme(<Select defaultValue='' />);
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-haspopup',
        'listbox'
      );
    });

    it('renders an element with listbox behavior', () => {
      renderWithTheme(<Select open onOpen={noOp} defaultValue='' />);
      expect(screen.getByRole('listbox')).toBeVisible();
    });

    it('the listbox is focusable', () => {
      renderWithTheme(<Select open onOpen={noOp} options={options} />);
      const listbox = screen.getByRole('listbox');
      listbox.focus();
      expect(listbox).toHaveFocus();
    });

    it('identifies each selectable element containing an option', () => {
      renderWithTheme(<Select open onOpen={noOp} options={options} />);
      const o = screen.getAllByRole('option');
      expect(o[0]).toHaveTextContent('ten');
      expect(o[1]).toHaveTextContent('twenty');
    });

    it('indicates the selected option', () => {
      renderWithTheme(
        <Select open onOpen={noOp} defaultValue={20} options={options} />
      );
      expect(screen.getAllByRole('option')[1]).toHaveAttribute(
        'aria-selected',
        'true'
      );
    });

    it('it will fallback to its content for the accessible name when it has no name', () => {
      renderWithTheme(<Select defaultValue='' />);
      expect(screen.getByRole('button')).not.toHaveAttribute('aria-labelledby');
    });

    it('is labelled by itself when it has an id which is preferred over name', () => {
      renderWithTheme(
        <>
          <span id='select-1-label'>Chose first option:</span>
          <Select
            aria-labelledby='select-1-label'
            id='select-1'
            name='select'
            defaultValue=''
          />
          <span id='select-2-label'>Chose second option:</span>
          <Select
            aria-labelledby='select-2-label'
            id='select-2'
            name='select'
            defaultValue=''
          />
        </>
      );
      const triggers = screen.getAllByRole('button');
      expect(triggers[0]).toHaveAttribute('aria-labelledby', 'select-1-label');
      expect(triggers[1]).toHaveAttribute('aria-labelledby', 'select-2-label');
    });
  });
});
