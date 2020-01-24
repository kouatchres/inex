import React from "react";
import RegSubjectSeries from "../../src/components/subjectSeries/RegSubjectSeries";
import styled from "styled-components";

const StyledRegion = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  background: #359;
  width: 60vw;
`;

const NewSubjectSeries = () => {
  return (
    <StyledRegion>
      <RegSubjectSeries />
    </StyledRegion>
  );
};
export default NewSubjectSeries;
