<h1 align="center">React95</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/react95"><img src="https://flat.badgen.net/npm/dt/react95" alt="NPM"></a>
  <a href="https://www.npmjs.com/package/react95"><img src="https://flat.badgen.net/npm/v/react95" alt="React95 version"></a>
  <a href="https://www.npmjs.com/package/react95"><img src="https://flat.badgen.net/npm/license/react95" alt="React95 license"></a>

</p>
<h3 align="center">
  <a href="https://arturbien.github.io/React95/?path=/story/select--fixed-width">Components</a> -
  <a href="https://react95.io/">Website</a> -
  <a href="https://join.slack.com/t/react95/shared_invite/enQtOTA1NzEyNjAyNTc4LWYxZjU3NWRiMWJlMGJiMjhkNzE2MDA3ZmZjZDc1YmY0ODdlZjMwZDA1NWJiYWExYmY1NTJmNmE4OWVjNWFhMTE">Slack</a> -
  <a href="https://www.paypal.me/react95">PayPal donation 💰</a>
</h3>
<p align="center">
  <b>Refreshed</b> Windows95 UI components for your modern React apps. <br> Built with styled-components 💅</p>

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
$ yarn add react95 styled-components

# npm
$ npm i react95 styled-components
```

Apply style reset, wrap your app content with ThemeProvider with theme of your choice... and you are ready to go! 🚀

```jsx
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset, themes, List, ListItem, Divider } from 'react95';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const App = () => (
  <div>
    <ResetStyles />
    <ThemeProvider theme={themes.default}>
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
