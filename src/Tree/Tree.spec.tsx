import React from 'react';

import { renderWithTheme } from '../../test/utils';
import { Tree } from './Tree';

const categories = [
  {
    id: 'beverages',
    label: 'Beverages',
    icon: <>🥤</>,
    items: [
      {
        id: 'juices',
        label: 'Juices',
        icon: <>🧃</>,
        items: [
          { id: 'apple-juice', label: 'Apple juice', icon: <>🍎</> },
          { id: 'orange-juice', label: 'Orange juice', icon: <>🍊</> },
          { id: 'strawberry-juice', label: 'Strawberry juice', icon: <>🍓</> }
        ]
      },
      {
        id: 'coffee',
        label: 'Coffee',
        icon: <>☕</>,
        items: [
          { id: 'latte', label: 'Latte', icon: <>☕</> },
          { id: 'espresso', label: 'Espresso', icon: <>☕</> }
        ]
      }
    ]
  },
  {
    id: 'dairy',
    label: 'Dairy',
    icon: <>🧈</>,
    items: [
      {
        id: 'cheeses',
        label: 'Cheeses',
        icon: <>🧀</>,
        items: [
          { id: 'goat-cheese', label: 'Goat cheese', icon: <>🧀</> },
          { id: 'camembert-cheese', label: 'Camembert', icon: <>🧀</> },
          { id: 'cheddar-cheese', label: 'Cheddar', icon: <>🧀</> }
        ]
      },
      {
        id: 'milk',
        label: 'Milk',
        icon: <>🥛</>,
        items: [
          { id: 'cow-milk', label: 'Cow Milk', icon: <>🐄</> },
          { id: 'soya-milk', label: 'Soya milk', icon: <>🥛</> },
          { id: 'oat-milk', label: 'Oat milk', icon: <>🥛</> }
        ]
      }
    ]
  }
];

describe('<Tree />', () => {
  describe('prop: onNodeSelect', () => {
    it('should call onNodeSelect when uncontrolled', () => {
      const onNodeSelect = jest.fn((_, id) => id);

      const { getByText } = renderWithTheme(
        <Tree tree={categories} onNodeSelect={onNodeSelect} />
      );

      getByText('Beverages').click();

      expect(onNodeSelect).toHaveBeenCalledTimes(1);
      expect(onNodeSelect.mock.results[0].value).toBe('beverages');
    });

    it('should call onNodeSelect when controlled', () => {
      const onNodeSelect = jest.fn((_, id) => id);

      const { getByText } = renderWithTheme(
        <Tree tree={categories} selected='dairy' onNodeSelect={onNodeSelect} />
      );

      getByText('Beverages').click();

      expect(onNodeSelect).toHaveBeenCalledTimes(1);
      expect(onNodeSelect.mock.results[0].value).toBe('beverages');
    });
  });

  describe('prop: onNodeToggle', () => {
    it('should call onNodeToggle when uncontrolled', () => {
      const onNodeToggle = jest.fn((_, ids) => ids);

      const { getByText } = renderWithTheme(
        <Tree tree={categories} onNodeToggle={onNodeToggle} />
      );

      getByText('Beverages').click();

      expect(onNodeToggle).toHaveBeenCalledTimes(1);
      expect(onNodeToggle.mock.results[0].value).toStrictEqual(['beverages']);
    });

    it('should call onNodeToggle when controlled', () => {
      const onNodeToggle = jest.fn((_, ids) => ids);

      const { getByText } = renderWithTheme(
        <Tree
          tree={categories}
          expanded={['dairy']}
          onNodeToggle={onNodeToggle}
        />
      );

      getByText('Beverages').click();

      expect(onNodeToggle).toHaveBeenCalledTimes(1);
      expect(onNodeToggle.mock.results[0].value).toStrictEqual([
        'dairy',
        'beverages'
      ]);
    });
  });

  describe('prop: disabled', () => {
    it('should disable the whole tree', () => {
      const onNodeSelect = jest.fn((_, id) => id);
      const onNodeToggle = jest.fn((_, ids) => ids);

      const { getByText } = renderWithTheme(
        <Tree
          disabled
          tree={categories}
          onNodeSelect={onNodeSelect}
          onNodeToggle={onNodeToggle}
        />
      );

      getByText('Beverages').click();

      expect(onNodeSelect).not.toHaveBeenCalled();
      expect(onNodeToggle).not.toHaveBeenCalled();
    });

    it('should disable a tree item', () => {
      const onNodeSelect = jest.fn((_, id) => id);
      const onNodeToggle = jest.fn((_, ids) => ids);
      const modifiedTree = categories.map((item, index) =>
        index !== 0 ? item : { ...item, disabled: true }
      );

      const { getByText } = renderWithTheme(
        <Tree
          tree={modifiedTree}
          onNodeSelect={onNodeSelect}
          onNodeToggle={onNodeToggle}
        />
      );

      getByText('Beverages').click();

      expect(onNodeSelect).not.toHaveBeenCalled();
      expect(onNodeToggle).not.toHaveBeenCalled();

      getByText('Dairy').click();

      expect(onNodeSelect).toHaveBeenCalledTimes(1);
      expect(onNodeToggle).toHaveBeenCalledTimes(1);
    });
  });
});
