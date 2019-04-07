import React from "react";
import styled from "styled-components";

import LogoIMG from "../../assets/images/logo.png";
import PlasticIMG from "../../assets/images/plastic.png";
import NpmIMG from "../../assets/images/npm.png";
import GithubIMG from "../../assets/images/github.png";

import withFullScreen from "../../hoc/withFullScreen";
import { Button } from "../../components";

const Wrapper = withFullScreen(props => <div {...props} />);
const StyledWrapper = styled(Wrapper)`
  position: relative;
  background-image: url(https://cdn.instructables.com/FRM/4UUR/GJQE90QG/FRM4UURGJQE90QG.LARGE.jpg);
  background-size: cover;
  border-right: 2px solid #050608;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${PlasticIMG});
    background-size: cover;
    opacity: 0.2;
    mix-blend-mode: screen;
    z-index: 999;
    pointer-events: none;
  }
`;

const Logo = styled.img`
  position: relative;
  width: 70%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const TopBar = styled.div`
  background: #050608;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
`;
const NPMLogo = styled.img`
  position: absolute;
  left: 0;
  top: 56px;
  padding: 15px 10px;
  background: #050608;
  width: 70px;
`;
const GithubLogo = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  padding: 15px 10px;
  background: white;
  width: 70px;
`;
export default function Desktop() {
  return (
    <StyledWrapper>
      <TopBar>
        <GithubLogo src={GithubIMG} />
        <NPMLogo src={NpmIMG} />
      </TopBar>
      <Logo src={LogoIMG} alt="React 95 logo" />
    </StyledWrapper>
  );
}
