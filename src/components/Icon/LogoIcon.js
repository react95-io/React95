import React from "react";
import logoIMG from "../../images/logo.png";

export default function LogoIcon({ style }) {
  const baseClass = "LogoIcon";
  return (
    <span
      className={baseClass}
      style={{ ...style, display: "inline-block", height: "22px" }}
    >
      <img
        src={logoIMG}
        alt="react95 logo"
        style={{ height: "100%", width: "auto" }}
      />
    </span>
  );
}
