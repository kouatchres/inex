import React from "react";
import styled from "styled-components";
import SelectGenderToModify from "../../src/components/gender/SelectGenderToModify";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  justify-items: center;
  align-content: center;
`;
const modifyGender = props => {
  return (
    <DivStyled>
      <SelectGenderToModify />
    </DivStyled>
  );
};
export default modifyGender;
