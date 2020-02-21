import React from 'react';

import { renderWithTheme } from '../../../test/utils';

import TableDataCell from './TableDataCell';

describe('<TableDataCell />', () => {
  it('renders TableDataCell', () => {
    const { container } = renderWithTheme(<TableDataCell />);
    const list = container.firstChild;

    expect(list).toBeInTheDocument();
  });
  it('renders td element', () => {
    const { container } = renderWithTheme(<TableDataCell />);

    expect(container.querySelector('td')).toBeInTheDocument();
  });
  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <TableDataCell>
        <span>{textContent}</span>
      </TableDataCell>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });
});
