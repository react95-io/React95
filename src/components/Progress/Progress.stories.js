import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';

import { Progress } from '..';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;
storiesOf('Progress', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => <ProgressExample variant='default' />)
  .add('tile', () => <ProgressExample variant='tile' />)
  .add('hide value', () => <ProgressExample hideValue />);

const ProgressExample = props => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(previousPercent => {
        if (previousPercent === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(previousPercent + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Progress {...props} value={Math.floor(percent)} />;
};
