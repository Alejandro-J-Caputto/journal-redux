import React from 'react'

export const EntriesContainer = () => {
  return (
    <div className="note-container">
      <div className="note">
        <input
          type="text"
          placeholder="Add a meaningfull title"
          className="note__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="Today was a nice day..."
        ></textarea>
        <div className="note__image">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="user selection" />
        </div>
      </div>
    </div>
  )
}
