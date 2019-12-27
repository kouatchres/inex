import React from "react";
import styled from "styled-components";
import SelectEducTypeToModify from "../../src/components/educationType/SelectEducTypeToModify";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  justify-items: center;
  align-content: center;
`;
const modifyRegion = props => {
  return (
    <DivStyled>
      <SelectEducTypeToModify />
    </DivStyled>
  );
};
export default modifyRegion;
