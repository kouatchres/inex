import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import { Formik, Form } from 'formik';
import { SygexInput, customStyle, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import Error from '../ErrorMessage'
import * as Yup from 'yup';
import Select from 'react-select'
import useForm from '../utils/useForm'
import { createNewReportMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject, removeTypename } from '../queries&Mutations&Functions/Functions';
import {
    getExamSessionQuery,
    getAllExamsQuery,
    getAllSessionsQuery,
    getSingleCenterExamSessionQuery,
    getSingleCenterQuery,
    getCESExaminerQuery,
} from '../queries&Mutations&Functions/Queries';


const InputGroup = styled.div`
    display: flex;
    flex-direction:column;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
`;

const PicFrame = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	margin-bottom: 1rem;
	img {
        margin:0 auto;
		height: 15rem;
		width: 15rem;
		border-radius: 15px;
		background-size: contain;
		background-position: center;
	}
`;

const validationSchema = Yup.object().shape({
    reportName: Yup
        .string()
        .required('Nom de rapport obligatoire'),
    examID: Yup
        .string()
        .required("Choix De l'examen Obligatoire"),
    sessionID: Yup
        .string()
        .required("Choix de la session Obligatoire"),

    examinerCode: Yup
        .string()
        .required("Code secret examinateur Obligatoire"),
    centerNumber: Yup
        .number()
        .min(0, 'Pas de note négative')
        .required('No du centre obligatoire'),
});

const CreateNewReportHook = () => {
    const initialValues = {
        reportName: "",
        reportImage: "",
        centerNumber: "",
        examinerCode: ""
    };

    const [state, setState, handleReactSelectChange] = useForm(
        {
            reportImage: "",
            examID: "",
            sessionID: "",
            centerNumber: "",
            examinerCode: ""
        });


    const makeExaminerObject = (profCodeValue) => {
        const storedProf = {
            examinerCode: `${profCodeValue}`
        };
        return storedProf;
    };

    const transformCenterExamSessionExaminer = authCodeValue => {
        const centerAdminObj = {
            authCode: `${authCodeValue}`
        };
        console.log(centerAdminObj);
        return centerAdminObj;
    };
    const handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseInt(value) : value;
        setState({ [name]: val });
    };

    const uploadFile = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "ineximages");
        const res = await fetch("https://api.cloudinary.com/v1_1/inex/reportImage/upload", {
            method: "POST",
            body: data
        });
        const file = await res.json();
        console.log(file);
        setState({
            reportImage: file.secure_url
        });
    };



    const { data: dataExams, loading: loadingExams, errorExams } = useQuery(getAllExamsQuery)
    { loadingExams && <p>loading...</p>; }
    { errorExams && <Error error={errorExams} />; }

    const getExams = dataExams && dataExams.exams;
    console.log(getExams);
    const removeExamName = getExams && getExams.map(({ examName, ...others }) => others)
    const refinedExams = getExams && removeTypename(removeExamName)
    const getExamOptions = getExams && getExams.map((item) => ({ value: item.id, label: item.examName }))

    const { data: dataSession, loading: loadingSession, errorSession } = useQuery(getAllSessionsQuery)
    { loadingSession && <p>loading...</p>; }
    { errorSession && <Error error={errorSession} />; }

    const getSessions = dataSession && dataSession.sessions;
    const refinedSessions = removeTypename(getSessions)
    const getSessionOptions = getSessions && getSessions.map((item) => ({ ...item, value: item.id, label: item.sessionName }))


    const { data: dataExamSession, loading: loadingExamSession, error: errorExamSession } = useQuery(getExamSessionQuery, {
        skip: !state.examID || !state.sessionID,
        variables: {
            exam: refinedExams && getSelectedObject(refinedExams, state.examID),
            session: refinedSessions && getSelectedObject(refinedSessions, state.sessionID)
        }
    })
    { loadingExamSession && <p>loading...</p>; }
    { errorExamSession && <Error error={errorExamSession} />; }


    console.log(dataExamSession)
    const getExamSessions = dataExamSession && dataExamSession.examSessions
    const refinedES = getExamSessions && removeTypename(getExamSessions)
    const reducedES = refinedES && refinedES[0]
    console.log(reducedES)

    const { data: dataCenter, loading: loadingCenter, errorCenter } = useQuery(getSingleCenterQuery, {
        skip: !state.centerNumber,
        variables: {
            centerNumber: state.centerNumber
        }
    })
    { loadingCenter && <p>loading...</p>; }
    { errorCenter && <Error error={errorCenter} />; }


    const getCenterByNumber = dataCenter && dataCenter.centerByNumber
    const newCenter = getCenterByNumber && removeTypename(getCenterByNumber)
    console.log(newCenter)

    const { data: dataCES, loading: loadingCES, errorCES } = useQuery(getSingleCenterExamSessionQuery, {
        skip: !reducedES || !getCenterByNumber,
        variables: {
            examSession: reducedES && reducedES,
            center: newCenter && newCenter
        }
    })
    { loadingCES && <p>loading...</p>; }
    { errorCES && <Error error={errorCES} />; }


    console.log(dataCES);
    const getCenterExamSessionsByCode = dataCES && dataCES.centerExamSessionsByCode;
    console.log(getCenterExamSessionsByCode);
    // remove typename from the object
    const refinedCenterExamSessionsByCode = getCenterExamSessionsByCode && removeTypename(getCenterExamSessionsByCode);
    // transform the array into a single object
    const getCES = refinedCenterExamSessionsByCode && refinedCenterExamSessionsByCode[0]
    console.log(getCES);

    const { data: dataExaminer, loading: loadingExaminer, error: errExaminer } = useQuery(getCESExaminerQuery, {
        skip: !getCES || !state.examinerCode,
        variables: {
            centerExamSession: getCES && getCES,
            examiner: state.examinerCode && makeExaminerObject(state.examinerCode),
        }
    })
    { loadingExaminer && <p>loading...</p>; }
    { errExaminer && <Error error={errExaminer} />; }

    const getCESExaminers = dataExaminer && dataExaminer.getCenterExamSessionExaminers
    console.log(getCESExaminers)
    const refinedCESExaminer =
        getCESExaminers && removeTypename(getCESExaminers)
    const reducedCESExaminer = refinedCESExaminer && refinedCESExaminer[0]
    console.log(reducedCESExaminer)


    const [createRegion, { loading, error }] = useMutation(createNewReportMutation)
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, { resetForm }) => {
                const res = await createRegion({
                    variables: {
                        ...values,
                        reportImage: state.reportImage,
                        centerExamSessionExaminer: reducedCESExaminer && reducedCESExaminer
                    }
                })
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res)
                    resetForm({ values: "" })
                    actions.setSubmitting(false);
                }, 200);
            }}
        >
            {({ isSubmitting }) => {
                return (

                    <MinimStyledPage>
                        <h4>Nouveau Rapport</h4>
                        <Error error={error} />
                        <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                            <Form>
                                <AllControls>
                                    <InputGroup>
                                        <SygexInput
                                            value={newCenter && newCenter.centerCode}
                                            name="centerName"
                                            type="text"
                                            label=" Nom du centre"
                                            disabled
                                        />
                                        <SygexInput
                                            value={state.centerNumber}
                                            onChange={handleChange}
                                            name="centerNumber"
                                            type="number"
                                            label="Numero du centre"
                                            disabled={isSubmitting}
                                        />
                                        <SygexInput name="file" type="file" onChange={uploadFile} disabled={isSubmitting} />

                                        <Select options={getSessionOptions} onChange={handleReactSelectChange} name="sessionID" styles={customStyle} placeholder="La session" disabled={isSubmitting} />
                                        <Select options={getExamOptions} onChange={handleReactSelectChange} name="examID" styles={customStyle} placeholder="L'Examen" disabled={isSubmitting} />

                                        <SygexInput name="reportName" type="text" label="Nom du Rapport" disabled={isSubmitting} />
                                        <SygexInput onChange={handleChange} value={state.examinerCode} name="examinerCode" type="text" label="Code Secret de l'examinateur" disabled={isSubmitting} />
                                        <PicFrame> {state.reportImage && <img src={state.reportImage} alt={reportImage} />}</PicFrame>
                                    </InputGroup>
                                    <ButtonStyled>
                                        <StyledButton type="submit">Valid{isSubmitting ? 'ation en cours' : 'er'}</StyledButton>
                                    </ButtonStyled>
                                </AllControls>
                            </Form>
                        </StyledForm>
                    </MinimStyledPage>

                )
            }}
        </Formik>



    );
}
export default CreateNewReportHook;