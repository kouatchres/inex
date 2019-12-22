
import React, { Component } from 'react';
import {TextField, Button} from '@material-ui/core'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components'
 
  const StyledForm =styled.div`
display: grid;
grid-template-columns: 1fr;
grid-auto-flow:column;
width:200px;
font-size:4rem;
  `;


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
  .required('Required'),
  confirmPassword: Yup.string()
  .required('Required')
  .oneOf([Yup.ref('password')], 'Password does not match')
});


class RegistrationForm extends Component {
  defaultFormState = {
    email: '',
    password: '',
    confirmPassword: ''
  }
  handleSubmit = (form) => {
    register(form);
  }
  render() {
    return (
      <Formik
      onSubmit={this.handleSubmit}
      initialValues={this.defaultFormState}
      validationSchema={validationSchema}
      >
        {() => (
       
          <StyledForm>

          <Form>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              as={TextField}
            />
            <Field
              name="password"
              type="password"
              placeholder="Password"
              as={TextField}
            />
            <Field
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              as={TextField}
            />
            <Button>
              Submit
            </Button>
          </Form>
          </StyledForm> 
        )}
      </Formik>
    )
  }
}
 


export default RegistrationForm;