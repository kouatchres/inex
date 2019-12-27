import React from "react";
import styled from "styled-components";
import SelectExamToModify from "../../src/components/exam/SelectExamToModify";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  justify-items: center;
  align-content: center;
`;
const modifyExam = props => {
  return (
    <DivStyled>
      <SelectExamToModify />
    </DivStyled>
  );
};
export default modifyExam;
