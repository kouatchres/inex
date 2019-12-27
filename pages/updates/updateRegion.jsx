import React from "react";
import UpdateRegion from "../../src/components/region/UpdateRegion";
import styled from "styled-components";

const CenteredStyles = styled.div`
  margin: 0 auto;
  width: 40vw;
  h5 {
    text-align: center;
  }
`;
const updateRegion = ({ query }) => {
  return (
    <CenteredStyles>
      <UpdateRegion id={query.id} />
    </CenteredStyles>
  );
};
export default updateRegion;
