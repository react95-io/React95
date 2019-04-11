import React from "react";
import styled from "styled-components";

import CD from "../assets/images/cd.png";
import NPM from "../assets/images/npm.png";
import Logo from "../assets/images/logo.png";
import Plastic from "../assets/images/plastic.jpg";
import Clouds from "../assets/images/clouds.jpg";

const Wrapper = styled.div`
  background-image: url(${Clouds});
  background-size: cover;
  height: 100%;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Plastic});
    background-size: cover;
    opacity: 0.6;
    mix-blend-mode: screen;
  }
   /* &:before {
    content: "";
    width: 45%;
    padding-top: 45%;
    position: absolute;
    right: 25%;
    top: 25%;
    transform(-50%, -50%);
    background-image: url(${CD});
    background-size: cover;
  } */
`;
const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #050608;
`;
const HeroImage = styled.img`
  width: 60%;
  max-width: 280px;
`;

const Centered = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Hero() {
  return (
    <Wrapper>
      <TopBar />
      <Centered>
        <HeroImage src={Logo} alt="React95 logo" />
        <br />
      </Centered>
    </Wrapper>
  );
}
