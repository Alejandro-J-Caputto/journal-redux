import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { AuthInitialState } from '../../interfaces/login.interface';
import { NotesInitialState } from '../../interfaces/notes.interface';
import { startLogout } from '../../redux/actions/authActions';
import { postNoteAsync, uploadImageAsync } from '../../redux/actions/notesActions';
import { RootState } from '../../redux/store/store';

export const Navbar = () => {
  const inputFile = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch();
  const authState: AuthInitialState = useSelector((state: RootState) => state.auth);
  const noteState: NotesInitialState = useSelector((state: RootState) => state.notes);
  const { name } = authState
  const saveNoteHandler = () => {
    dispatch(postNoteAsync(noteState.active))
  }
  const loadPictureClodinary = (event: React.MouseEvent) => {
    inputFile.current?.click();
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target['files']![0];
    if(file) {
      dispatch(uploadImageAsync(file))
    }
  } 

  return (
    <nav className="navbar">
      <div className="navbar__logo-box">
        <Link to="/manager-app/home/overview" className="navbar__link">
          <i className="navbar__logo fab fa-pied-piper-square"></i>
        </Link>
        <div className="workspace__name">
          <span>{name}</span>
        </div>
      </div>
      <div className="navbar__list">

        <input ref={inputFile} type="file" name="file" style={{ display: 'none' }} onChange={handleFileChange}/>
        <button onClick={loadPictureClodinary} className="navbar__list-item active-link-nav btn-save" >
          <i className="navbar__list-item-icon--settings far fa-images "></i>
        </button>
        <button onClick={saveNoteHandler} className="navbar__list-item active-link-nav btn-save" >
          <i className="navbar__list-item-icon--settings fas fa-save "></i>
        </button>

        <NavLink onClick={() => { dispatch(startLogout()) }} className="navbar__list-item" activeClassName="active-link-nav" to="/auth/login">
          <i className="navbar__list-item-icon--logout fas fa-sign-out-alt"></i>
        </NavLink>

      </div>

    </nav>
  )
}
