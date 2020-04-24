import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Radio, Cutout, Fieldset, Window, WindowContent } from 'react95';

storiesOf('Radio', module)
  .addDecorator(story => (
    <div
      style={{
        padding: '5rem',
        background: 'teal'
      }}
    >
      {story()}
    </div>
  ))
  .add('default', () => <RadioGroup />)
  .add('flat', () => <FlatRadioGroup />);

class RadioGroup extends React.Component {
  state = {
    checkedValue: 'Pear'
  };

  handleChange = e => this.setState({ checkedValue: e.target.value });

  render() {
    const { checkedValue } = this.state;
    return (
      <Window>
        <WindowContent>
          <Fieldset label='Fruits'>
            <Radio
              checked={checkedValue === 'Pear'}
              onChange={this.handleChange}
              value='Pear'
              label='🍐 Pear'
              name='fruits'
            />
            <br />
            <Radio
              checked={checkedValue === 'Orange'}
              onChange={this.handleChange}
              value='Orange'
              label='🍊 Orange'
              name='fruits'
            />
            <br />
            <Radio
              checked={checkedValue === 'Kiwi'}
              onChange={this.handleChange}
              value='Kiwi'
              label='🥝 Kiwi'
              name='fruits'
            />
            <br />
            <Radio
              checked={checkedValue === 'Grape'}
              onChange={this.handleChange}
              value='Grape'
              label='🍇 Grape'
              name='fruits'
              disabled
            />
          </Fieldset>
        </WindowContent>
      </Window>
    );
  }
}

class FlatRadioGroup extends React.Component {
  state = {
    checkedValue: 'Pear'
  };

  handleChange = e => this.setState({ checkedValue: e.target.value });

  render() {
    const { checkedValue } = this.state;

    return (
      <Window>
        <WindowContent>
          <StyledCutout>
            <p style={{ lineHeight: 1.3 }}>
              When you want to use radio buttons on a light background (like
              scrollable content), just use the flat variant:
            </p>
            <div
              style={{
                marginTop: '1rem'
              }}
            >
              <Radio
                variant='flat'
                checked={checkedValue === 'Pear'}
                onChange={this.handleChange}
                value='Pear'
                label='🍐 Pear'
                name='fruits'
              />
              <br />
              <Radio
                variant='flat'
                checked={checkedValue === 'Orange'}
                onChange={this.handleChange}
                value='Orange'
                label='🍊 Orange'
                name='fruits'
              />
              <br />
              <Radio
                variant='flat'
                checked={checkedValue === 'Kiwi'}
                onChange={this.handleChange}
                value='Kiwi'
                label='🥝 Kiwi'
                name='fruits'
              />
              <br />
              <Radio
                variant='flat'
                checked={checkedValue === 'Grape'}
                onChange={this.handleChange}
                value='Grape'
                label='🍇 Grape'
                name='fruits'
                disabled
              />
            </div>
          </StyledCutout>
        </WindowContent>
      </Window>
    );
  }
}

const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  width: 300px;
`;
