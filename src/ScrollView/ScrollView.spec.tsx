import { render } from '@testing-library/react';
import React from 'react';

import { ScrollView } from './ScrollView';

describe('<ScrollView />', () => {
  it('should render scrollview', () => {
    const { container } = render(<ScrollView />);
    const scrollView = container.firstElementChild;

    expect(scrollView).toBeInTheDocument();
  });

  it('should render custom styles', () => {
    const { container } = render(
      <ScrollView style={{ backgroundColor: 'papayawhip' }} />
    );
    const scrollView = container.firstElementChild;

    expect(scrollView).toHaveAttribute(
      'style',
      'background-color: papayawhip;'
    );
  });

  it('should render children', async () => {
    const { findByText } = render(
      <ScrollView>
        <span>Cool ScrollView</span>
      </ScrollView>
    );
    const content = await findByText(/cool scrollview/i);

    expect(content).toBeInTheDocument();
  });

  it('should render custom props', () => {
    const customProps = { title: 'scrollview' };
    const { container } = render(<ScrollView {...customProps} />);
    const scrollView = container.firstElementChild;

    expect(scrollView).toHaveAttribute('title', 'scrollview');
  });
});
