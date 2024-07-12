import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import './profile-dropdown.css';

export default function ProfileDropdown({ onLogout }) {
  const handleLogout = () => {
    onLogout(); // Trigger parent component's logout handler
    
  };
  var user;
  if (localStorage.getItem('user')) {
    user = JSON.parse(localStorage.getItem('user')).data;
  }
  var isOwner;
  var isAdmin;
  if (user) {
    isAdmin = user.utypeid === 4;
    isOwner = user.utypeid === 3;
  }


  if (!user) {
    return (
      <>
        <Link className='btn btn-secondary' to="/login" >Login</Link>
        <Link className='btn btn-secondary ms-1' to="/signup" >Sign up</Link>
      </>
    )
  }
  return (
    <div className="dropdown">
      <button className="btn btn-link p-0 border-0 custom-dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={user.image} height="25" alt="Profile" className="rounded-circle" />
      </button>
      <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
        {user.firstname && (
          <span className="mx-3">{user.firstname + " " + user.lastname}</span>
        )}
        <li><hr className="dropdown-divider" /></li>
        {isOwner && (
          <>
            <Link className="dropdown-item" to="/owner/product">
              My products
            </Link>
            <Link className="dropdown-item" to="/owner/managers">
              Managers
            </Link>
            <Link className="dropdown-item" to="/owner/plans">
              Plans
            </Link>
            <Link className="dropdown-item" to="/owner/history">
              Payment History
            </Link>
          </>
        )}
        {!isAdmin && (
          <Link className="dropdown-item" to="/support">
            <FontAwesomeIcon icon={faLifeRing} className="me-2" /> Support
          </Link>
        )}
        <button className="dropdown-item" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Log out</button>
      </div>
    </div>
  );
}
