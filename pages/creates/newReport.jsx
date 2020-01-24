import React from "react";
import CreateReport from "../../src/components/report/CreateReport";
import styled from "styled-components";

const StyledCandidate = styled.div`
  margin: 0 auto;
  min-width: 220px;
  width: 50vw;
  h5 {
    margin: 10px auto;
    text-align: center;
    font-size: 2.1rem;
    font-weight: normal;
  }
`;

const newReport = () => {
  return (
    <StyledCandidate>
      <CreateReport />
    </StyledCandidate>
  );
};
export default newReport;
