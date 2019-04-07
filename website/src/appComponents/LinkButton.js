// file: /components/LinkButton.jsx
import React from "react";
import propTypes from "prop-types";
import { withRouter } from "react-router";
import { Button } from "../components";

const LinkButton = props => {
  const { to, onClick, children, history, location, ...otherProps } = props;
  return (
    <Button
      active={location.pathname === to}
      {...otherProps}
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
    >
      {children}
    </Button>
  );
};

LinkButton.propTypes = {
  to: propTypes.string.isRequired,
  children: propTypes.node.isRequired
};

export default withRouter(LinkButton);
