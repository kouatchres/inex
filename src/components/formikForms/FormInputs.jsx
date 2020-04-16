import React from 'react';

import { useField } from 'formik';
import styled from 'styled-components';


const StyledInput = styled.input`
padding-top:01.2rem;
    font-size: 1.7rem;
    border-style: none;
      outline: 0;
     border-bottom: 0.09rem solid ${(props) => props.theme.black};
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.red};
    }
`;

const StyledLabel = styled.label`
    padding: 1rem;
    font-size: 1.5rem;
    border-style: none;
     border-bottom: 0.09rem solid ${(props) => props.theme.black};
    /* &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.red};
    }} */
`;

const StyledSelect = styled.select`
padding-top:01.2rem;
    font-size: 1.7rem;
    border-style: none;
     border-bottom: 0.09rem solid ${(props) => props.theme.black};
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.red};
    }
`;

const StyledErrorMessage = styled.div`
padding-top:0.2rem;
font-size:1.2rem;
font-weight:bold;
color: ${props => props.theme.reddishBrown};
/* padding-left: 0.5rem; */
`;


const StyledButton = styled.button`
  background-color: ${props => props.theme.coollerBlue};
  color: ${props => props.theme.white};
  border: 0;
  border-radius: .5rem;
  font-size: 2rem;
  font-weight: 300;
  line-height: 2rem;
  padding:0.5rem ;
  margin: 0.5rem 0;
  box-shadow: ${props => props.theme.bs2}
  /* margin-bottom: 1.1rem; */
  cursor: pointer;
  /* &:hover {
    background-color: ${props => props.theme.grey[10]};
  }
  &:disabled {
    background-color: ${props => props.theme.grey[13]};
  }  */
  
`;


const StyledButtonBlue = styled.button`
  background-color: ${props => props.theme.pureWhite};
  color: ${props => props.theme.googleBlue};
  border: 0.1rem solid ${props => props.theme.googleBlue};
  border-radius: .5rem;
  font-size: 2rem;
  font-weight: 300;
  line-height: 2rem;
  padding:0.5rem ;
  box-shadow: ${props => props.theme.bs2}
  /* margin-bottom: 1.1rem; */
  cursor: pointer;
  /* &:hover {
    color: ${props => props.theme.coollerBlue}
    background-color: ${props => props.theme.sand};
  } */
  /* &:disabled {
    background-color: ${props => props.theme.grey[13]};
  }  */
  
`;


const ButtonStyled = styled.div`
padding-top: 1rem;
padding-bottom: 1rem;

button{
    border-radius: 0.5rem;
    font-size: 1.7rem;
    font-weight:bold;
    border: 0.1rem solid ${props => props.theme.googleBlue};
    color: ${ props => props.theme.coollerBlue};
    background: ${ props => props.theme.pureWhite};
    cursor: pointer;
    padding: 0.5srem 0.5rem;
    outline: 0;
    &:hover {
    color: ${props => props.theme.coollerBlue}
    background-color: ${props => props.theme.sand};
  }
}
`;


const StyledForm = styled.div`
/* padding-top:1rem; */
margin: 0 2rem;
margin-bottom:2rem;
font-size: 1.5rem;
border-radius: .8rem;
border: 0.09rem solid ${ (props) => props.theme.coollerBlue};
box-shadow: ${ (props) => props.theme.bs2};
min-width: 15rem;
`;


const SygexInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel> */}
      <StyledInput className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}

    </>
  );
};

const SygexSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel> */}
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

export { StyledLabel, StyledButton, StyledButtonBlue, SygexSelect, ButtonStyled, SygexInput, StyledForm }