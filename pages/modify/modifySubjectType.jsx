import React from "react";
import styled from "styled-components";
import SelectSubjectTypeToModify from "../../src/components/subjectType/SelectSubjectTypeToModify";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  justify-items: center;
  align-content: center;
`;
const modifySubjectType = props => {
  return (
    <DivStyled>
      <SelectSubjectTypeToModify />
    </DivStyled>
  );
};
export default modifySubjectType;
