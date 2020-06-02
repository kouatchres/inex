
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import Router from 'next/router'
import { Formik, Form } from 'formik';
import { SygexInput, SygexSelect, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { getSelectedObject, uniqueCodeGen, candExamSessionCode } from '../queries&Mutations&Functions/Functions';
import { createRegistrationMutation } from '../queries&Mutations&Functions/Mutations';
import {
    getExamSessionQuery,
    getAllExamsQuery,
    getAllSessionsQuery,
    getSingleCenterExamSessionQuery,
    getAllSeriesOfACenterExamSessionQuery,
    getCenterExamSessionSeriesQuery,
    getSingleCenterQuery
} from '../queries&Mutations&Functions/Queries';

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    min-width:13rem;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
/* min-width: 17rem; */
`;

const validationSchema = Yup
    .object()
    .shape({
        examID: Yup
            .string()
            .required("Choix De l'examen Obligatoire"),
        sessionID: Yup
            .string()
            .required("Choix de la session Obligatoire"),
        seriesID: Yup
            .string()
            .required("Choix de la Séries Obligatoire"),
        centerNumber: Yup
            .number()
            .min(0, 'Pas de note négative')
            .required('No du centre obligatoire'),
    });

class RecentNewRegistration extends Component {
    initialValues = {
        examID: "",
        sessionID: "",
        centerNumber: "",
        candCode: "",
        seriesID: "",

    };
    state = { seriesID: "", centerNumber: "", examID: "", sessionID: "12" }

    handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseInt(value) : value;
        this.setState({ [name]: val });
    };

    makeCenterVariableObject = (centerCodeValue) => {
        const storedCenter = {
            centerNumber: `${centerCodeValue}`
        };
        return storedCenter;
    };

    candRegistrationNumber = (centerCode, exam, session) => {

        return `${centerCode + exam + session}`

    };
    makeCandVariableObject = (candCodeValue) => {
        const storedCandidate = {
            candCode: `${candCodeValue}`
        };
        return storedCandidate;
    };
    makeCESSObject = (candCodeValue) => {
        const objCESS = {
            id: `${candCodeValue}`
        };
        return objCESS;
    };

    render() {

        const { centerNumber, sessionID, examID, seriesID } = this.state
        this.initialValues.seriesID = seriesID
        this.initialValues.sessionID = sessionID
        this.initialValues.centerNumber = centerNumber
        this.initialValues.examID = examID

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
                    const getExamName = exams && { ...getSelectedObject(exams, examID) }
                    const refinedExams =
                        exams && exams.map(({ __typename, examName, ...others }) => others);
                    const examsOptions = exams && exams.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.examName}
                        </option>
                    ))
                    return (
                        <Query query={getAllSessionsQuery}>
                            {({ data, loading, error }) => {
                                {
                                    loading && <p> loading...</p>;
                                }
                                {
                                    error && <Error error={error} />;
                                }

                                const { sessions } = data;
                                const getSessionName = sessions && { ...getSelectedObject(sessions, sessionID) }
                                const refinedSessions = sessions && sessions.map(({ __typename, sessionName, ...others }) => others);
                                const sessionsOptions = sessions && sessions.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.sessionName}
                                    </option>
                                ))
                                return (

                                    <Query query={getExamSessionQuery}
                                        variables={{

                                            exam: refinedExams && getSelectedObject(refinedExams, examID),
                                            session: refinedSessions && getSelectedObject(refinedSessions, sessionID)
                                        }}  >
                                        {({ data, error, loading }) => {
                                            console.log(`examName-- ${getExamName}, examen--${examID},  session- ${sessionID}`);
                                            console.log(data)
                                            const { examSessions } = { ...data }
                                            const refinedES = examSessions && examSessions.map(({ __typename, ...others }) => others)
                                            const reducedES = refinedES && refinedES.reduce((item) => item)
                                            console.log(reducedES)

                                            return (
                                                <Query query={getSingleCenterQuery}
                                                    variables={{ centerNumber: centerNumber, }}  >
                                                    {({ data, error, loading }) => {
                                                        { loading && <p>...Loading</p> }
                                                        { error && <Error error={error} /> }
                                                        const { centerByNumber } = { ...data }
                                                        centerByNumber && delete centerByNumber.__typename
                                                        console.log(centerByNumber)
                                                        return (
                                                            <Query
                                                                query={getSingleCenterExamSessionQuery}
                                                                variables={{
                                                                    examSession: reducedES && reducedES,
                                                                    center: centerByNumber && centerByNumber
                                                                }}>
                                                                {({ data, error, loading }) => {
                                                                    { loading && <p>...Loading</p> }
                                                                    { error && <Error error={error} /> }
                                                                    console.log(data);
                                                                    const { centerExamSessionsByCode } = { ...data };
                                                                    console.log(centerExamSessionsByCode);
                                                                    // remove typename from the object
                                                                    const refinedCenterExamSessions =
                                                                        centerExamSessionsByCode && centerExamSessionsByCode.map(({ __typename, ...others }) => others);
                                                                    // transform the array into a single object
                                                                    const getObj = refinedCenterExamSessions && refinedCenterExamSessions.reduce((item) => item);
                                                                    console.log(getObj);

                                                                    return (
                                                                        <Query
                                                                            query={getAllSeriesOfACenterExamSessionQuery}
                                                                            variables={{ id: getObj && getObj.id }}>
                                                                            {({ data, loading, error }) => {
                                                                                { loading && <p>...Loading</p> }
                                                                                { error && <Error error={error} /> }
                                                                                console.log(data);

                                                                                const { centerExamSession } = data;

                                                                                const seriesCES = { ...centerExamSession };
                                                                                const { centerExamSessionSeries } = seriesCES;
                                                                                console.log(centerExamSessionSeries);
                                                                                // get all the series out of this object

                                                                                const newSeries = centerExamSessionSeries && centerExamSessionSeries.map((item) => (item.series))
                                                                                const refinedSeries =
                                                                                    newSeries && newSeries.map(({ __typename, seriesName, ...others }) => others);
                                                                                console.log(refinedSeries);
                                                                                const seriesOptions = newSeries && newSeries.map((item) => (
                                                                                    <option key={item.id} value={item.id}>
                                                                                        {item.seriesName}
                                                                                    </option>
                                                                                ));

                                                                                return (

                                                                                    <Query query={getCenterExamSessionSeriesQuery}
                                                                                        variables={{
                                                                                            centerExamSession: getObj && getObj,
                                                                                            series: refinedSeries && getSelectedObject(refinedSeries, seriesID)
                                                                                        }}
                                                                                    >
                                                                                        {({ data, error, loading }) => {
                                                                                            { loading && <p>...Loading</p> }
                                                                                            { error && <Error error={error} /> }
                                                                                            console.log(refinedSeries && getSelectedObject(refinedSeries, seriesID));
                                                                                            const { centerExamSessionSerieses } = { ...data }
                                                                                            const getCESS = centerExamSessionSerieses && centerExamSessionSerieses.reduce((item) => item)
                                                                                            const { id: idObj } = { ...getCESS }
                                                                                            const refinedCESS = idObj && this.makeCESSObject(idObj)
                                                                                            console.log(refinedCESS)
                                                                                            return (
                                                                                                <Mutation mutation={createRegistrationMutation}>

                                                                                                    {(createRegistration, { loading, error }) => (
                                                                                                        <Formik
                                                                                                            method="POST"
                                                                                                            initialValues={this.initialValues}
                                                                                                            validationSchema={validationSchema}
                                                                                                            onSubmit={async ({ candCode, seriesID, sessionID, examID, centerNumber, ...others }, actions, setSubmitting, resetForm) => {
                                                                                                                const res = await createRegistration({
                                                                                                                    variables: {
                                                                                                                        others,
                                                                                                                        candExamSecretCode: uniqueCodeGen(8),
                                                                                                                        candidate: this.makeCandVariableObject(candCode),
                                                                                                                        centerExamSession: getObj && getObj,
                                                                                                                        series: refinedSeries && getSelectedObject(refinedSeries, seriesID),
                                                                                                                        centerExamSessionSeries: refinedCESS && refinedCESS,
                                                                                                                        candExamSession: candExamSessionCode(candCode, examID, sessionID),
                                                                                                                        candRegistrationNumber: exams && sessions && this.candRegistrationNumber(centerNumber, getExamName.examCode, getSessionName.sessionName)
                                                                                                                    }

                                                                                                                });
                                                                                                                res && Router.push({
                                                                                                                    pathname: '/show/results/registrationReceipt',
                                                                                                                    query: { id: res.data.createRegistration.id },
                                                                                                                });
                                                                                                                setTimeout(() => {
                                                                                                                    console.log(JSON.stringify(others, null, 2));
                                                                                                                    console.log(res);
                                                                                                                    actions.resetForm(true);
                                                                                                                    actions.setSubmitting(false);
                                                                                                                }, 400);
                                                                                                            }}>
                                                                                                            <MinimStyledPage>
                                                                                                                <h4>Inscription à l'Examen</h4>
                                                                                                                <Error error={error} />
                                                                                                                <StyledForm>
                                                                                                                    <Form>
                                                                                                                        <AllControls>
                                                                                                                            <InputGroup>
                                                                                                                                <SygexInput
                                                                                                                                    value={centerByNumber && centerByNumber.centerCode}
                                                                                                                                    name="centerName" type="text" placeholder=" Nom du centre" />
                                                                                                                                <SygexInput onChange={this.handleChange} name="centerNumber" type="number" placeholder="no du centre" />

                                                                                                                                <SygexSelect onChange={this.handleChange} name="sessionID">
                                                                                                                                    <option>La session</option>
                                                                                                                                    {sessionsOptions}
                                                                                                                                </SygexSelect>
                                                                                                                                <SygexSelect onChange={this.handleChange} name="examID">
                                                                                                                                    <option>L'Examen </option>
                                                                                                                                    {examsOptions}
                                                                                                                                </SygexSelect>
                                                                                                                                <SygexSelect onChange={this.handleChange} name="seriesID">
                                                                                                                                    <option >La Séries</option>
                                                                                                                                    {seriesOptions}
                                                                                                                                </SygexSelect>

                                                                                                                                <SygexInput name="candCode" type="text" placeholder="Code secret candidat" />

                                                                                                                            </InputGroup>
                                                                                                                            <ButtonStyled>
                                                                                                                                <StyledButton type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButton>
                                                                                                                            </ButtonStyled>
                                                                                                                        </AllControls>
                                                                                                                    </Form>
                                                                                                                </StyledForm>
                                                                                                            </MinimStyledPage>
                                                                                                        </Formik>
                                                                                                    )
                                                                                                    }
                                                                                                </Mutation>
                                                                                            )
                                                                                        }}</Query>
                                                                                )
                                                                            }}</Query>
                                                                    )
                                                                }}</Query>
                                                        )
                                                    }
                                                    }</Query>
                                            )
                                        }
                                        }</Query>
                                )
                            }
                            }</Query>
                    )
                }
                }</Query>
        );
    }
}
export default RecentNewRegistration;