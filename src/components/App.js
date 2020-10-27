import React from 'react'

import Navbar from './Navbar'
import PersonalInfo from './PersonalInfo'
import EducationInfo from './EducationInfo'
import ExperieceInfo from './ExperienceInfo'

function App() {
  return (
    <section className="App">
      <Navbar />
      <PersonalInfo />
      <EducationInfo />
      <ExperieceInfo />
    </section>
  );
}

export default App;
