import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EntriesList } from '../entries/EntriesList'
import { RootState } from '../../redux/store/store';
import { AuthInitialState } from '../../interfaces/login.interface';
import { startNewNoteAsync } from '../../redux/actions/notesActions';

export const Sidebar = ({ classes }: { classes: string }) => {
  const authState:AuthInitialState = useSelector((state:RootState) => state.auth);
  const dispatch = useDispatch();
  const {name} = authState;

  const addEntryHandler = ()=> {
    dispatch(startNewNoteAsync())
  }

   return (
    <>
      <nav className={classes}>
        <h3 className="heading-sidenav">
          {`${name}'s Journal`}
        </h3>
        <div onClick={addEntryHandler} className="new-entry">
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
