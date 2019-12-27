import React from "react";
import Registrations from "../../src/components/registration/Registrations";
import styled from "styled-components";

const StyledRegion = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 80rem;
  width: 80vw;
`;

const register = () => {
  return (
    <StyledRegion>
      <Registrations />
    </StyledRegion>
  );
};
export default register;
