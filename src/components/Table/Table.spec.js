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
    const { getByTestId } = renderWithTheme(
      <Table>
        <tbody data-testid='children' />
      </Table>
    );
    expect(getByTestId('children')).toBeInTheDocument();
  });
});
