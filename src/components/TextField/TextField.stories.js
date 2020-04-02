import React from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';

import { TextField, Button, Cutout } from '..';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin, ante vel porttitor posuere, tellus nisi interdum ipsum, non bibendum ante risus ut purus. Curabitur vel posuere odio. Vivamus rutrum, nunc et ullamcorper sagittis, tellus ligula maximus quam, id dapibus sapien metus lobortis diam. Proin luctus, dolor in finibus feugiat, lacus enim gravida sem, quis aliquet tellus leo nec enim. Morbi varius bibendum augue quis venenatis. Curabitur ut elit augue. Pellentesque posuere enim a mattis interdum. Donec sodales convallis turpis, a vulputate elit. Suspendisse potenti.`;
const onChange = e => console.log(e.target.value);

const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
`;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;

storiesOf('TextField', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => <DefaultTextFieldExample />)
  .add('flat', () => (
    <StyledCutout style={{ padding: '1rem', width: '400px' }}>
      <p style={{ lineHeight: 1.3 }}>
        When you want to add input field on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <br />
      <TextField
        id='name'
        variant='flat'
        placeholder='type here...'
        width={150}
        onChange={onChange}
        fullWidth
      />
      <br />
      <TextField
        id='disabled'
        variant='flat'
        placeholder='Disabled'
        width={150}
        onChange={onChange}
        disabled
        fullWidth
      />
      <br />
      <TextField
        multiline
        variant='flat'
        rows={4}
        id='name'
        defaultValue={loremIpsum}
        onChange={onChange}
        fullWidth
      />
      <br />
      <TextField
        multiline
        variant='flat'
        disabled
        rows={4}
        id='name'
        defaultValue={loremIpsum}
        onChange={onChange}
        fullWidth
      />
    </StyledCutout>
  ));

class DefaultTextFieldExample extends React.Component {
  state = {
    value: ''
  };

  handleChange = e => this.setState({ value: e.target.value });

  reset = () => this.setState({ value: '' });

  render() {
    const { value } = this.state;

    return (
      <div style={{ width: 400 }}>
        <div style={{ display: 'flex' }}>
          <TextField
            value={value}
            placeholder='Type here...'
            onChange={this.handleChange}
            fullWidth
          />
          <Button onClick={this.reset} style={{ marginLeft: '2px' }}>
            Reset
          </Button>
        </div>
        <br />
        <TextField
          defaultValue='Disabled'
          disabled
          onChange={onChange}
          fullWidth
        />
        <br />
        <TextField
          multiline
          rows={4}
          id='name'
          defaultValue={loremIpsum}
          onChange={onChange}
          fullWidth
        />
        <br />
        <TextField
          multiline
          disabled
          rows={4}
          id='name'
          defaultValue={loremIpsum}
          onChange={onChange}
          fullWidth
        />
      </div>
    );
  }
}
