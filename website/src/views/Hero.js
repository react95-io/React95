import React from "react";
import styled from "styled-components";

import HeroCD from "../assets/images/heroCD2.png";
import CDImage from "../assets/images/cd.png";
import BoxImage from "../assets/images/box.png";
import NPM from "../assets/images/npm.png";
import Logo from "../assets/images/logo.png";
import LogoName from "../assets/images/logoName.png";
import Plastic from "../assets/images/plastic.jpg";
import Tape from "../assets/images/tape.png";
import Clouds from "../assets/images/clouds.jpg";
import Grow from "../assets/images/growEmoji.png";
import LogoIcon from "../assets/images/icons/logo.png";

import Code from "../components/Code";

import { Anchor, Tooltip } from "../lib";

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Wrapper = styled.div`
  background-image: url(${Clouds});
  background-size: cover;
  height: 100%;
  &:before {
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
  overflow: hidden;
  box-shadow: -0px 10px 28px rgba(0, 0, 0, 0.7);
`;
const Box = styled.img`
  /* width: 100%; */
  height: auto;
  width: 100%;
  /* position: absolute; */
  right: -2%;
  z-index: 999;
  top: 0%;
  pointer-events: none;

  transform: rotateX(180deg);
`;
const CD = styled.img`
  display: inline-block
  border-radius: 50%;
  height: 95%;
  width: auto;
  right: 4%;
  top: 1%;
  position: absolute;
  box-shadow: -3px  3px 10px rgba(0, 0, 0, 0.9);
  transform: rotateZ(300deg);
  filter: grayscale(0.2);
`;
// const HeroImage = styled.img`
//   position: absolute;
//   /* width: 68%; */
//   width: 45%;
//   height: auto;
//   /* bottom: 10%; */
//   bottom: 16%;
//   right: 48%;
//   transform: translateX(50%);
//   z-index: 999;
//   opacity: 0.9;
// `;

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
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.6);
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
const TapeImage = styled.img`
  position: absolute;
  height: 45%;
  width: auto;
  top: 55%;
  right: 0;
  transform: translate(70%, -50%);
  filter: drop-shadow(5px -15px 20px rgba(0, 0, 0, 0.5)) grayscale(0.4);
  /* box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5); */
`;
const Links = styled.div`
  display: inline-block;
  position: absolute;
  bottom: -2em;
  left: 50%;
  transform: translate(-50%, 100%);
  line-height: 1.5;
  font-size: 1.4em;
  text-align: left;

  img {
    display: inline-block;
    height: 38px;
    position: relative;
    top: 7px;
  }
  @media (max-width: 700px) {
    font-size: 1.2em;
    text-align: center;

    img {
      height: 33px;
      top: 7px;
    }
  }
  @media (max-width: 475px) {
    font-size: 1em;

    img {
      height: 26px;
      top: 5px;
    }
  }
`;
const GrowImage = styled.img``;
export default function Hero() {
  return (
    <Wrapper>
      <Centered>
        <BoxWrapper>
          {/* <Box src={BoxImage} />
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
          <TapeImage src={Tape} /> */}
          <HeroImage src={HeroCD} />
        </BoxWrapper>
        <Links>
          <Code>
            Star on <Anchor href="#">Github</Anchor>, let it{" "}
            <Tooltip text="grow">
              <img src={Grow} />
            </Tooltip>
            .
          </Code>
          <br />
          <Code>
            Then, see <Anchor href="#">storybook</Anchor>.
          </Code>
        </Links>
      </Centered>
    </Wrapper>
  );
}
