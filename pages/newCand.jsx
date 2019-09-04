import React from 'react';
import CreateCandidate from '../src/components/CreateCandidate';
import styled from 'styled-components'


const StyledCandidate = styled.div`
margin: 0 auto;
min-width: 350px;
width: 90vw;
`;


const newCand =() => {
  return (
 <StyledCandidate>
    <CreateCandidate/>
 </StyledCandidate>
  )
    
}
export default newCand;