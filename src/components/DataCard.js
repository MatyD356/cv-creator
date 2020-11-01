import React from 'react'

const DataCard = ({ dataArray, changeState, setAddingInfo, setItemToEdit }) => {

  return (
    <div className='form-group'>
      {dataArray ? dataArray.map((dataObj, index) => {
        const keys = Object.keys(dataObj)
        return (<div key={index} className='list-group'>
          <h5 className='mb-1 d-flex justify-content-between align-items-center'>
            <span>{dataObj[keys[0]]}</span>
            <span>
              {setAddingInfo ? <span onClick={() => { setAddingInfo(true); setItemToEdit(dataObj) }} className="badge badge-primary"><i className="fas fa-edit"></i></span> : null}
              {changeState ? <span onClick={() => { changeState(prev => prev.filter((item, i) => i !== index)) }} className="badge badge-danger ml-2"><i className="fas fa-trash"></i></span> : null}
            </span>
          </h5>
          <p className='mb-1'>{dataObj[keys[1]]}</p>
          <p className='pb-1 border-bottom'>{dataObj[keys[2]]} - {dataObj[keys[3]]}</p>
        </div>)
      }
      ) : null}
    </div>
  )
}

export default DataCard