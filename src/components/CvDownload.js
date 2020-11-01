import React from 'react'
import DataCard from './DataCard'

const CvDownload = ({ personalInfo, educationInfo, experieceInfo }) => {

  return (
    <section className='container-fluid' onClick={() => window.print()}>
      <div className='row '>
        <div className='col-5 vh-100 bg-primary text-light '>
          <h3 className='p-2'>{personalInfo.firstName} {personalInfo.lastName}</h3>
          <div className='ml-2'>
            <h6 className=' border-bottom border-light'>Contact</h6>
            <h6 className='my-4'>Email: <p className='my-2'>{personalInfo.email}</p></h6>
            <h6 className='my-4'>Phone: <p className='my-2'>{personalInfo.phone}</p></h6>
          </div>
        </div>
        <div className='col-7 text-primary'>
          <div>
            <h2 className=' m-3 border-bottom border-primary'>Education</h2>
            <div className='ml-3'>
              <DataCard dataArray={educationInfo} />
            </div>
          </div>
          <div>
            <h2 className=' m-3 border-bottom border-primary'>Experience</h2>
            <div className='ml-3'>
              <DataCard dataArray={experieceInfo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CvDownload