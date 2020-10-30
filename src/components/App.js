import React, { useState, useEffect } from 'react'

import Navbar from './Navbar'
import PersonalInfo from './PersonalInfo'
import EducationInfo from './EducationInfo'
import ExperieceInfo from './ExperienceInfo'
import StepNavBtn from './StepNavBtn'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const [educationInfo, setEducationInfo] = useState([])

  useEffect(() => {
    console.log(personalInfo, educationInfo);
  })
  return (
    <section className="container-fluid">
      <Navbar currentStep={currentStep} />
      {currentStep === 0 ? <StepNavBtn setCurrentStep={setCurrentStep} next={true} /> : null}
      {currentStep === 1 ? <PersonalInfo setCurrentStep={setCurrentStep} setPersonalInfo={setPersonalInfo} educationInfo={educationInfo} /> : null}
      {currentStep === 2 ? <EducationInfo setCurrentStep={setCurrentStep} setEducationInfo={setEducationInfo} educationInfo={educationInfo} /> : null}
      {currentStep === 3 ? <ExperieceInfo setCurrentStep={setCurrentStep} /> : null}
    </section>
  );
}

export default App;
