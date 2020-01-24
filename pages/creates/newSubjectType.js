import React from "react";
import CreateSubjectType from "../../src/components/subjectType/CreateSubjectType";
import styled from "styled-components";

const StyledRegion = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 350px;
  background: #359;
  width: 40vw;
`;

const NewSubjectType = () => {
  return (
    <StyledRegion>
      <CreateSubjectType />
    </StyledRegion>
  );
};
export default NewSubjectType;
