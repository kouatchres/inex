import React from "react";
import CreateSession from "../../src/components/session/CreateSession";
import styled from "styled-components";

const StyledRegion = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 350px;
  background: #359;
  width: 40vw;
`;

const NewSession = () => {
  return (
    <StyledRegion>
      <CreateSession />
    </StyledRegion>
  );
};
export default NewSession;
