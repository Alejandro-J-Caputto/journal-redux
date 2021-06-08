import React from 'react'

export const NoEntrySelected = () => {
  return (
    <div className="note-container">
      <div className="no-note-message">
        <p> Please Select an existing note or create a new one </p>
        <p className="no-note-logo">
          <i className="fab fa-angellist"></i>
        </p>
      </div>
    </div>
  )
}
