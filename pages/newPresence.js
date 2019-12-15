import React from "react";
import CreatePresence from "../src/components/CreatePresence";
import styled from "styled-components";

const StyledRegion = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 350px;
  background: #359;
  width: 40vw;
`;

const NewPresence = () => {
  return (
    <StyledRegion>
      <CreatePresence />
    </StyledRegion>
  );
};
export default NewPresence;
