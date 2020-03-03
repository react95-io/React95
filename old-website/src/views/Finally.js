import React from "react";
import styled from "styled-components";

import Celebration from "../assets/images/optimized/celebration.gif";
import Hourglass from "../assets/images/optimized/hourglass.gif";
import LogoIcon from "../assets/images/optimized/logo.png";

import { Button } from "../lib";

import Center from "../components/Center";
import Code from "../components/Code";

const StyledCenter = styled(Center)`
  width: 100%;
`;
const Wrapper = styled.div`
  position: relative;
  height: 100%;
  box-shadow: inset 0 20px 20px -20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const CelebrationImage = styled.img`
  width: calc(100% - 3rem);
  max-width: 480px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  margin: 3rem 0;

  transition: 0.2s all ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
  @media (max-height: 700px) {
    max-width: 420px;
  }
`;

const StyledCode = styled(Code)`
  position: absolute;
  top: -1em;
`;
const HourglassIcon = styled.img`
  height: 40px;
  position: relative;
  top: 10px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  left: 50%;
  bottom: -2em;
  transform: translateX(-50%);
  padding: 0 0.5em;
  font-weight: bold;
  font-size: 1.4em;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  }
  &:active {
    &:before {
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    }
  }
  img {
    height: 28px;
    margin-right: 0.25em;
    margin-left: -0.125em;
  }
`;
export default function Finally(props) {
  return (
    <Wrapper>
      <StyledCenter>
        <StyledCode>
          The <HourglassIcon src={Hourglass} alt="Hourglass" /> is over.
          <br />
        </StyledCode>
        <CelebrationImage
          src={Celebration}
          alt="Bill Gates and Steve Ballmer dancing during Windows 95 launch"
        />
        <StyledButton size="lg" onClick={props.onStart}>
          <img src={LogoIcon} alt="React95 logo" />
          Start
        </StyledButton>
      </StyledCenter>
    </Wrapper>
  );
}
