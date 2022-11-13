import React from 'react';

import { renderWithTheme } from '../../test/utils';

import { TableDataCell } from './TableDataCell';

describe('<TableDataCell />', () => {
  function mountInTable(node: React.ReactNode) {
    const { container, getByText } = renderWithTheme(
      <table>
        <tbody>
          <tr>{node}</tr>
        </tbody>
      </table>
    );
    return {
      td: container.querySelector('tr')?.firstElementChild,
      getByText
    };
  }

  it('renders TableDataCell', () => {
    const { td } = mountInTable(<TableDataCell />);
    expect(td?.tagName).toBe('TD');
  });

  it('renders children', () => {
    const { getByText } = mountInTable(<TableDataCell>children</TableDataCell>);
    expect(getByText('children')).toBeInTheDocument();
  });
});
