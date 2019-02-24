import React from "react";
import Button from "../Button/Button";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import Divider from "../Divider/Divider";

import LogoIcon from "../Icon/LogoIcon";

function Menu() {
  const [open, setOpen] = React.useState(null);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {Boolean(open) && (
        <List horizontalAlign="left" verticalAlign="bottom" open={open}>
          <ListItem onClick={handleClose}>👨‍💻 Profile</ListItem>
          <ListItem onClick={handleClose}>📁 My account</ListItem>
          <Divider />
          <ListItem onClick={handleClose} disabled>
            🔙 Logout
          </ListItem>
        </List>
      )}
      <Button
        onClick={handleClick}
        active={Boolean(open)}
        // style={{ fontWeight: "bold", fontSize: "1.2em" }}
      >
        Start
      </Button>
    </div>
  );
}

export default Menu;
