import React from "react";
import CenterAdmin from "../../src/components/centerAdmin/CenterAdmin";
import styled from "styled-components";

const StyledRegion = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 80rem;
  width: 80vw;
`;

const ceterAdmin = () => {
  return (
    <StyledRegion>
      <CenterAdmin />
    </StyledRegion>
  );
};
export default ceterAdmin;
