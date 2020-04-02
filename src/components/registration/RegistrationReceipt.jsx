import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import Form from "../styles/Form";
import { StyledPage } from "../styles/StyledPage";
import { format } from "date-fns";
import SubjectList from '../results/SubjectList'
import { getCandidateResultsQuery } from "../queries&Mutations&Functions/Queries";
import Error from "../ErrorMessage";
import styled from "styled-components";

const SubjectTitles = styled.div`
  display: flex;
  color: white;
  font-size: 1.5rem;
  justify-content: left;
  background: ${props => props.theme.googleBlue};
`;

const TitleItem = styled.div`
  margin: 0 20px;
  border-right: 1px solid black;
  width: 25%;
  text-align: left;
`;

const ResultsHeader = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 18fr ;
  justify-items: center;
  align-items: center;
`;

const SchoolInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  font-size:1.5rem;
margin: 0 0.3rem;
`;

const SchoolInfo2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  justify-items: center;
  align-items: center;
  font-size:1.5rem;
margin: 0 0.3rem;
`;

const SchoolInfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow:colums;
  background: ${props => props.theme.lightGrey};
  justify-content: center;
  align-items: center;
  font-size:1.5rem;
  padding:0.2rem;
border-bottom: .1rem solid ${props => props.theme.black};

`;
const CandPic = styled.div`
  margin-top: 1rem;
  display: block;
  flex-direction: column;

  img {
    height: 30vh;
    width: 15vw;
    border-radius: 0.5rem;
  }
`;

const FirstInfo = styled.div`
  display: block;
  flex-direction: column;
  font-size:1.5rem;
  line-height:0.3rem;
`;

const Signature = styled.div`
  display: grid;
grid-template-columns: 1fr 1fr;
grid-gap:1rem;
  font-size:1.5rem;
  line-height:0.3rem;
  background: ${props => props.theme.silverGrey};
  padding:3rem;
  justify-content: center;
  align-items: center;
`;

class RegistrationReceipt extends Component {
    static propTypes = { id: PropTypes.string.isRequired };
    render() {
        return (
            <Query query={getCandidateResultsQuery} variables={{ id: this.props.id }}>
                {({ data, error, loading }) => {
                    { loading && <p>...Loading</p> }
                    { error && <Error error={error} /> }
                    const { registration } = data;
                    const { candidate, centerExamSessionSeries, createdAt, scores, candRegistrationNumber } = { ...registration };
                    const { centerExamSession, series } = { ...centerExamSessionSeries }
                    const { examSession, center } = { ...centerExamSession }
                    const { exam, session } = { ...examSession }

                    return (
                        <StyledPage>
                            <Form
                                onSubmit={e => {
                                    e.preventDefault();
                                }}
                            >
                                <h4>
                                    Reçu d'inscription de: {candidate.cand1stName} {candidate.cand2ndName} {candidate.cand3rdName}
                                </h4>
                                <Error error={error} />
                                <fieldset disabled={loading} aria-busy={loading}>
                                    <SchoolInfoBlock>
                                        <SchoolInfo>
                                            <span>
                                                <strong> Centre D'Examen: </strong> {center.centerName}
                                            </span>
                                        </SchoolInfo>
                                        <SchoolInfo2>
                                            <span>
                                                <strong> Examen: </strong> {exam.examName}
                                            </span>
                                            <span>
                                                <strong> Session: </strong> {session.sessionName}
                                            </span>
                                        </SchoolInfo2>
                                        <SchoolInfo>
                                            <span>
                                                <strong> Numero d'Inscritption: </strong> {candRegistrationNumber}
                                            </span>
                                            <span>
                                                <strong> Date d'Inscritption: </strong> {format(createdAt, 'd  MMM, yyyy , HH:MM:SS')}
                                            </span>


                                            <span>
                                                <strong> Specialization: </strong>
                                                {series.seriesName}
                                            </span>
                                        </SchoolInfo>
                                    </SchoolInfoBlock>
                                    <ResultsHeader>
                                        <CandPic>
                                            <img src={candidate.image} alt={candidate.cand1stName} />
                                        </CandPic>
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
                                                    <strong> Lieu de Naissance: </strong> {candidate.placeOfBirth}
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
                                                    <strong> Sexe: </strong> {candidate.gender.genderName}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> Email: </strong>
                                                    {candidate.email}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> Noms du Père: </strong> {candidate.dadName}
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <strong> Noms de la Mère: </strong> {candidate.momName}
                                                </span>
                                            </p>

                                        </FirstInfo>
                                    </ResultsHeader>
                                    <SubjectTitles>
                                        <TitleItem>
                                            <span>Matiere</span>
                                        </TitleItem>
                                        <TitleItem>
                                            <span>Coeff </span>
                                        </TitleItem>

                                    </SubjectTitles>
                                    {scores.map(score => (
                                        <SubjectList key={score.subjectSeries.id} score={score} />
                                    ))}
                                    <Signature>
                                        <FirstInfo>Candidat:</FirstInfo>
                                        <FirstInfo>Proviseur/Directeur:</FirstInfo>
                                    </Signature>
                                </fieldset>
                            </Form>
                        </StyledPage>
                    );
                }}
            </Query>
        );
    }
}

export default RegistrationReceipt;
