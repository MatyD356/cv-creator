import React from 'react'
import { Formik } from 'formik';
import Input from './Input'
import Select from './Select'

const EducationForm = ({ setAddingInfo, setEducationInfo, dataObj, setItemToEdit }) => {
  return (
    <Formik
      initialValues={{
        schoolName: dataObj ? dataObj.schoolName : '',
        titleOfStudy: dataObj ? dataObj.titleOfStudy : '',
        startDateOfStudy: dataObj ? dataObj.startDateOfStudy : '',
        endDateOfStudy: dataObj ? dataObj.endDateOfStudy : '',
      }}
      validate={values => {
        const errors = {};

        if (!values.schoolName) {
          errors.schoolName = 'Required';
        }
        if (!values.titleOfStudy) {
          errors.titleOfStudy = 'Required';
        }
        if (!values.startDateOfStudy) {
          errors.startDateOfStudy = 'Required';
        } else if (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i.test(values.startDateOfStudy)) {
          errors.startDateOfStudy = 'Invalid date';
        }
        if (!values.endDateOfStudy) {
          errors.endDateOfStudy = 'Required';
        } else if (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i.test(values.endDateOfStudy)) {
          errors.endDateOfStudy = 'Invalid date';
        }

        return errors;
      }}
      onSubmit={values => {
        dataObj
          ? setEducationInfo(prev => {
            const index = prev.indexOf(dataObj)
            prev[index] = values
            return [...prev]
          })
          : setEducationInfo(prev => [...prev, values])
        setItemToEdit(null)
        setAddingInfo(false)
      }}
    >
      {props => (<form onSubmit={props.handleSubmit}>
        <Input
          type='text'
          id='schoolName'
          title='School name'
          formik={props}
        />
        <Select
          id='titleOfStudy'
          title='Title of study'
          formik={props}
        />
        <div className='form-row'>
          <Input
            type='date'
            id='startDateOfStudy'
            title='Start date of study'
            formik={props}
          />
          <Input
            type='date'
            id='endDateOfStudy'
            title='End date of study'
            formik={props}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-success btn-lg'>Add</button>
          <button type='button' onClick={() => { setAddingInfo(false); setItemToEdit(null) }} className='btn btn-primary btn-lg ml-4'>Cancel</button>
        </div>
      </form>)}
    </Formik>
  )
}

export default EducationForm