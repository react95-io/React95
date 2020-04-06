import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import getTestId from '../common/getTestId';
import { shadow } from '../common';

const Tip = styled.span`
  position: absolute;
  bottom: -4px;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, 100%);
  display: ${props => (props.show ? 'block' : 'none')};
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.borderDarkest};
  background: ${({ theme }) => theme.tooltip};
  box-shadow: ${shadow};
  text-align: center;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`;

const Tooltip = React.forwardRef(function Tooltip(props, ref) {
  const {
    children,
    className,
    disableFocusListener,
    disableMouseListener,
    enterDelay,
    leaveDelay,
    onBlur,
    onClose,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onOpen,
    style,
    testId,
    text,
    ...otherProps
  } = props;

  const [show, setShow] = useState(false);
  const [openTimer, setOpenTimer] = useState(null);
  const [closeTimer, setCloseTimer] = useState(null);

  const isUsingFocus = !disableFocusListener;
  const isUsingMouse = !disableMouseListener;

  const handleOpen = evt => {
    clearTimeout(openTimer);
    clearTimeout(closeTimer);

    const timer = setTimeout(() => {
      setShow(true);

      if (onOpen) {
        onOpen(evt);
      }
    }, enterDelay);

    setOpenTimer(timer);
  };

  const handleEnter = evt => {
    evt.persist();

    if (evt.type === 'focus' && onFocus) {
      onFocus(evt);
    } else if (evt.type === 'mouseenter' && onMouseEnter) {
      onMouseEnter(evt);
    }

    handleOpen(evt);
  };

  const handleClose = evt => {
    clearTimeout(openTimer);
    clearTimeout(closeTimer);

    const timer = setTimeout(() => {
      setShow(false);

      if (onClose) {
        onClose(evt);
      }
    }, leaveDelay);

    setCloseTimer(timer);
  };

  const handleLeave = evt => {
    evt.persist();

    if (evt.type === 'blur' && onBlur) {
      onBlur(evt);
    } else if (evt.type === 'mouseleave' && onMouseLeave) {
      onMouseLeave(evt);
    }

    handleClose(evt);
  };

  // set callbacks for onBlur and onFocus, unless disableFocusListener is true
  const blurCb = isUsingFocus ? handleLeave : undefined;
  const focusCb = isUsingFocus ? handleEnter : undefined;

  // set callbacks for onMouseEnter and onMouseLeave, unless disableMouseListener is true
  const mouseEnterCb = isUsingMouse ? handleEnter : undefined;
  const mouseLeaveCb = isUsingMouse ? handleLeave : undefined;

  // set the wrapper's tabIndex for focus events, unless disableFocusListener is true
  const tabIndex = isUsingFocus ? '0' : undefined;

  return (
    <Wrapper
      data-testid={getTestId(testId, 'Wrapper')}
      onBlur={blurCb}
      onFocus={focusCb}
      onMouseEnter={mouseEnterCb}
      onMouseLeave={mouseLeaveCb}
      tabIndex={tabIndex}
    >
      <Tip
        className={className}
        data-testid={testId}
        show={show}
        style={style}
        ref={ref}
        {...otherProps}
      >
        {text}
      </Tip>
      {children}
    </Wrapper>
  );
});

Tooltip.defaultProps = {
  className: '',
  disableFocusListener: false,
  disableMouseListener: false,
  enterDelay: 1000,
  leaveDelay: 0,
  onBlur: undefined,
  onClose: undefined,
  onFocus: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
  onOpen: undefined,
  style: {},
  testId: undefined
};

Tooltip.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  disableFocusListener: propTypes.bool,
  disableMouseListener: propTypes.bool,
  enterDelay: propTypes.number,
  leaveDelay: propTypes.number,
  onBlur: propTypes.func,
  onClose: propTypes.func,
  onFocus: propTypes.func,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  onOpen: propTypes.func,
  style: propTypes.shape({}),
  testId: propTypes.string,
  text: propTypes.string.isRequired
};

export default Tooltip;
