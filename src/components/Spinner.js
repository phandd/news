import React from 'react'
import './Spinner.less'

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner