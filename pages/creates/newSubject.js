import React from "react";
import CreateSubject from "../../src/components/subject/CreateSubject";
import styled from "styled-components";

const StyledRegion = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 350px;
  background: #359;
  width: 40vw;
`;

const NewSubject = () => {
  return (
    <StyledRegion>
      <CreateSubject />
    </StyledRegion>
  );
};
export default NewSubject;
