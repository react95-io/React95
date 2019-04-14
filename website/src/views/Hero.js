import React from "react";
import styled from "styled-components";

import HeroCD from "../assets/images/heroCD2.png";
import Plastic from "../assets/images/plastic.jpg";
import Clouds from "../assets/images/clouds.jpg";
import Grow from "../assets/images/growEmoji.png";

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
  margin-top: -2em;

  @media (max-height: 700px) {
    max-width: 420px;
    margin-top: -5em;
  }
  @media (max-width: 700px) {
    margin-top: -5em;
  }
`;

const Centered = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Links = styled.div`
  display: inline-block;
  position: absolute;
  bottom: -1.5em;
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
  @media (max-height: 700px) {
    font-size: 1.2em;
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
export default function Hero() {
  return (
    <Wrapper>
      <Centered>
        <BoxWrapper>
          <HeroImage src={HeroCD} />
        </BoxWrapper>
        <Links>
          <Code>
            Star on{" "}
            <Anchor href="https://github.com/arturbien/React95">Github</Anchor>,
            let it{" "}
            <Tooltip text="grow">
              <img src={Grow} alt="Growing seed" />
            </Tooltip>
            .
          </Code>
          <br />
          <Code>
            Then, see{" "}
            <Anchor href="https://arturbien.github.io/React95/">
              storybook
            </Anchor>
            .
          </Code>
        </Links>
      </Centered>
    </Wrapper>
  );
}
