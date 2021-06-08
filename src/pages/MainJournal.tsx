import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Navbar } from '../components/layout/Navbar'
import { Sidebar } from '../components/layout/Sidebar'
import { EntriesContainer } from '../components/entries/EntriesContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { NotesInitialState } from '../interfaces/notes.interface';
import { NoEntrySelected } from '../components/entries/NoEntrySelected';
import { NotificationUI } from '../components/UI/NotificationUI';

export const MainJournal = () => {
  const notesState: NotesInitialState = useSelector((state: RootState) => state.notes);
  const { active } = notesState;

  const notificationState = useSelector((state:RootState) => state.ui);
  const {notificationDisplayed} = notificationState;

  return (
    <Layout>
      <div className="section-journal animate__animated animate__fadeIn">
      {notificationDisplayed && <NotificationUI />}
        <Sidebar classes='sidebar' />
        <div className="section-entries">
          <Navbar />
          {
            (active.id)
              ? (<EntriesContainer />)
              : (<NoEntrySelected />)
          }
        </div>
      </div>
    </Layout>
  )
}
