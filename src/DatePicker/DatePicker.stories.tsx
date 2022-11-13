/* eslint-disable camelcase, react/jsx-pascal-case */
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { DatePicker__UNSTABLE } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: 'DatePicker__UNSTABLE',
  component: DatePicker__UNSTABLE,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof DatePicker__UNSTABLE>;

export function Default() {
  return <DatePicker__UNSTABLE onAccept={date => console.log(date)} />;
}

Default.story = {
  name: 'default'
};
