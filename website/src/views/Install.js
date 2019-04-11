import React from "react";
import styled from "styled-components";

import Me from "../assets/images/me.jpg";
import LogoIcon from "../assets/images/icons/logo.png";

import { Button } from "../lib";
import Center from "../components/Center";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  box-shadow: inset 0 20px 20px -20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;
const Code = styled.code`
  font-size: 1.4em;
`;
const MeImage = styled.img`
  width: calc(100% - 3rem);
  max-width: 380px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  margin: 3rem 0;

  transition: 0.2s all ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;
const StyledButton = styled(Button)`
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

export default function Install(props) {
  return (
    <Wrapper>
      <Center>
        <Code>npm install react95</Code>

        <br />
        <MeImage src={Me} alt="childhood photo of Artur Bien" />
        <br />
        <StyledButton size="lg" onClick={props.onStart}>
          <img src={LogoIcon} />
          Start
        </StyledButton>
      </Center>
    </Wrapper>
  );
}
