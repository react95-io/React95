import { renderWithTheme } from '../../test/utils';
import { Progress } from './Progress';

describe('<Progress />', () => {
  it('renders Progress', () => {
    const value = 32;
    const { getByRole } = renderWithTheme(<Progress value={value} />);

    const progress = getByRole('progressbar');

    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute('aria-valuenow', value.toString());
  });

  describe('prop: variant', () => {
    describe('variant: "default"', () => {
      it('displays current percentage value', () => {
        const value = 32;
        const { queryByTestId } = renderWithTheme(<Progress value={value} />);

        expect(queryByTestId('defaultProgress1')?.textContent).toBe(
          `${value}%`
        );
        expect(queryByTestId('defaultProgress2')?.textContent).toBe(
          `${value}%`
        );

        expect(queryByTestId('defaultProgress2')).toHaveStyleRule(
          'clip-path',
          `polygon( 0 0, ${value}% 0, ${value}% 100%, 0 100% )`
        );

        expect(queryByTestId('indeterminateProgress')).not.toBeInTheDocument();
      });
    });

    describe('variant: "tile"', () => {
      it('Renders "tile" progress', () => {
        const { queryByTestId } = renderWithTheme(<Progress variant='tile' />);
        expect(queryByTestId('defaultProgress1')).not.toBeInTheDocument();
        expect(queryByTestId('defaultProgress2')).not.toBeInTheDocument();
        expect(queryByTestId('tileProgress')).toBeInTheDocument();
      });

      // it('Renders correct number of tiles', () => {
      //   const value = 34;
      //   const { queryByTestId } = renderWithTheme(
      //     <Progress variant='tile' value={value} />
      //   );
      //   const tileProgress = queryByTestId('tileProgress');
      //   const tileProgressWidth = tileProgress.getBoundingClientRect().width;
      //   const tile = tileProgress.firstChild;
      //   const tileWidth = tile.getBoundingClientRect().width;

      //   const targetTileNumber = Math.floor(
      //     ((value / 100) * tileProgressWidth) / tileWidth
      //   );
      //   expect(tileProgress.childElementCount).toBe(targetTileNumber);
      // });
    });
  });

  describe('prop: hideValue', () => {
    it('renders progress bars, but does not show value', () => {
      const value = 32;
      const { queryByTestId } = renderWithTheme(
        <Progress hideValue value={value} />
      );
      expect(queryByTestId('defaultProgress1')).toBeInTheDocument();
      expect(queryByTestId('defaultProgress2')).toBeInTheDocument();
      expect(queryByTestId('defaultProgress1')).toBeEmptyDOMElement();
      expect(queryByTestId('defaultProgress2')).toBeEmptyDOMElement();
    });
  });
});
