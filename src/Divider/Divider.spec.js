import React from 'react';

import { renderWithTheme } from '../../test/utils';

import Divider from './Divider';

describe('<Divider />', () => {
  it('should render Divider', () => {
    const { container } = renderWithTheme(<Divider />);
    const divider = container.firstChild;

    expect(divider).toBeInTheDocument();
  });

  describe('prop: size', () => {
    it('defaults to 100%', () => {
      const { container } = renderWithTheme(<Divider />);
      const divider = container.firstChild;
      expect(divider).toHaveStyleRule('width', '100%');
    });
    it('sets size passed correctly', () => {
      const size = '53px';
      const { container } = renderWithTheme(<Divider size={size} />);
      const divider = container.firstChild;

      expect(divider).toHaveStyleRule('width', size);
    });
  });

  describe('prop: orientation', () => {
    it('renders horizontal line by default', () => {
      const size = '53px';
      const { container } = renderWithTheme(<Divider size={size} />);
      const divider = container.firstChild;

      expect(divider).toHaveStyleRule('width', size);
    });

    it('renders vertical line when orientation="vertical"', () => {
      const size = '53px';
      const { container } = renderWithTheme(
        <Divider orientation='vertical' size={size} />
      );
      const divider = container.firstChild;

      expect(divider).toHaveStyleRule('height', size);
    });
  });
  describe('prop: size', () => {
    it('should set proper size', () => {
      const { container } = renderWithTheme(<Divider size='85%' />);
      const avatarEl = container.firstChild;

      expect(avatarEl).toHaveStyleRule('width', '85%');
    });

    it('when passed a number, sets size in px', () => {
      const { container } = renderWithTheme(<Divider size={25} />);
      const avatarEl = container.firstChild;

      expect(avatarEl).toHaveStyleRule('width', '25px');
    });

    it('should set height when vertical', () => {
      const { container } = renderWithTheme(
        <Divider size={25} orientation='vertical' />
      );
      const avatarEl = container.firstChild;

      expect(avatarEl).toHaveStyleRule('height', '25px');
    });
  });
});
