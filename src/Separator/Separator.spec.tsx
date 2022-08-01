import React from 'react';

import { renderWithTheme } from '../../test/utils';

import { Separator } from './Separator';

describe('<Separator />', () => {
  it('should render Separator', () => {
    const { container } = renderWithTheme(<Separator />);
    const separator = container.firstElementChild;

    expect(separator).toBeInTheDocument();
  });

  describe('prop: size', () => {
    it('defaults to 100%', () => {
      const { container } = renderWithTheme(<Separator />);
      const separator = container.firstElementChild;
      expect(separator).toHaveStyleRule('width', '100%');
    });
    it('sets size passed correctly', () => {
      const size = '53px';
      const { container } = renderWithTheme(<Separator size={size} />);
      const separator = container.firstElementChild;

      expect(separator).toHaveStyleRule('width', size);
    });
  });

  describe('prop: orientation', () => {
    it('renders horizontal line by default', () => {
      const size = '53px';
      const { container } = renderWithTheme(<Separator size={size} />);
      const separator = container.firstElementChild;

      expect(separator).toHaveStyleRule('width', size);
    });

    it('renders vertical line when orientation="vertical"', () => {
      const size = '53px';
      const { container } = renderWithTheme(
        <Separator orientation='vertical' size={size} />
      );
      const separator = container.firstElementChild;

      expect(separator).toHaveStyleRule('height', size);
    });
  });

  describe('prop: size', () => {
    it('should set proper size', () => {
      const { container } = renderWithTheme(<Separator size='85%' />);
      const separator = container.firstElementChild;

      expect(separator).toHaveStyleRule('width', '85%');
    });

    it('when passed a number, sets size in px', () => {
      const { container } = renderWithTheme(<Separator size={25} />);
      const separator = container.firstElementChild;

      expect(separator).toHaveStyleRule('width', '25px');
    });

    it('should set height when vertical', () => {
      const { container } = renderWithTheme(
        <Separator size={25} orientation='vertical' />
      );
      const separator = container.firstElementChild;

      expect(separator).toHaveStyleRule('height', '25px');
    });
  });
});
