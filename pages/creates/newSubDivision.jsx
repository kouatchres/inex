import React from "react";
import styled from "styled-components";
import CreateSubDivision from "../../src/components/subDivision/CreateSubDivision";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 40vw;
`;
const newSubDivision = props => {
  return (
    <DivStyled>
      <CreateSubDivision />
    </DivStyled>
  );
};
export default newSubDivision;
