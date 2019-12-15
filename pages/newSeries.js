import React from "react";
import CreateSeries from "../src/components/CreateSeries";
import styled from "styled-components";

const StyledRegion = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 350px;
  background: #359;
  width: 40vw;
`;

const NewSeries = () => {
  return (
    <StyledRegion>
      <CreateSeries />
    </StyledRegion>
  );
};
export default NewSeries;
