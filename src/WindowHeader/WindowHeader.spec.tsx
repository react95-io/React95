import { renderWithTheme, theme } from '../../test/utils';

import { WindowHeader } from './WindowHeader';

describe('<WindowHeader />', () => {
  it('renders WindowHeader', () => {
    const { container } = renderWithTheme(<WindowHeader />);
    const windowHeader = container.firstChild;

    expect(windowHeader).toBeInTheDocument();
  });

  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <WindowHeader>
        <span>{textContent}</span>
      </WindowHeader>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });

  describe('prop: active', () => {
    it('displays active header by default', () => {
      const { container } = renderWithTheme(<WindowHeader />);
      const windowHeader = container.firstChild as HTMLDivElement;

      expect(windowHeader).toHaveStyleRule('color', theme.headerText);
      expect(windowHeader).toHaveStyleRule(
        'background',
        theme.headerBackground
      );
    });

    it('displays active header when set to true', () => {
      const { container } = renderWithTheme(<WindowHeader active />);
      const windowHeader = container.firstChild as HTMLDivElement;

      expect(windowHeader).toHaveStyleRule('color', theme.headerText);
      expect(windowHeader).toHaveStyleRule(
        'background',
        theme.headerBackground
      );
    });

    it('renders non-active header when set to false', () => {
      const { container } = renderWithTheme(<WindowHeader active={false} />);
      const windowHeader = container.firstChild;

      expect(windowHeader).toHaveStyleRule('color', theme.headerNotActiveText);
      expect(windowHeader).toHaveStyleRule(
        'background',
        theme.headerNotActiveBackground
      );
    });
  });
});
