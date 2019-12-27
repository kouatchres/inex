import React from "react";
import styled from "styled-components";
import SelectSubDivisionToModify from "../../src/components/subDivision/SelectSubDivisionToModify";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  justify-items: center;
  align-content: center;
`;
const modifySubDivision = props => {
  return (
    <DivStyled>
      <SelectSubDivisionToModify />
    </DivStyled>
  );
};
export default modifySubDivision;
