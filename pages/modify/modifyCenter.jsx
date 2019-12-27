import React from "react";
import styled from "styled-components";
import SelectCenterToModify from "../../src/components/center/SelectCenterToModify";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  justify-items: center;
  align-content: center;
`;
const modifyCenter = props => {
  return (
    <DivStyled>
      <SelectCenterToModify />
    </DivStyled>
  );
};
export default modifyCenter;
