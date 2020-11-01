import React from 'react'

const Summary = ({ personalInfo, educationInfo, experienceInfo, setCurrentStep }) => {

  return (
    <section className='container'>
      <h2>Summary</h2>
      <h3>Personal information
        <span onClick={() => setCurrentStep(1)} className="badge badge-primary ml-2"><i className="fas fa-edit"></i></span>
      </h3>
      {<div className='list-group'>
        <h5 className='mb-1'>{`${personalInfo.firstName} ${personalInfo.lastName}`}</h5>
        <p className='mb-1'>Email: {personalInfo.email}</p>
        <p className='pb-1 border-bottom'>Phone: {personalInfo.phone}</p>
      </div>}
      <h3>Education
      <span onClick={() => setCurrentStep(2)} className="badge badge-primary ml-2"><i className="fas fa-edit"></i></span>
      </h3>
      {educationInfo.map((item, index) => <div key={index} className='list-group'>
        <h5 className='mb-1'>{item.schoolName}</h5>
        <p className='mb-1'>Title: {item.titleOfStudy}</p>
        <p className='pb-1 border-bottom'>Date of study: {item.startDateOfStudy} - {item.endDateOfStudy}</p>
      </div>)

      }
      <h3>Experience
      <span onClick={() => setCurrentStep(3)} className="badge badge-primary ml-2"><i className="fas fa-edit"></i></span>
      </h3>
      {experienceInfo.map((item, index) => <div key={index} className='list-group'>
        <h5 className='mb-1'>{item.companyName}</h5>
        <p className='mb-1'>Title: {item.positionTitle}</p>
        <p className='pb-1 border-bottom'>Date of study: {item.startDateOfWork} - {item.endDateOfWork}</p>
      </div>)
      }
      <button onClick={() => setCurrentStep(prev => prev + 1)} className='btn btn-primary btn-lg btn-block'>Finish</button>
    </section>
  )
}

export default Summary