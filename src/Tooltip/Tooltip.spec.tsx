import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import { Tooltip, TooltipProps } from './Tooltip';

const getProps = (
  props: Partial<TooltipProps> = {}
): Omit<TooltipProps, 'children'> => ({
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
  text: 'I am the tooltip'
});

const renderTooltip = (props: Omit<TooltipProps, 'children'>) => (
  <Tooltip {...props}>
    <div>Kid</div>
  </Tooltip>
);

describe('<Tooltip />', () => {
  describe('render', () => {
    it('should render wrapper element', () => {
      const { getByTestId } = render(renderTooltip(getProps()));

      const wrapper = getByTestId('tooltip-wrapper');

      expect(wrapper).toBeInTheDocument();
      expect(wrapper.tagName).toBe('DIV');
    });

    it('should render inner tooltip', () => {
      const { getByTestId } = render(renderTooltip(getProps()));

      const tip = getByTestId('tooltip');

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

      const tip = getByTestId('tooltip');

      expect(tip.className.includes('my-tip')).toBeTruthy();
    });
  });

  describe('transition delays', () => {
    beforeEach(() => {
      jest.useFakeTimers({
        legacyFakeTimers: true
      });
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

      const wrapper = getByTestId('tooltip-wrapper');

      fireEvent.focus(wrapper);

      expect(window.setTimeout).toHaveBeenCalledWith(expect.any(Function), 5);
    });

    it('should respect leaveDelay', async () => {
      const { getByTestId } = render(
        renderTooltip(
          getProps({
            leaveDelay: 6
          })
        )
      );

      const wrapper = getByTestId('tooltip-wrapper');

      fireEvent.blur(wrapper);

      expect(window.setTimeout).toHaveBeenCalledWith(expect.any(Function), 6);
    });
  });

  describe('event callbacks', () => {
    it('should handle onFocus events, and call onOpen', async () => {
      const props = getProps();

      const { getByTestId } = render(renderTooltip(props));

      const wrapper = getByTestId('tooltip-wrapper');

      fireEvent.focus(wrapper);
      await waitFor(() => {
        expect(props.onFocus).toHaveBeenCalled();
      });
      await waitFor(() => {
        expect(props.onOpen).toHaveBeenCalled();
      });
    });

    it('should handle onBlur events, and call onClose', async () => {
      const props = getProps();

      const { getByTestId } = render(renderTooltip(props));

      const wrapper = getByTestId('tooltip-wrapper');

      fireEvent.focus(wrapper);
      await waitFor(() => {
        expect(props.onFocus).toHaveBeenCalled();
      });

      fireEvent.blur(wrapper);
      await waitFor(() => {
        expect(props.onBlur).toHaveBeenCalled();
      });
      await waitFor(() => {
        expect(props.onClose).toHaveBeenCalled();
      });
    });

    it('should handle onMouseEnter events, and call onOpen', async () => {
      const props = getProps();

      const { getByTestId } = render(renderTooltip(props));

      const wrapper = getByTestId('tooltip-wrapper');

      fireEvent.mouseEnter(wrapper);

      await waitFor(() => {
        expect(props.onMouseEnter).toHaveBeenCalled();
      });
      await waitFor(() => {
        expect(props.onOpen).toHaveBeenCalled();
      });
    });

    it('should handle onMouseLeave events, and call onClose', async () => {
      const props = getProps();

      const { getByTestId } = render(renderTooltip(props));

      const wrapper = getByTestId('tooltip-wrapper');

      fireEvent.mouseEnter(wrapper);
      await waitFor(() => {
        expect(props.onMouseEnter).toHaveBeenCalled();
      });

      fireEvent.mouseLeave(wrapper);
      await waitFor(() => {
        expect(props.onMouseLeave).toHaveBeenCalled();
      });
      await waitFor(() => {
        expect(props.onClose).toHaveBeenCalled();
      });
    });

    it('should not handle onFocus events when disableFocusListener is true', () => {
      const props = getProps({ disableFocusListener: true });

      const { getByTestId } = render(renderTooltip(props));

      const wrapper = getByTestId('tooltip-wrapper');

      fireEvent.focus(wrapper);

      expect(props.onFocus).not.toHaveBeenCalled();
    });

    it('should not handle onBlur events when disableFocusListener is true', () => {
      const props = getProps({ disableFocusListener: true });

      const { getByTestId } = render(renderTooltip(props));

      const wrapper = getByTestId('tooltip-wrapper');

      fireEvent.blur(wrapper);

      expect(props.onBlur).not.toHaveBeenCalled();
    });

    it('should not handle onMouseEnter events when disableMouseListener is true', () => {
      const props = getProps({ disableMouseListener: true });

      const { getByTestId } = render(renderTooltip(props));

      const wrapper = getByTestId('tooltip-wrapper');

      fireEvent.mouseEnter(wrapper);

      expect(props.onMouseEnter).not.toHaveBeenCalled();
    });

    it('should not handle onMouseLeave events when disableMouseListener is true', () => {
      const props = getProps({ disableMouseListener: true });

      const { getByTestId } = render(renderTooltip(props));

      const wrapper = getByTestId('tooltip-wrapper');

      fireEvent.mouseLeave(wrapper);

      expect(props.onMouseLeave).not.toHaveBeenCalled();
    });
  });
});
