import React from "react";
import CandDetailedResults from "../../../src/components/results/CandDetailedResults"

function candResults({ query }) {
  return (
    <div>
      <CandDetailedResults id={query.id} />
    </div>
  );
}
export default candResults;
