import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import './App.css';
import Home from './views/home';
import Payment from './views/payment';
import Product from './views/product';
import Login from './views/Login';
import SignUp from "./views/SignUp";
import Manager from './views/manager';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar bg-white px-10vw">
            <Link to="/" className="navbar-brand">
              <img src={process.env.PUBLIC_URL +"/images/logicleap.png"} alt="Logo" height="40" />
            </Link>
            <span className="d-flex">
              <form className="inline-form">
                <div className="input-group rounded-2">
                  <input type="text" className="form-control bg-transparent border-0" placeholder="Search" />
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
              <button className="btn btn-default rounded-circle">
                <img src={process.env.PUBLIC_URL + "/logo192.png"} height="20"></img>
              </button>
              </span>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/manager" element={<Manager />} />

        {/* Define other routes as needed */}
      </Routes>
    </div>
    </Router >
  );
}

export default App;
