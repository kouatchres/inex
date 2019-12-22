import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ToolBarNavItem = styled.div`
  padding: 1.5rem;
  * {
    box-sizing: border-box;
  }
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  body {
    font-family: "Roboto", "Open Sans", "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0;
  }
  nav {
    background: burlywood;
    box-shadow: 0 4px 15px 0 rgbs(0, 0, 0, 0.8);
    border-radius: 5rem;
  }
  nav ul {
    list-style: none;
    position: relative;
    margin: 0;
    padding: 0;
  }
  nav li {
    display: inline-block;
  }
  nav a {
    text-decoration: none;
    display: block;
    color: #000;
    padding: 0.5rem 1.3rem;
  }

  nav li:hover {
    border-top-right-radius: 0.8rem;
    border-top-left-radius: 0.8rem;
    background: #808080;
    color: #fff;
  }
  .menu-sub {
    width: 100%;
    position: absolute;
    background: #808080;
    color: #fff;
    display: none;
    padding: 1rem;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }
  nav li:hover .menu-sub {
    display: block;
  }
  .menu-sub li {
    display: block;
  }
  .menu-sub a {
    margin: 0;
    padding: 0;
    font-size: 1.1rem;
    color: #fff;
    /* margin: 0.1rem; */
  }

  .menu-sub a:hover {
    text-decoration: underline;
  }
  .menu-category {
    font-size: 1.1rem;
    margin-bottom: 0;
    margin-bottom: 0.5rem;
    text-align: left;
    text-transform: uppercase;
  }
  .menu-category :first-of-type {
    margin-top: 0;
    margin-bottom: 0;
  }
  .menu-col-1,
  .menu-col-2,
  .menu-col-3,
  .menu-col-4 {
    float: left;
  }
  .menu-col-1,
  .menu-col-2,
  .menu-col-3,
  .menu-col-4 {
    width: 25%;
    padding: 1rem;
    border-right: 1px solid #fff;
  }
  .menu-category:last-of-type {
    border-right: none;
  }
  hr {
    margin: 0;
    padding: 0;
  }
`;

const MegaMenu = () => (
  <ToolBarNavItem>
    <nav>
      <div className="container">
        <ul className="menu-main">
          <li>
            <a href="/">Entrer Information</a>
            <div className="menu-sub">
              <div className="menu-col-1">
                <ul>
                  <h3 className="menu-category">Region</h3>
                  <hr />
                  <Link href="/newRegion">
                    <a>Nouvelle Region</a>
                  </Link>
                  <Link href="/modifyRegion">
                    <a>Modifier Region</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Departement</h3>
                  <hr />
                  <Link href="/newDivision">
                    <a>Nouveau Departement</a>
                  </Link>
                  <Link href="/modifyDivision">
                    <a>Modifier Department</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Arrondissement</h3>
                  <hr />
                  <Link href="/newSubDivision">
                    <a>Nouvel Arrondissement</a>
                  </Link>
                  <Link href="/modifySubDivision">
                    <a>Modifier Arrondissement</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Ville</h3>
                  <hr />
                  <Link href="/newTown">
                    <a>Nouvelle Ville</a>
                  </Link>
                  <Link href="/modifyTown">
                    <a>Modifier Ville</a>
                  </Link>
                </ul>
              </div>
              <div className="menu-col-2">
                <ul>
                  <h3 className="menu-category">Centre</h3>
                  <hr />
                  <Link href="/newCenter">
                    <a> Nouveau Centre</a>
                  </Link>
                  <Link href="/modifyCenter">
                    <a>Modifier Centre</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Inscription</h3>
                  <hr />
                  <Link href="/newRegister">
                    <a> Nouvelle Inscription</a>
                  </Link>
                  <Link href="/modifyRegistration">
                    <a>Modifier Inscription</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Poste</h3>
                  <hr />
                  <Link href="/newPost">
                    <a>Nouveau Poste</a>
                  </Link>
                  <Link href="/modifyPost">
                    <a>Modifier Poste</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Examen</h3>
                  <hr />
                  <Link href="/newExam">
                    <a>Nouvel Examen</a>
                  </Link>
                  <Link href="/modifyExam">
                    <a>Modifier Examen</a>
                  </Link>
                </ul>
              </div>
              <div className="menu-col-3">
                <ul>
                  <h3 className="menu-category">Utilisateur</h3>
                  <hr />
                  <Link href="/newUser">
                    <a>Nouveau Utilisateur</a>
                  </Link>
                  <Link href="/modifyUser">
                    <a>Modifier Utilisateur</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Centre</h3>
                  <hr />
                  <Link href="/newCenter">
                    <a>Nouveau Centre</a>
                  </Link>
                  <Link href="/regionList">
                    <a>Modifier Centre</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Session</h3>
                  <hr />
                  <Link href="/newSession">
                    <a>Nouvelle Session</a>
                  </Link>
                  <Link href="/modifySession">
                    <a>Modifier Session</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Series</h3>
                  <hr />
                  <Link href="/newSeries">
                    <a>Nouvelle Series</a>
                  </Link>
                  <Link href="/modifySeries">
                    <a>Modifier Series</a>
                  </Link>
                </ul>
              </div>
              <div className="menu-col-4">
                <ul>
                  <h3 className="menu-category">Sexe</h3>
                  <hr />
                  <Link href="/newGender">
                    <a>nouveau Sexe</a>
                  </Link>
                  <Link href="/modifyGender">
                    <a>Modifier Sexe</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Candidat</h3>
                  <hr />
                  <Link href="/newCand">
                    <a>nouveau Candidat</a>
                  </Link>
                  <Link href="/modifyCandidate">
                    <a>Candidats</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Enseignement</h3>
                  <hr />
                  <Link href="/newEducationType">
                    <a>Nouveau Type D'enseignement</a>
                  </Link>
                  <Link href="/modifyEducType">
                    <a>Modifier Type D'enseignement</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Matiere</h3>
                  <hr />
                  <Link href="/newSubject">
                    <a>Nouvelle Matiere </a>
                  </Link>
                  <Link href="/modifySubject">
                    <a>New App Mui</a>
                  </Link>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="/App">App</a>
          </li>
          <li>
            <a href="/newRegister">Contact</a>
          </li>
          <li>
            <a href="/newRegister">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  </ToolBarNavItem>
);
export default MegaMenu;
