import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import { Progress } from '..';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;

export default {
  title: 'Progress',
  component: Progress,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export const Default = () => {
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

  return <Progress value={Math.floor(percent)} />;
};

Default.story = {
  name: 'default'
};

export const Tile = () => {
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

  return <Progress variant='tile' value={Math.floor(percent)} />;
};

Tile.story = {
  name: 'tile'
};

export const HideValue = () => {
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

  return <Progress hideValue value={Math.floor(percent)} />;
};

HideValue.story = {
  name: 'hide value'
};
