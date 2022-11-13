<h1 align="center">React95</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/react95"><img src="https://flat.badgen.net/npm/dt/react95" alt="NPM" /></a>
  <a href="https://github.com/arturbien/React95/actions/workflows/release.yml"><img src="https://github.com/arturbien/React95/actions/workflows/release.yml/badge.svg" alt="release status" /></a>
  <a href="https://www.npmjs.com/package/react95"><img src="https://flat.badgen.net/npm/v/react95" alt="React95 version" /></a>
  <a href="https://www.npmjs.com/package/react95"><img src="https://flat.badgen.net/npm/license/react95" alt="React95 license" /></a>
  <a href="https://twitter.com/intent/follow?screen_name=react95_io"><img src="https://img.shields.io/twitter/follow/react95_io" alt="React95 license" /></a>
</p>
<h3 align="center">
  <a href="https://storybook.react95.io/?path=/story/window--default">Components</a> -
  <a href="https://coins95.web.app/">Demo app</a> -
  <a href="https://github.com/react95-io/react95-native">React Native</a> -
  <a href="https://join.slack.com/t/react95/shared_invite/enQtOTA1NzEyNjAyNTc4LWYxZjU3NWRiMWJlMGJiMjhkNzE2MDA3ZmZjZDc1YmY0ODdlZjMwZDA1NWJiYWExYmY1NTJmNmE4OWVjNWFhMTE">Slack</a> -
  <a href="https://www.paypal.me/react95">PayPal donation 💰</a>
</h3>
<p align="center">
  <b>Refreshed</b> Windows95 UI components for your modern React apps. <br /> Built with styled-components 💅</p>

![hero](https://user-images.githubusercontent.com/28541613/81947711-28b05580-9601-11ea-964a-c3a6de998496.png)

### Support

- [Become a backer or sponsor on Patreon](https://www.patreon.com/arturbien)
- [One-time donation via PayPal](https://www.paypal.me/react95)

## Getting Started

First, install component library and styled-components in your project directory:

```sh
# yarn
$ yarn add react95 styled-components

# npm
$ npm install react95 styled-components
```

Apply style reset, wrap your app with ThemeProvider with theme of your choice... and you are ready to go! 🚀

```jsx
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { MenuList, MenuListItem, Separator, styleReset } from 'react95';
// pick a theme of your choice
import original from 'react95/dist/themes/original';
// original Windows95 font (optionally)
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <MenuList>
        <MenuListItem>🎤 Sing</MenuListItem>
        <MenuListItem>💃🏻 Dance</MenuListItem>
        <Separator />
        <MenuListItem disabled>😴 Sleep</MenuListItem>
      </MenuList>
    </ThemeProvider>
  </div>
);

export default App;
```

### Submit your project

Apps built with React95 will be featured on the official React95 [website](https://react95.io) 🤟🏻

### Contributing

Any help from UI / UX designers would be EXTREMELY appreciated. The challenge is to come up with new component designs / layouts that are broadly used in modern UIs, that weren't present back in 95.

If you want to help with the project, feel free to open pull requests and submit issues or component proposals. Let's bring this UI back to life ♥️
