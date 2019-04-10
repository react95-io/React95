import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactFullpage from "@fullpage/react-fullpage";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import { reset, themes, Button, Anchor } from "./lib";

import Me from "./assets/images/me.jpg";
import CD from "./assets/images/cd.png";
import Logo from "./assets/images/logo.png";
import Plastic from "./assets/images/plastic.jpg";
import LogoIcon from "./assets/images/icons/logo.png";

import Settings from "./components/Settings";
const GlobalStyle = createGlobalStyle`
  ${reset}
  body, html {
    width: 100%;
    height: 100%;
  }
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  background: teal;
`;
const Section = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
`;
const Hero = styled(Section)`
  background-image: url(https://cdn.instructables.com/FRM/4UUR/GJQE90QG/FRM4UURGJQE90QG.LARGE.jpg);
  background-size: cover;
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
const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #050608;
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
  img {
    height: 28px;
    margin-right: 0.25em;
    margin-left: -0.125em;
  }
`;
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themes.default}>
        <>
          <GlobalStyle />

          <Main>
            <ReactFullpage
              render={({ state, fullpageApi }) => {
                return (
                  <ReactFullpage.Wrapper>
                    <Hero className="section">
                      <TopBar />
                      <Centered>
                        <HeroImage src={Logo} alt="React95 logo" />
                        <br />
                      </Centered>
                    </Hero>
                    <Section className="section">
                      <Code>npm install react95</Code>
                      <br />
                      <MeImage src={Me} alt="childhood photo of Artur Bien" />
                      <br />
                      <StyledButton
                        size="lg"
                        onClick={() => fullpageApi.moveSectionDown()}
                      >
                        <img src={LogoIcon} />
                        Start
                      </StyledButton>
                    </Section>
                    <Section className="section">
                      <Settings />
                    </Section>
                    <Section
                      className="section"
                      style={{ background: "white" }}
                    >
                      <Anchor
                        style={{ fontSize: "3rem", marginBottom: "3rem" }}
                        href="#"
                      >
                        Storybook
                      </Anchor>
                      <br />
                      <Anchor style={{ fontSize: "3rem" }} href="#">
                        Github
                      </Anchor>
                    </Section>
                  </ReactFullpage.Wrapper>
                );
              }}
            />
          </Main>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
