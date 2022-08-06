import React from 'react';

import { renderWithTheme, theme } from '../../test/utils';
import { SCALE } from '../common/constants';
import { blockSizes } from '../common/system';
import { MenuListItem } from './MenuListItem';

const expectedBlockSizes = {
  sm: `${blockSizes.sm * SCALE}px`,
  md: `${blockSizes.md * SCALE}px`,
  lg: `${blockSizes.lg * SCALE}px`
};

const defaultSize = 'lg';
describe('<MenuListItem />', () => {
  it('renders MenuListItem', () => {
    const { getByRole } = renderWithTheme(<MenuListItem />);
    const menuListItem = getByRole('menuitem');
    expect(menuListItem).toBeInTheDocument();
    expect(menuListItem).not.toHaveAttribute('aria-disabled');
  });
  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <MenuListItem>
        <span>{textContent}</span>
      </MenuListItem>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });
  it('should have a default role of menuitem', () => {
    const { getByRole } = renderWithTheme(<MenuListItem />);
    const menuListItem = getByRole('menuitem');
    expect(menuListItem).toHaveAttribute('role', 'menuitem');
  });

  it('should render with custom role', () => {
    const { getByRole } = renderWithTheme(<MenuListItem role='option' />);
    const menuListItem = getByRole('option');
    expect(menuListItem).toHaveAttribute('role', 'option');
  });

  //   it('should have a tabIndex of -1 by default', () => {
  //     const { getByRole } = renderWithTheme(<MenuListItem role='option' />);
  //     const menuListItem = getByRole('menuitem');
  //     expect(menuListItem).toHaveAttribute('tabIndex', '-1');
  //   });
  describe('prop: disabled', () => {
    it('should not trigger onClick callback', () => {
      const clickHandler = jest.fn();
      const { getByRole } = renderWithTheme(
        <MenuListItem disabled onClick={clickHandler} />
      );
      const menuListItem = getByRole('menuitem') as HTMLElement;
      menuListItem.click();
      expect(clickHandler).not.toBeCalled();
      expect(menuListItem).toHaveAttribute('aria-disabled', 'true');
    });
    it('renders with disabled styles ', () => {
      const { getByRole } = renderWithTheme(<MenuListItem disabled />);
      const menuListItem = getByRole('menuitem');
      expect(menuListItem).toHaveStyleRule('pointer-events', 'none');
      expect(menuListItem).toHaveStyleRule('color', theme.materialTextDisabled);
      expect(menuListItem).toHaveStyleRule(
        'text-shadow',
        `1px 1px ${theme.materialTextDisabledShadow}`
      );
    });
  });
  describe('prop: onClick', () => {
    it('should be called when clicked', () => {
      const clickHandler = jest.fn();
      const { getByRole } = renderWithTheme(
        <MenuListItem onClick={clickHandler} />
      );
      const menuListItem = getByRole('menuitem') as HTMLElement;
      menuListItem.click();
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });
  });
  describe('prop: square', () => {
    it('should render square MenuListItem', () => {
      const { getByRole } = renderWithTheme(<MenuListItem square />);
      const menuListItem = getByRole('menuitem');

      expect(menuListItem).toHaveStyleRule(
        'width',
        expectedBlockSizes[defaultSize]
      );
      expect(menuListItem).toHaveStyleRule(
        'height',
        expectedBlockSizes[defaultSize]
      );
    });
  });
  describe('prop: size', () => {
    it('should define MenuListItem height', () => {
      const size = 'sm';
      const { getByRole } = renderWithTheme(<MenuListItem size={size} />);
      const menuListItem = getByRole('menuitem');

      expect(menuListItem).toHaveStyleRule('height', expectedBlockSizes[size]);
    });
  });
});
