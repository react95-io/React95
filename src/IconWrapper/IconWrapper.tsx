import React from 'react';
import styled from 'styled-components';
import { getDisabledFilterId } from '../common/ThemeProvider';
import { CommonStyledProps } from '../types';

type IconWrapperProps = {
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  CommonStyledProps;

const IconWrapper = styled.div<IconWrapperProps>`
  ${({ theme, disabled }) => `
  display: grid;
  filter: ${
    disabled ? `contrast(2) url(#${getDisabledFilterId(theme)})` : 'none'
  };
`}
`;

IconWrapper.displayName = 'IconWrapper';

export { IconWrapper, IconWrapperProps };
