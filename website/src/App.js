import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactFullpage from "@fullpage/react-fullpage";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import { reset, themes } from "./lib";

import Hero from "./views/Hero";
import Finally from "./views/Finally";
import Info from "./views/Info";

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

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themes.default}>
        <>
          <GlobalStyle />

          <Main>
            <ReactFullpage
              anchors={["", "wait", "secondPage", "thirdPage"]}
              verticalCentered={false}
              render={({ state, fullpageApi }) => {
                return (
                  <ReactFullpage.Wrapper>
                    <Section className="section">
                      <Hero />
                    </Section>
                    <Section className="section">
                      <Finally onStart={() => fullpageApi.moveSectionDown()} />
                    </Section>
                    <Section className="section">
                      <Info />
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
