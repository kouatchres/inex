import styled from "styled-components";

const StyledPage = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
  max-width: 55vw;
  min-width: 20rem;
 height: 100vh;
  
background-color: ${props => props.theme.pureWhite};
  h4 {
    margin: 0 auto;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
  form {
    justify-items: center;
    align-items: center;
  }
`;

const MiniStyledPage = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
  max-width: 40vw;
  min-width: 20rem;
  height: 100vh;
  background-color: ${props => props.theme.pureWhite};
  h4 {
    margin: 0 auto;
    text-align: center;
    font-size: 1.5rem;
    font-weight: normal;
  }
  .Form {
    justify-items: center;
    align-items: center;
  }
  form {
    justify-items: center;
    align-items: center;
  }
`;

const MinimStyledPage = styled.div`
margin:0;
  display: block;
  margin: 1rem auto;
  text-align: center;
  max-width: 30vw;
  min-width: 20rem;
  height: 100vh;
  
background-color: ${props => props.theme.pureWhite};
  h4 {
    margin: 0 auto;
    text-align: center;
    font-size: 1.9rem;
    font-weight: normal;
  }
  .Form {
    justify-items: center;
    align-items: center;
  }
  form {
    justify-items: center;
    align-items: center;
  }
`;

const BigStyledPage = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
  max-width: 80vw;
  min-width: 20rem;
  height:100vh;

  h4 {
    margin: 0 auto;
    text-align: center;
    font-size: 1.5rem;
    font-weight: normal;
  }
  .Form {
    justify-items: center;
    align-items: center;
  }
  fieldset {
    justify-items: center;
    align-items: center;
  }
`;

const BiggestStyledPage = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
  max-width: 90vw;
  min-width: 20rem;
  height: 100vh;
background-color: ${props => props.theme.pureWhite};

  h4 {
    margin: 0 auto;
    text-align: center;
    font-size: 1.5rem;
    font-weight: normal;
  }
  .Form {
    justify-items: center;
    align-items: center;
  } 
  fieldset {
    justify-items: center;
    align-items: center;
  }
`;

export { MinimStyledPage, MiniStyledPage, StyledPage, BigStyledPage, BiggestStyledPage };


