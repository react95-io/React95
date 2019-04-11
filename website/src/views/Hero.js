import React from "react";
import styled from "styled-components";

import CDImage from "../assets/images/cd.png";
import BoxImage from "../assets/images/box.png";
import NPM from "../assets/images/npm.png";
import Logo from "../assets/images/logo.png";
import LogoName from "../assets/images/logoName.png";
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
    opacity: 0.4;
    mix-blend-mode: screen;
  }
`;
const BoxWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 400px;
  height: 400px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(40, 40, 40);
    z-index: -2;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* opacity: 0.5; */
    background-image: url(${Plastic});
    background-size: cover;
    z-index: -1;
    pointer-events: none;
  }
`;
const Box = styled.img`
  /* width: 100%; */
  height: 100%;
  width: auto;
  position: absolute;
  right: -2%;
  z-index: 999;
  top: 0%;
  box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.5);
  pointer-events: none;
`;
const CD = styled.img`
  display: inline-block
  border-radius: 50%;
  max-height: 470px;
  width: 100%;
  height: auto;
  position: absolute;
  right: 0;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: rotateZ(306deg);

`;
const HeroImage = styled.img`
  position: absolute;
  width: 75%;
  height: auto;
  bottom: 10%;
  right: 50%;
  transform: translateX(50%);
  z-index: 999;
`;

const Centered = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #050608;
  height: 15%;
  width: 100%;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
`;
const NPMLink = styled.a`
  display: inline-block;
  height: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  background: #050608;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
`;
const NPMImage = styled.img`
  height: 40%;
  width: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;
export default function Hero() {
  return (
    <Wrapper>
      <Centered>
        <BoxWrapper>
          <Box src={BoxImage} />
          <CD src={CDImage} />
          <TopBar>
            <NPMLink href="$">
              <NPMImage src={NPM} />
            </NPMLink>
          </TopBar>
          <HeroImage src={LogoName} alt="React95 logo" />
        </BoxWrapper>
      </Centered>
    </Wrapper>
  );
}
