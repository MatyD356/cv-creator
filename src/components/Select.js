import React from 'react'

const Select = ({ id, title, formik }) => {
  return (
    <div className='form-group'>
      <label htmlFor={id}>{title}</label>
      <select className="form-control" id="titleOfStudy" {...formik.getFieldProps(id)}>
        <option value=''>Choose an option</option>
        <option value='Bachelor of Arts'>Bachelor of Arts</option>
        <option value='Bachelor of Science'>Bachelor of Science</option>
        <option value='Engineer'>Engineer</option>
        <option value='Master of Arts'>Master of Arts</option>
        <option value='Master of Science'>Master of Science</option>
      </select>
      {formik.touched[id] && formik.errors[id]
        ? <div className='form-text text-danger'>{formik.errors[id]}</div>
        : null
      }
    </div>
  )
}

export default Select