import React from 'react';
import styled from 'styled-components';
import CreateDivision from '../src/components/CreateDivision';

const DivStyled = styled.div`
display:block;
margin: 0 auto; 
max-width:40vw;
`;
const newDivision =(props)=> {
  return (
    <DivStyled>
      <CreateDivision  />
    </DivStyled>
  )
}
export default newDivision;