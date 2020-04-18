import React from "react";
import NewGenCenterResults from "../../src/components/score/center/NewGenCenterResults"

function genCenterResults({ query }) {
    return (
        <div>
            <NewGenCenterResults id={query.id} />
        </div>
    );
}
export default genCenterResults;
