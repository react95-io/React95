import React from 'react';
import styled from 'styled-components';
import { Playground as OriginalPlayground } from 'gatsby-theme-docz/src/components/Playground/index';

const Wrapper = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.desktopBackground};
  border-radius: 2px;
`;

/* eslint-disable import/prefer-default-export */
export const Playground = props => {
  return (
    <Wrapper>
      <OriginalPlayground {...props} />
    </Wrapper>
  );
};
