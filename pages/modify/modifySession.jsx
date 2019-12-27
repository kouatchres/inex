import React from "react";
import styled from "styled-components";
import SelectSessionToModify from "../../src/components/session/SelectSessionToModify";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  justify-items: center;
  align-content: center;
`;
const modifySeries = props => {
  return (
    <DivStyled>
      <SelectSessionToModify />
    </DivStyled>
  );
};
export default modifySeries;
