import { db } from "../firebase/firebaseConfig"
import { Note } from "../interfaces/notes.interface";


export const getNotesById = async (uid:string) => {
  const notesSnapshot = await db.collection(`${uid}/journal/notes`).get();
  const notes:Note[] = [];
  
  notesSnapshot.forEach( snapChild => {
    notes.push({
      id: snapChild.id,
      ...snapChild.data()
    })
  })

  return notes;
}