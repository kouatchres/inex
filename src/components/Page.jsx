import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const theme = {
  maxWidth: "1000px",
  red: "#FF0000",
  googleBlue: "#359",
  goldenBrown: "#d17f05",
  black: "#393939",
  grey: "#aaabaa",
  slightGrey: "rgb(243, 241, 241)",
  lightGrey: "#E1E1E1",
  darkGrey: "#EEEEEE",
  pureWhite: "#FFFFFF",
  offWhite: "#EDEDED",
  bs: "3.5px 3.5px 2.5px  rgba(0,0,0,0.9)",
  bs2: "0 4px 8px 0 rgba(0,0,0,0.3)"
};

const StyledPage = styled.div`
  background: ${props => props.theme.slightGrey};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 3rem;
  background: ${props => props.theme.slightGrey};
`;

injectGlobal`
/* 
 radnika_next font  
  @font-face {
    font-family: 'radnika_next';
    src: url('../../static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    
  }  */


/* roboto-slab-regular - latin */

@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  src: url('../../static/roboto-slab-v11-latin-regular.woff2') format('woff2') /* Super Modern Browsers */
  src:  url('../../static/roboto-slab-v11-latin-regular.eot?#iefix') format('embedded-opentype') /* IE6-IE8 */
  src: url('../../static/roboto-slab-v11-latin-regular.woff') format('woff') /* Modern Browsers */
  src: url('../../static/roboto-slab-v11-latin-regular.ttf') format('truetype') /* Safari, Android, iOS */
  src: url('../../static/roboto-slab-v11-latin-regular.svg#RobotoSlab') format('svg'); /* Legacy iOS */
  src: url('../../static/roboto-slab-v11-latin-regular.svg#RobotoSlab') format('svg'); /* Legacy iOS */
} 



  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body
{
    padding:0;
    margin: 0;
    font-size: 2rem;
    line-height: 2;
    font-family: "Roboto Slab";
    font-weight: 500;
    font-style: normal;
   
  button {  font-family: 'Roboto Slab'; }

}

h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto Slab";
    font-size:1.8rem;
    font-weight: 500;
    font-style: normal;
}

a
{
    font-family: "Roboto Slab";
    font-weight: 400;
    font-size:1.5rem;
    font-style: italic;
    text-decoration: none;
    color: ${theme.black};
}
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
