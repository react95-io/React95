// Bsased on https://github.com/mui-org/material-ui

import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { renderWithTheme } from '../../test/utils';
import { SelectOption } from './Select.types';
import { SelectNative } from './SelectNative';

const options: SelectOption<string>[] = [
  { label: 'ten', value: '10' },
  { label: 'twenty', value: '20' },
  { label: 'thirty', value: '30' }
];

describe('<SelectNative />', () => {
  describe('prop: native', () => {
    it('renders a <select />', () => {
      const { container } = renderWithTheme(<SelectNative options={options} />);
      expect(container.querySelector('select')).toBeInTheDocument();
    });

    it('renders uses values for labels', () => {
      const optionsWithoutLabels = options.map(({ value }) => ({ value }));
      renderWithTheme(
        <SelectNative options={optionsWithoutLabels} data-testid='select' />
      );
      expect(screen.getByTestId('select')).toHaveTextContent('10');
    });

    it('calls onChange if not disabled or readOnly', () => {
      const handleChange = jest.fn();
      renderWithTheme(
        <>
          <SelectNative
            options={options}
            data-testid='selectEnabled'
            onChange={handleChange}
          />
          <SelectNative
            options={options}
            data-testid='selectDisabled'
            disabled
            onChange={handleChange}
          />
          <SelectNative
            options={options}
            data-testid='selectReadOnly'
            onChange={handleChange}
            readOnly
          />
        </>
      );
      fireEvent.change(screen.getByTestId('selectEnabled'));
      fireEvent.change(screen.getByTestId('selectDisabled'));
      fireEvent.change(screen.getByTestId('selectReadOnly'));
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(options[0], {
        fromEvent: expect.objectContaining({ type: 'change' })
      });
    });

    it('can be labelled with a <label />', () => {
      renderWithTheme(
        <>
          <label htmlFor='select'>A select</label>
          <SelectNative id='select' options={options} />
        </>
      );
      expect(screen.getByLabelText('A select')).toHaveProperty(
        'tagName',
        'SELECT'
      );
    });
  });
});
