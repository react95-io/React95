import React from 'react';

import { renderWithTheme, theme } from '../../test/utils';
import { blockSizes } from '../common/system';
import { ListItem } from './ListItem';

const defaultSize = 'lg';
describe('<ListItem />', () => {
  it('renders ListItem', () => {
    const { getByRole } = renderWithTheme(<ListItem />);
    const listItem = getByRole('menuitem');
    expect(listItem).toBeInTheDocument();
    expect(listItem).not.toHaveAttribute('aria-disabled');
  });
  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <ListItem>
        <span>{textContent}</span>
      </ListItem>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });
  it('should have a default role of menuitem', () => {
    const { getByRole } = renderWithTheme(<ListItem />);
    const listItem = getByRole('menuitem');
    expect(listItem).toHaveAttribute('role', 'menuitem');
  });

  it('should render with custom role', () => {
    const { getByRole } = renderWithTheme(<ListItem role='option' />);
    const listItem = getByRole('option');
    expect(listItem).toHaveAttribute('role', 'option');
  });

  //   it('should have a tabIndex of -1 by default', () => {
  //     const { getByRole } = renderWithTheme(<ListItem role='option' />);
  //     const listItem = getByRole('menuitem');
  //     expect(listItem).toHaveAttribute('tabIndex', '-1');
  //   });
  describe('prop: disabled', () => {
    it('should not trigger onClick callback', () => {
      const clickHandler = jest.fn();
      const { getByRole } = renderWithTheme(
        <ListItem disabled onClick={clickHandler} />
      );
      const listItem = getByRole('menuitem') as HTMLElement;
      listItem.click();
      expect(clickHandler).not.toBeCalled();
      expect(listItem).toHaveAttribute('aria-disabled', 'true');
    });
    it('renders with disabled styles ', () => {
      const { getByRole } = renderWithTheme(<ListItem disabled />);
      const listItem = getByRole('menuitem');
      expect(listItem).toHaveStyleRule('pointer-events', 'none');
      expect(listItem).toHaveStyleRule('color', theme.materialTextDisabled);
      expect(listItem).toHaveStyleRule(
        'text-shadow',
        `1px 1px ${theme.materialTextDisabledShadow}`
      );
    });
  });
  describe('prop: onClick', () => {
    it('should be called when clicked', () => {
      const clickHandler = jest.fn();
      const { getByRole } = renderWithTheme(
        <ListItem onClick={clickHandler} />
      );
      const listItem = getByRole('menuitem') as HTMLElement;
      listItem.click();
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });
  });
  describe('prop: square', () => {
    it('should render square ListItem', () => {
      const { getByRole } = renderWithTheme(<ListItem square />);
      const listItem = getByRole('menuitem');

      expect(listItem).toHaveStyleRule('width', blockSizes[defaultSize]);
      expect(listItem).toHaveStyleRule('height', blockSizes[defaultSize]);
    });
  });
  describe('prop: size', () => {
    it('should define ListItem height', () => {
      const size = 'sm';
      const { getByRole } = renderWithTheme(<ListItem size={size} />);
      const listItem = getByRole('menuitem');

      expect(listItem).toHaveStyleRule('height', blockSizes[size]);
    });
  });
});
