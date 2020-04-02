import React from "react";
import CandidateResultByRegisID from "../../../src/components/score/candidate/CandidateResultByRegisID";

function candCodeResults({ query }) {
    return (
        <div>
            <CandidateResultByRegisID id={query.id} />
        </div>
    );
}
export default candCodeResults;
