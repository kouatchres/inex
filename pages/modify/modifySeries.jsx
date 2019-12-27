import React from "react";
import styled from "styled-components";
import SelectSeriesToModify from "../../src/components/series/SelectSeriesToModify";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  justify-items: center;
  align-content: center;
`;
const modifySeries = props => {
  return (
    <DivStyled>
      <SelectSeriesToModify />
    </DivStyled>
  );
};
export default modifySeries;
