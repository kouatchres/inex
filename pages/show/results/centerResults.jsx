import React from "react";
import CenterAllDetailedResults from "../../../src/components/score/CenterAllDetailedResults";

function centerResults({ query }) {
    return (
        <div>
            <CenterAllDetailedResults id={query.id} />
        </div>
    );
}
export default centerResults;
