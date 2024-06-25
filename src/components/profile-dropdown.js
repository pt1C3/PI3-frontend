import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import AuthService from "../views/auth.service";

import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileDropdown() {
  const logout = () => {
    AuthService.logout();
  }
  return (
    <div className="dropdown">
      <button className="btn btn-link p-0 border-0 custom-dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={process.env.PUBLIC_URL + "/logo192.png"} height="25" alt="Profile" className="rounded-circle" />
      </button>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
        <li className="dropdown-item">
          <span>António Mendes</span>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li className="dropdown-item">
          <FontAwesomeIcon icon={faUser} className="me-2" /> Manage Account
        </li>
        <li className="dropdown-item">
          <FontAwesomeIcon icon={faLifeRing} className="me-2" /> Support
        </li>
        <li className="dropdown-item">
          <button className='btn' onClick={logout}><FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Log out</button>

        </li>
      </ul>
    </div>
  );
}

export default ProfileDropdown;
