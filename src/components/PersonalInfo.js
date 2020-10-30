import React from 'react'
import { useFormik } from 'formik';

import Input from './Input'

const PersonalInfo = ({ setCurrentStep, setPersonalInfo }) => {

  const validate = values => {
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
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    validate,
    onSubmit: values => {
      setCurrentStep(prev => prev + 1)
      setPersonalInfo(values)
    },
  });

  return (
    <section className='container-fluid'>
      <h2>Personal info</h2>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type='text'
          id='firstName'
          title='First name'
          formik={formik}
        />
        <Input
          type='text'
          id='lastName'
          title='Last name'
          formik={formik}
        />
        <Input
          type='e-mail'
          id='email'
          title='Email'
          formik={formik}
        />
        <Input
          type='tel'
          id='phone'
          title='Phone'
          formik={formik}
        />
        <div className='form-group'>
          <button type='submit' className='btn btn-primary btn-lg'>Submit</button>
        </div>
      </form>
    </section>
  )
}

export default PersonalInfo
