import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Tree, Fieldset } from 'react95';
import Button from '../Button/Button';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;

  #cutout {
    background: ${({ theme }) => theme.canvas};
    padding: 1rem;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const Panel = styled.div`
  padding: 2rem;
`;

export default {
  title: 'Tree',
  component: Tree,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

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

const allIds = [];

function getIds(item) {
  allIds.push(item.id);
  // eslint-disable-next-line no-unused-expressions
  item.items?.forEach(getIds);
}

categories.forEach(getIds);

export function Basic() {
  return (
    <div style={{ maxWidth: '250px' }}>
      <Fieldset label='Catalog'>
        <Tree tree={categories} />
      </Fieldset>
    </div>
  );
}

Basic.story = {
  name: 'basic'
};

export function Controlled() {
  const [selected, setSelected] = useState('oat-milk');
  const [expanded, setExpanded] = useState(['dairy', 'milk']);

  const handleExpandClick = useCallback(() => {
    setExpanded(oldExpanded => (oldExpanded.length === 0 ? allIds : []));
  });

  return (
    <div style={{ maxWidth: '250px' }}>
      <Panel>
        <Button onClick={handleExpandClick}>
          {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button>
      </Panel>

      <Fieldset label='Catalog'>
        <Tree
          tree={categories}
          onNodeSelect={(event, id) => setSelected(id)}
          onNodeToggle={(event, ids) => setExpanded(ids)}
          expanded={expanded}
          selected={selected}
        />
      </Fieldset>
    </div>
  );
}

Controlled.story = {
  name: 'controlled'
};

export function Disabled() {
  return (
    <div style={{ maxWidth: '250px' }}>
      <Fieldset label='Catalog'>
        <Tree tree={categories} disabled />
      </Fieldset>
    </div>
  );
}

Disabled.story = {
  name: 'disabled'
};

export function DisabledTreeItems() {
  const modifiedTree = categories.map((item, index) =>
    index !== 1 ? item : { ...item, disabled: true }
  );

  return (
    <div style={{ maxWidth: '250px' }}>
      <Fieldset label='Catalog'>
        <Tree tree={modifiedTree} />
      </Fieldset>
    </div>
  );
}

DisabledTreeItems.story = {
  name: 'disabled tree items'
};
