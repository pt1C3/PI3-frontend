import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { Helmet } from 'react-helmet';
import countries from 'i18n-iso-countries';
import 'i18n-iso-countries/langs/pt.json';
import axios from 'axios';

export default function SignUp() {
  const baseURL = 'http://localhost:3000';

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [country, setCountry] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [business, setBusiness] = useState({});

  const [isOwner, setisOwner] = useState(false);
  const [countryList, setCountryList] = useState({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate= useNavigate();

  useEffect(() => {
    // Register the Portuguese locale
    countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

    // Get the country names in Portuguese
    const countryNames = countries.getNames('en', { select: 'official' });

    // Set the country names to state
    setCountryList(countryNames);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstname || !lastname || !email || !password || !confirmPassword || !country || !phone_number) setMessage("All fields are required. Please fill in all inputs.")
    else if (password !== confirmPassword) setMessage("The passwords don't match.")
    else {
      setLoading(true);
      axios.post(baseURL + '/user/create', {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        country: country,
        phone_number: phone_number,
        businessNew: business
      }).then(res => {
        setLoading(false);
        setMessage(res.data.message)
        if(res.data.success){
          navigate('/login')
        }
      })
    }


  }
  return (
    <div className="wrapper d-flex flex-column align-items-center justify-content-center">
      <Helmet>
        <title>Sign up - LogicLeap</title>
      </Helmet>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className='text-bold mb-0'>Sign up</h3>
                <p className="text-left text-secondary">Already have an account? <Link className="linknormal" to="/login">Login</Link></p>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input type="text" className="form-control" id="firstName" value={firstname} onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input type="text" className="form-control" id="lastName" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <select className="form-select form-control" name="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                        {Object.entries(countryList).map(([code, name]) => (
                          <option key={code} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        placeholder="+351 912345678"
                        value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)}

                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" name="owner" checked={isOwner} onChange={() => setisOwner(!isOwner)} />
                        <label className="form-check-label ms-2" htmlFor="owner">Owner of a Business?</label>
                      </div>
                    </div>
                    {isOwner ? <>
                      <div className="col-sm-12">
                        <label htmlFor="businessName" className="form-label">
                          Business' name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="businessName"
                          value={business.name} onChange={(e) => setBusiness({ ...business, name: e.target.value })}

                        />
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="businessWebsite" className="form-label">
                          Business' website
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="businessWebsite"
                          value={business.website} onChange={(e) => setBusiness({ ...business, website: e.target.value })}
                        />
                      </div>
                    </> : null}

                  </div>
                  <button type="submit" className="btn-primary w-100 mt-3">
                    {loading ? 'Signing up...' : 'Sign up'}
                  </button>
                  {message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message}
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

