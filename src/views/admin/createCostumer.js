import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './costumers.css';
import { Helmet } from 'react-helmet';
import countries from 'i18n-iso-countries';
import 'i18n-iso-countries/langs/pt.json';
import axios from 'axios';

export default function Costumers() {
  const baseURL = 'http://localhost:3000';
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phone_number, setPhoneNumber] = useState("");


  const [countryList, setCountryList] = useState({});

  useEffect(() => {
    // Register the Portuguese locale
    countries.registerLocale(require('i18n-iso-countries/langs/pt.json'));

    // Get the country names in Portuguese
    const countryNames = countries.getNames('pt', { select: 'official' });

    // Set the country names to state
    setCountryList(countryNames);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password || !country || !phone_number) alert("All fields are required. Please fill in all inputs.")
    else {
      axios.post(baseURL + '/user/create',
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          country: country,
          phone_number: phone_number,
          business: null
        }
      ).then(res=>{
        alert(res.data.message);
      })
    }
  }
  return (
    <div className="wrapper">
      <Helmet>
        <title>Create Customer - LogicLeap</title>
      </Helmet>
      <div className='d-flex flex-column align-items-center justify-content-center pt-4'>
        {/* Primeiro Container */}
        <div className="col-8 row justify-content-center bg-white rounded-3 regular-border mb-3 p-3">

          <h3 className="text-bold">Create new customer</h3>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstname"
                  value={firstname} onChange={(e) => { setFirstName(e.target.value) }} />
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastname" value={lastname} onChange={(e) => { setLastName(e.target.value) }} />
              </div>
              <div className="col-sm-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
              </div>
              <div className="col-sm-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="text" className="form-control" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
              </div>
              <div className="col-sm-6">
                <label htmlFor="country" className="form-label">Country</label>
                <select className="form-select form-control" name="country" value={country} onChange={(e) => { setCountry(e.target.value) }} >
                  {Object.entries(countryList).map(([code, name]) => (
                    <option key={code} value={name}>{name}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-6">
                <label htmlFor="phone_number" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="phone_number" placeholder="+351 912345678" value={phone_number} onChange={(e) => { setPhoneNumber(e.target.value) }} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary my-3 w-100">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>

  );
};
