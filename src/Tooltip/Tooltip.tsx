import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';

import { shadow } from '../common';
import { isReactFocusEvent, isReactMouseEvent } from '../common/utils/events';
import { CommonStyledProps } from '../types';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

type TooltipProps = {
  children: React.ReactNode;
  className?: string;
  disableFocusListener?: boolean;
  disableMouseListener?: boolean;
  enterDelay?: number;
  leaveDelay?: number;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  onClose?: (
    event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => void;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onOpen?: (
    event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => void;
  style?: React.CSSProperties;
  text: string;
  position?: TooltipPosition;
} & Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  'onBlur' | 'onClose' | 'onFocus' | 'onMouseEnter' | 'onMouseLeave' | 'onOpen'
> &
  CommonStyledProps;

const positioningStyles: Record<TooltipPosition, string> = {
  top: `top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,
  bottom: `bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,
  left: `left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,
  right: `right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`
};

const Tip = styled.span<{ position: TooltipPosition; show: boolean }>`
  position: absolute;

  z-index: 1;
  display: ${props => (props.show ? 'block' : 'none')};
  padding: 4px;
  border: 2px solid ${({ theme }) => theme.borderDarkest};
  background: ${({ theme }) => theme.tooltip};
  box-shadow: ${shadow};
  text-align: center;
  font-size: 1rem;
  ${props => positioningStyles[props.position]}
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`;

const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(function Tooltip(
  {
    className,
    children,
    disableFocusListener = false,
    disableMouseListener = false,
    enterDelay = 1000,
    leaveDelay = 0,
    onBlur,
    onClose,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onOpen,
    style,
    text,
    position = 'top',
    ...otherProps
  },
  ref
) {
  const [show, setShow] = useState(false);
  const [openTimer, setOpenTimer] = useState<number>();
  const [closeTimer, setCloseTimer] = useState<number>();

  const isUsingFocus = !disableFocusListener;
  const isUsingMouse = !disableMouseListener;

  const handleOpen = (
    event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    window.clearTimeout(openTimer);
    window.clearTimeout(closeTimer);

    const timer = window.setTimeout(() => {
      setShow(true);

      onOpen?.(event);
    }, enterDelay);

    setOpenTimer(timer);
  };

  const handleEnter = (
    event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    event.persist();

    if (isReactFocusEvent(event)) {
      onFocus?.(event);
    } else if (isReactMouseEvent(event)) {
      onMouseEnter?.(event);
    }

    handleOpen(event);
  };

  const handleClose = (
    event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    window.clearTimeout(openTimer);
    window.clearTimeout(closeTimer);

    const timer = window.setTimeout(() => {
      setShow(false);

      onClose?.(event);
    }, leaveDelay);

    setCloseTimer(timer);
  };

  const handleLeave = (
    event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    event.persist();

    if (isReactFocusEvent(event)) {
      onBlur?.(event);
    } else if (isReactMouseEvent(event)) {
      onMouseLeave?.(event);
    }

    handleClose(event);
  };

  // set callbacks for onBlur and onFocus, unless disableFocusListener is true
  const blurCb = isUsingFocus ? handleLeave : undefined;
  const focusCb = isUsingFocus ? handleEnter : undefined;

  // set callbacks for onMouseEnter and onMouseLeave, unless disableMouseListener is true
  const mouseEnterCb = isUsingMouse ? handleEnter : undefined;
  const mouseLeaveCb = isUsingMouse ? handleLeave : undefined;

  // set the wrapper's tabIndex for focus events, unless disableFocusListener is true
  const tabIndex = isUsingFocus ? 0 : undefined;

  return (
    <Wrapper
      data-testid='tooltip-wrapper'
      onBlur={blurCb}
      onFocus={focusCb}
      onMouseEnter={mouseEnterCb}
      onMouseLeave={mouseLeaveCb}
      tabIndex={tabIndex}
    >
      <Tip
        className={className}
        data-testid='tooltip'
        position={position}
        ref={ref}
        show={show}
        style={style}
        {...otherProps}
      >
        {text}
      </Tip>
      {children}
    </Wrapper>
  );
});

export { Tooltip, TooltipProps };
