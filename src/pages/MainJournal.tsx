import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Navbar } from '../components/layout/Navbar'
import { Sidebar } from '../components/layout/Sidebar'
import { EntriesContainer } from '../components/entries/EntriesContainer';

export const MainJournal = () => {
  return (
    <Layout>
      <div className="section-journal">
        <Sidebar classes='sidebar'/>
        <div className="section-entries">
          <Navbar />
          <EntriesContainer />      
        </div>
      </div>
    </Layout>
  )
}
