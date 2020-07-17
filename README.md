<h1 align="center">React95</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/react95"><img src="https://flat.badgen.net/npm/dt/react95" alt="NPM" /></a>
  <a href="https://circleci.com/gh/arturbien/React95"><img src="https://flat.badgen.net/circleci/github/arturbien/React95/master" alt="circleCI build" /></a>
  <a href="https://www.npmjs.com/package/react95"><img src="https://flat.badgen.net/npm/v/react95" alt="React95 version" /></a>
  <a href="https://www.npmjs.com/package/react95"><img src="https://flat.badgen.net/npm/license/react95" alt="React95 license" /></a>

</p>
<h3 align="center">
  <a href="https://arturbien.github.io/React95/?path=/story/select--fixed-width">Components</a> -
  <a href="https://react95.io/">Website</a> -
  <a href="https://join.slack.com/t/react95/shared_invite/enQtODExMzQ1Nzc2MjQ1LTMyNWVlYjllMzJhNTU3N2E2MDY1ZmM2ZTk3NzZkMjQ3YWIwMTlmNTZmMzc4OWU2MGVmYzZjMzNiNDI5NjgyMzA">Slack</a> -
  <a href="https://www.paypal.me/react95">PayPal donation 💰</a>
</h3>
<p align="center">
  <b>Refreshed</b> Windows95 UI components for your modern React apps. <br /> Built with styled-components 💅</p>

![demo](https://user-images.githubusercontent.com/28541613/56099388-7513f800-5f0c-11e9-893b-532eded39f92.png)

### Support

- [Become a backer or sponsor on Patreon](https://www.patreon.com/arturbien).
- [One-time donation via PayPal](https://www.paypal.me/react95)

## Motivation

Create modern mobile/web applications with the retro and old school Windows 95 style. Our goal is not to exactly recreate Windows95 components, but to provide a solid component library for current scenarios.

## Getting Started

First, install component library and styled-components in your project directory:

```sh
# yarn
$ yarn react95 styled-components

# npm
$ npm i react95 styled-components
```

Apply style reset, wrap your app content with ThemeProvider with theme of your choice... and you are ready to go! 🚀

```jsx
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, List, ListItem, Divider } from 'react95';
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import MSSansSerif from "react95/dist/fonts/MS-Sans-Serif.woff2";
import MSSansSerifBold from "react95/dist/fonts/MS-Sans-Serif-Bold.woff2";


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'MS-Sans-Serif';
    src: url('${MSSansSerif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'MS-Sans-Serif';
    src: url('${MSSansSerifBold}') format("woff2");
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: "MS-Sans-Serif";
  }
  ${styleReset}
`;

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <List>
        <ListItem>🎤 Sing</ListItem>
        <ListItem>💃🏻 Dance</ListItem>
        <Divider />
        <ListItem disabled>😴 Sleep</ListItem>
      </List>
    </ThemeProvider>
  </div>
);

export default App;
```

### Explore

You can view components on [Storybook](https://arturbien.github.io/React95/). If you want to play with it locally, simply clone the repo and run commands below:

```sh
# yarn
$ yarn && yarn storybook

# npm
$ npm i && npm run storybook
```

### Submit your project

Apps built with React95 will be submitted on the official React95 [website](https://react95.io) 🤟🏻

### Contributing

Any help from UI / UX designers would be EXTREMELY appreciated. The challenge is to come up with new component designs / layouts that are broadly used in modern UIs, that weren't present back in 95.

There's a lot to do. If you want to help with the project, feel free to open pull requests and submit issues. Let's make UI great again 🔥

For every component, we have a `.stories` file for Storybook and a `.mdx` file for Docz. In order to create a `.mdx` file we recommend copying [this template](https://github.com/arturbien/React95/blob/chore/docs-docz/docs/template) file and replaceing ___component_ with the component name.

### Roadmap

There's quite a few things to be done:

- Styled system
- Lots of tacky color schemes 🌈
- Custom icons maybe? (Emojis from Windows 10 seem to go very well with the lib)
- Typography
- Range slider component
- Avatar component
- Components common in all modern UIs (FAB, Badge, Avatar, Snackbar, Steppers)

And the boring stuff too:

- Testing
- Semantic release
