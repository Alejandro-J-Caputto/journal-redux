import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Sidebar } from '../components/layout/Sidebar'

export const MainJournal = () => {
  return (
    <Layout>
      <div className="section-home">
        <div className="main-dashboard">
          <div className="main-content-dashboard">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </Layout>
  )
}
