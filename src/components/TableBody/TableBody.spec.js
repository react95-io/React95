import React from 'react';

import { renderWithTheme } from '../../../test/utils';

import TableBody from './TableBody';

describe('<TableBody />', () => {
  it('renders TableBody', () => {
    const { container } = renderWithTheme(<TableBody />);
    const list = container.firstChild;

    expect(list).toBeInTheDocument();
  });
  it('renders tbody element', () => {
    const { container } = renderWithTheme(<TableBody />);

    expect(container.querySelector('tbody')).toBeInTheDocument();
  });
  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <TableBody>
        <span>{textContent}</span>
      </TableBody>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });
});
