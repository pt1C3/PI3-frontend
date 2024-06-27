import { useState, useEffect } from 'react';
import { Route, Link, Routes, useNavigate, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import './App.css';
import Home from './views/home';
import Payment from './views/payment';
import Product from './views/product';
import Package from './views/package';
import Login from './views/Login';
import SignUp from "./views/SignUp";
import Managers from './views/owner/managers';
import PaymentHistory from './views/paymenthistory';
import Support from './views/support';
import Search from './views/search';
import ProfileDropdown from './components/profile-dropdown';
import Plans from './views/owner/plans';
import AuthService from './views/auth.service'
import AdminDashboard from './views/admin/adminDashboard';
import AdminBusiness from './views/admin/createBusiness';
import AdminVersions from './views/admin/createVersion';
import AdminCostumers from './views/admin/createCostumer';
import AdminCostumerBusiness from './views/admin/customerbusiness';
import AdminCostumerEdit from './views/admin/customeredit';
import AdminProducts from './views/admin/products';
import AdminInbox from './views/admin/inbox';
import AdminProductVersions from './views/admin/productVersions';
<<<<<<< Updated upstream
import AdminManagerPackage from './views/admin/managerPackage';
=======
import AdminModais from './views/admin/Modais';
import AdminFaq from './views/admin/createFaq';
import ManagerProduct from './views/manager/product';
>>>>>>> Stashed changes



function App() {
  var navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  useEffect(() => {
    if (currentUser) {
      if (currentUser.utypeid === 4) { setIsAdmin(true); setIsOwner(false); }
      if (currentUser.utypeid === 3) { setIsOwner(true); setIsAdmin(false); }
    }
  }, [currentUser])

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    navigate('/');
  };

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null); // Clear current user in state
    setIsOwner(false);
    setIsAdmin(false);
  };

  const searchSubmit = (event) => {
    event.preventDefault();

    // Construct the new search path
    const newPath = `/search/${search}`;

    // Check if already on the search page
    if (location.pathname === newPath) {
      // Force update by setting the same path with a different key
      navigate(newPath, { replace: true });
    } else {
      // Navigate to the new search path
      navigate(newPath);
    }
  };

  return (
    <div className="App">
      {isAdmin ? (
        <>
          <nav className="navbar navbar-admin bg-white px-10vw py-0 regular-border">
            <Link to="/" className="navbar-brand">
              <img src={process.env.PUBLIC_URL + "/images/logicleap.png"} alt="Logo" height="40" />
            </Link>
            <span className="d-flex align-items-center h-100 mx-3">
              <Link to="/" className="nav-link" >
                <p className="mb-0 text-medium">Dashboard</p>
              </Link>
              <Link to="/" className="nav-link ms-2" >
                <p className="mb-0 text-medium">Sales</p>
              </Link>
              <Link to="/" className="nav-link ms-2" >
                <p className="mb-0 text-medium">Costumers</p>
              </Link>
              <Link to="/" className="nav-link ms-2" >
                <p className="mb-0 text-medium">Packages</p>
              </Link>
              <Link to="/" className="nav-link ms-2" >
                <p className="mb-0 text-medium">Products</p>
              </Link>
              <Link to="/" className="nav-link ms-2" >
                <p className="mb-0 text-medium">Custom Plans</p>
              </Link>
              <Link to="/" className="nav-link ms-2" >
                <p className="mb-0 text-medium">Support</p>
              </Link>
            </span>
            {
              currentUser ? <ProfileDropdown onLogout={handleLogout} /> : <ProfileDropdown />

            }
          </nav>
        </>
      ) : (
        <>
          <nav className="navbar bg-white px-10vw regular-border">
            <Link to="/" className="navbar-brand">
              <img src={process.env.PUBLIC_URL + "/images/logicleap.png"} alt="Logo" height="40" />
            </Link>
            <span className="d-flex align-items-center">
              {isOwner ?
                <form className="inline-form" onSubmit={searchSubmit}>
                  <div className="input-group rounded-2">
                    <input
                      type="text"
                      className="form-control bg-transparent border-0"
                      placeholder="Search"
                      name="search"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </div>
                  </div>
                </form> : null}
              <button className="btn btn-default">
                <FontAwesomeIcon icon={faBell} />
              </button>
              {
                currentUser ? <ProfileDropdown onLogout={handleLogout} /> : <ProfileDropdown />

              }
            </span>
          </nav> </>)}

      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        {isAdmin ? (
          <>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/business" element={<AdminBusiness />} />
            <Route path="/versions/:productid" element={<AdminVersions />} />
            <Route path="/faq/:productid" element={<AdminFaq />} />
            <Route path="/costumers" element={<AdminCostumers />} />
            <Route path="/costumerbusiness" element={<AdminCostumerBusiness />} />
            <Route path="/costumeredit" element={<AdminCostumerEdit />} />
            <Route path="/Products" element={<AdminProducts />} />
            <Route path="/inbox" element={<AdminInbox />} />
            <Route path="/productversions" element={<AdminProductVersions />} />
            <Route path="/managerPackage" element={<AdminManagerPackage/>} />

        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/payment/:price/:productid" element={<Payment />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/package/:id" element={<Package />} />
            <Route path="/paymenthistory" element={<PaymentHistory />} />
            <Route path="/support" element={<Support />} />
            <Route path="/search/:searchvalue" element={<Search />} />
            <Route path="/owner/managers" element={<Managers />} />
            <Route path="/owner/plans" element={<Plans />} />
            <Route path="/views/manager/product" element={<Product/>} />

          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
