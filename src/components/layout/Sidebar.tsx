import React from 'react'
import { EntriesList } from '../entries/EntriesList'

export const Sidebar = ({ classes }: { classes: string }) => {
  return (
    <>
      <nav className={classes}>
        <h3 className="heading-sidenav">
          Alejandro Caputto's Journal
        </h3>
        <div className="new-entry">
          <i className="far fa-calendar-plus"></i>
        </div>
        {/* <div>{children}</div> */}
        <h3 className="heading-sidenav">
          Your Entries
        </h3>
        <EntriesList/>
      </nav>
    </>
  )
}
