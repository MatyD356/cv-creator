import React, { useState } from 'react'

import StepNavBtn from './StepNavBtn';
import DataCard from './DataCard';
import EducationForm from './EducationForm'

const EducationInfo = ({ setEducationInfo, setCurrentStep, educationInfo }) => {
  const [addingInfo, setAddingInfo] = useState(false)
  const [itemToEdit, setItemToEdit] = useState(null)

  return (
    <section className="container">
      <h2>Education info</h2>
      <div className='form-group'>
        {addingInfo
          ? <EducationForm setAddingInfo={setAddingInfo} setEducationInfo={setEducationInfo} dataObj={itemToEdit ? itemToEdit : null} setItemToEdit={setItemToEdit} />
          : <>
            <DataCard dataArray={educationInfo} changeState={setEducationInfo} setAddingInfo={setAddingInfo} setItemToEdit={setItemToEdit} />
            <div className='form-group'>
              <button className='btn btn-success btn-lg btn-block' onClick={() => setAddingInfo(true)}>Add school</button>
            </div>
            <div className='form-group'>
              <StepNavBtn setCurrentStep={setCurrentStep} next={true} />
            </div>
          </>}
      </div>
    </section>
  )
}

export default EducationInfo