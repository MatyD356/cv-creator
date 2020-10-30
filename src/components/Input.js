import React from 'react'

const Input = ({ type, id, title, formik }) => {
  return (
    <div className='form-group'>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        type={type}
        className='form-control'
        onChange={formik.handleChange}
        value={formik.values[id]}

      />
      {formik.touched[id] && formik.errors[id]
        ? <div className='form-text text-danger'>{formik.errors[id]}</div>
        : null
      }
    </div>
  )
}

export default Input