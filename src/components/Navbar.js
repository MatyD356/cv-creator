import React from 'react'

const Navbar = ({ currentStep }) => {
  return (
    <nav className="container-fluid ">
      <h1>CV creator</h1>
      {currentStep >= 1 ? <div className="progress form-group">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${currentStep * 25 - 25}%` }} />
      </div> : null}
    </nav>
  )
}

export default Navbar