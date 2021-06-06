import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo-box">
        <Link to="/manager-app/home/overview" className="navbar__link">
          <i className="navbar__logo fab fa-pied-piper-square"></i>
        </Link>
        <div className="workspace__name">
          <span>Alejandro</span>
        </div>
      </div>
      <div className="navbar__list">
        {/* <NavLink className="navbar__list-item" activeClassName="active-link-nav" to="/manager-app/home/overview">
          <i className="navbar__list-item-icon--logout fas fa-home"></i>
        </NavLink> */}

        <NavLink className="navbar__list-item" activeClassName="active-link-nav" to="/journal-redux">
          <i className="navbar__list-item-icon--settings fas fa-edit"></i>
        </NavLink>

        {/* <NavLink className="navbar__list-item" activeClassName="active-link-nav" to="/manager-app/profile">
          <img className="navbar__list-item-user-photo" src={user.img ? user.img : ProfilePic} alt="profile"/>
        </NavLink> */}

        {/* <NavLink onClick={onLogout} className="navbar__list-item" activeClassName="active-link-nav"  to="/auth/login">
          <i className="navbar__list-item-icon--logout fas fa-sign-out-alt"></i>
        </NavLink> */}

      </div>

    </nav>
  )
}
