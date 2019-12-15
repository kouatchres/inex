import React from "react";
import styled from "styled-components";
import CreateTown from "../src/components/CreateTown";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 40vw;
`;
const newTown = props => {
  return (
    <DivStyled>
      <CreateTown />
    </DivStyled>
  );
};
export default newTown;
