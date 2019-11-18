import React from 'react'

function RegionFilter({allRegions}) {
    console.log("region in region filter");
    console.log(allRegions.regions);
    let  allRegs = [...allRegions.regions];
    const regsForSelect = allRegs.map(item => {
        return (
            <option key={item.id}>{item.regName}</option>
        )
    })
    return (
        <section>
            <form className="filter-form">
                {  /*  Select item*/   }
                <div className="form-group">
                    <label htmlFor="region">Select region</label>
                    <select
                     className="form-control" 
                     type="text" 
                     name="region" 
                     id="region">
                        {regsForSelect}
                    </select>
                </div>
                {/* end region select item */}
            </form>
        </section>
    )
}
export default RegionFilter