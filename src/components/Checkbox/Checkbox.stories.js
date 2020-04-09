import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Checkbox, Fieldset, Cutout, List, ListItem, Divider } from '..';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;
storiesOf('Checkbox', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => <DefaultCheckboxExample />)
  // Wrapped in React.createElement due to Storybook's "Hooks can only be called inside the body of a function component." error
  .add('flat', () => <FlatCheckboxExample />)
  .add('menu', () =>
    React.createElement(() => (
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
        <Divider />
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
    ))
  );

class DefaultCheckboxExample extends React.Component {
  state = {
    cheese: true,
    bacon: false,
    broccoli: false
  };

  toggleIngredient = e => {
    const {
      target: { value }
    } = e;
    this.setState(prevState => ({
      ...prevState,
      [value]: !prevState[value]
    }));
  };

  render() {
    const { cheese, bacon, broccoli } = this.state;

    const ingredientsArr = Object.values(this.state).map(val => (val ? 1 : 0));
    const possibleIngredients = Object.keys(this.state).length;
    const chosenIngredients = ingredientsArr.reduce((a, b) => a + b, 0);

    const isIndeterminate = ![0, possibleIngredients].includes(
      chosenIngredients
    );

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
            onChange={() => {
              console.log(ingredientsArr);
              if (isIndeterminate) {
                this.setState({
                  cheese: true,
                  bacon: true,
                  broccoli: true
                });
              } else if (ingredientsArr[0] === 1) {
                this.setState({
                  cheese: false,
                  bacon: false,
                  broccoli: false
                });
              } else {
                this.setState({
                  cheese: true,
                  bacon: true,
                  broccoli: true
                });
              }
            }}
          />
          <div style={{ paddingLeft: '1.5rem' }}>
            <Checkbox
              checked={!!cheese}
              onChange={this.toggleIngredient}
              value='cheese'
              label='🧀 Extra cheese'
              name='ingredients'
            />
            <br />
            <Checkbox
              checked={!!bacon}
              onChange={this.toggleIngredient}
              value='bacon'
              label='🥓 Bacon'
              name='ingredients'
            />
            <br />
            <Checkbox
              checked={!!broccoli}
              onChange={this.toggleIngredient}
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
}

const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
  padding: 1rem;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
class FlatCheckboxExample extends React.Component {
  state = {
    cheese: true,
    bacon: false,
    broccoli: false
  };

  toggleIngredient = e => {
    const {
      target: { value }
    } = e;
    this.setState(prevState => ({
      ...prevState,
      [value]: !prevState[value]
    }));
  };

  render() {
    const { cheese, bacon, broccoli } = this.state;

    const ingredientsArr = Object.values(this.state).map(val => (val ? 1 : 0));
    const possibleIngredients = Object.keys(this.state).length;
    const chosenIngredients = ingredientsArr.reduce((a, b) => a + b, 0);

    const isIndeterminate = ![0, possibleIngredients].includes(
      chosenIngredients
    );

    return (
      <StyledCutout>
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
              onChange={() => {
                console.log(ingredientsArr);
                if (isIndeterminate) {
                  this.setState({
                    cheese: true,
                    bacon: true,
                    broccoli: true
                  });
                } else if (ingredientsArr[0] === 1) {
                  this.setState({
                    cheese: false,
                    bacon: false,
                    broccoli: false
                  });
                } else {
                  this.setState({
                    cheese: true,
                    bacon: true,
                    broccoli: true
                  });
                }
              }}
            />
            <div style={{ paddingLeft: '1.5rem' }}>
              <Checkbox
                variant='flat'
                checked={!!cheese}
                onChange={this.toggleIngredient}
                value='cheese'
                label='🧀 Extra cheese'
                name='ingredients'
              />
              <br />
              <Checkbox
                variant='flat'
                checked={!!bacon}
                onChange={this.toggleIngredient}
                value='bacon'
                label='🥓 Bacon'
                name='ingredients'
              />
              <br />
              <Checkbox
                variant='flat'
                checked={!!broccoli}
                onChange={this.toggleIngredient}
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
      </StyledCutout>
    );
  }
}
