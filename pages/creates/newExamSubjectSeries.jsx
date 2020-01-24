import React from "react";
import ExamSubjSeries from "../../src/components/examSubjSeries/ExamSubjSeries";
import styled from "styled-components";

const StyledRegion = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  width: 80vw;
`;
function newSubjectSeries() {
  return (
    <StyledRegion>
      <ExamSubjSeries />
    </StyledRegion>
  );
}

export default newSubjectSeries;
