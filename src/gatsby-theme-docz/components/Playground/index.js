import React from 'react';
import { Playground as OriginalPlayground } from 'gatsby-theme-docz/src/components/Playground/index';

/* eslint-disable import/prefer-default-export */
export const Playground = props => {
  return (
    <div style={{ padding: '2rem', background: 'teal', borderRadius: 2 }}>
      <OriginalPlayground {...props} />
    </div>
  );
};
