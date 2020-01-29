import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import styled from 'styled-components';

import { Progress } from '..';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;
storiesOf('Progress', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('default', () => <ProgressExample />)
  .add('indeterminate', () => <Progress variant='indeterminate' />)
  .add('hide value', () => <Progress hideValue value={34} />);

const ProgressExample = () => {
  const [percent, setPercent] = useState(0);

  React.useEffect(() => {
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

  return <Progress value={Math.floor(percent)} />;
};
