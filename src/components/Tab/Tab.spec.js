import React from 'react';

import { renderWithTheme } from '../../../test/utils';
import Tab from './Tab';

describe('<Tab />', () => {
  describe('prop: children', () => {
    it('should render passed child', () => {
      const child = 'Hey there!';
      const { getByText } = renderWithTheme(<Tab>{child}</Tab>);

      expect(getByText(child)).toBeInTheDocument();
    });
  });

  describe('prop: selected', () => {
    it('should render with correct aria attribute', () => {
      const { getByRole } = renderWithTheme(<Tab selected />);

      expect(getByRole('tab')).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('prop: onClick', () => {
    it('should be called when a click is triggered', () => {
      const handleClick = jest.fn();
      const { getByRole } = renderWithTheme(<Tab onClick={handleClick} />);

      getByRole('tab').click();

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
