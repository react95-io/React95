import React from 'react';
import Tag, { TagsWrapper } from './index';
import styled from 'styled-components';

/* Images */
import { ReactComponent as Windows } from './icons/windows.svg';
import { ReactComponent as Browser } from './icons/browser.svg';
import MsnImage from './icons/msn.png';
import SchedulerImage from './icons/scheduler.png';
import ComputerImage from './icons/computer.png';
import SearchImage from './icons/search.png';

const Wrapper = styled.div`
  padding: 5rem;
  text-align: center;
`;

export default {
  title: 'Tag',
  component: Tag,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

const tagContentArray = [
  [
    { type: 'text', content: 'Microsoft' },
    {
      type: 'image',
      content: MsnImage,
      alt: 'microsoft'
    }
  ],
  //   [
  //     { type: 'image', content: () => <Browser />, alt: 'Browser' },
  //     { type: 'text', content: 'Browser' }
  //   ],
  [
    {
      type: 'image',
      content: SchedulerImage,
      alt: 'tech news'
    },
    { type: 'text', content: 'Tech' },
    { type: 'text', content: 'News' }
  ],
  [
    { type: 'text', content: 'Computer' },
    {
      type: 'image',
      content: ComputerImage,
      alt: 'computer hardware'
    },
    { type: 'text', content: 'Hardware' }
  ],
  [
    { type: 'text', content: 'Skins' },
    { type: 'text', content: 'Web' },
    {
      type: 'image',
      content: SearchImage,
      alt: 'skins web'
    }
  ]
  //   [
  //     {
  //       type: 'image',
  //       content: () => <Windows />,
  //       alt: 'windows 2000'
  //     },
  //     { type: 'text', content: 'Windows 2000' }
  //   ]
];

export const Default = () => {
  return (
    <>
      <TagsWrapper>
        {tagContentArray.map((contentArray, i) => (
          <Tag contentArray={contentArray} key={i} />
        ))}
      </TagsWrapper>

      <TagsWrapper>
        {tagContentArray.map((contentArray, i) => (
          <Tag contentArray={contentArray} key={i} backgroundColor='#d4d1ca' />
        ))}
      </TagsWrapper>
    </>
  );
};

Default.story = {
  name: 'default'
};

export const TagOnly = () => {
  return <Tag contentArray={tagContentArray[0]} />;
};

TagOnly.story = {
  name: 'Tag Only'
};
