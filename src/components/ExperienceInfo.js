import React, { useState } from 'react'

import StepNavBtn from './StepNavBtn'
import DataCard from './DataCard';
import ExperienceForm from './ExperienceForm';

const ExperienceInfo = ({ setCurrentStep, setExperienceInfo, experieceInfo }) => {
  const [addingInfo, setAddingInfo] = useState(false)
  const [itemToEdit, setItemToEdit] = useState(null)

  return (
    <section className="container">
      <h2>Experience info</h2>
      {addingInfo
        ? <ExperienceForm setAddingInfo={setAddingInfo} setExperienceInfo={setExperienceInfo} dataObj={itemToEdit ? itemToEdit : null} setItemToEdit={setItemToEdit} />
        : <>
          <DataCard dataArray={experieceInfo} changeState={setExperienceInfo} setAddingInfo={setAddingInfo} setItemToEdit={setItemToEdit} />
          <div className='form-group'>
            <button className='btn btn-success btn-lg btn-block' onClick={() => setAddingInfo(true)}>Add experience</button>
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