import { fireEvent } from '@testing-library/react';
import React from 'react';

import { Tab } from '..';
import { renderWithTheme } from '../../test/utils';
import { Tabs } from './Tabs';

describe('<Tabs />', () => {
  describe('prop: children', () => {
    it('should accept a null child', () => {
      const { getAllByRole } = renderWithTheme(
        <Tabs value={0}>
          {null}
          <Tab />
        </Tabs>
      );
      expect(getAllByRole('tab').length).toBe(1);
    });
  });

  describe('prop: value', () => {
    const tabs = (
      <Tabs value={1}>
        <Tab value={0} />
        <Tab value={1} />
      </Tabs>
    );

    it('should pass selected prop to children', () => {
      const { getAllByRole } = renderWithTheme(tabs);
      const tabElements = getAllByRole('tab');
      expect(tabElements[0]).toHaveAttribute('aria-selected', 'false');
      expect(tabElements[1]).toHaveAttribute('aria-selected', 'true');
    });

    it('should accept any value as selected tab value', () => {
      const tab0 = {};
      const tab1 = {};
      expect(tab0).not.toBe(tab1);

      const { getAllByRole } = renderWithTheme(
        <Tabs value={tab0}>
          <Tab value={tab0} />
          <Tab value={tab1} />
        </Tabs>
      );
      const tabElements = getAllByRole('tab');
      expect(tabElements[0]).toHaveAttribute('aria-selected', 'true');
      expect(tabElements[1]).toHaveAttribute('aria-selected', 'false');
    });
  });
  describe('prop: onChange', () => {
    it('should call onChange when clicking', () => {
      const handleChange = jest.fn();
      const { getAllByRole } = renderWithTheme(
        <Tabs value={0} onChange={handleChange}>
          <Tab value={0} />
          <Tab value={1} />
        </Tabs>
      );

      fireEvent.click(getAllByRole('tab')[1]);
      expect(handleChange).toBeCalledTimes(1);
      expect(handleChange.mock.calls[0][1]).toBe(1);
    });
  });

  describe('prop: rows', () => {
    it('should render specified number of rows', () => {
      const tabs = (
        <Tabs value={1} rows={4}>
          {/* row 1 */}
          <Tab value={0} />
          <Tab value={1} />
          <Tab value={3} />

          {/* row 2 */}
          <Tab value={4} />
          <Tab value={5} />

          {/* row 3  */}
          <Tab value={6} />
          <Tab value={7} />

          {/* row 4 */}
          <Tab value={8} />
          <Tab value={9} />
        </Tabs>
      );
      const { getAllByTestId } = renderWithTheme(tabs);
      const rowElements = getAllByTestId('tab-row');
      expect(rowElements.length).toBe(4);
    });

    it('row containing currently selected tab should be at the bottom (last row)', () => {
      const tabs = (
        <Tabs value={4} rows={3}>
          <Tab value={0} />
          <Tab value={1} />
          <Tab value={3} />

          <Tab value={4} />
          <Tab value={5} />
          <Tab value={6} />

          <Tab value={7} />
          <Tab value={8} />
          <Tab value={9} />
        </Tabs>
      );
      const { container, getAllByTestId } = renderWithTheme(tabs);
      const rowElements = getAllByTestId('tab-row');
      const selectedTab = container.querySelector('[aria-selected=true]');

      expect(rowElements?.pop()?.contains(selectedTab)).toBe(true);
    });
  });
});
