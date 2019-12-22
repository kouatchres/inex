import React from 'react';
import RegistrationForm from '../src/components/formikForms/RegistrationForm';
import styled from 'styled-components'

const StyledGender = styled.div `
display: block; 
text-align:center;
margin: 0 auto;
min-width:350px;
/* background:#359; */
width: 50vw;
`;

const registerReg = () => {
    return (
    <StyledGender>
    <RegistrationForm />
    </StyledGender>   
    )
}
export default registerReg;