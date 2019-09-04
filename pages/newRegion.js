import React from 'react';
import CreateRegion from '../src/components/CreateRegion';
import styled from 'styled-components'



const StyledRegion = styled.div`
display: block; 
text-align:center;
margin: 0 auto;
min-width:350px;
background:#359;
width: 40vw;
`;

const NewRegion =() => {
  return (
    <StyledRegion>
    <CreateRegion/>
    </StyledRegion>

     )
}
export default NewRegion;