import { renderWithTheme } from '../../test/utils';
import { TabBody } from './TabBody';

describe('<TabBody />', () => {
  describe('prop: children', () => {
    it('should render passed child', () => {
      const child = 'Hey there!';
      const { getByText } = renderWithTheme(<TabBody>{child}</TabBody>);

      expect(getByText(child)).toBeInTheDocument();
    });
  });
});
