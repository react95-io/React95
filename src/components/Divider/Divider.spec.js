import React from 'react';

import { renderWithTheme } from '../../../test/utils';

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

  describe('prop: vertical', () => {
    it('renders vertical line', () => {
      const size = '53px';
      const { container } = renderWithTheme(<Divider vertical size={size} />);
      const divider = container.firstChild;

      expect(divider).toHaveStyleRule('height', size);
    });
  });
});
