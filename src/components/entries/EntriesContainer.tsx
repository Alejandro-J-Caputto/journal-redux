import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesInitialState } from '../../interfaces/notes.interface';
import { activeNote, deleteNoteByIDAsync } from '../../redux/actions/notesActions';
import { RootState } from '../../redux/store/store';

export const EntriesContainer = () => {
  const dispatch = useDispatch()
  const notesState: NotesInitialState = useSelector((state: RootState) => state.notes);
  const { formValues, handleInputChange, reset } = useForm(notesState.active)
  const { title, body } = formValues;
  const activeNoteID = useRef( notesState.active.id )
  const deleteNoteHandler = () => {
    dispatch(deleteNoteByIDAsync(notesState.active.id));
  }
  useEffect(() => {
    
    if( notesState.active.id !== activeNoteID.current ) {
      reset (notesState.active)
      activeNoteID.current = notesState.active.id;
    }
  }, [notesState.active, reset])

  useEffect(() => {
    
    dispatch(activeNote(formValues))
    
  }, [formValues, dispatch])

  return (
    <div className="note-container animate__animated animate__fadeIn">
      <div className="note">
        <input
          type="text"
          placeholder="Add a meaningfull title"
          value={title}
          name='title'
          onChange={handleInputChange}
          className="note__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="Today was a nice day..."
          value={body}
          name='body'
          onChange={handleInputChange}
        ></textarea>
        <div className="note__image">
          {notesState.active.imageURL && <img src={notesState.active.imageURL} alt="user selection" />}
        </div>
      <button onClick={deleteNoteHandler} className="btn btn-delete">DELETE NOTE</button>
      </div>
    </div>
  )
}
