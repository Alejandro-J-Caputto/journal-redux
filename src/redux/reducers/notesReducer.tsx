import { NotesInitialState } from '../../interfaces/notes.interface';
import types from "../types/types"



const initialState: NotesInitialState = {
  notes: [],
  // active: {
  //   id: '',
  //   title: '',
  //   body: '',
  //   imageURL: '',
  //   date: 0
  // } || null
  active: {
    id: '',
    title: '',
    body: '',
    imageURL: '',
    date: 0
  }
}

export const notesReducer = (state: NotesInitialState = initialState, action: any) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }
    case types.notesAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes]
      }
    case types.notesGetAll:
      return {
        ...state,
        notes: [...action.payload]
      }
    case types.notesUpdate:
      return {
        ...state,
        notes: state.notes.map(note => note.id === action.payload.id ? action.payload.note : note)
      }
    case types.notesDelete:
      return {
        ...state,
        active: {...initialState.active},
        notes: state.notes.filter(note => note.id !== action.payload)
      }
    case types.notesLogoutCleaning:
      return {
        ...state,
        active: {...initialState.active}, 
        notes: []
      }


    default:
      return state
  }
}