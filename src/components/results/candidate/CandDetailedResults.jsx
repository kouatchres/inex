import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import Form from '../../styles/Form'
import { StyledPage } from '../../styles/StyledPage'
import { format } from 'date-fns'
import ResultDetails from './ResultDetails'
import { getCandidateResultsQuery } from '../../queries&Mutations&Functions/Queries'
import {
  roundFloatNumber,
  calcCandTotalScore,
  calcCandTotalCoeff,
  calcCandAve,
} from '../../queries&Mutations&Functions/Functions'

import Error from '../../ErrorMessage'

import styled from 'styled-components'

const AveTotals = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 1.5rem;
  grid-gap: 1rem;
  color: white;
  background: ${props => props.theme.goldenBrown};
  align-items: center;
  justify-items: center;
  border-bottom: 0.1rem solid black;
  padding-left: 0.2rem;
`

const SubjectTitles = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  grid-gap: 0.2rem;
  color: white;
  font-size: 1.5rem;
  justify-content: left;
  background: ${props => props.theme.googleBlue};
`

const TitleItem = styled.div`
  margin: 0 20px;
  border-right: 1px solid black;
  text-align: left;
  /* padding-left: 15px; */
`

const ResultsHeader = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 18fr;
  justify-items: center;
  align-items: center;
`

const SchoolInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 0.3rem;
`

const SchoolInfo2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 0.3rem;
`

const SchoolInfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: colums;
  background: ${props => props.theme.lightGrey};
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 0.2rem;
  border-bottom: 0.1rem solid ${props => props.theme.black};
`
const CandPic = styled.div`
  margin-top: 1rem;
  display: block;
  flex-direction: column;

  img {
    height: 30vh;
    width: 15vw;
    border-radius: 0.5rem;
  }
`

const FirstInfo = styled.div`
  display: block;
  flex-direction: column;
  font-size: 1.5rem;
  line-height: 0.3rem;
`

class CandDetailedResults extends Component {
  static propTypes = { id: PropTypes.string.isRequired }
  render() {
    return (
      <Query query={getCandidateResultsQuery} variables={{ id: this.props.id }}>
        {({ data, error, loading }) => {
          const { registration } = data
          const {
            candidate,
            centerExamSessionSeries,
            scores,
            candRegistrationNumber,
          } = { ...registration }
          const { centerExamSession, series } = { ...centerExamSessionSeries }
          const { examSession, center } = { ...centerExamSession }
          const { exam, session } = { ...examSession }

          return (
            <StyledPage>
              <Form
                onSubmit={e => {
                  e.preventDefault()
                }}
              >
                <h4>
                  Resultat Du: {exam && exam.examName}, Session:
                  {session && session.sessionName}, de:-
                  {candidate && candidate.cand1stName}
                  {candidate && candidate.cand2ndName}
                </h4>
                <Error error={error} />
                <fieldset disabled={loading} aria-busy={loading}>
                  <SchoolInfoBlock>
                    <SchoolInfo>
                      <span>
                        <strong> Centre D'Examen: </strong>{' '}
                        {center && center.centerName}
                      </span>
                    </SchoolInfo>
                    <SchoolInfo2>
                      <span>
                        <strong> Examen: </strong> {exam && exam.examName}
                      </span>
                      <span>
                        <strong> Session: </strong>{' '}
                        {session && session.sessionName}
                      </span>
                    </SchoolInfo2>
                    <SchoolInfo>
                      <span>
                        <strong> Numero d'Inscription: </strong>
                        {candRegistrationNumber}
                      </span>
                      <span>
                        <strong> Specialization: </strong>
                        {series && series.seriesName}
                      </span>
                    </SchoolInfo>
                  </SchoolInfoBlock>
                  <ResultsHeader>
                    <CandPic>
                      <img
                        src={candidate && candidate.image}
                        alt={candidate && candidate.cand1stName}
                      />
                    </CandPic>
                    <FirstInfo>
                      <p>
                        <span>
                          <strong> Nom: </strong>{' '}
                          {candidate && candidate.cand1stName}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Prenom: </strong>{' '}
                          {candidate && candidate.cand2ndName}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Autres Noms: </strong>
                          {candidate && candidate.cand3rdName}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong> Date de Naissance: </strong>
                          {format(
                            candidate && candidate.dateOfBirth,
                            'd MMMM, YYYY ',
                          )}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong> Lieu de Naissance: </strong>{' '}
                          {candidate && candidate.placeOfBirth}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Sexe: </strong>{' '}
                          {candidate && candidate.gender.genderName}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong> Email: </strong>
                          {candidate && candidate.email}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Noms du Père: </strong>{' '}
                          {candidate && candidate.dadName}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong> Noms de la Mère: </strong>{' '}
                          {candidate && candidate.momName}
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
                    <TitleItem>
                      <span>Moyenne </span>
                    </TitleItem>
                    <TitleItem>
                      <span>Total </span>
                    </TitleItem>
                  </SubjectTitles>
                  {scores &&
                    scores.map(score => (
                      <ResultDetails
                        key={score.subjectSeries.id}
                        score={score}
                      />
                    ))}
                  <AveTotals>
                    <span>
                      <strong>
                        Total Matieres:
                        {roundFloatNumber(calcCandTotalScore(scores), 4)}
                      </strong>
                    </span>
                    <span>
                      <strong>
                        Somme Coefficients:
                        {roundFloatNumber(calcCandTotalCoeff(scores), 4)}
                      </strong>
                    </span>
                    <span>
                      <strong>
                        Moyenne:
                        {roundFloatNumber(calcCandAve(scores), 4)}
                      </strong>
                    </span>
                  </AveTotals>
                </fieldset>
              </Form>
            </StyledPage>
          )
        }}
      </Query>
    )
  }
}

export default CandDetailedResults
