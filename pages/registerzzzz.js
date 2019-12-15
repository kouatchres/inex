import React from "react";
import Registration from "../src/components/Registration";
import styled from "styled-components";

const StyledRegion = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 350px;
  background: #359;
  width: 40vw;
`;

const register = () => {
  return (
    <StyledRegion>
      <Registration />
    </StyledRegion>
  );
};
export default register;
