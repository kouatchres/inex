import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import Form from "../styles/Form";
import { BigStyledPage } from "../styles/StyledPage";
import { format } from "date-fns";
import ResultDetails from "./ResultDetails";
import { getEachCandidateResultsQuery } from "../queries&Mutations&Functions/Queries";
import {
  roundFloatNumber,
  calcCandTotalScore,
  calcCandTotalCoeff,
  calcCandAve
} from "../queries&Mutations&Functions/Functions";

import Error from "../ErrorMessage";

import styled from "styled-components";

const AveTotals = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  background-color: ${props => props.theme.lightGrey};
  align-items: left;
  justify-items: left;
  border-bottom: 1px solid black;
  padding-left: 15px;
`;
const SubjectTitles = styled.div`
  display: flex;
  color: white;
  font-size: 1.5rem;
  justify-content: left;
  background: ${props => props.theme.googleBlue};
  border-radius: 0.5rem;
`;

const TitleItem = styled.div`
  margin: 0 20px;
  border-right: 1px solid black;
  width: 25%;
  text-align: left;
  /* padding-left: 15px; */
`;

const ResultsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-gap: 0.5rem;
  font-weight: 500;
`;

const SchoolInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* margin: 0 auto; */
  justify-items: center;
  align-items: center;
`;
const CandPic = styled.div`
  margin-top: 1rem;
  display: block;
  flex-direction: column;

  img {
    height: 30vh;
    width: 10vw;
    border-radius: 0.5rem;
  }
`;

const FirstInfo = styled.div`
  display: block;
  flex-direction: column;
`;
const SecInfo = styled.div`
  display: block;
  flex-direction: column;
`;

class EachCandResults extends Component {
  static propTypes = { id: PropTypes.string.isRequired };
  render() {
    return (
      <Query query={getEachCandidateResultsQuery} variables={{ id: this.props.id }}>
        {({ data, error, loading }) => {
          const { registration } = data;
          const { candidate, exam, session, center, series, scores } = { ...registration };

          return (
            <BigStyledPage>
              <Form
                onSubmit={e => {
                  e.preventDefault();
                }}
              >
                <h4>
                  Resultat Du: {exam.examName}, Session: {session.sessionName},pour:
                  {center.centerName}
                </h4>
                <Error error={error} />
                <fieldset disabled={loading} aria-busy={loading}>
                  <SchoolInfo>
                    <p>
                      <span>
                        <strong> Centre D'Examen: </strong> {center.centerName}
                      </span>
                      <span> ...</span>
                      <span>
                        <strong> Specialization: </strong>
                        {series.seriesName}
                      </span>
                    </p>
                  </SchoolInfo>
                  <ResultsHeader>
                    <FirstInfo>
                      <p>
                        <span>
                          <strong> Nom: </strong> {candidate.cand1stName}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Prenom: </strong> {candidate.cand2ndName}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Autres Noms: </strong>
                          {candidate.cand3rdName}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong> Sexe: </strong> {candidate.gender.genderName}
                        </span>
                      </p>
                    </FirstInfo>
                    <SecInfo>
                      <p>
                        <span>
                          <strong> Email: </strong>
                          {candidate.email}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Date de Naissance: </strong>
                          {format(candidate.dateOfBirth, "d MMMM, YYYY ")}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong> Lieu de Naissance: </strong> {candidate.placeOfBirth}
                        </span>
                      </p>
                    </SecInfo>
                  </ResultsHeader>
                  {/* <AveTotals>
                    <span>
                      <strong>Total Matieres:</strong>
                      {roundFloatNumber(calcCandTotalScore(scores), 4)}
                    </span>
                    <span>
                      <strong>Somme Coefficients: </strong>
                      {roundFloatNumber(calcCandTotalCoeff(scores), 4)}
                    </span>
                    <span>
                      <strong>Moyenne: </strong>
                      {roundFloatNumber(calcCandAve(scores), 4)}
                    </span>
                  </AveTotals> */}
                </fieldset>
              </Form>
            </BigStyledPage>
          );
        }}
      </Query>
    );
  }
}

export default EachCandResults;
