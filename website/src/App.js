import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import { reset, themes, Button } from "./lib";
import { BrowserRouter as Router, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themes.default}>
        <>
          <GlobalStyle />

          <main>
            <Router>
              <Route
                exact
                path="/"
                component={() => <Button>asdasdasd</Button>}
              />
            </Router>
          </main>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
