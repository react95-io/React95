import React from 'react';

import { renderWithTheme } from '../../test/utils';

import { MenuList } from './MenuList';

describe('<MenuList />', () => {
  it('renders MenuList', () => {
    const { container } = renderWithTheme(<MenuList />);
    const menuList = container.firstElementChild;

    expect(menuList).toBeInTheDocument();
  });
  it('is an ul', () => {
    const { container } = renderWithTheme(<MenuList />);
    const menuList = container.firstElementChild;

    expect(menuList?.tagName).toBe('UL');
  });
  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <MenuList>
        <span>{textContent}</span>
      </MenuList>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });

  describe('prop: inline', () => {
    it('renders inline', () => {
      const { container } = renderWithTheme(<MenuList inline />);
      const menuList = container.firstElementChild;

      expect(menuList).toHaveStyleRule('display', 'inline-flex');
      expect(menuList).toHaveStyleRule('align-items', 'center');
    });
  });
  describe('prop: fullWidth', () => {
    it('has 100% width', () => {
      const { container } = renderWithTheme(<MenuList fullWidth />);
      const menuList = container.firstElementChild;

      expect(menuList).toHaveStyleRule('width', '100%');
    });
  });
});
