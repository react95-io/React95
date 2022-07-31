import React from 'react';

import { renderWithTheme } from '../../test/utils';

import { Handle } from './Handle';

describe('<Handle />', () => {
  it('should render bar', () => {
    const { container } = renderWithTheme(<Handle />);
    const barEl = container.firstChild;

    expect(barEl).toBeInTheDocument();
  });

  it('should handle custom style', () => {
    const { container } = renderWithTheme(
      <Handle style={{ backgroundColor: 'papayawhip' }} />
    );
    const barEl = container.firstChild;

    expect(barEl).toHaveAttribute('style', 'background-color: papayawhip;');
  });

  it('should handle custom props', () => {
    const customProps = { title: 'potatoe' };
    const { container } = renderWithTheme(<Handle {...customProps} />);
    const barEl = container.firstChild;

    expect(barEl).toHaveAttribute('title', 'potatoe');
  });

  describe('prop: size', () => {
    it('should set proper size', () => {
      const { container } = renderWithTheme(<Handle size='85%' />);
      const barEl = container.firstChild;

      expect(barEl).toHaveStyleRule('height', '85%');
    });

    it('when passed a number, sets size in px', () => {
      const { container } = renderWithTheme(<Handle size={25} />);
      const barEl = container.firstChild;

      expect(barEl).toHaveStyleRule('height', '25px');
    });
  });
});
