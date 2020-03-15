import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import Form from "../styles/Form";
import { BiggestStyledPage } from "../styles/StyledPage";
import { format } from "date-fns";
import { centerExamSessionSeriesForResultsQuery } from "../queries&Mutations&Functions/Queries";
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
  grid-gap: 0.1rem;
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

class CenterAllDetailedResults extends Component {
    // static propTypes = { id: PropTypes.string.isRequired };
    render() {
        return (
            <Query query={centerExamSessionSeriesForResultsQuery} variables={{ centerExamSession: this.props.id }}>
                {({ data, error, loading }) => {
                    const { centerExamSessionSeriesForResults } = { ...data }
                    console.log(data)
                    return (


                        <BiggestStyledPage>
                            <Form
                                onSubmit={e => {
                                    e.preventDefault();
                                }}
                            >
                                <h4>
                                    {/* Resultat Du: {exam.examName}, Session: {session.sessionName}, pour: {center.centerName} */}
                                </h4>
                                <Error error={error} />
                                <fieldset disabled={loading} aria-busy={loading}>

                                    <ResultsHeader>
                                    </ResultsHeader>
                                    <SubjectTitles>
                                        <TitleItem>
                                            <span>Nom</span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Prenom </span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Autre Noms </span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Lieu Naissance </span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Date Naissance </span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Sexe </span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Moyenne </span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Details </span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Sexe </span>
                                        </TitleItem>
                                    </SubjectTitles>
                                    {/* {scores.map(score => (
                                        <ResultDetails key={score.subjectSeries.id} score={score} />
                                    ))} */}

                                </fieldset>
                            </Form>
                        </BiggestStyledPage>
                    );
                }
                }
            </Query>

        );
    }
}

export default CenterAllDetailedResults;
