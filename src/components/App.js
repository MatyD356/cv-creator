import React, { useState, useEffect } from 'react'

import Navbar from './Navbar'
import PersonalInfo from './PersonalInfo'
import EducationInfo from './EducationInfo'
import ExperieceInfo from './ExperienceInfo'
import StepNavBtn from './StepNavBtn'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [personalInfo, setPersonalInfo] = useState({})
  const [educationInfo, setEducationInfo] = useState([])
  const [experieceInfo, setExperienceInfo] = useState([])

  useEffect(() => {
    console.log(personalInfo, educationInfo, experieceInfo);
  })
  return (
    <section className="container-fluid">
      <Navbar currentStep={currentStep} />
      {currentStep === 0 ? <StepNavBtn setCurrentStep={setCurrentStep} next={true} /> : null}
      {currentStep === 1 ? <PersonalInfo setCurrentStep={setCurrentStep} setPersonalInfo={setPersonalInfo} educationInfo={educationInfo} /> : null}
      {currentStep === 2 ? <EducationInfo setCurrentStep={setCurrentStep} setEducationInfo={setEducationInfo} educationInfo={educationInfo} /> : null}
      {currentStep === 3 ? <ExperieceInfo setCurrentStep={setCurrentStep} setExperienceInfo={setExperienceInfo} experieceInfo={experieceInfo} /> : null}
    </section>
  );
}

export default App;
