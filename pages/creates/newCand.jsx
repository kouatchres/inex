import React from 'react';
import CreateCandidate from '../../src/components/candidate/CreateCandidate';
import styled from 'styled-components'


const StyledCandidate = styled.div`
margin: 0 auto;
min-width: 220px;
width: 50vw;
h5{
margin: 10PX auto;
text-align:center;
font-size: 2.1rem;
font-weight: normal;
}
`;


const newCand =() => {
  return (
 <StyledCandidate>
    <CreateCandidate/>
 </StyledCandidate>
  )
    
}
export default newCand;