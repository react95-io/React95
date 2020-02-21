import React from 'react';

import { renderWithTheme } from '../../../test/utils';

import TableHead from './TableHead';

describe('<TableHead />', () => {
  it('renders TableHead', () => {
    const { container } = renderWithTheme(<TableHead />);
    const list = container.firstChild;

    expect(list).toBeInTheDocument();
  });
  it('renders thead element', () => {
    const { container } = renderWithTheme(<TableHead />);

    expect(container.querySelector('thead')).toBeInTheDocument();
  });
  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <TableHead>
        <span>{textContent}</span>
      </TableHead>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });
});
