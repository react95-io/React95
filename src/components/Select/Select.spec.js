import React from 'react';
import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
  wait
} from '@testing-library/react';

import { StyledFlatSelectWrapper, StyledSelectWrapper } from './Select.styles';

import Select, {
  getDefaultValue,
  getDisplayLabel,
  getWrapper,
  isEventOfType,
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

const nodeCountMenuOpen = 3;
const nodeCountMenuClosed = 2;

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

  describe('isEventOfType', () => {
    it('returns true if object.type matches the given string', () => {
      const testEvt = { type: 'blur' };
      expect(isEventOfType(testEvt, 'blur')).toBeTruthy();
    });

    it('returns false if object.type does not match the given string', () => {
      const testEvt = { type: 'blur' };
      expect(isEventOfType(testEvt, 'focus')).toBeFalsy();
    });

    it('returns false if first arg is undefined', () => {
      expect(isEventOfType(undefined, 'blur')).toBeFalsy();
    });

    it('returns false if second arg is undefined', () => {
      const testEvt = { type: 'blur' };
      expect(isEventOfType(testEvt)).toBeFalsy();
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

    it('NO menu element when menuOpen is falsy', () => {
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
  });

  describe('event callbacks', () => {
    it('handle onFocus events, calling onOpen, passing event to both', async done => {
      const props = getProps({
        onFocus: jest.fn(),
        onOpen: jest.fn(),
        options: testOptions
      });

      let focused = false;
      let opened = false;

      props.onOpen.mockImplementation(evt => {
        expect(evt.type).toEqual('focus');
        expect(props.onOpen).toHaveBeenCalled();
        opened = true;
        if (opened && focused) {
          done();
        }
      });

      props.onFocus.mockImplementation(evt => {
        expect(evt.type).toEqual('focus');
        expect(props.onFocus).toHaveBeenCalled();
        focused = true;
        if (focused && opened) {
          done();
        }
      });

      const { getByTestId } = render(renderSelect(props));

      const el = getByTestId('select');

      fireEvent.focus(el);
    });

    it('handle onBlur events, calling onClose, passing event to both', async done => {
      const props = getProps({
        onBlur: jest.fn(),
        onClose: jest.fn(),
        options: testOptions
      });

      let blurred = false;
      let closed = false;

      props.onClose.mockImplementation(evt => {
        expect(evt.type).toEqual('blur');
        expect(props.onClose).toHaveBeenCalled();
        closed = true;
        if (closed && blurred) {
          done();
        }
      });

      props.onBlur.mockImplementation(evt => {
        expect(evt.type).toEqual('blur');
        expect(props.onBlur).toHaveBeenCalled();
        blurred = true;
        if (closed && blurred) {
          done();
        }
      });

      const { getByTestId } = render(renderSelect(props));

      const el = getByTestId('select');

      fireEvent.focus(el);
      await wait(() => getByTestId('selectMenu'));

      fireEvent.blur(el);
    });

    it('call onChange prop with event, selected option, and current value of the select', async done => {
      const props = getProps({
        onChange: jest.fn(),
        options: testOptions
      });

      props.onChange.mockImplementation((evt, opt, value) => {
        expect(evt.type).toEqual('mousedown');
        expect(opt).toEqual(testOptions[1]);
        expect(value).toEqual(testOptions[0].value);
        done();
      });

      const { getByTestId } = render(renderSelect(props));

      const el = getByTestId('select');

      fireEvent.focus(el);
      await wait(() => getByTestId('selectMenu'));

      const item = getByTestId('selectMenuItem1');

      waitForElementToBeRemoved(() => {
        return getByTestId('selectMenu');
      });

      fireEvent.mouseDown(item);
    });
  });
});
