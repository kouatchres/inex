import React from "react";
import styled from "styled-components";
import SelectRegionToModify from "../../src/components/region/SelectRegionToModify";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  justify-items: center;
  align-content: center;
`;
const modifyRegion = props => {
  return (
    <DivStyled>
      <SelectRegionToModify />
    </DivStyled>
  );
};
export default modifyRegion;
