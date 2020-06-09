import React from 'react';

import { useField } from 'formik';

import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;


const customStyle = {
  control: (provided) => ({
    ...provided,
    fontFamily: 'Roboto Slab',
    border: "0px solid black",
    borderBottom: "0.9px solid #0780b7",
    fontSize: '1.6rem',
    outline: 'none',
    backgroundColor: 'white',
    color: '#000',
    borderRadius: '0',
    boxShadow: "none",
    alignItems: "center",
    '&:hover': {
      borderBottom: ' 2px solid #d4351c',
      borderRadius: '0',
    }, // border style on hover
    '&:focus': {
      borderBottom: ' 2px solid #d4351c',
      borderRadius: '0',
    }, // border style on hover

  }),
  option: (provided) => ({
    ...provided,
    textAlign: 'left',

  }),
}




const StyledInput = styled.input`
    padding-top:1rem;
    /* display:block; */
    margin-top:0.4rem;
    font-size: 1.5rem;
    border-style: none;
    width:100%;
    outline: none;
    border-bottom: 0.09rem solid ${(props) => props.theme.blues[2]};
     z-index:10;
     font-family:"Roboto Slab";
    
     &:valid + label{
      top:-.25rem;
      font-size:1.1rem;
      color:${props => props.theme.britishBlue};
     }
    &:focus,
    &active {
      outline: none; 
    border-bottom: 0.2rem solid ${(props) => props.theme.britishRed};
    }
    &:focus + label{
      top:-.25rem;
      font-size:1.1rem;
      color:#aaa;
    }
   
     
      
    `;

const InputGroup = styled.div`
position:relative;
  `;

const StyledLabel = styled.label`
    font-size: 1.5rem;
    border-style: none;
    position:absolute;
    left:1rem;
    top:1.5rem;
    color: ${props => props.theme.greys[2]};
    pointer-events:none;
    transition: all 1s ease-out;
    font-family:"Roboto Slab";
    &:focus {
      outline: none;
    }
`;

const StyledSelect = styled.select`
   margin-top:1rem;
    font-size: 1.5rem;
    border-style: none;
     border-bottom: 0.09rem solid ${(props) => props.theme.blues[2]};
     option {
         background: white;
         font-weight: 400;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
         background: ${props => props.theme.blues[0]};
         border-radius:0.5rem;
       }
    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.britishRed};
    }
`;

const StyledErrorMessage = styled.div`
padding-top:0.2rem;
font-size:1.3rem;
color: ${props => props.theme.britishRed};
/* padding-left: 0.5rem; */
`;


const StyledButton = styled.button`
  background-color: ${props => props.theme.blues[2]};
  color: ${props => props.theme.white};
  border: 0;
  border-radius: .5rem;
  font-size: 3rem;
  font-weight: 300;
  line-height: 1.5rem;
  text-shadow:3px 4px 5px #0000;
  /* padding:0.7rem ; */
  /* margin-bottom: 1rem auto; */
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

const ButtonStyled = styled.div`
padding-bottom: 0.5rem;
padding-top: 1rem;
button{
    border-radius: 0.6rem;
    font-size: 1.7rem;
    font-weight:bold;
    box-shadow:${props => props.theme.formBS};
    border: 0.05rem solid ${props => props.theme.blues[2]};
    color: ${ props => props.theme.blues[2]};
    background: ${ props => props.theme.pureWhite};
    cursor: pointer;
    padding:  0.8rem;
    outline: none;
    &:hover {
      
    color: ${props => props.theme.blues[2]}
    background-color: ${props => props.theme.sand};
  }
}
`;


const StyledForm = styled.div`
margin: 0 2rem;
padding:0.6rem;
font-size: 1.5rem;
border-radius: .5rem;
border: 0.09rem solid ${(props) => props.theme.blues[2]};
/* border-top: 1.5rem solid ${ (props) => props.theme.blues[2]}; */
/* border-left: 0.09rem solid ${ (props) => props.theme.blues[2]};
border-right: 0.09rem solid ${ (props) => props.theme.blues[2]};
border-bottom: 0.09rem solid ${ (props) => props.theme.blues[2]}; */
box-shadow: ${(props) => props.theme.formBS};
min-width: 20rem;


&[disabled] {
      opacity: 0.3;
    }
    &::before {
      height: 0.3rem;
      content: '';
      display: block;
      background-image: linear-gradient(to right, #0780b7 0%, #e2b04a 20%, #0780b7 100%);
      /* background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%); */
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }

`;

const SygexInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <InputGroup>
      <StyledInput className="text-input" {...field} {...props} required />
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}

    </InputGroup>
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

export
{
  StyledLabel,
    StyledButton,
    customStyle,
    SygexSelect,
    ButtonStyled,
    SygexInput,
    StyledForm
}