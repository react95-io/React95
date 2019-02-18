import React from "react";
import logoIMG from "../../images/logo.png";

export default function LogoIcon({}) {
  const baseClass = "LogoIcon";
  return (
    <span
      className={baseClass}
      style={{ display: "inline-block", height: "24px", marginLeft: -5 }}
    >
      <img
        src={logoIMG}
        alt="react95 logo"
        style={{ marginRight: 5, height: "100%", width: "auto" }}
      />
    </span>
  );
}
