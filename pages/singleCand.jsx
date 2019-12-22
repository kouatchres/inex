import React from "react";
import SingleCandidate from "../src/components/SingleCandidate";

function singleCand({ query }) {
  return (
    <div>
      <SingleCandidate id={query.id} />
    </div>
  );
}
export default singleCand;
