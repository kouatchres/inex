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
                  <Link href="/creates/newRegion">
                    <a>Nouvelle Region</a>
                  </Link>
                  <Link href="/modify/modifyRegion">
                    <a>Modifier Region</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Departement</h3>
                  <hr />
                  <Link href="/creates/newDivision">
                    <a>Nouveau Departement</a>
                  </Link>
                  <Link href="/modify/modifyDivision">
                    <a>Modifier Department</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Arrondissement</h3>
                  <hr />
                  <Link href="/creates/newSubDivision">
                    <a>Nouvel Arrondissement</a>
                  </Link>
                  <Link href="/modify/modifySubDivision">
                    <a>Modifier Arrondissement</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Ville</h3>
                  <hr />
                  <Link href="/creates/newTown">
                    <a>Nouvelle Ville</a>
                  </Link>
                  <Link href="/modify/modifyTown">
                    <a>Modifier Ville</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">New Series</h3>
                  <hr />
                  <Link href="/creates/newSeries">
                    <a>register Series</a>
                  </Link>
                  <Link href="/modify/modifySeries">
                    <a>Modifier Serie</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Notes</h3>
                  <hr />
                  <Link href="/creates/newMarks">
                    <a>Inscrire Notes</a>
                  </Link>
                  <Link href="/modify/modifyMarks">
                    <a>Modifier Notes</a>
                  </Link>
                </ul>
              </div>

              <div className="menu-col-2">
                <ul>
                  <h3 className="menu-category">Type De Matiere</h3>
                  <hr />
                  <Link href="/creates/newSubjectType">
                    <a> Nouveau Type Matiere</a>
                  </Link>
                  <Link href="/modify/modifySubjectType">
                    <a>Modifier Type Matiere</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Subject Series</h3>
                  <hr />
                  <Link href="/creates/newSubjectSeries">
                    <a>Subjects Series</a>
                  </Link>
                  <Link href="/modify/modifySubjectSeries">
                    <a>Modifier Type Matiere</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Inscription</h3>
                  <hr />
                  <Link href="/creates/newRegister">
                    <a> Nouvelle Inscription</a>
                  </Link>
                  <Link href="/modify/modifyRegistration">
                    <a>Modifier Inscription</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Poste</h3>
                  <hr />
                  <Link href="/creates/newRank">
                    <a>Nouveau Poste</a>
                  </Link>
                  <Link href="/modify/modifyRank">
                    <a>Modifier Poste</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Examen</h3>
                  <hr />
                  <Link href="/creates/newExam">
                    <a>Nouvel Examen</a>
                  </Link>
                  <Link href="/modify/modifyExam">
                    <a>Modifier Examen</a>
                  </Link>
                </ul>
              </div>
              <div className="menu-col-3">
                <ul>
                  <h3 className="menu-category">Utilisateur</h3>
                  <hr />
                  <Link href="/creates/newUser">
                    <a>Nouveau Utilisateur</a>
                  </Link>
                  <Link href="/modify/modifyUser">
                    <a>Modifier Utilisateur</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Centre</h3>
                  <hr />
                  <Link href="/creates/newCenter">
                    <a>Nouveau Centre</a>
                  </Link>
                  <Link href="/regionList">
                    <a>Modifier Centre</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Session</h3>
                  <hr />
                  <Link href="/creates/newSession">
                    <a>Nouvelle Session</a>
                  </Link>
                  <Link href="/modify/modifySession">
                    <a>Modifier Session</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Series</h3>
                  <hr />
                  <Link href="/creates/newSeries">
                    <a>Nouvelle Series</a>
                  </Link>
                  <Link href="/modify/modifySeries">
                    <a>Modifier Series</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Rapports</h3>
                  <hr />
                  <Link href="/creates/newReport">
                    <a>charger rapport </a>
                  </Link>
                  <Link href="/modify/modifyReport">
                    <a>Modifier rapport</a>
                  </Link>
                </ul>
              </div>
              <div className="menu-col-4">
                <ul>
                  <h3 className="menu-category">Sexe</h3>
                  <hr />
                  <Link href="/creates/newGender">
                    <a>nouveau Sexe</a>
                  </Link>
                  <Link href="/modify/modifyGender">
                    <a>Modifier Sexe</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Candidat</h3>
                  <hr />
                  <Link href="/creates/newCand">
                    <a>nouveau Candidat</a>
                  </Link>
                  <Link href="/update/updateCand">
                    <a>Liste Candidats</a>
                  </Link>
                  <Link href="/modify/modifyCandidate">
                    <a>Candidats</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Enseignement</h3>
                  <hr />
                  <Link href="/creates/newEducType">
                    <a>Nouveau Type D'enseignement</a>
                  </Link>
                  <Link href="/modify/modifyEducType">
                    <a>Modifier Type D'enseignement</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Matiere</h3>
                  <hr />
                  <Link href="/creates/newSubject">
                    <a>Nouvelle Matiere </a>
                  </Link>
                  <Link href="/modify/modifySubject">
                    <a>Modifier Matiere</a>
                  </Link>
                </ul>
                <ul>
                  <h3 className="menu-category">Charge de centre</h3>
                  <hr />
                  <Link href="/creates/newCenterAdmin">
                    <a>Nouvelle Charge de centre </a>
                  </Link>
                  <Link href="/modify/modifyCenterAdmin">
                    <a>Modifier Charge de centre</a>
                  </Link>
                  <Link href="/signInOut/signUp">
                    <a>SignUp</a>
                  </Link>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a href="/creates/newRegister">Contact</a>
          </li>
          <li>
            <a href="/creates/newRegister">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  </ToolBarNavItem>
);
export default MegaMenu;
