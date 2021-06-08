export interface NotesInitialState {
  notes: Note[],
  active: {
    id: string,
    title: string,
    body: string,
    imageURL: string,
    date: number
  }  
}

export interface Note {
  id: string
  title?: string,
  body?: string,
  imageURL?: string,
  date?: number
}