import React from 'react';
import { fireEvent } from '@testing-library/react';

import { renderWithTheme } from '../../test/utils';
import { Tab } from '..';
import Tabs from './Tabs';

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
});
