import styled from "styled-components";

const StyledPage = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 60vw;
  border-radius: 3rem;
  border-color: ${props => props.theme.googleBlue};
  h4 {
    margin: 0 auto;
    text-align: center;
    font-size: 3rem;
    font-weight: normal;
  }
  form {
    justify-items: center;
    align-items: center;
  }
`;

const MiniStyledPage = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 40vw;
  border-radius: 3rem;
  border-color: ${props => props.theme.googleBlue};
  h4 {
    margin: 0 auto;
    text-align: center;
    font-size: 3rem;
    font-weight: normal;
  }
  form {
    justify-items: center;
    align-items: center;
  }
`;

const BigStyledPage = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 80vw;

  h4 {
    margin: 0 auto;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
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
  max-width: 100vw;

  h4 {
    margin: 0 auto;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
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

export { MiniStyledPage, StyledPage, BigStyledPage, BiggestStyledPage };
