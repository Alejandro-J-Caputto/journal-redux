import React from 'react'

export const LoadingSpinner = () => {
  return <div className="spinner">
    <div className="spinner-spiral"></div>
    <div className="loading-message">
      <h1>Checking Credentials</h1>
    </div>
  </div>
}
