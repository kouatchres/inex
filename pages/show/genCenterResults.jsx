import React from "react";
import GenCenterResults from "../../src/components/score/center/GenCenterResults"

function genCenterResults({ query }) {
    return (
        <div>
            <GenCenterResults id={query.id} />
        </div>
    );
}
export default genCenterResults;
