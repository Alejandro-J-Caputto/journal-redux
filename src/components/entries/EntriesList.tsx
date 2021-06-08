import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EntriesItem } from './EntriesItem'
import { RootState } from '../../redux/store/store';
import { Note, NotesInitialState } from '../../interfaces/notes.interface';
import { activeNote } from '../../redux/actions/notesActions';

export const EntriesList = () => {
  const dispatch = useDispatch();
  const notesState:NotesInitialState = useSelector((state:RootState) => state.notes);
  const onSetActiveHandler = (event: React.MouseEvent) => {
    const target = event.target as HTMLLIElement;
    const liElement = target.closest('li');
    const currentNoteID = liElement?.getAttribute('id');
    const currentNote = notesState.notes.find(note => note.id === currentNoteID);
    dispatch(activeNote(currentNote!))
  }
  
  return (
    <ul onClick={onSetActiveHandler} className="sidebar-list">
      {notesState.notes.map((note:Note) => <EntriesItem key={note.id} title={note.title!} id={note.id} description={note.body!} date={note.date!} image={note.imageURL!} />)}
    </ul>
  )
}
