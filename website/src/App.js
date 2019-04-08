import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import { themes, Button } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./appComponents/Navigation";
import Desktop from "./views/Desktop/Desktop";
import Install from "./views/Install/Install";
import Settings from "./views/Settings/Settings";

import PlasticIMG from "./assets/images/plastic.png";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url(https://ak4.picdn.net/shutterstock/videos/24223834/thumb/1.jpg);
  background-size: cover;
  /* background: #050608; */
`;

const ratio = 0.8;

const Main = styled.main`
  display: inline-block;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${375 * ratio}px;
  height: ${667 * ratio}px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
`;
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themes.default}>
        <Wrapper>
          <Main>
            <Router>
              <Route exact path="/" component={Desktop} />
              <Route exact path="/install" component={Install} />
              <Route exact path="/settings" component={Settings} />
              <Navigation />
            </Router>
          </Main>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
