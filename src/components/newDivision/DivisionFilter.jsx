import React from 'react'

function DivisionFilter({allDivisions,handleChange,handleRegionChange}) {

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
                    <label htmlFor="division">Select division</label>
                    <select
                     className="form-control" 
                     type="text" 
                     name="division"
                     onChange={handleRegionChange} 
                     id="division">
                        {divsForSelect}
                    </select>
                </div>
                {/* end region select item */}
                <input 
                type="text"
                name="denty"
                id="denty"
                />
            </form>
        </section>
    )
}
export default DivisionFilter