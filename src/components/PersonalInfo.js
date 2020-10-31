import React from 'react'
import { Formik } from 'formik';

import Input from './Input'

const PersonalInfo = ({ setCurrentStep, setPersonalInfo, personalInfo }) => {

  return (
    <section className='container-fluid'>
      <h2>Personal info</h2>
      <Formik
        initialValues={{
          firstName: personalInfo.firstName ? personalInfo.firstName : '',
          lastName: personalInfo.lastName ? personalInfo.lastName : '',
          email: personalInfo.email ? personalInfo.email : '',
          phone: personalInfo.phone ? personalInfo.phone : '',
        }}
        validate={values => {
          const errors = {};

          if (!values.firstName) {
            errors.firstName = 'Required';
          } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
          }

          if (!values.lastName) {
            errors.lastName = 'Required';
          } else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
          }

          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          if (!values.phone) {
            errors.phone = 'Required';
          } else if (!/(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/i.test(values.phone)) {
            errors.phone = 'Invalid phone number';
          }

          return errors;
        }}
        onSubmit={values => {
          setCurrentStep(prev => prev + 1)
          setPersonalInfo(values)
        }}>
        {props => (<form onSubmit={props.handleSubmit}>
          <Input
            type='text'
            id='firstName'
            title='First name'
            formik={props}
          />
          <Input
            type='text'
            id='lastName'
            title='Last name'
            formik={props}
          />
          <Input
            type='e-mail'
            id='email'
            title='Email'
            formik={props}
          />
          <Input
            type='tel'
            id='phone'
            title='Phone'
            formik={props}
          />
          <div className='form-group'>
            <button type='submit' className='btn btn-primary btn-lg'>Submit</button>
          </div>
        </form>)}
      </Formik>
    </section >
  )
}

export default PersonalInfo
