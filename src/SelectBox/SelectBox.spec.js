import React from 'react';
import { renderWithTheme } from '../../test/utils';
import SelectBox from './SelectBox';

const options = [
  { label: 'ten', value: 0 },
  { label: 'twenty', value: 1 },
  { label: 'thirty', value: 2 }
];

describe('<SelectBox />', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = function() {};
  });
  it('should be able to mount the component', () => {
    const { container } = renderWithTheme(<SelectBox options={options} />);
    expect(container.querySelector('ul').querySelector('li').textContent).toBe(
      'ten'
    );
  });
});
