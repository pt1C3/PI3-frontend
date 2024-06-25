import { useState } from 'react';
import { Route, Link, Routes, useNavigate } from "react-router-dom";
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
import AdminDashboard from './views/admin/adminDashboard';
import AdminBusiness from './views/admin/business';


function App() {
  const [search, setSearch] = useState('');
  var navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  var searchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${search}`);
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
              <Link to="/" className="nav-link active" >
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
            <ProfileDropdown />
          </nav>
        </>
      ) : (

        <>
          <nav className="navbar bg-white px-10vw regular-border">
            <Link to="/" className="navbar-brand">
              <img src={process.env.PUBLIC_URL + "/images/logicleap.png"} alt="Logo" height="40" />
            </Link>
            <span className="d-flex align-items-center">
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
              </form>
              <button className="btn btn-default">
                <FontAwesomeIcon icon={faBell} />
              </button>
              <ProfileDropdown />
            </span>
          </nav> </>)}

      <Routes>
        {isAdmin ? (
          <>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/business" element={<AdminBusiness />} />
            {/*<Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/settings" element={<AdminSettings />} /> */}
          </>
        ) : (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/package/:id" element={<Package />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/paymenthistory" element={<PaymentHistory />} />
            <Route path="/support" element={<Support />} />
            <Route path="/search/:searchvalue" element={<Search />} />
            <Route path="/owner/managers" element={<Managers />} />
            <Route path="/owner/plans" element={<Plans />} />


          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
