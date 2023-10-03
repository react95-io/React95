import React from 'react';
import styled from 'styled-components';
import IELoadingGIF from '../assets/images/IELoading.gif'

type ProgressBarProps = {
  width?: number
} & React.HTMLAttributes<HTMLImageElement>;

const GIFContainer = styled.img`
  width: ${(props) => `${props.width}px`}
  height: auto;
`;

const IELoading = (props:ProgressBarProps) => {
  const { width = 250 } = props
  return (
    <>
      <GIFContainer src={IELoadingGIF} width={width}/>
    </>
  )
}

IELoading.displayName = 'IELoading';

export { IELoading, ProgressBarProps };
