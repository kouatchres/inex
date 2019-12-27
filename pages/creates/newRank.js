import React from "react";
import CreateRank from "../../src/components/rank/CreateRank";
import styled from "styled-components";

const StyledRegion = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 350px;
  background: #359;
  width: 40vw;
`;

const NewRank = () => {
  return (
    <StyledRegion>
      <CreateRank />
    </StyledRegion>
  );
};
export default NewRank;
