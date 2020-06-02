import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";
import MultiLevelDropDownMenu from './menus/multiLevelDropDown/MultiLevelDropDownMenu'

const theme = {
  maxWidth: "1000p",
  quarterBB: " #003c96",
  lightestBB: "#b3b4d1",
  britishRed: "#d4351c",
  complementaryBB: "#784800",
  complementaryBB1: "#007860",
  complementaryBB2: "#006078",
  complementaryBB3: "#007078",
  americanBlue: "#1d70b8",
  britishBlue: "#003078",
  britishLightBlue: "#1d70b8",
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
  primary: '#00ab80',
  black2: '#4a4a4a',
  white3: '#ffffff',
  error: '#e05666',
  brownishRed: '#fo7031',
  coolBlue: '#195e83',
  coollerBlue: '#136ea5',
  sand: '#eea549',
  reddishBrown: '#f57836',
  buff: '#edb879',
  blues: [
    '#729fbf',
    '#b6c7d6',
    '#0780b7',
    '#68a1c5',
    '#014e98',
    '#2782b0',
    '#5EC9F9',
    '#c8e5eb',
    '#b1dee3',
    '#bde4e9',
    '#cce7e8',
  ],

  lightBlues: [
    '#c8e4f3',
    '#d1e8ed',
    '#b3d3ea',
    '#c5e2f2'
  ],
  greys: [
    '#F9FAFC',
    '#F2F2F6',
    '#fcfcfc',
    '#c8c8c8',
  ],
  bs: "0.7rem 0.7rem 0.5rem  rgba(0,0,0,0.9)",
  bs2: "0.03rem .2rem 0.2rem 0.03rem rgba(0,0.3,0,0.2)",

  bs3: "0 .1rem 1.5rem 0.5rem rgba(0,0,0.8,0.9)",
  formBS: "2px 2px 2px 2px rgba(0,0,0.4,0.2)",
};

const GenPage = styled.div`
/* padding-top:4rem; */
grid-area:genPage;
position: relative;
justify-content: center;
align-items: center;
width:100%;
font-family:"Roboto Slab";
min-height:100vh;
background: ${props => props.theme.greys[1]};
display:grid;

`;

const Inner = styled.div`
grid-area: broad;
position:relative;
  margin: 0 auto;
  padding:2rem;
  background: ${props => props.theme.pureWhite};
  border-radius:1rem;
  border: 0.15rem solid ${props => props.theme.blues[2]};
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
    font-size: 11px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body
{
    padding:0;
    margin: 0;
    font-size: 2rem;
    font-family: "Roboto Slab";
    font-weight: 500;
    font-style: normal;
   
  button {  font-family: 'Roboto Slab'; }

}

h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto Slab";
    font-size:2rem;
    font-weight: 500;
    font-style: bold;
}

a
{
    font-family: "Roboto Slab";
    font-weight: 400;
    font-size:1.5rem;
    font-style: italic;
    text-decoration: none;
    color: ${props => props.theme.black};
    :hover {
  text-decoration: underline;
}
}
`;

const ShowHead = styled.div`
grid-area:header;


`;

const Bottom = styled.div`
grid-area:footer;


`;

const SideBar = styled.div`
grid-area:sideBar;
position:absolute;



`;
const CompletePage = styled.div`
display:grid;
grid-template-columns:4fr 20fr;
grid-template-rows: 1fr 10fr 1fr;
grid-template-areas:
"sideBar    genPage   "
"sideBar     genPage  "
"sideBar    genPage   ";
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CompletePage>
          <GenPage>
            <Meta />
            <ShowHead>  <Header /></ShowHead>
            <Inner>{this.props.children}</Inner>
            <Bottom>   <Footer /></Bottom>
          </GenPage>
          <SideBar>  <MultiLevelDropDownMenu /></SideBar>
        </CompletePage>
      </ThemeProvider>
    );
  }
}

export default Page;
