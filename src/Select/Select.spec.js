// Bsased on https://github.com/mui-org/material-ui
import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../test/utils';
import Select from './Select';

const options = [
  { label: 'ten', value: 10 },
  { label: 'twenty', value: 20 },
  { label: 'thirty', value: 30 }
];

describe('<Select />', () => {
  it('should be able to mount the component', () => {
    const { container } = renderWithTheme(
      <Select value={10} options={options} />
    );
    expect(container.querySelector('input').value).toBe('10');
  });

  it('renders dropdown button with icon', () => {
    const { getByTestId } = renderWithTheme(
      <Select value={10} options={options} />
    );

    const button = getByTestId('select-button');
    expect(button).toBeInTheDocument();
    // we render styled.button, but as='div'
    // because it's used only for aesthetic purposes
    expect(button.tagName).not.toBe('BUTTON');
    expect(button.firstChild).toHaveAttribute('data-testid', 'select-icon');
  });

  it('the trigger is in tab order', () => {
    const { getByRole } = renderWithTheme(
      <Select value={10} options={options} />
    );
    expect(getByRole('button')).toHaveProperty('tabIndex', 1);
  });
  it('should accept null child', () => {
    renderWithTheme(<Select value={10} options={[...options, null]} />);
  });
  it('should have an input with [type="hidden"] by default', () => {
    const { container } = renderWithTheme(
      <Select value={10} options={options} />
    );
    expect(container.querySelector('input')).toHaveAttribute('type', 'hidden');
  });
  it('should ignore onBlur when the menu opens', () => {
    // mousedown calls focus while click opens moving the focus to an item
    // this means the trigger is blurred immediately
    const handleBlur = jest.fn();
    const { getByRole, getAllByRole, queryByRole } = renderWithTheme(
      <Select
        onBlur={handleBlur}
        value=''
        onMouseDown={event => {
          // simulating certain platforms that focus on mousedown
          if (event.defaultPrevented === false) {
            event.currentTarget.focus();
          }
        }}
        options={[
          { label: 'ten', value: 10 },
          { label: 'none', value: '' }
        ]}
      />
    );
    const trigger = getByRole('button');
    fireEvent.mouseDown(trigger);
    expect(handleBlur).toHaveBeenCalledTimes(0);
    expect(getByRole('listbox')).toBeInTheDocument();
    const o = getAllByRole('option');
    fireEvent.mouseDown(o[0]);
    o[0].click();
    expect(handleBlur).toHaveBeenCalledTimes(0);
    expect(queryByRole('listbox', { hidden: false })).toBe(null);
  });
  it('options should have a data-value attribute', () => {
    const { getAllByRole } = renderWithTheme(
      <Select open value={10} options={options} />
    );
    const o = getAllByRole('option');
    expect(o[0]).toHaveAttribute('data-value', '10');
    expect(o[1]).toHaveAttribute('data-value', '20');
  });
  [' ', 'ArrowUp', 'ArrowDown', 'Enter'].forEach(key => {
    it(`should open menu when pressed ${key} key on select`, () => {
      const { getByRole } = renderWithTheme(
        <Select value='' options={[{ label: 'none', value: '' }]} />
      );
      getByRole('button').focus();
      fireEvent.keyDown(document.activeElement, { key });
      expect(getByRole('listbox', { hidden: false })).toBeInTheDocument();
      fireEvent.keyUp(document.activeElement, { key });
      expect(getByRole('listbox', { hidden: false })).toBeInTheDocument();
    });
  });
  it('should pass "name" as part of the event.target for onBlur', () => {
    const handleBlur = jest.fn(event => event.target.name);
    const { getByRole } = renderWithTheme(
      <Select
        onBlur={handleBlur}
        name='blur-testing'
        value=''
        options={[{ label: 'none', value: '' }]}
      />
    );
    const button = getByRole('button');
    button.focus();
    button.blur();
    expect(handleBlur).toHaveBeenCalledTimes(1);
    expect(handleBlur.mock.results[0].value).toBe('blur-testing');
  });

  // TODO why it doesn't work ?
  // it('should call onClose when user clicks outside of component', () => {
  //   const handleClose = jest.fn();
  //   const { getByTestId } = renderWithTheme(
  //     <div>
  //       <Select onClose={handleClose} open value='' options={options} />
  //       <div data-testid='el'>swag</div>
  //     </div>
  //   );
  //   expect(handleClose).toHaveBeenCalledTimes(0);
  //   act(() => {
  //     fireEvent.click(getByTestId('el'));
  //   });
  //   expect(handleClose).toHaveBeenCalledTimes(1);
  // });

  describe('prop: menuMaxHeight', () => {
    it('sets max-height to dropdown', () => {
      const { getByRole } = renderWithTheme(
        <Select value={10} open options={options} menuMaxHeight={220} />
      );

      const listbox = getByRole('listbox');
      expect(
        listbox.getAttribute('style').includes('max-height: 220px')
      ).toBeTruthy();
    });
  });

  describe('prop: onChange', () => {
    it('should get selected option from arguments', () => {
      const onChange = jest.fn();
      const { getAllByRole, getByRole } = renderWithTheme(
        <Select onChange={onChange} value='0' options={options} />
      );
      fireEvent.mouseDown(getByRole('button'));
      getAllByRole('option')[1].click();
      expect(onChange).toHaveBeenCalledTimes(1);
      const selected = onChange.mock.calls[0][1];
      expect(selected.value).toBe(20);
      expect(selected.label).toBe('twenty');
    });
  });
  describe('prop: value', () => {
    it('should select the option based on the number value', () => {
      const { getAllByRole } = renderWithTheme(
        <Select value={20} options={options} open />
      );
      const o = getAllByRole('option');
      expect(o[0]).not.toHaveAttribute('aria-selected');
      expect(o[1]).toHaveAttribute('aria-selected', 'true');
      expect(o[2]).not.toHaveAttribute('aria-selected');
    });
    it('should select the option based on the string value', () => {
      const { getAllByRole } = renderWithTheme(
        <Select value='20' options={options} open />
      );
      const o = getAllByRole('option');
      expect(o[0]).not.toHaveAttribute('aria-selected');
      expect(o[1]).toHaveAttribute('aria-selected', 'true');
      expect(o[2]).not.toHaveAttribute('aria-selected');
    });
    it('should select only the option that matches the object', () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 2 };
      const { getAllByRole } = renderWithTheme(
        <Select
          open
          value={obj1}
          options={[{ value: obj1 }, { value: obj2 }]}
        />
      );
      const o = getAllByRole('option');
      expect(o[0]).toHaveAttribute('aria-selected', 'true');
      expect(o[1]).not.toHaveAttribute('aria-selected');
    });
    it('should be able to use an object', () => {
      const value = {};
      const { getByRole } = renderWithTheme(
        <Select
          open
          value={value}
          options={[...options, { value, label: 'object-label' }]}
        />
      );
      expect(getByRole('button')).toHaveTextContent('object-label');
    });
  });

  describe('accessibility', () => {
    it('sets aria-expanded="true" when the listbox is displayed', () => {
      // since we make the rest of the UI inaccessible when open this doesn't
      // technically matter. This is only here in case we keep the rest accessible
      const { getByRole } = renderWithTheme(<Select open value='' />);
      expect(getByRole('button', { hidden: true })).toHaveAttribute(
        'aria-expanded',
        'true'
      );
    });
    it('aria-expanded is not present if the listbox isnt displayed', () => {
      const { getByRole } = renderWithTheme(<Select value='' />);
      expect(getByRole('button')).not.toHaveAttribute('aria-expanded');
    });
    it('indicates that activating the button displays a listbox', () => {
      const { getByRole } = renderWithTheme(<Select value='' />);
      expect(getByRole('button')).toHaveAttribute('aria-haspopup', 'listbox');
    });
    it('renders an element with listbox behavior', () => {
      const { getByRole } = renderWithTheme(<Select open value='' />);
      expect(getByRole('listbox')).toBeVisible();
    });

    it('the listbox is focusable', () => {
      const { getByRole } = renderWithTheme(<Select open options={options} />);
      const listbox = getByRole('listbox');
      listbox.focus();
      expect(listbox).toHaveFocus();
    });
    it('identifies each selectable element containing an option', () => {
      const { getAllByRole } = renderWithTheme(
        <Select open value='' options={options} />
      );
      const o = getAllByRole('option');
      expect(o[0]).toHaveTextContent('ten');
      expect(o[1]).toHaveTextContent('twenty');
    });
    it('indicates the selected option', () => {
      const { getAllByRole } = renderWithTheme(
        <Select open value={20} options={options} />
      );
      expect(getAllByRole('option')[1]).toHaveAttribute(
        'aria-selected',
        'true'
      );
    });
    it('it will fallback to its content for the accessible name when it has no name', () => {
      const { getByRole } = renderWithTheme(<Select value='' />);
      expect(getByRole('button')).not.toHaveAttribute('aria-labelledby');
    });
    it('is labelled by itself when it has a name', () => {
      const { getByRole } = renderWithTheme(<Select name='select' value='' />);
      const button = getByRole('button');
      expect(button).toHaveAttribute(
        'aria-labelledby',
        button.getAttribute('id')
      );
    });
    it('is labelled by itself when it has an id which is preferred over name', () => {
      const { getAllByRole } = renderWithTheme(
        <>
          <span id='select-1-label'>Chose first option:</span>
          <Select
            id='select-1'
            labelId='select-1-label'
            name='select'
            value=''
          />
          <span id='select-2-label'>Chose second option:</span>
          <Select
            id='select-2'
            labelId='select-2-label'
            name='select'
            value=''
          />
        </>
      );
      const triggers = getAllByRole('button');
      expect(triggers[0]).toHaveAttribute(
        'aria-labelledby',
        `select-1-label ${triggers[0].getAttribute('id')}`
      );
      expect(triggers[1]).toHaveAttribute(
        'aria-labelledby',
        `select-2-label ${triggers[1].getAttribute('id')}`
      );
    });
    it('can be labelled by an additional element if its id is provided in `labelId`', () => {
      const { getByRole } = renderWithTheme(
        <>
          <span id='select-label'>Choose one:</span>
          <Select labelId='select-label' name='select' value='' />
        </>
      );
      expect(getByRole('button')).toHaveAttribute(
        'aria-labelledby',
        `select-label ${getByRole('button').getAttribute('id')}`
      );
    });
    it('the list of options is not labelled by default', () => {
      const { getByRole } = renderWithTheme(<Select open value='' />);
      expect(getByRole('listbox')).not.toHaveAttribute('aria-labelledby');
    });
    it('the list of options can be labelled by providing `labelId`', () => {
      const { getByRole } = renderWithTheme(
        <>
          <span id='select-label'>Choose one:</span>
          <Select labelId='select-label' open value='' />
        </>
      );
      expect(getByRole('listbox')).toHaveAttribute(
        'aria-labelledby',
        'select-label'
      );
    });
  });
  describe('prop: readOnly', () => {
    it('should not trigger any event with readOnly', () => {
      const { getByRole, queryByRole } = renderWithTheme(
        <Select readOnly value='10' options={options} />
      );
      getByRole('button').focus();
      fireEvent.keyDown(document.activeElement, { key: 'ArrowDown' });
      expect(queryByRole('listbox')).not.toBeInTheDocument();
      fireEvent.keyUp(document.activeElement, { key: 'ArrowDown' });
      expect(queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('prop: SelectDisplayProps', () => {
    it('should apply additional props to trigger element', () => {
      const { getByRole } = renderWithTheme(
        <Select
          SelectDisplayProps={{ 'data-test': 'SelectDisplay' }}
          value='10'
          options={options}
        />
      );
      expect(getByRole('button')).toHaveAttribute('data-test', 'SelectDisplay');
    });
  });

  describe('prop: renderValue', () => {
    it('should use the prop to render the value', () => {
      const formatDisplay = x => `0b${x.value.toString(2)}`;
      const { getByRole } = renderWithTheme(
        <Select
          formatDisplay={formatDisplay}
          options={[{ value: 2, label: '2' }]}
        />
      );
      expect(getByRole('button')).toHaveTextContent('0b10');
    });
  });

  describe('prop: open (controlled)', () => {
    // TODO add more tests
    it('should be open when initially true', () => {
      const { getByRole } = renderWithTheme(
        <Select open value='' options={options} />
      );
      expect(getByRole('listbox')).toBeInTheDocument();
    });
    it('open only with the left mouse button click', () => {
      // Right/middle mouse click shouldn't open the Select
      const { getByRole, queryByRole } = renderWithTheme(
        <Select value={10} options={options} />
      );
      const trigger = getByRole('button');
      // If clicked by the right/middle mouse button, no options list should be opened
      fireEvent.mouseDown(trigger, { button: 1 });
      expect(queryByRole('listbox')).not.toBeInTheDocument();
      fireEvent.mouseDown(trigger, { button: 2 });
      expect(queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('prop: inputRef', () => {
    it('should be able to return the input node via a ref object', () => {
      const ref = React.createRef();
      renderWithTheme(<Select inputRef={ref} value='' />);
      expect(ref.current.node).toHaveProperty('tagName', 'INPUT');
    });

    it('should be able focus the trigger imperatively', () => {
      const ref = React.createRef();
      const { getByRole } = renderWithTheme(<Select inputRef={ref} value='' />);
      ref.current.focus();
      expect(getByRole('button')).toHaveFocus();
    });
  });
  describe('prop: name', () => {
    it('should have no id when name is not provided', () => {
      const { getByRole } = renderWithTheme(<Select value='' />);
      expect(getByRole('button')).not.toHaveAttribute('id');
    });
    it('should have select-`name` id when name is provided', () => {
      const { getByRole } = renderWithTheme(<Select name='foo' value='' />);
      expect(getByRole('button')).toHaveAttribute(
        'id',
        'react95-component-select-foo'
      );
    });
  });
  describe('prop: native', () => {
    it('renders a <select />', () => {
      const { container } = renderWithTheme(<Select native />);
      expect(container.querySelector('select')).toBeInTheDocument();
    });
    it('can be labelled with a <label />', () => {
      const { getByLabelText } = renderWithTheme(
        <>
          <label htmlFor='select'>A select</label>
          <Select id='select' native />
        </>
      );
      expect(getByLabelText('A select')).toHaveProperty('tagName', 'SELECT');
    });
  });
});
