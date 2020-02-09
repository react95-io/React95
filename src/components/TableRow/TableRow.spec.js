import React from 'react';

import { renderWithTheme } from '../../../test/utils';

import TableRow from './TableRow';

describe('<TableRow />', () => {
  it('renders TableRow', () => {
    const { container } = renderWithTheme(<TableRow />);
    const list = container.firstChild;

    expect(list).toBeInTheDocument();
  });
  it('renders tr element', () => {
    const { container } = renderWithTheme(<TableRow />);

    expect(container.querySelector('tr')).toBeInTheDocument();
  });
  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <TableRow>
        <span>{textContent}</span>
      </TableRow>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });
});
