import React from 'react'

function DivisionFilter({allDivisions}) {
    console.log("divisions in division filter");
        console.log(allDivisions.divisions);
    const  allDivs = [...allDivisions.divisions];
   const  divsForSelect = allDivs.map(item => {
        return (
            <option key={item.id}>{item.divName}</option>
        )
    })
    return (
        <section>
            <h3>this is th form beginnings</h3>
            <form className="filter-form">
                {  /*  Select item*/   }
                <div className="form-group">
                    <label htmlFor="region">Select division</label>
                    <select
                     className="form-control" 
                     type="text" 
                     name="region" 
                     id="region">
                        {divsForSelect}
                    </select>
                </div>
                {/* end region select item */}
            </form>
        </section>
    )
}
export default DivisionFilter