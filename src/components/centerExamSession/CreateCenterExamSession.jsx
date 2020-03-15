import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import { createCenterExamSessionMutation } from '../queries&Mutations&Functions/Mutations';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';
import {
    getAllRegionsQuery,
    getDivisionsOfARegionQuery,
    getSubDivisionsOfADivisionQuery,
    getCentersOfATownQuery,
    getTownsOfASubDivisionQuery,
    getAllExamsQuery,
    getAllSessionsQuery
} from '../queries&Mutations&Functions/Queries';

const StyledDivision = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 2rem;
	text-align: center;
	margin: 0 auto;
`;

const CenterSelect = styled.div`
	display: block;
	text-align: center;
    .submitButton{
        padding-top:1.1rem;
    }
	margin: 0 auto;
`;

class CreateCenterExamSession extends Component {
    state = {
        series: '',
        session: '',
        exam: '',
        candidate: '',
        center: '',
        candCode: '',
        divisionID: '12',
        subDivisionID: '12',
        regionID: '12',
        centerID: '12',
        townID: '12',
        sessionID: '12',
        candExamSecretCode: '',
        seriesID: '12',
        examID: '12',
        educTypeID: '12',
        candidate: ''
    };

    handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === 'number'
            ? parseInt(value)
            : value;
        this.setState({ [name]: val });
    };

    resetForm = () => {
        this.setState({ candCode: '' });
    };

    makeCandVariableObject = (candCodeValue) => {
        const storedCandidate = {
            candCode: `${candCodeValue}`
        };
        return storedCandidate;
    };

    render() {
        const {
            regionID,
            divisionID,
            subDivisionID,
            townID,
            centerID,
            examID,
            sessionID
        } = this.state;
        return (
            <Query query={getAllRegionsQuery}>
                {({ data, loading, error }) => {
                    {
                        loading && <p>Loading...</p>;
                    }
                    {
                        error && <Error error={error} />;
                    }
                    const { regions } = data;
                    const refinedRegion = regions && regions.map(({
                        __typename,
                        ...others
                    }) => others);
                    //prepare data for the region select options

                    const regionsOptions = refinedRegion && refinedRegion.map((item) => (
                        <option value={item.id} key={item.id}>
                            {item.regName}
                        </option>
                    ));
                    return (
                        <Query
                            query={getDivisionsOfARegionQuery}
                            variables={refinedRegion && getSelectedObject(refinedRegion, regionID)}>
                            {({ data, loading, error }) => {
                                {
                                    loading && <p>Loading...</p>;
                                }
                                {
                                    error && <Error error={error} />;
                                }
                                console.log(data);
                                const { region } = data;
                                const allDivs = {
                                    ...region
                                };
                                const { division } = allDivs;
                                console.log(allDivs);
                                console.log(division);
                                const refinedDivision = division && division.map(({
                                    __typename,
                                    ...others
                                }) => others);

                                const divisionsOptions = refinedDivision && refinedDivision.map((item) => (
                                    <option value={item.id} key={item.id}>
                                        {item.divName}
                                    </option>
                                ));

                                return (
                                    <Query
                                        query={getSubDivisionsOfADivisionQuery}
                                        variables={refinedDivision && getSelectedObject(refinedDivision, divisionID)}>
                                        {({ data, loading, error }) => {
                                            {
                                                loading && <p>Loading...</p>;
                                            }
                                            {
                                                error && <Error error={error} />;
                                            }
                                            const { division: departement } = data;

                                            const allSubDivs = {
                                                ...departement
                                            };
                                            const { subDivision } = allSubDivs;
                                            console.log(subDivision);
                                            const refinedSubDivision = subDivision && subDivision.map(({
                                                __typename,
                                                ...others
                                            }) => others);

                                            const subDivisionsOptions = refinedSubDivision && refinedSubDivision.map((item) => (
                                                <option value={item.id} key={item.id}>
                                                    {item.subDivName}
                                                </option>
                                            ));

                                            return (
                                                <Query
                                                    query={getTownsOfASubDivisionQuery}
                                                    variables={refinedSubDivision && getSelectedObject(refinedSubDivision, subDivisionID)}>
                                                    {({ data, loading, error }) => {
                                                        {
                                                            loading && <p>Loading...</p>;
                                                        }
                                                        {
                                                            error && <Error>error={error}</Error>;
                                                        }

                                                        const village = data.subDivision;

                                                        const allTowns = {
                                                            ...village
                                                        };

                                                        const { town } = allTowns;
                                                        const refinedTown = town && town.map(({
                                                            __typename,
                                                            townName,
                                                            townCode,
                                                            ...others
                                                        }) => others);

                                                        return (
                                                            <Query
                                                                query={getCentersOfATownQuery}
                                                                variables={refinedTown && getSelectedObject(refinedTown, townID)}>
                                                                {({ data, loading, error }) => {
                                                                    {
                                                                        loading && <p>Loding...</p>;
                                                                    }
                                                                    {
                                                                        error && <Error error={error} />;
                                                                    }
                                                                    const { town: ville } = data;
                                                                    const theTowns = {
                                                                        ...ville
                                                                    };
                                                                    const { center } = theTowns;
                                                                    console.log(center);
                                                                    const refinedCenter = center && center.map(({
                                                                        __typename,
                                                                        centerName,
                                                                        ...others
                                                                    }) => others);
                                                                    return (
                                                                        <Query query={getAllExamsQuery}>
                                                                            {({ data, loading, error }) => {
                                                                                {
                                                                                    loading && <p>loading...</p>;
                                                                                }
                                                                                {
                                                                                    error && <Error error={error} />;
                                                                                }

                                                                                const { exams } = data;
                                                                                console.log(exams);

                                                                                const refinedExams = exams && exams.map(({
                                                                                    __typename,
                                                                                    examName,
                                                                                    ...others
                                                                                }) => others);
                                                                                return (
                                                                                    <Query query={getAllSessionsQuery}>
                                                                                        {({ data, loading, error }) => {
                                                                                            {
                                                                                                loading && (
                                                                                                    <p>loading...</p>
                                                                                                );
                                                                                            }
                                                                                            {
                                                                                                error && (<Error error={error} />);
                                                                                            }

                                                                                            const { sessions } = data;
                                                                                            const refinedSessions = sessions && sessions.map(({
                                                                                                __typename,
                                                                                                sessionName,
                                                                                                ...others
                                                                                            }) => others);
                                                                                            return (
                                                                                                <Mutation
                                                                                                    mutation={createCenterExamSessionMutation}
                                                                                                    variables={{
                                                                                                        ...this.state,
                                                                                                        center: refinedCenter && getSelectedObject(refinedCenter, centerID),
                                                                                                        exam: refinedExams && getSelectedObject(refinedExams, examID),
                                                                                                        session: refinedSessions && getSelectedObject(refinedSessions, sessionID)
                                                                                                    }}>
                                                                                                    {(createCenterExamSession, { loading, error }) => (
                                                                                                        <MiniStyledPage>
                                                                                                            <Form
                                                                                                                method="POST"
                                                                                                                onSubmit={async (e) => {
                                                                                                                    e.preventDefault();
                                                                                                                    const res = await createCenterExamSession();
                                                                                                                    console.log(res);
                                                                                                                    this.resetForm();
                                                                                                                }}>
                                                                                                                <h4>
                                                                                                                    Inscrire un Centre à un Examen pour une session
                                                                                                                </h4>
                                                                                                                <Error error={error} />
                                                                                                                <fieldset disabled={loading} aria-busy={loading}>
                                                                                                                    <StyledDivision >
                                                                                                                        <CenterSelect >
                                                                                                                            <select
                                                                                                                                type="select"
                                                                                                                                id="sessionID"
                                                                                                                                name="sessionID"
                                                                                                                                value={this.state.sessionID}
                                                                                                                                onChange={this.handleChange}
                                                                                                                                required>
                                                                                                                                <option >
                                                                                                                                    Choisissez la Session
                                                                                                                                </option>
                                                                                                                                {sessions && sessions.map((item) => (
                                                                                                                                    <option key={item.id} value={item.id}>
                                                                                                                                        {item.sessionName}
                                                                                                                                    </option>
                                                                                                                                ))}
                                                                                                                            </select>
                                                                                                                            <select
                                                                                                                                type="select"
                                                                                                                                id="examID"
                                                                                                                                name="examID"
                                                                                                                                value={this.state.examID}
                                                                                                                                onChange={this.handleChange}
                                                                                                                                required>
                                                                                                                                <option >
                                                                                                                                    Choisissez un Examen
                                                                                                                                </option>
                                                                                                                                {exams && exams.map((item) => (
                                                                                                                                    <option key={item.id} value={item.id}>
                                                                                                                                        {item.examName}
                                                                                                                                    </option>
                                                                                                                                ))}
                                                                                                                            </select>



                                                                                                                            <select
                                                                                                                                type="select"
                                                                                                                                id="regionID"
                                                                                                                                name="regionID"
                                                                                                                                value={this.state.regionID}
                                                                                                                                onChange={this.handleChange}
                                                                                                                                required>
                                                                                                                                <option >
                                                                                                                                    Choisissez une région
                                                                                                                                </option>
                                                                                                                                {regionsOptions && regionsOptions}
                                                                                                                            </select>

                                                                                                                            <select
                                                                                                                                type="select"
                                                                                                                                id="divisionID"
                                                                                                                                name="divisionID"
                                                                                                                                value={this.state.divisionID}
                                                                                                                                onChange={this.handleChange}
                                                                                                                                required>
                                                                                                                                <option >
                                                                                                                                    Choisissez un département
                                                                                                                                </option>
                                                                                                                                {division && divisionsOptions}
                                                                                                                            </select>
                                                                                                                            <select
                                                                                                                                type="select"
                                                                                                                                id="subDivisionID"
                                                                                                                                name="subDivisionID"
                                                                                                                                value={this.state.subDivisionID}
                                                                                                                                onChange={this.handleChange}
                                                                                                                                required>
                                                                                                                                <option >
                                                                                                                                    choisissez un Arrondissement
                                                                                                                                </option>
                                                                                                                                {subDivision && subDivisionsOptions}
                                                                                                                            </select>
                                                                                                                            <select
                                                                                                                                type="select"
                                                                                                                                id="townID"
                                                                                                                                name="townID"
                                                                                                                                value={this.state.townID}
                                                                                                                                onChange={this.handleChange}
                                                                                                                                required>
                                                                                                                                <option >
                                                                                                                                    choisissez une Ville
                                                                                                                                </option>
                                                                                                                                {town && town.map((item) => (
                                                                                                                                    <option key={item.id} value={item.id}>
                                                                                                                                        {item.townName}
                                                                                                                                    </option>
                                                                                                                                ))}
                                                                                                                            </select>

                                                                                                                            <select
                                                                                                                                type="select"
                                                                                                                                id="centerD"
                                                                                                                                name="centerID"
                                                                                                                                value={this.state.centerID}
                                                                                                                                onChange={this.handleChange}
                                                                                                                                required>
                                                                                                                                <option >
                                                                                                                                    Choisissez un Centre d'Examen
                                                                                                                                </option>
                                                                                                                                {center && center.map((item) => (
                                                                                                                                    <option key={item.id} value={item.id}>
                                                                                                                                        {item.centerName}
                                                                                                                                    </option>
                                                                                                                                ))}
                                                                                                                            </select>



                                                                                                                            <div className="submitButton">
                                                                                                                                <button type="submit">
                                                                                                                                    Valid{loading
                                                                                                                                        ? 'ation en cours'
                                                                                                                                        : 'er'}
                                                                                                                                </button>
                                                                                                                            </div>
                                                                                                                        </CenterSelect>

                                                                                                                    </StyledDivision>
                                                                                                                </fieldset>
                                                                                                            </Form>
                                                                                                        </MiniStyledPage>
                                                                                                    )}
                                                                                                </Mutation>
                                                                                            );
                                                                                        }}
                                                                                    </Query>
                                                                                );
                                                                            }}
                                                                        </Query>
                                                                    );
                                                                }}
                                                            </Query>
                                                        );
                                                    }}
                                                </Query>
                                            );
                                        }}
                                    </Query>
                                );
                            }}
                        </Query>
                    );
                }}
            </Query>
        );
    }
}

export default CreateCenterExamSession;
