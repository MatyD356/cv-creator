import React, { useState, useEffect } from 'react'

import Navbar from './Navbar'
import PersonalInfo from './PersonalInfo'
import EducationInfo from './EducationInfo'
import ExperieceInfo from './ExperienceInfo'
import StepNavBtn from './StepNavBtn'
import Summary from './Summary'
import CvDownload from './CvDownload'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [personalInfo, setPersonalInfo] = useState({})
  const [educationInfo, setEducationInfo] = useState([])
  const [experieceInfo, setExperienceInfo] = useState([])

  useEffect(() => {
    console.log(personalInfo, educationInfo, experieceInfo);
  })
  return (
    <>
      <section className='container-fluid'>
        {currentStep === 5 ? null : <Navbar currentStep={currentStep} />}
        {currentStep === 0 ? <div className='container'><StepNavBtn setCurrentStep={setCurrentStep} next={true} /></div> : null}
        {currentStep === 1 ? <PersonalInfo setCurrentStep={setCurrentStep} setPersonalInfo={setPersonalInfo} personalInfo={personalInfo} /> : null}
        {currentStep === 2 ? <EducationInfo setCurrentStep={setCurrentStep} setEducationInfo={setEducationInfo} educationInfo={educationInfo} /> : null}
        {currentStep === 3 ? <ExperieceInfo setCurrentStep={setCurrentStep} setExperienceInfo={setExperienceInfo} experieceInfo={experieceInfo} /> : null}
        {currentStep === 4 ? <Summary personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experieceInfo} setCurrentStep={setCurrentStep} /> : null}
      </section>
      { currentStep === 5 ? <CvDownload personalInfo={personalInfo} educationInfo={educationInfo} experieceInfo={experieceInfo} /> : null}
    </>
  );
}

export default App;
