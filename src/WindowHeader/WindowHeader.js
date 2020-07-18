import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import { StyledButton } from '../Button/Button';

const SlyledWindowHeader = styled.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({ theme }) => theme.material};
  &[data-active='false'] {
    background: ${({ theme }) => theme.headerNotActiveBackground};
    color: ${({ theme }) => theme.headerNotActiveText};
  }
  &[data-active='true'] {
    background: ${({ theme }) => theme.headerBackground};
    color: ${({ theme }) => theme.headerText};
  }
  ${StyledButton} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`;
// TODO - should we add some aria label indicating if window is currently active?
const WindowHeader = React.forwardRef(function WindowHeader(props, ref) {
  const { active, children, ...otherProps } = props;

  return (
    <SlyledWindowHeader
      data-active={active.toString()}
      ref={ref}
      {...otherProps}
    >
      {children}
    </SlyledWindowHeader>
  );
});

WindowHeader.defaultProps = {
  children: null,
  active: true
};

WindowHeader.propTypes = {
  children: propTypes.node,
  active: propTypes.bool
};

export default WindowHeader;
