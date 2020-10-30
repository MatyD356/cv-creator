import React, { useState } from 'react'
import { useFormik } from 'formik';

import StepNavBtn from './StepNavBtn'
import Input from './Input'

const ExperienceInfo = ({ setCurrentStep, setExperienceInfo, experieceInfo }) => {
  const [addingInfo, setAddingInfo] = useState(false)

  const validate = values => {
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
  }

  const formik = useFormik({
    initialValues: {
      companyName: '',
      positionTitle: '',
      startDateOfWork: '',
      endDateOfWork: '',
    },
    validate,
    onSubmit: values => {
      setExperienceInfo(prev => [...prev, values])
      setAddingInfo(false)
    },
  });
  return (
    <section className="container-fluid">
      <h2>Experience info</h2>
      {addingInfo
        ? <form onSubmit={formik.handleSubmit}>
          <Input
            type='text'
            id='companyName'
            title='Company name'
            formik={formik}
          />
          <Input
            type='text'
            id='positionTitle'
            title='Position title'
            formik={formik}
          />
          <div className='form-row'>
            <Input
              type='date'
              id='startDateOfWork'
              title='Start date of work'
              formik={formik}
            />
            <Input
              type='date'
              id='endDateOfWork'
              title='End date of work'
              formik={formik}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary btn-lg'>Add</button>
          </div>
        </form>
        : <>
          <div className='form-group'>
            {experieceInfo.map((dataObj, index) =>
              <div key={index} className='list-group'>
                <h5 className='mb-1'>{dataObj.companyName}</h5>
                <p className='mb-1'>{dataObj.positionTitle}</p>
                <p className='pb-1 border-bottom'>{dataObj.startDateOfWork} - {dataObj.endDateOfWork}</p>
              </div>
            )}
          </div>
          <div className='form-group'>
            <button className='btn btn-primary btn-lg btn-block' onClick={() => setAddingInfo(true)}>Add experience</button>
          </div>
          <div className='form-group'>
            <StepNavBtn setCurrentStep={setCurrentStep} next={true} />
          </div>
        </>
      }

    </section>
  )
}

export default ExperienceInfo