import React from 'react'
import SingleCandidate from '../src/components/SingleCandidate'

function singleCand({query}) {
    return (
        <div>
            <SingleCandidate id={query.id}/>
        </div>

    )
}
export default singleCand;

// import UpdateCandidate from '../src/components/UpdateCandidate' import styled
// from "styled-components"; const CenterPage= styled.div` margin:0 auto; width:
// 50vw; h5{     text-align: center;     font-size: 2.5rem; } `; function
// UpdatePage({ query }) {     return (         <CenterPage>
// <UpdateCandidate id={query.id}/>         </CenterPage>     ) } export default
// UpdatePage