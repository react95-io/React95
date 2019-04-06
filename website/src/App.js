import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./components/index.css";

import { themes, Button } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./appComponents/Navigation";
import Desktop from "./views/Desktop/Desktop";
import Settings from "./views/Settings/Settings";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url(https://external-preview.redd.it/dgpvwKwDCx0NcDBS0ZpNohYrnpxbZL5yeJnY2-L9IbY.jpg?auto=webp&s=a32a63c7f7036d8db8035c3cd30ee2231bd984cf);
  background-size: cover;
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
  overflow: hidden;
`;
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themes.default}>
        <Wrapper>
          <Main>
            <Router>
              <Route exact path="/" component={Desktop} />
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
