import React from 'react';

import { renderWithTheme } from '../../../test/utils';

import TableHeadCell from './TableHeadCell';

describe('<TableHeadCell />', () => {
  function mountInTable(node) {
    const { container, getByText } = renderWithTheme(
      <table>
        <thead>
          <tr>{node}</tr>
        </thead>
      </table>
    );
    return {
      th: container.querySelector('tr').firstChild,
      getByText
    };
  }

  it('renders TableHeadCell', () => {
    const { th } = mountInTable(<TableHeadCell />);
    expect(th.tagName).toBe('TH');
  });

  it('renders children', () => {
    const { getByText } = mountInTable(<TableHeadCell>children</TableHeadCell>);
    expect(getByText('children')).toBeInTheDocument();
  });

  describe('prop: sort', () => {
    it('should render without aria-sort attribute by default', () => {
      const { th } = mountInTable(<TableHeadCell />);
      expect(th).not.toHaveAttribute('aria-sort');
    });

    it('should render aria-sort="ascending" when prop sort="asc" provided', () => {
      const { th } = mountInTable(<TableHeadCell sort='asc' />);
      expect(th).toHaveAttribute('aria-sort', 'ascending');
    });

    it('should render aria-sort="descending" when prop sort="desc" provided', () => {
      const { th } = mountInTable(<TableHeadCell sort='desc' />);
      expect(th).toHaveAttribute('aria-sort', 'descending');
    });
  });

  describe('prop: disabled', () => {
    it('should disable th element', () => {
      const handleChange = jest.fn();

      const { th } = mountInTable(
        <TableHeadCell disabled onChange={handleChange} />
      );
      expect(th).toHaveAttribute('aria-disabled', 'true');

      th.click();
      expect(handleChange).not.toHaveBeenCalled();
    });
  });
});
