import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import AuthService from "../views/auth.service";

export default function ProfileDropdown({ image, name, onLogout }) {
  const handleLogout = () => {
    onLogout(); // Trigger parent component's logout handler
};
  if (!name || name=== "undefined undefined") {
    return (
      <Link className='btn btn-secondary' to="/login" >Login</Link>
    )
  }
  return (
    <div className="dropdown">
      <button className="btn btn-link p-0 border-0 custom-dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={image} height="25" alt="Profile" className="rounded-circle" />
      </button>
      <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
        {name && (
          <span className="dropdown-item">{name}</span>
        )}
        <li><hr className="dropdown-divider" /></li>
        <button className="dropdown-item">
          <FontAwesomeIcon icon={faUser} className="me-2" /> Manage Account
        </button>
        <button className="dropdown-item">
          <FontAwesomeIcon icon={faLifeRing} className="me-2" /> Support
        </button>
        <button className="dropdown-item" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Log out</button>
      </div>
    </div>
  );
}
