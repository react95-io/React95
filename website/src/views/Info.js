import React from "react";
import styled from "styled-components";
import Center from "../components/Center";

import { DatePicker } from "../lib";

const StyledCenter = styled(Center)`
  text-align: left;
`;

export default function Info() {
  return (
    <StyledCenter>
      <DatePicker date={new Date(1995, 7, 24)} />
    </StyledCenter>
  );
}
