import React, { useState } from 'react'

import Navbar from './Navbar'
import PersonalInfo from './PersonalInfo'
import EducationInfo from './EducationInfo'
import ExperieceInfo from './ExperienceInfo'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [personalInfo, setPersonalInfo] = useState({})

  return (
    <section className="container-fluid">
      <Navbar currentStep={currentStep} />
      {currentStep === 0 ? <button className='btn btn-primary' onClick={() => setCurrentStep(1)}>Next step</button> : null}
      {currentStep === 1 ? <PersonalInfo setCurrentStep={setCurrentStep} setPersonalInfo={setPersonalInfo} /> : null}
      {currentStep === 2 ? <EducationInfo setCurrentStep={setCurrentStep} /> : null}
      {currentStep === 3 ? <ExperieceInfo setCurrentStep={setCurrentStep} /> : null}
    </section>
  );
}

export default App;
