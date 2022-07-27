import { renderWithTheme } from '../../test/utils';

import { WindowContent } from './WindowContent';

describe('<WindowContent />', () => {
  it('renders WindowContent', () => {
    const { container } = renderWithTheme(<WindowContent />);
    const windowContent = container.firstChild;

    expect(windowContent).toBeInTheDocument();
  });

  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <WindowContent>
        <span>{textContent}</span>
      </WindowContent>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });
});
