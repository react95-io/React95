import { render } from '@testing-library/react';

import { Panel } from './Panel';

describe('<Panel />', () => {
  it('should render panel', () => {
    const { container } = render(<Panel />);
    const panel = container.firstElementChild;

    expect(panel).toBeInTheDocument();
  });

  it('should render custom styles', () => {
    const { container } = render(
      <Panel style={{ backgroundColor: 'papayawhip' }} />
    );
    const panel = container.firstElementChild;

    expect(panel).toHaveAttribute('style', 'background-color: papayawhip;');
  });

  it('should render children', async () => {
    const { findByText } = render(
      <Panel>
        <span>Cool panel</span>
      </Panel>
    );
    const content = await findByText(/cool panel/i);

    expect(content).toBeInTheDocument();
  });

  it('should render custom props', () => {
    const customProps = { title: 'panel' };
    const { container } = render(<Panel {...customProps} />);
    const panel = container.firstElementChild;

    expect(panel).toHaveAttribute('title', 'panel');
  });
});
