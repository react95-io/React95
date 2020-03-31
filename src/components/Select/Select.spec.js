import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';

import { StyledFlatSelectWrapper, StyledSelectWrapper } from './Select.styles';

import Select, {
  getDefaultValue,
  getDisplayLabel,
  getWrapper,
  isNumber,
  isObject,
  isString,
  isStringOrNumber
} from './Select';

const getProps = (props = {}) => ({
  className: props.className,
  defaultValue: props.defaultValue,
  disabled: props.disabled,
  formatLabel: props.formatLabel,
  menuMaxHeight: props.menuMaxHeight,
  onBlur: props.onBlur,
  onChange: props.onChange,
  onClose: props.onClose,
  onFocus: props.onFocus,
  onOpen: props.onOpen,
  options: props.options || [],
  menuOpen: props.menuOpen,
  native: props.native,
  shadow: props.shadow,
  style: props.style,
  testId: 'select',
  value: props.value,
  variant: props.variant,
  width: props.width
});

const renderSelect = (props = getProps()) => <Select {...props} />;

const testOptions = [
  {
    label: 'Alpaca',
    value: 'alpaca'
  },
  {
    label: 'Bear',
    value: 'bear'
  },
  {
    label: 'Cat',
    value: 'cat'
  }
];

const nodeCountMenuOpen = 4;
const nodeCountMenuClosed = 3;

describe('Select helper functions', () => {
  describe('getDefaultValue', () => {
    it('returns the given defaultValue', () => {
      expect(getDefaultValue('default')).toEqual('default');
    });

    it('returns the value of the first option, when no defaultValue is provided', () => {
      expect(getDefaultValue(undefined, [{ value: 'value' }])).toEqual('value');
    });

    it('returns undefined otherwise', () => {
      expect(getDefaultValue()).toEqual(undefined);
    });
  });

  describe('getDisplayLabel', () => {
    it('returns empty string if no selected option is provided', () => {
      expect(getDisplayLabel()).toEqual('');
    });

    it('returns label of given selected option, if no formatLabel function is provided', () => {
      expect(getDisplayLabel({ label: 'Label' })).toEqual('Label');
    });

    it('returns result of provided formatLabel function', () => {
      expect(getDisplayLabel({}, () => 'Custom')).toEqual('Custom');
    });
  });

  describe('getWrapper', () => {
    it('returns StyledSelectWrapper by default', () => {
      expect(getWrapper()).toEqual(StyledSelectWrapper);
    });

    it('returns StyledFlatSelectWrapper if provided variant is `flat`', () => {
      expect(getWrapper('flat')).toEqual(StyledFlatSelectWrapper);
    });
  });

  describe('isNumber', () => {
    it('returns true for numeric values', () => {
      const testVals = [1, -1, 1.2, Infinity];
      testVals.forEach(val => {
        expect(isNumber(val)).toBeTruthy();
      });
    });

    it('returns false for non-numeric values', () => {
      const testVals = ['1', false, {}, () => {}];
      testVals.forEach(val => {
        expect(isNumber(val)).toBeFalsy();
      });
    });
  });

  describe('isObject', () => {
    it('returns true for (non-array) object values', () => {
      const testVals = [{}, null, Object.create({})];
      testVals.forEach(val => {
        expect(isObject(val)).toBeTruthy();
      });
    });

    it('returns false for array and non-object values', () => {
      const testVals = ['1', false, [], 1];
      testVals.forEach(val => {
        expect(isObject(val)).toBeFalsy();
      });
    });
  });

  describe('isString', () => {
    it('returns true for string values', () => {
      const testVals = ['hi', '', String(), (1).toString()];
      testVals.forEach(val => {
        expect(isString(val)).toBeTruthy();
      });
    });

    it('returns false for non-string values', () => {
      const testVals = [false, [], 1, {}];
      testVals.forEach(val => {
        expect(isString(val)).toBeFalsy();
      });
    });
  });

  describe('isStringOrNumber', () => {
    it('returns true if isString returns true', () => {
      expect(isStringOrNumber('')).toBeTruthy();
    });

    it('returns true if isNumber returns true', () => {
      expect(isStringOrNumber(1)).toBeTruthy();
    });

    it('returns false if both isString and isNumber return false', () => {
      expect(isStringOrNumber({})).toBeFalsy();
    });
  });
});

