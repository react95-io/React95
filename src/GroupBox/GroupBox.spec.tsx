import React from 'react';

import { renderWithTheme, theme } from '../../test/utils';

import { GroupBox } from './GroupBox';

describe('<GroupBox />', () => {
  it('renders GroupBox', () => {
    const { container } = renderWithTheme(<GroupBox />);
    const groupBox = container.firstChild as HTMLFieldSetElement;

    expect(groupBox).toBeInTheDocument();
  });
  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <GroupBox>
        <span>{textContent}</span>
      </GroupBox>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });

  describe('prop: label', () => {
    it('renders Label', () => {
      const labelText = 'Name:';
      const { container } = renderWithTheme(<GroupBox label={labelText} />);
      const groupBox = container.firstChild as HTMLFieldSetElement;
      const legend = groupBox.querySelector('legend');
      expect(legend?.textContent).toBe(labelText);
    });
    it('when not provided, <legend /> element is not rendered', () => {
      const { container } = renderWithTheme(<GroupBox />);
      const groupBox = container.firstChild as HTMLFieldSetElement;
      const legend = groupBox.querySelector('legend');
      expect(legend).not.toBeInTheDocument();
    });
  });
  describe('prop: disabled', () => {
    it('renders with disabled text content', () => {
      const { container } = renderWithTheme(<GroupBox disabled />);
      const groupBox = container.firstChild as HTMLFieldSetElement;

      expect(groupBox).toHaveAttribute('aria-disabled', 'true');

      expect(groupBox).toHaveStyleRule('color', theme.materialTextDisabled);
      expect(groupBox).toHaveStyleRule(
        'text-shadow',
        `1px 1px ${theme.materialTextDisabledShadow}`
      );
    });
  });
});
