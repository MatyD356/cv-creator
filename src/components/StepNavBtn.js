import React from 'react'

const StepNavBtn = ({ setCurrentStep, next }) => {
  return (
    <div className='form-group'>
      <button
        onClick={() => setCurrentStep(prev => next ? prev + 1 : prev - 1)}
        className='btn btn-primary btn-lg btn-block'>
        {next ? 'Next step' : 'Previous step'}
      </button>
    </div>
  )
}

export default StepNavBtn