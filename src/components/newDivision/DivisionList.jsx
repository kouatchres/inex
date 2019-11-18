import React from 'react'

function DivisionList({allRegions}) {
    console.log(allRegions);
   const divisions = [...allRegions.divisions];
     const tempDivs= divisions.map(item => {
              return <li key={item.id} >{item.divName}</li>
})

    return (
        <div>
            <h6>Hey the is division list!!</h6>
             <ul>{ tempDivs}</ul>
          </div>
    )
}

export default DivisionList
