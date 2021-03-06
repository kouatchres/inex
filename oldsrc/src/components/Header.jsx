import Link from "next/link";
import styled from "styled-components";
import MegaMenu from "./mega-menu/MegaMenu";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-22deg);
  a {
    /* padding: 0.5rem 1rem; */
    /* background: #d17f05; */
    background: ${props => props.theme.googleBlue};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 900px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 2px solid ${props => props.theme.grey};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>SYGEX</a>
        </Link>
      </Logo>
      <MegaMenu />
    </div>
  </StyledHeader>
);

export default Header;
