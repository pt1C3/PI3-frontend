import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
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

function App() {
  const searchSubmit = (event) => {
    event.preventDefault();
    // Handle search submission
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar bg-white px-10vw regular-border">
          <Link to="/" className="navbar-brand">
            <img src={process.env.PUBLIC_URL + "/images/logicleap.png"} alt="Logo" height="40" />
          </Link>
          <span className="d-flex align-items-center">
            <form className="inline-form" onSubmit={searchSubmit}>
              <div className="input-group rounded-2">
                <input type="text" className="form-control bg-transparent border-0" placeholder="Search" name="searchValue" />
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
        </nav>
        <Routes>
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
