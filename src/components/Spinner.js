import React from 'react'

const Spinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner