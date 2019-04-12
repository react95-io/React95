import React from "react";
import styled from "styled-components";

import CDImage from "../assets/images/cd.png";
import BoxImage from "../assets/images/box.png";
import NPM from "../assets/images/npm.png";
import Logo from "../assets/images/logo.png";
import LogoName from "../assets/images/logoName.png";
import Plastic from "../assets/images/plastic.jpg";
import Clouds from "../assets/images/clouds.jpg";
import LogoIcon from "../assets/images/icons/logo.png";

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
    pointer-events: none;
  }
`;
const BoxWrapper = styled.div`
  position: relative;
  display: inline-block;
  max-width: 480px;
  width: calc(100% - 2em);

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
  height: auto;
  width: 100%;
  /* position: absolute; */
  right: -2%;
  z-index: 999;
  top: 0%;
  box-shadow: -5px -10px 20px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  transform: rotateX(180deg);
`;
const CD = styled.img`
  display: inline-block
  border-radius: 50%;
  
  height: 95%;
  width: auto;
  right: 4%;
  top: 2%;
  position: absolute;
  box-shadow: -3px  3px 10px rgba(0, 0, 0, 0.9);
  transform: rotateZ(300deg);
  filter: grayscale(0.2);
`;
const HeroImage = styled.img`
  position: absolute;
  width: 68%;
  height: auto;
  bottom: 10%;
  right: 48%;
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
  top: 2%;
  left: 11%;
  background: #050608;
  height: 15%;
  width: 87%;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
`;
const NPMLink = styled.a`
  display: inline-block;
  height: 100%;
  width: 15%;
  position: absolute;
  top: 100%;
  left: 0;
  background: #050608;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
`;
const NPMImage = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  transition: 0s ease-in-out all;
  &:hover {
    transform: translateY(-50%) scale(1.05);
  }
`;
const LibLink = styled.a`
  display: inline-block;
  height: 100%;
  width: 15%;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
`;
const LibImage = styled.img`
  width: 60%;
  height: auto;
  position: relative;
  top: 54%;
  transform: translateY(-50%);
  transition: 0s ease-in-out all;
  &:hover {
    transform: translateY(-50%) scale(1.05);
  }
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
            <LibLink href="$">
              <LibImage src={LogoIcon} />
            </LibLink>
          </TopBar>
          <HeroImage src={LogoName} alt="React95 logo" />
        </BoxWrapper>
      </Centered>
    </Wrapper>
  );
}
