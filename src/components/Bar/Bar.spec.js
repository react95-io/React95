import React from 'react';
import { renderWithTheme } from '../../../test/utils';

import Bar from './Bar';

describe('<Bar />', () => {
  it('should render bar', () => {
    const { container } = renderWithTheme(<Bar />);
    const barEl = container.firstChild;

    expect(barEl).toBeInTheDocument();
  });

  it('should handle custom style', () => {
    const { container } = renderWithTheme(
      <Bar style={{ backgroundColor: 'papayawhip' }} />
    );
    const barEl = container.firstChild;

    expect(barEl).toHaveAttribute('style', 'background-color: papayawhip;');
  });

  it('should handle custom props', () => {
    const customProps = { title: 'potatoe' };
    const { container } = renderWithTheme(<Bar {...customProps} />);
    const barEl = container.firstChild;

    expect(barEl).toHaveAttribute('title', 'potatoe');
  });

  describe('prop: size', () => {
    it('should set proper size', () => {
      const { container } = renderWithTheme(<Bar size='85%' />);
      const avatarEl = container.firstChild;

      expect(avatarEl).toHaveStyleRule('height', '85%');
    });

    it('when passed a number, sets size in px', () => {
      const { container } = renderWithTheme(<Bar size={25} />);
      const avatarEl = container.firstChild;

      expect(avatarEl).toHaveStyleRule('height', '25px');
    });
  });
});
