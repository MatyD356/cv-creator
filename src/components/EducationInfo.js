import React, { useState } from 'react'

import { useFormik } from 'formik';

import Input from './Input'
import Select from './Select'
import StepNavBtn from './StepNavBtn';

const EducationInfo = ({ setEducationInfo, setCurrentStep, educationInfo }) => {
  const [addingInfo, setAddingInfo] = useState(false)

  const validate = values => {
    const errors = {};

    if (!values.schoolName) {
      errors.schoolName = 'Required';
    }
    if (!values.titleOfStudy) {
      errors.titleOfStudy = 'Required';
    }
    if (!values.startDateOfStudy) {
      errors.startDateOfStudy = 'Required';
    } else if (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i.test(values.email)) {
      errors.startDateOfStudy = 'Invalid date';
    }
    if (!values.endDateOfStudy) {
      errors.endDateOfStudy = 'Required';
    } else if (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i.test(values.email)) {
      errors.endDateOfStudy = 'Invalid date';
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      schoolName: '',
      titleOfStudy: '',
      startDateOfStudy: '',
      endDateOfStudy: '',
    },
    validate,
    onSubmit: values => {
      setEducationInfo(prev => [...prev, values])
      setAddingInfo(false)
    },
  });

  return (
    <section className="container-fluid">
      <h2>Education info</h2>
      <div className='form-group'>
        {addingInfo
          ? <form onSubmit={formik.handleSubmit}>
            <Input
              type='text'
              id='schoolName'
              title='School name'
              formik={formik}
            />
            <Select
              id='titleOfStudy'
              title='Title of study'
              formik={formik}
            />
            <div className='form-row'>
              <Input
                type='date'
                id='startDateOfStudy'
                title='Start date of study'
                formik={formik}
              />
              <Input
                type='date'
                id='endDateOfStudy'
                title='End date of study'
                formik={formik}
              />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-primary btn-lg'>Add</button>
            </div>
          </form>
          : <>
            <div className='form-group'>
              {educationInfo.map(dataObj =>
                <div className='list-group'>
                  <h5 className='mb-1'>{dataObj.schoolName}</h5>
                  <p className='mb-1'>{dataObj.titleOfStudy}</p>
                  <p className='pb-1 border-bottom'>{dataObj.startDateOfStudy} - {dataObj.endDateOfStudy}</p>
                </div>
              )}
            </div>
            <div className='form-group'>
              <button className='btn btn-primary btn-lg btn-block' onClick={() => setAddingInfo(true)}>Add school</button>
            </div>
            <div className='form-group d-flex'>
              <StepNavBtn setCurrentStep={setCurrentStep} next={true} />
            </div>
          </>}
      </div>
    </section>
  )
}

export default EducationInfo