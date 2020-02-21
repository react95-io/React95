import React from 'react';
import { fireEvent, render, waitForDomChange } from '@testing-library/react';

import Tooltip from './Tooltip';

const getProps = (props = {}) => ({
  className: props.className,
  disableFocusListener: props.disableFocusListener,
  disableMouseListener: props.disableMouseListener,
  enterDelay: props.enterDelay !== undefined ? props.enterDelay : 0,
  leaveDelay: props.leaveDelay !== undefined ? props.leaveDelay : 0,
  onBlur: jest.fn(),
  onClose: jest.fn(),
  onFocus: jest.fn(),
  onMouseEnter: jest.fn(),
  onMouseLeave: jest.fn(),
  onOpen: jest.fn(),
  style: props.style,
  testId: 'tip',
  text: 'I am the tooltip'
});

const renderTooltip = props => (
  <Tooltip {...props}>
    <div>Kid</div>
  </Tooltip>
);

describe('<Tooltip />', () => {
  describe('render', () => {
    it('should render wrapper element', () => {
      const { getByTestId } = render(renderTooltip(getProps()));

      const tipWrapper = getByTestId('tipWrapper');

      expect(tipWrapper).toBeInTheDocument();
      expect(tipWrapper.tagName).toBe('DIV');
    });

    it('should render inner tooltip', () => {
      const { getByTestId } = render(renderTooltip(getProps()));

      const tip = getByTestId('tip');

      expect(tip).toBeInTheDocument();
      expect(tip.tagName).toBe('SPAN');
    });

    it('should render children', () => {
      const { getByText } = render(renderTooltip(getProps()));

      const children = getByText('Kid');

      expect(children).toBeInTheDocument();
      expect(children.tagName).toBe('DIV');
    });

    it('should render tooltip with provided className', () => {
      const { getByTestId } = render(
        renderTooltip(
          getProps({
            className: 'my-tip'
          })
        )
      );

      const tip = getByTestId('tip');

      expect(tip.className.includes('my-tip')).toBeTruthy();
    });
  });

  describe('transition delays', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should respect enterDelay', async () => {
      const { getByTestId } = render(
        renderTooltip(
          getProps({
            enterDelay: 5
          })
        )
      );

      const tipWrapper = getByTestId('tipWrapper');

      fireEvent.focus(tipWrapper);

      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 5);
    });

    it('should respect leaveDelay', async () => {
      const { getByTestId } = render(
        renderTooltip(
          getProps({
            leaveDelay: 6
          })
        )
      );

      const tipWrapper = getByTestId('tipWrapper');

      fireEvent.blur(tipWrapper);

      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 6);
    });
  });

  describe('event callbacks', () => {
    it('should handle onFocus events, and call onOpen', async () => {
      const props = getProps();

      const { getByTestId } = render(renderTooltip(props));

      const tip = getByTestId('tip');
      const tipWrapper = getByTestId('tipWrapper');

      fireEvent.focus(tipWrapper);

      await waitForDomChange({ container: tip });

      expect(props.onFocus).toHaveBeenCalled();
      expect(props.onOpen).toHaveBeenCalled();
    });

    it('should handle onBlur events, and call onClose', async () => {
      const props = getProps();

      const { getByTestId } = render(renderTooltip(props));

      const tip = getByTestId('tip');
      const tipWrapper = getByTestId('tipWrapper');

      fireEvent.focus(tipWrapper);
      await waitForDomChange({ container: tip });
      fireEvent.blur(tipWrapper);
      await waitForDomChange({ container: tip });

      expect(props.onBlur).toHaveBeenCalled();
      expect(props.onClose).toHaveBeenCalled();
    });

    it('should handle onMouseEnter events, and call onOpen', async () => {
      const props = getProps();

      const { getByTestId } = render(renderTooltip(props));

      const tip = getByTestId('tip');
      const tipWrapper = getByTestId('tipWrapper');

      fireEvent.mouseEnter(tipWrapper);
      await waitForDomChange({ container: tip });

      expect(props.onMouseEnter).toHaveBeenCalled();
      expect(props.onOpen).toHaveBeenCalled();
    });

    it('should handle onMouseLeave events, and call onClose', async () => {
      const props = getProps();

      const { getByTestId } = render(renderTooltip(props));

      const tip = getByTestId('tip');
      const tipWrapper = getByTestId('tipWrapper');

      fireEvent.mouseEnter(tipWrapper);
      await waitForDomChange({ container: tip });
      fireEvent.mouseLeave(tipWrapper);
      await waitForDomChange({ container: tip });

      expect(props.onMouseLeave).toHaveBeenCalled();
      expect(props.onClose).toHaveBeenCalled();
    });

    it('should not handle onFocus events when disableFocusListener is true', () => {
      const props = getProps({ disableFocusListener: true });

      const { getByTestId } = render(renderTooltip(props));

      const tipWrapper = getByTestId('tipWrapper');

      fireEvent.focus(tipWrapper);

      expect(props.onFocus).not.toHaveBeenCalled();
    });

    it('should not handle onBlur events when disableFocusListener is true', () => {
      const props = getProps({ disableFocusListener: true });

      const { getByTestId } = render(renderTooltip(props));

      const tipWrapper = getByTestId('tipWrapper');

      fireEvent.blur(tipWrapper);

      expect(props.onBlur).not.toHaveBeenCalled();
    });

    it('should not handle onMouseEnter events when disableMouseListener is true', () => {
      const props = getProps({ disableMouseListener: true });

      const { getByTestId } = render(renderTooltip(props));

      const tipWrapper = getByTestId('tipWrapper');

      fireEvent.mouseEnter(tipWrapper);

      expect(props.onMouseEnter).not.toHaveBeenCalled();
    });

    it('should not handle onMouseLeave events when disableMouseListener is true', () => {
      const props = getProps({ disableMouseListener: true });

      const { getByTestId } = render(renderTooltip(props));

      const tipWrapper = getByTestId('tipWrapper');

      fireEvent.mouseLeave(tipWrapper);

      expect(props.onMouseLeave).not.toHaveBeenCalled();
    });
  });
});
