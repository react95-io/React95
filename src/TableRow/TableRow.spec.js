import React from 'react';

import { renderWithTheme } from '../../test/utils';

import TableRow from './TableRow';

describe('<TableRow />', () => {
  function mountInTable(node) {
    const { container, getByTestId } = renderWithTheme(
      <table>
        <tbody>{node}</tbody>
      </table>
    );
    return {
      tr: container.querySelector('tbody').firstChild,
      getByTestId
    };
  }

  it('renders TableRow', () => {
    const { tr } = mountInTable(<TableRow />);
    expect(tr.tagName).toBe('TR');
  });

  it('renders children', () => {
    const children = <td data-testid='td' />;
    const { getByTestId } = mountInTable(<TableRow>{children}</TableRow>);
    expect(getByTestId('td')).toBeInTheDocument();
  });
});
