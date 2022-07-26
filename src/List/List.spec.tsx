import { renderWithTheme } from '../../test/utils';

import { List } from './List';

describe('<List />', () => {
  it('renders List', () => {
    const { container } = renderWithTheme(<List />);
    const list = container.firstElementChild;

    expect(list).toBeInTheDocument();
  });
  it('is an ul', () => {
    const { container } = renderWithTheme(<List />);
    const list = container.firstElementChild;

    expect(list?.tagName).toBe('UL');
  });
  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <List>
        <span>{textContent}</span>
      </List>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });

  describe('prop: inline', () => {
    it('renders inline', () => {
      const { container } = renderWithTheme(<List inline />);
      const list = container.firstElementChild;

      expect(list).toHaveStyleRule('display', 'inline-flex');
      expect(list).toHaveStyleRule('align-items', 'center');
    });
  });
  describe('prop: fullWidth', () => {
    it('has 100% width', () => {
      const { container } = renderWithTheme(<List fullWidth />);
      const list = container.firstElementChild;

      expect(list).toHaveStyleRule('width', '100%');
    });
  });
});
