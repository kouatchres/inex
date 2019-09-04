import Navbar from '../Nav';
import Link from 'next/link';
import styled from 'styled-components';

const LogoStyled = styled.h3 `
font-size: 2.6rem;
position: relative;
z-index: 2;
transform:skew(-32deg);
a {
    margin-left: 2rem;
    color: white;
    text-transform: uppercase;
    background: ${props => props.theme.googleBlue} ; 
    text-decoration: none;
    padding: 0.1rem 0.4rem;
}

@media (max-width: 1000px){
    margin: 0;
    text-align:center;
}
`;

const StyledHeader = styled.div `
.bar {
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: left;
    border-bottom: 3px solid ${props => props.theme.black};
    
    @media(max-width: 1000px){
        grid-template-columns: 1fr;
        justify-content:center;

      }

.sub-bar{
    grid-template-columns: 1fr 15fr;
    border-bottom: 3 px solid ${props => props.theme.lightGrey};
    
}
.navigation{
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(100px,1fr));
    padding: .5rem;
    /* justify-content:center; */
    /* justify-items:center; */
    align-items:center;
}
}
`;

const Header = () => (
    <StyledHeader>
        <div className="bar">
            <LogoStyled>
                <Link href="/">
                    <a>INEX</a>
                </Link>
            </LogoStyled>
            <div className="navigation">
                <Navbar/>
            </div>
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>Cart</div>
    </StyledHeader>
);

export default Header;