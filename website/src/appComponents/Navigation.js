import React from "react";
import styled from "styled-components";

import { AppBar, Toolbar } from "../components";
import LinkButton from "./LinkButton";

import InstallIcon from "../assets/images/icons/install.ico";
import SettingsIcon from "../assets/images/icons/settings.ico";
import AboutIcon from "../assets/images/icons/help_book.ico";
import LogoIcon from "../assets/images/icons/react95.png";

const StyledIcon = styled.img`
  height: 25px;
`;
const StyledLogoIcon = styled.img`
  height: 20px;
`;
const paths = [
  { to: "/", label: <StyledLogoIcon src={LogoIcon} /> },
  { to: "/install", label: <StyledIcon src={InstallIcon} /> },
  { to: "/settings", label: <StyledIcon src={SettingsIcon} /> },
  { to: "/about", label: <StyledIcon src={AboutIcon} /> }
];

const Nav = styled(AppBar)`
  bottom: 0;
  width: 100%;
  top: auto;
`;
function Navigation(props) {
  return (
    <Nav>
      <Toolbar>
        {paths.map((path, i) => (
          <LinkButton key={i} fullWidth to={path.to}>
            {path.label}
          </LinkButton>
        ))}
      </Toolbar>
    </Nav>
  );
}

export default Navigation;
