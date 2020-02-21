import React from 'react';

import { renderWithTheme } from '../../../test/utils';

import TableHeadCell from './TableHeadCell';

describe('<TableHeadCell />', () => {
  it('renders TableHeadCell', () => {
    const { container } = renderWithTheme(<TableHeadCell />);
    const list = container.firstChild;

    expect(list).toBeInTheDocument();
  });
  it('renders th element', () => {
    const { container } = renderWithTheme(<TableHeadCell />);

    expect(container.querySelector('th')).toBeInTheDocument();
  });
  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <TableHeadCell>
        <span>{textContent}</span>
      </TableHeadCell>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });

  describe('prop: disabled', () => {
    it('should disable th element', () => {
      const handleChange = jest.fn();

      const { container } = renderWithTheme(
        <TableHeadCell disabled onChange={handleChange} />
      );
      const th = container.querySelector('th');
      expect(th).toHaveAttribute('aria-disabled', 'true');

      th.click();
      expect(handleChange).not.toHaveBeenCalled();
    });
    it('should be overridden by props', () => {
      const { container, rerender } = renderWithTheme(
        <TableHeadCell disabled />
      );
      rerender(<TableHeadCell disabled={false} />);
      const th = container.querySelector('th');

      expect(th).toHaveAttribute('aria-disabled', 'false');
    });
  });
});
