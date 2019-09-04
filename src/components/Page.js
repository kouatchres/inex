import React, {Component} from 'react'
import Header from './Header';
import Meta from './Meta';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';

const theme = {
    maxWidth: '1300px',
    red: '#FF0000',
    googleBlue: '#359',
    goldenBorwn: '#d17f05',
    black: '#393939',
    grey: '#3a3a3a',
    slightGrey: 'rgb(243, 241, 241)',
    lightGrey: '#E1E1E1',
    darkGrey: '#EEEEEE',
    pureWhite: '#FFFFFF',
    offWhite: '#EDEDED',
    bs: '3.5px 3.5px 2.5px  rgba(0,0,0,0.09)',
    bs2: '0 4px 8px 0 rgba(0,0,0,0.04)'
};

const StyledPage = styled.div `
background:${props=> props.theme.pureWhite};
color:black;
`;

const Inner = styled.div `
max-width:${props => props.theme.maxWidth};
background:${props => props.theme.pureWhite};
margin :0 auto;
padding:2rem;
`;

injectGlobal`
@font-face {
    font-family:radnikanext ;
    src: url('../../static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight:normal;
    font-style:normal;
}

html{

  font-size: 10px;
  box-sizing:border-box;  
}
*, *:before, *:after{
    box-sizing:inherit;  

  }
  body{
      padding:0;
      margin :0;
      font-size: 1.2rem;
      line-height:2;
      font-family:radnikanext ;
   
  }
  a{
      text-decoration:none;
      color:  ${theme.black};

  }
`;



class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta/>
                    <Header/>
                    <Inner>
                        {this.props.children}
                    </Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;