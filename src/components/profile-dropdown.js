import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt, faLifeRing } from '@fortawesome/free-solid-svg-icons';

export default function ProfileDropdown({ image, name, onLogout, admin, owner }) {
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
          <span className="mx-3">{name}</span>
        )}
        <li><hr className="dropdown-divider" /></li>
        <Link className="dropdown-item" to="/owner/managers">
           Managers
        </Link>
        <Link className="dropdown-item" to="/owner/plans">
           Plans
        </Link>
        <Link className="dropdown-item" to="/support">
          <FontAwesomeIcon icon={faLifeRing} className="me-2" /> Support
        </Link>
        <button className="dropdown-item" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Log out</button>
      </div>
    </div>
  );
}
