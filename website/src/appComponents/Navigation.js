import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Button } from "../components";
import { withRouter, Link } from "react-router-dom";

const paths = [
  { path: "/", label: "💾" },
  { path: "/settings", label: "💻" },
  { path: "/about", label: "😎" },
  { path: "/pizza", label: "🍕" }
];

const Nav = styled(AppBar)`
  bottom: 0;
  width: 100%;
  top: auto;
`;
function Navigation(props) {
  const currentPath = props.location.pathname;
  console.log(currentPath);
  return (
    <Nav>
      <Toolbar>
        {paths.map((path, i) => (
          <Button key={i} fullWidth active={currentPath === path.path}>
            <Link to={path.path}>{path.label}</Link>
          </Button>
        ))}
      </Toolbar>
    </Nav>
  );
}

export default withRouter(Navigation);
