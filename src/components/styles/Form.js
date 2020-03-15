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

const Form = styled.form`
  /* box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5); */
  background: ${(props) => props.theme.pureWhite};
  /* background: rgba(0, 0, 0, 0.02); */
  border: 5px solid white;
  padding: 20px;
  font-size: 1.2rem;
  line-height: 1.2;
  font-weight: 300;
  label {
    margin-bottom: 2rem;
    /* display: block;
     width:35vw; 
     box-sizing:border-box; */
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    border-style: none;
    border-bottom: 1px solid ${(props) => props.theme.black};
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.red};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: ${(props) => props.theme.googleBlue};
    color: white;
    border: 0;
    height: 2.2rem;
    width:auto;
    font-size: 1.5rem;
    font-weight: 500;
    border-radius:.6rem;
    margin-top: .3rem;
    margin-bottom: .3rem;
    padding: .5rem, .5rem .5rem .5rem ;
  }
  fieldset {
    max-width: 80vw;
    /* min-width: 300px; */
    margin: 20px 
    height: 60vh;
    border: .6px solid ${(props) => props.theme.googleBlue};
    padding: 15px;
    display: flex;
    flex-direction: row;
    border-radius:.5rem;
    justify-items: center;
    box-shadow: ${(props) => props.theme.bs2};

    &[disabled] {
      opacity: 0.4;
    }
    &::before {
      height: 7px;
      content: '';
      display: block;
      background-image: linear-gradient(to right, #359 0%, #e2b04a 20%, #359 100%);
      /* background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%); */
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
