import React, { useState } from 'react';
import styled from 'styled-components';

import { ComponentMeta } from '@storybook/react';
import {
  Checkbox,
  Fieldset,
  List,
  ListItem,
  ScrollView,
  Separator
} from 'react95';

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

export default {
  title: 'Controls/Checkbox',
  component: Checkbox,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Checkbox>;

export function Default() {
  const [state, setState] = useState({
    cheese: true,
    bacon: false,
    broccoli: false
  });

  const { cheese, bacon, broccoli } = state;
  const ingredientsArr = Object.values(state).map(val => (val ? 1 : 0));
  const possibleIngredients = Object.keys(state).length;
  const chosenIngredients = ingredientsArr.reduce<number>((a, b) => a + b, 0);

  const isIndeterminate = ![0, possibleIngredients].includes(chosenIngredients);

  const toggleAll = () => {
    console.log(ingredientsArr);
    if (isIndeterminate) {
      setState({
        cheese: true,
        bacon: true,
        broccoli: true
      });
    } else if (ingredientsArr[0] === 1) {
      setState({
        cheese: false,
        bacon: false,
        broccoli: false
      });
    } else {
      setState({
        cheese: true,
        bacon: true,
        broccoli: true
      });
    }
  };

  const toggleIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as 'cheese' | 'bacon' | 'broccoli';
    setState({
      ...state,
      [value]: !state[value]
    });
  };

  return (
    <div style={{ maxWidth: '250px' }}>
      <Fieldset label='Pizza toppings'>
        <Checkbox
          name='allToppings'
          label='All'
          value='allToppings'
          indeterminate={isIndeterminate}
          checked={
            !isIndeterminate && chosenIngredients === possibleIngredients
          }
          onChange={toggleAll}
        />
        <div style={{ paddingLeft: '1.5rem' }}>
          <Checkbox
            checked={!!cheese}
            onChange={toggleIngredient}
            value='cheese'
            label='🧀 Extra cheese'
            name='ingredients'
          />
          <br />
          <Checkbox
            checked={!!bacon}
            onChange={toggleIngredient}
            value='bacon'
            label='🥓 Bacon'
            name='ingredients'
          />
          <br />
          <Checkbox
            checked={!!broccoli}
            onChange={toggleIngredient}
            value='broccoli'
            label='🥦 Broccoli'
            name='ingredients'
          />
        </div>
      </Fieldset>
      <Checkbox
        name='shipping'
        value='shipping'
        label='Free shipping'
        defaultChecked
        disabled
        style={{ marginTop: '1rem' }}
      />
    </div>
  );
}

Default.story = {
  name: 'default'
};

export function Flat() {
  const [state, setState] = useState({
    cheese: true,
    bacon: false,
    broccoli: false
  });

  const { cheese, bacon, broccoli } = state;
  const ingredientsArr = Object.values(state).map(val => (val ? 1 : 0));
  const possibleIngredients = Object.keys(state).length;
  const chosenIngredients = ingredientsArr.reduce<number>((a, b) => a + b, 0);

  const isIndeterminate = ![0, possibleIngredients].includes(chosenIngredients);

  const toggleAll = () => {
    console.log(ingredientsArr);
    if (isIndeterminate) {
      setState({
        cheese: true,
        bacon: true,
        broccoli: true
      });
    } else if (ingredientsArr[0] === 1) {
      setState({
        cheese: false,
        bacon: false,
        broccoli: false
      });
    } else {
      setState({
        cheese: true,
        bacon: true,
        broccoli: true
      });
    }
  };

  const toggleIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as 'cheese' | 'bacon' | 'broccoli';
    setState({
      ...state,
      [value]: !state[value]
    });
  };

  return (
    <ScrollView id='cutout'>
      <div style={{ maxWidth: '250px' }}>
        <Fieldset variant='flat' label='Pizza toppings'>
          <Checkbox
            variant='flat'
            name='allToppings'
            label='All'
            value='allToppings'
            indeterminate={isIndeterminate}
            checked={
              !isIndeterminate && chosenIngredients === possibleIngredients
            }
            onChange={toggleAll}
          />
          <div style={{ paddingLeft: '1.5rem' }}>
            <Checkbox
              variant='flat'
              checked={!!cheese}
              onChange={toggleIngredient}
              value='cheese'
              label='🧀 Extra cheese'
              name='ingredients'
            />
            <br />
            <Checkbox
              variant='flat'
              checked={!!bacon}
              onChange={toggleIngredient}
              value='bacon'
              label='🥓 Bacon'
              name='ingredients'
            />
            <br />
            <Checkbox
              variant='flat'
              checked={!!broccoli}
              onChange={toggleIngredient}
              value='broccoli'
              label='🥦 Broccoli'
              name='ingredients'
            />
          </div>
        </Fieldset>
        <Checkbox
          variant='flat'
          name='shipping'
          value='shipping'
          label='Free shipping'
          defaultChecked
          disabled
          style={{ marginTop: '1rem' }}
        />
      </div>
    </ScrollView>
  );
}

Flat.story = {
  name: 'flat'
};

export function Menu() {
  return (
    <List>
      <ListItem size='md'>
        <Checkbox
          name='useGradient'
          variant='menu'
          value='useGradient'
          label='Use gradient'
          defaultChecked
        />
      </ListItem>
      <ListItem size='md'>
        <Checkbox
          name='thickBrush'
          variant='menu'
          defaultChecked={false}
          value='thickBrush'
          label='Thick brush'
          indeterminate
        />
      </ListItem>
      <Separator />
      <ListItem size='md' disabled>
        <Checkbox
          name='autoSave'
          variant='menu'
          value='autoSave'
          checked
          label='Auto-save'
          disabled
        />
      </ListItem>
    </List>
  );
}

Menu.story = {
  name: 'menu'
};
