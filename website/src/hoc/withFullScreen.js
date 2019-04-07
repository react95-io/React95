import React from "react";

export default Component => props => (
  <Component {...props} style={{ width: "100%", height: "100%" }} />
);