describe('<Select />', () => {
  describe('renders', () => {
    it('as native select if native is true', () => {
      const { getByTestId } = render(renderSelect(getProps({ native: true })));

      const el = getByTestId('select');

      expect(el).toBeInTheDocument();
      expect(el.tagName).toBe('SELECT');
    });

    it('wrapper element', () => {
      const { getByTestId } = render(renderSelect(getProps()));

      const el = getByTestId('select');

      expect(el).toBeInTheDocument();
      expect(el.tagName).toBe('DIV');
    });

    it('flat wrapper element', () => {
      const { getByTestId } = render(
        renderSelect(
          getProps({
            variant: 'flat'
          })
        )
      );

      const el = getByTestId('select');

      expect(el).toBeInTheDocument();
      expect(el.tagName).toBe('DIV');
    });

    it('label content element', () => {
      const { getByTestId } = render(renderSelect(getProps()));

      const el = getByTestId('selectContent');

      expect(el).toBeInTheDocument();
      expect(el.tagName).toBe('DIV');
    });

    it('dropdown button element', () => {
      const { getByTestId } = render(renderSelect(getProps()));

      const el = getByTestId('selectButton');

      expect(el).toBeInTheDocument();
      expect(el.tagName).toBe('BUTTON');
    });

    it('dropdown button icon element', () => {
      const { getByTestId } = render(renderSelect(getProps()));

      const el = getByTestId('selectIcon');

      expect(el).toBeInTheDocument();
      expect(el.tagName).toBe('SPAN');
    });

    it('menu element when menuOpen is true', () => {
      const { container, getByTestId } = render(
        renderSelect(getProps({ menuOpen: true }))
      );

      const el = getByTestId('selectMenu');

      expect(el).toBeInTheDocument();
      expect(el.tagName).toBe('UL');
      expect(container.firstChild.childNodes.length).toEqual(nodeCountMenuOpen);
    });

    it('ZERO menu element when menuOpen is falsy', () => {
      const { container } = render(
        renderSelect(getProps({ options: testOptions }))
      );

      expect(container.firstChild.childNodes.length).toEqual(
        nodeCountMenuClosed
      );
    });

    it('menu item elements when menuOpen is true and has options.length', () => {
      const { getByTestId } = render(
        renderSelect(getProps({ menuOpen: true, options: testOptions }))
      );

      const el = getByTestId(`selectMenuItem${testOptions.length - 1}`);

      expect(el).toBeInTheDocument();
      expect(el.tagName).toBe('LI');
    });

    it('NO menu element when disabled', () => {
      const { container } = render(
        renderSelect(
          getProps({ disabled: true, menuOpen: true, options: testOptions })
        )
      );

      expect(container.firstChild.childNodes.length).toEqual(
        nodeCountMenuClosed
      );
    });

    it('with provided className', () => {
      const { getByTestId } = render(
        renderSelect(
          getProps({
            className: 'my-select'
          })
        )
      );

      const el = getByTestId('select');

      expect(el.className.includes('my-select')).toBeTruthy();
    });

    it('with provided defaultValue', () => {
      const { getByText } = render(
        renderSelect(
          getProps({
            defaultValue: testOptions[1].value,
            options: testOptions
          })
        )
      );

      const el = getByText(testOptions[1].label);

      expect(el).toBeInTheDocument();
    });

    it('as disabled', () => {
      const { getByTestId } = render(
        renderSelect(
          getProps({
            disabled: true
          })
        )
      );

      const el = getByTestId('select');

      expect(el.className.includes('is-disabled')).toBeTruthy();
    });

    it('with NO tab index if disabled', () => {
      const { getByTestId } = render(
        renderSelect(
          getProps({
            disabled: true
          })
        )
      );

      const el = getByTestId('select');

      expect(el.getAttribute('tabindex')).toEqual(null);
    });

    it('with tab index if NOT disabled', () => {
      const { getByTestId } = render(renderSelect(getProps()));

      const el = getByTestId('select');

      expect(el.getAttribute('tabindex')).toEqual('0');
    });

    it('label with provided formatLabel function', () => {
      const { getByText } = render(
        renderSelect(
          getProps({
            formatLabel: () => 'Custom label',
            options: testOptions
          })
        )
      );

      const el = getByText('Custom label');

      expect(el).toBeInTheDocument();
    });

    it('with provided value', () => {
      const { getByText } = render(
        renderSelect(
          getProps({
            options: testOptions,
            value: testOptions[2].value
          })
        )
      );

      const el = getByText(testOptions[2].label);

      expect(el).toBeInTheDocument();
    });

    it('with menu max height', () => {
      const { getByTestId } = render(
        renderSelect(
          getProps({
            menuMaxHeight: 220,
            menuOpen: true
          })
        )
      );

      const el = getByTestId('selectMenu');

      expect(
        el.getAttribute('style').includes('max-height: 220px')
      ).toBeTruthy();
    });
  });

  describe('event callbacks', () => {
    it('handle onFocus events, passing event to both', async done => {
      const props = getProps({
        onFocus: jest.fn(),
        onOpen: jest.fn(),
        options: testOptions
      });

      props.onFocus.mockImplementation(evt => {
        expect(evt.type).toEqual('focus');
        expect(props.onFocus).toHaveBeenCalled();
        done();
      });

      const { getByTestId } = render(renderSelect(props));

      const el = getByTestId('select');

      fireEvent.focus(el);
      await wait(() => getByTestId('selectMenu'));
    });

    it('call onOpen prop with event', async done => {
      const props = getProps({
        onOpen: jest.fn(),
        options: testOptions
      });

      props.onOpen.mockImplementation(evt => {
        expect(evt.type).toEqual('mousedown');
        done();
      });

      const { getByTestId } = render(renderSelect(props));

      const el = getByTestId('select');

      fireEvent.mouseDown(el, { button: 0 });

      await wait(() => getByTestId('selectMenu'));
    });
  });
});
