import React from "react";
import styled from "styled-components";
import SelectRankToModify from "../../src/components/rank/SelectRankToModify";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  justify-items: center;
  align-content: center;
`;
const modifySeries = props => {
  return (
    <DivStyled>
      <SelectRankToModify />
    </DivStyled>
  );
};
export default modifySeries;
