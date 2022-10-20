import { useAuth, logout } from "../firebase/firebase-config";
import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
const Nav = () => {
  const currentUser = useAuth()

  return (
    <nav>
      <div className="nav-container">
        
        <ul className="nav-ul">
        <div>{currentUser?.email}</div>
          <li className="nav-li">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>
          </li>
          {currentUser? <button onClick={logout}>Sign Out</button> : <li>
            <Link to="/signup" className="nav-link">
              SIGN UP
            </Link>
          
            <Link to="/signin" className="nav-link">
              SIGN IN
            </Link>
          </li>}
         
         
        </ul>
        <div className="title"> TITLE </div>
      </div>
    </nav>
  );
}

export default Nav