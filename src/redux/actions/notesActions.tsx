import { Dispatch } from "redux"
import { store } from '../store/store';
import { AuthInitialState } from '../../interfaces/login.interface';
import { db } from "../../firebase/firebaseConfig";
import { Note } from '../../interfaces/notes.interface';
import types from "../types/types";
import { getNotesById } from '../../utils/getNotes';
import { displayNotificacionAction, setNotificationContent, hideNotificationAction } from './ui';
import { NOTIFICATION_OPTS } from '../../utils/notificationIconHandler';
import { fileUpload } from "../../utils/cloudinary";

export const startNewNoteAsync = () => {
  return async (dispatch: any, getState: typeof store.getState) => {

    const auth: AuthInitialState = getState().auth;
    const newNote = {
      id: '',
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const documentReference = await db.collection(`${auth.uid}/journal/notes`).add(newNote)
    newNote.id = documentReference.id
    dispatch(activeNote(newNote))
    dispatch(addNewNote(newNote.id, newNote))
  }
}
export const addNewNote = ( id: string, note:Note ) => ({
  type: types.notesAddNew,
  payload: {
    ...note
  }
})
export const getAllNotesAsync = (uid: string) => {
  return async (dispatch: Dispatch) => {
    const notes = await getNotesById(uid);
    dispatch(setNotes(notes))
  }
}

export const postNoteAsync = (note: Note) => {
  return async (dispatch: Dispatch, getState: typeof store.getState) => {
    try {
      dispatch(displayNotificacionAction())
      dispatch(setNotificationContent(NOTIFICATION_OPTS('Saving your note').loading))
      const { uid } = getState().auth;

      await db.doc(`${uid}/journal/notes/${note.id}`).update(note);
      dispatch(refreshNote(note.id, note))
      dispatch(setNotificationContent(NOTIFICATION_OPTS('Sucessfully saved').login))
      setTimeout(() => {
        dispatch(hideNotificationAction())
      }, 2500);

    } catch (error) {
      dispatch(displayNotificacionAction())
      dispatch(setNotificationContent(NOTIFICATION_OPTS(error.message).error))
      setTimeout(() => {
        dispatch(hideNotificationAction())
      }, 2500);
    }
  }
}

export const uploadImageAsync = (file: File) => {
  return async  (dispatch: any, getState: typeof store.getState) => {
    const activeNote:Note = getState().notes.active;

    dispatch(displayNotificacionAction())
    dispatch(setNotificationContent(NOTIFICATION_OPTS('Uploading your picture').loading))
    const fileUrl = await fileUpload(file)
    activeNote.imageURL = fileUrl;
    dispatch(setNotificationContent(NOTIFICATION_OPTS('sucessfully loaded').login))
    setTimeout(() => { hideNotificationAction() }, 2500)

    dispatch(postNoteAsync(activeNote))
  }
}

export const  deleteNoteByIDAsync = (id:string) => {
  return async(dispatch:Dispatch, getState:typeof store.getState) => {
    const {uid} = getState().auth
    await db.doc(`${uid}/journal/notes/${id}`).delete();
    dispatch(deleteNoteByID(id))
  }
}
 
export const activeNote = (note: Note) => ({
  type: types.notesActive,
  payload: {
    ...note
  }
})


export const setNotes = (notes: Note[]) => ({
  type: types.notesGetAll,
  payload: notes
})

export const deleteNoteByID = (id:string) => ({
  type: types.notesDelete,
  payload: id
})

export const refreshNote = (id: string, note: Note) => ({
  type: types.notesUpdate,
  payload: {
    id,
    note
  }
})

export const logoutCleaning = () => ({
  type: types.notesLogoutCleaning
})