![ogImage](https://user-images.githubusercontent.com/28541613/56097057-f741f380-5eef-11e9-8296-92c4dc6e853d.png)

# React95
Refreshed Windows95 UI components for your modern React apps. 

Built with styled-components 💅

![downloads-badge](https://flat.badgen.net/npm/dw/react95)
![version-badge](https://flat.badgen.net/npm/v/react95)
![license-badge](https://flat.badgen.net/npm/license/react95)

![banner](https://user-images.githubusercontent.com/28541613/52980546-ecc91900-33da-11e9-89fc-2a7648d38c4a.png)

## Getting Started
First, install component library in your project directory: 
```sh
$ npm i react95
```
Then wrap your app in ThemeProvider and apply style reset like shown below, and your're ready to go!
```jsx
import React from 'react';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { themes, reset, List, ListItem, Divider } from 'react95';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default props =>
  <ThemeProvider theme={themes.default}>
    <>
      <ResetStyles />
      <List>
          <ListItem>🎤 Sing</ListItem>
          <ListItem>💃🏻 Dance</ListItem>
          <Divider />
          <ListItem disabled>😴 Sleep</ListItem>
      </List>
    </>
  </ThemeProvider>
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
There's a lot to do. If you want to help me with the project, feel free to open pull requests and submit issues. Let't make UI great again 🔥 

### Roadmap
There's quite a few things to be done:
- **Lots of tacky color schemes 🌈**
- **Custom icons maybe? (Emojis from Windows 10 seem to go very well with the lib)**
- **Typography**
- **Range slider component**
- **Avatar component**
- **Components common in all modern UIs (FAB, Badge, Avatar, Snackbar, Steppers)**

And the boring stuff too:
- **Testing**
- **Semantic release**
- **eslint**
