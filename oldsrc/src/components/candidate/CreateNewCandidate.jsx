
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { BiggestStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import Router from 'next/router';
import { SygexSelect, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { getAllGendersQuery } from '../queries&Mutations&Functions/Queries';
import { createCandidateMutation } from '../queries&Mutations&Functions/Mutations';
import { uniqueCodeGen, getSelectedObject } from '../queries&Mutations&Functions/Functions';


const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    margin:0 1rem;
    min-width:12rem;
   
`;

const PicFrame = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
	img {
		margin-top: 1rem;
		margin-left: 5rem;
		height: 15rem;
		width: 15rem;
		border-radius: 15px;
		background-size: contain;
		background-position: center;
	}
`;
const TwoGroups = styled.div`
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
min-width:15rem;
img {
		margin-top: 0.15rem;
		margin-left: 0.5rem;
		height: 13rem;
		width: 13rem;
		border-radius: 0.9rem;
		background-size: contain;
		background-position: center;
	}
`;

const validationSchema = Yup.object().shape({
    cand1stName: Yup
        .string()
        .required("Nom obligatoire"),
    cand2ndName: Yup
        .string()
        .required("Prenom obligatoire"),
    cand3rdName: Yup
        .string(),
    momName: Yup
        .string()
        .required("Noms de la mere obligatoire"),
    dadName: Yup
        .string()
        .required("Noms du pere obligatoire"),
    placeOfBirth: Yup
        .string()
        .required("Lieu de naissance obligatoire"),
    birthCertNumber: Yup
        .string()
        .required("Numero de l'acte de naissance obligatoire"),
    phoneNumb: Yup
        .number()
        .required("Numero de portable obligatoire"),
    // image: Yup
    //     .string()
    //     .required("Photo obligtoire"),
    genderID: Yup
        .string()
        .required("Choix de votre sexe obligatoire"),
    dateOfBirth: Yup
        .date()
        .min(new Date('01-01-1900'))
        .max(new Date())
        .required("date de naissance obligatoire"),
    email: Yup
        .string()
        .email('Email invalide')
        .required('Email obligatoire'),
});

class CreateNewCandidate extends Component {

    initialValues = {
        cand1stName: '',
        cand2ndName: '',
        cand3rdName: '',
        momName: '',
        dadName: '',
        email: '',
        image: "",
        phoneNumb: '',
        placeOfBirth: '',
        dateOfBirth: '',
        birthCertNumber: '',
        genderID: ""
    };

    state = { image: "" };

    uploadFile = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'ineximages');
        const res = await fetch('https://api.cloudinary.com/v1_1/inex/image/upload', {
            method: 'POST',
            body: data
        });
        const file = await res.json();
        console.log(file);
        this.setState({ image: file.secure_url });
    }

    render() {
        const { image } = this.state
        // this.initialValues.image = image

        return (
            <Query query={getAllGendersQuery} >
                {({ data, loading, error }) => {
                    {
                        loading && <p>Loading...</p>;
                    }
                    {
                        error && <Error error={error} />;
                    }
                    const { genders } = data
                    const refinedGenders = genders && genders.map(({ __typename, genderName, ...others }) => others)
                    const genderOptions = genders && genders.map((item) => (<option value={item.id} key={item.id}>{item.genderName}</option>))
                    console.log(refinedGenders);
                    console.log(image);

                    return (
                        <Mutation mutation={createCandidateMutation}>
                            {(createCandidate, { loading, error }) => (

                                <Formik
                                    method="POST"
                                    initialValues={this.initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={async (values, actions, setSubmitting, resetForm) => {
                                        const res = await createCandidate({
                                            variables:
                                            {
                                                ...values,
                                                image,
                                                gender: refinedGenders && getSelectedObject(refinedGenders, values.genderID),
                                                candCode: uniqueCodeGen(12),
                                            }
                                        });
                                        Router.push({
                                            pathname: '/show/singleCand',
                                            query: {
                                                id: res.data.createCandidate.id
                                            }
                                        });
                                        setTimeout(() => {
                                            console.log(JSON.stringify(values, null, 2));
                                            console.log(res);
                                            actions.resetForm(true);
                                            actions.setSubmitting(false);
                                        }, 400);
                                    }}

                                >
                                    {({ values }) => (
                                        <BiggestStyledPage>
                                            <h4>Créer un Candidat</h4>
                                            <Error error={error} />
                                            <StyledForm disabled={loading} aria-busy={loading} >
                                                <Form>
                                                    <AllControls>
                                                        <TwoGroups>

                                                            <InputGroup>
                                                                <SygexInput name="file" type="file" onChange={this.uploadFile} />
                                                                <SygexSelect name="genderID" >
                                                                    <option>Le Sexe</option>
                                                                    {genderOptions}
                                                                </SygexSelect>
                                                                <SygexInput name="cand1stName" type="text" placeholder="Nom" />
                                                                <SygexInput name="cand2ndName" type="text" placeholder="Prénom" />
                                                                <SygexInput name="cand3rdName" type="text" placeholder="Autres Noms" />
                                                                <SygexInput name="placeOfBirth" type="text" placeholder="Lieu de Naissance" />
                                                                <SygexInput name="dadName" type="text" placeholder="Noms du pere" />
                                                                <SygexInput name="momName" type="text" placeholder="Noms de la mere" />
                                                            </InputGroup>
                                                            <InputGroup>
                                                                <SygexInput name="dateOfBirth" format="d MMM yyyy" type="date" placeholder="Date de Naissance" />
                                                                <SygexInput name="birthCertNumber" type="text" placeholder="No l'Acte de Naissance" />
                                                                <SygexInput name="phoneNumb" type="number" placeholder="No de portable" />
                                                                <SygexInput name="email" type="email" placeholder="Email" />
                                                                <div>{image && <img src={image} alt="Upload image" />}</div>
                                                            </InputGroup>
                                                        </TwoGroups>
                                                        <ButtonStyled>
                                                            <StyledButton type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButton>
                                                        </ButtonStyled>
                                                    </AllControls>
                                                </Form>
                                            </StyledForm>
                                        </BiggestStyledPage>
                                    )}
                                </Formik>
                            )
                            }
                        </Mutation>

                    )
                }
                }
            </Query>

        );
    }
}
export default CreateNewCandidate;