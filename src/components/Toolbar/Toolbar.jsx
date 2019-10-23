import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ToolbarHeader = styled.header `
    position: fixed;
    top:0;
    margin:0;
    width: 100vw;
    height: 25px;
    background-color: #359;
    border-bottom: 2px solid black;

`;

const ToolBarNav = styled.nav `
text-decoration:none;
display:grid;
grid-template-columns: 2fr 11fr;
grid-gap:15px;
color:white;
padding: 8px;
  align-items: center;
background-color:#360;
`;

const ToolBarLogo = styled.div `
a{ 
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.9);
 text-decoration: none;
 font-size: 1.7rem;
 padding:10px;
 color:white;
 margin:5px;
  }
`;
const ToolBarNavItem = styled.div `
ul{
list-style:none;
margin:0;
padding:0;
display:flex;
font-size:1.5rem;
justify-content:space-evenly;
}
a{
              color:white;
}
`;

const toolbar = () => (
    <ToolbarHeader >
        <ToolBarNav >
            <ToolBarLogo >
                <a href="/">The Logo</a>
            </ToolBarLogo>
            <ToolBarNavItem >
                <ul>
                    <Link href="/candDisplay">
                        <a>Candidate</a>
                    </Link>
                    <Link href="/candidatePage">
                        <a>Candidates</a>
                    </Link>
                    <Link href="/newCand">
                        <a>New Candidate</a>
                    </Link>
                    <Link href="/newRegion">
                        <a>New Region</a>
                    </Link>
                    <Link href="/gender">
                        <a>New Gerder</a>
                    </Link>
                    <Link href="/newDivision">
                        <a>New Division</a>
                    </Link>

                </ul>
            </ToolBarNavItem>
        </ToolBarNav>

    </ToolbarHeader>

);

export default toolbar
