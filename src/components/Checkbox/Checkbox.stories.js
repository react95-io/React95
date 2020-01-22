import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Checkbox, Fieldset, Button, Cutout } from '..';

const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
`;
const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;
storiesOf('Checkbox', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('controlled group', () => <ControlledCheckboxGroupExample />)
  .add('uncontrolled', () => (
    <>
      <Checkbox
        name='cheese'
        value='cheese'
        label='Add extra cheese 🧀'
        defaultChecked
      />
      <br />
      <Checkbox name='pineapple' value='pineapple' label='Add pineapple 🍍' />
    </>
  ))
  .add('flat', () => (
    <StyledCutout style={{ padding: '1rem', width: '300px' }}>
      <p style={{ lineHeight: 1.3 }}>
        When you want to add input field on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <div style={{ marginTop: '1rem' }}>
        <Checkbox
          name='conspirancy'
          variant='flat'
          value='single'
          label='Earth is flat 🌍'
          defaultChecked
        />
        <Checkbox
          name='conspirancy'
          variant='flat'
          defaultChecked={false}
          value='single'
          label='Reptilians rule the world 🦎'
          disabled
        />
      </div>
    </StyledCutout>
  ));

class ControlledCheckboxGroupExample extends React.Component {
  state = {
    steak: true,
    tortilla: false,
    pizza: false
  };

  handleChange = e => {
    const {
      target: { value }
    } = e;
    this.setState(prevState => ({
      [value]: !prevState[value]
    }));
  };

  reset = () => {
    this.setState({
      steak: false,
      tortilla: false,
      pizza: false
    });
  };

  render() {
    const { steak, tortilla, pizza } = this.state;

    return (
      <div style={{ maxWidth: '250px' }}>
        <Fieldset label='Party food'>
          <Checkbox
            checked={steak}
            onChange={this.handleChange}
            value='steak'
            label='Steak 🥩'
            name='food'
          />
          <br />
          <Checkbox
            checked={tortilla}
            onChange={this.handleChange}
            value='tortilla'
            label='Tortilla 🌯'
            name='food'
          />
          <br />
          <Checkbox
            checked={pizza}
            onChange={this.handleChange}
            value='pizza'
            label='Pizza 🍕'
            name='food'
            disabled
          />
        </Fieldset>
        <Button fullWidth style={{ marginTop: '1em' }} onClick={this.reset}>
          Diet mode
        </Button>
      </div>
    );
  }
}
