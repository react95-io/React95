import React from 'react';

import { renderWithTheme, theme } from '../../../test/utils';

import ListItem from './ListItem';

describe('<ListItem />', () => {
  it('renders ListItem', () => {
    const { container } = renderWithTheme(<ListItem />);
    const listItem = container.firstChild;
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveAttribute('aria-disabled', 'false');
  });
  it('should have a default role of menuitem', () => {
    const { container } = renderWithTheme(<ListItem />);
    const listItem = container.firstChild;
    expect(listItem).toHaveAttribute('role', 'menuitem');
  });

  it('should render with custom role', () => {
    const { container } = renderWithTheme(<ListItem role='option' />);
    const listItem = container.firstChild;
    expect(listItem).toHaveAttribute('role', 'option');
  });

  //   it('should have a tabIndex of -1 by default', () => {
  //     const { container } = renderWithTheme(<ListItem role='option' />);
  //     const listItem = container.firstChild;
  //     expect(listItem).toHaveAttribute('tabIndex', '-1');
  //   });
  describe('prop: disabled', () => {
    it('should not trigger onClick callback', () => {
      const clickHandler = jest.fn();
      const { container } = renderWithTheme(
        <ListItem disabled onClick={clickHandler} />
      );
      const listItem = container.firstChild;
      listItem.click();
      expect(clickHandler).not.toBeCalled();
      expect(listItem).toHaveAttribute('aria-disabled', 'true');
    });
    it('renders with disabled styles ', () => {
      const { container } = renderWithTheme(<ListItem disabled />);
      const listItem = container.firstChild;
      expect(listItem).toHaveStyleRule('pointer-events', 'none');
      expect(listItem).toHaveStyleRule('color', theme.textDisabled);
      expect(listItem).toHaveStyleRule(
        'text-shadow',
        `1px 1px ${theme.textDisabledShadow}`
      );
    });
  });
  describe('prop: onClick', () => {
    it('should be called when clicked', () => {
      const clickHandler = jest.fn();
      const { container } = renderWithTheme(
        <ListItem onClick={clickHandler} />
      );
      const listItem = container.firstChild;
      listItem.click();
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });
  });
});
