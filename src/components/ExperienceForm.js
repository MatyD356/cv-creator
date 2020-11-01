import React from 'react'
import { Formik } from 'formik';
import Input from './Input'

const ExperienceForm = ({ setAddingInfo, setExperienceInfo, dataObj, setItemToEdit }) => {
  return (
    <Formik
      initialValues={{
        companyName: dataObj ? dataObj.companyName : '',
        positionTitle: dataObj ? dataObj.positionTitle : '',
        startDateOfWork: dataObj ? dataObj.startDateOfWork : '',
        endDateOfWork: dataObj ? dataObj.endDateOfWork : '',
      }}
      validate={values => {
        const errors = {};

        if (!values.companyName) {
          errors.companyName = 'Required';
        }
        if (!values.positionTitle) {
          errors.positionTitle = 'Required';
        }
        if (!values.startDateOfWork) {
          errors.startDateOfWork = 'Required';
        } else if (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i.test(values.email)) {
          errors.startDateOfWork = 'Invalid date';
        }
        if (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i.test(values.email)) {
          errors.endDateOfWork = 'Invalid date';
        }

        return errors;
      }}
      onSubmit={values => {
        dataObj
          ? setExperienceInfo(prev => {
            const index = prev.indexOf(dataObj)
            prev[index] = values
            return [...prev]
          })
          : setExperienceInfo(prev => [...prev, values])
        setItemToEdit(null)
        setAddingInfo(false)
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Input
            type='text'
            id='companyName'
            title='Company name'
            formik={props}
          />
          <Input
            type='text'
            id='positionTitle'
            title='Position title'
            formik={props}
          />
          <div className='form-row'>
            <Input
              type='date'
              id='startDateOfWork'
              title='Start date of work'
              formik={props}
            />
            <Input
              type='date'
              id='endDateOfWork'
              title='End date of work'
              formik={props}
            />
          </div>
          <div className='form-group'>
            <button type='button' onClick={() => { setAddingInfo(false); setItemToEdit(null) }} className='btn btn-primary btn-lg'>Cancel</button>
            <button type='submit' className='btn btn-success btn-lg ml-4'>Add</button>
          </div>
        </form>)}
    </Formik>
  )
}

export default ExperienceForm