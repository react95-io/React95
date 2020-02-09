import React from 'react';

import { renderWithTheme } from '../../../test/utils';

import Table from './Table';

describe('<Table />', () => {
  it('renders Table', () => {
    const { container } = renderWithTheme(<Table />);
    const list = container.firstChild;

    expect(list).toBeInTheDocument();
  });
  it('renders table element', () => {
    const { getByRole } = renderWithTheme(<Table />);

    expect(getByRole('table')).toBeInTheDocument();
  });
  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <Table>
        <span>{textContent}</span>
      </Table>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });
});
