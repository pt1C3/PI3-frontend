import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './costumers.css';
import { Helmet } from 'react-helmet';
import countries from 'i18n-iso-countries';
import 'i18n-iso-countries/langs/pt.json';

export default function costumers() {
  const [formData, setFormData] = useState(
    {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      country: "",
      phone_number: "",
      image: null,
      business: 
      {
        name: "",
        website: ""
      }
    }
  )
  const [isOwner, setisOwner] = useState(false);
  const [countryList, setCountryList] = useState({});

  useEffect(() => {
    // Register the Portuguese locale
    countries.registerLocale(require('i18n-iso-countries/langs/pt.json'));

    // Get the country names in Portuguese
    const countryNames = countries.getNames('pt', { select: 'official' });

    // Set the country names to state
    setCountryList(countryNames);
  }, []);
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
                <form>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input type="text" className="form-control" id="lastName" />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
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
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <select className="form-select form-control" name="country">
                        {Object.entries(countryList).map(([code, name]) => (
                          <option key={code} value={code}>
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
                        placeholder="+351 999999999"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <input className="form-check-input" type="checkbox" name="owner" value={isOwner} onChange={() => setisOwner(!isOwner)} />
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
                          placeholder="Inteligência Lda."
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
                          placeholder="inteligencialda.pt"
                        />
                      </div>
                    </> : null}

                  </div>
                  <button type="submit" className="btn-primary w-100 mt-3">
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

