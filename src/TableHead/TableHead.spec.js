import React from 'react';

import { renderWithTheme } from '../../test/utils';

import TableHead from './TableHead';

describe('<TableHead />', () => {
  function mountInTable(node) {
    const { container, getByTestId } = renderWithTheme(<table>{node}</table>);
    return {
      tbody: container.querySelector('table').firstChild,
      getByTestId
    };
  }

  it('renders TableHead', () => {
    const { tbody } = mountInTable(<TableHead />);

    expect(tbody).toBeInTheDocument();
    expect(tbody.tagName).toBe('THEAD');
  });

  it('renders children', () => {
    const children = <tr data-testid='tr' />;
    const { getByTestId } = mountInTable(<TableHead>{children}</TableHead>);
    expect(getByTestId('tr')).toBeInTheDocument();
  });
});
