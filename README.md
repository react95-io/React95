![ogImage](https://user-images.githubusercontent.com/28541613/56097057-f741f380-5eef-11e9-8296-92c4dc6e853d.png)

# React95
**Refreshed** Windows95 UI components for your modern React apps. 

Built with styled-components 💅

![downloads-badge](https://flat.badgen.net/npm/dw/react95)
![version-badge](https://flat.badgen.net/npm/v/react95)
![license-badge](https://flat.badgen.net/npm/license/react95)

![demo](https://user-images.githubusercontent.com/28541613/56099388-7513f800-5f0c-11e9-893b-532eded39f92.png)

## Getting Started
First, install component library in your project directory: 
```sh
$ npm i react95
```
Apply style reset, wrap your app content with ThemeProvider with theme of your choice... and you are ready to go! 🚀
```jsx
import React from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List, ListItem, Divider } from 'react95';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default props =>
  <div className="App">
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
  
```

### Explore
You can view components on [Storybook](https://arturbien.github.io/React95/). If you want to play with it locally, simply clone the repo and run commands below:
```sh
$ npm i 
$ npm run storybook
```
### Submit your project
Apps built with React95 will be submitted on official React95 [website](https://react95.io) 🤟🏻

### Support / Contributing
There's a lot to do. If you want to help with the project, feel free to open pull requests and submit issues. Let't make UI great again 🔥 

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
- eslint
