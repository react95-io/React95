import { render } from '@testing-library/react';
import React from 'react';

import { renderWithTheme, theme } from '../../test/utils';

import { Avatar } from './Avatar';

describe('<Avatar />', () => {
  it('should render component', () => {
    const { container } = render(<Avatar />);

    expect(container).toBeInTheDocument();
  });

  it('should render children', () => {
    const { container } = render(<Avatar>Avatar children</Avatar>);
    const avatarEl = container.firstElementChild;

    expect(avatarEl && avatarEl.innerHTML).toBe('Avatar children');
  });

  it('should handle border properly', () => {
    const { container, rerender } = renderWithTheme(
      <Avatar noBorder={false} />
    );
    const avatarEl = container.firstElementChild;

    expect(avatarEl).toHaveStyleRule(
      'border-top',
      `2px solid ${theme.borderDark}`
    );

    rerender(<Avatar noBorder />);

    expect(avatarEl).not.toHaveStyleRule('border-top', '');
  });

  it('should handle square properly', () => {
    const { container, rerender } = render(<Avatar square />);
    const avatarEl = container.firstElementChild;

    expect(avatarEl).toHaveStyleRule('border-radius', '0');

    rerender(<Avatar square={false} />);

    expect(avatarEl).toHaveStyleRule('border-radius', '50%');
  });

  it('should render with source', async () => {
    const catGif = 'https://cdn2.thecatapi.com/images/1ac.gif';
    const { findByAltText } = render(<Avatar src={catGif} alt='cat avatar' />);
    const imageEl = (await findByAltText('cat avatar')) as HTMLImageElement;

    expect(imageEl && imageEl.src).toBe(catGif);
  });

  it('should render source with priority over children', async () => {
    const catGif = 'https://cdn2.thecatapi.com/images/1ac.gif';
    const { queryByText } = render(
      <Avatar src={catGif} alt='cat avatar'>
        Cats are cool
      </Avatar>
    );
    const content = await queryByText(/cats are cool/i);

    expect(content).toBeNull();
  });

  describe('prop: size', () => {
    it('should set proper size', () => {
      const { container } = renderWithTheme(<Avatar size='85%' />);
      const avatarEl = container.firstElementChild;

      expect(avatarEl).toHaveStyleRule('width', '85%');
      expect(avatarEl).toHaveStyleRule('height', '85%');
    });

    it('when passed a number, sets size in px', () => {
      const { container } = renderWithTheme(<Avatar size={25} />);
      const avatarEl = container.firstElementChild;

      expect(avatarEl).toHaveStyleRule('width', '25px');
      expect(avatarEl).toHaveStyleRule('height', '25px');
    });
  });
});
