import React from 'react';

import { renderWithTheme } from '../../test/utils';

import TableBody from './TableBody';

describe('<TableBody />', () => {
  function mountInTable(node) {
    const { container, getByTestId } = renderWithTheme(<table>{node}</table>);
    return {
      tbody: container.querySelector('table').firstChild,
      getByTestId
    };
  }

  it('renders TableBody', () => {
    const { tbody } = mountInTable(<TableBody />);

    expect(tbody).toBeInTheDocument();
    expect(tbody.tagName).toBe('TBODY');
  });

  it('renders children', () => {
    const children = <tr data-testid='tr' />;
    const { getByTestId } = mountInTable(<TableBody>{children}</TableBody>);
    expect(getByTestId('tr')).toBeInTheDocument();
  });
});
