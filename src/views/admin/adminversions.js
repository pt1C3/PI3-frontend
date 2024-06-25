import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function adminversions() {
  return (
    <div className="wrapper d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Helmet>
        <title>Sign up - LogicLeap</title>
      </Helmet>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-left"><strong>Version</strong></h3>
                <p className="text-left">Already have an account? <a className="linknormal" href="#">Login</a></p>
                <form>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input type="text" className="form-control" id="firstName" placeholder="António" />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input type="text" className="form-control" id="lastName" placeholder="Mendes" />
                    </div>
                    <div className="col-sm-12">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="antoniomendes@empresa.pt"
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
                      <select className="form-select form-control" id="country">
                        <option selected>Portugal</option>
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
                    <div className="form-group">
                      <div className="form-check form-check-inline" style={{ display: 'inline-block', alignItems: 'center' }}>
                        <input className="form-check-input" type="radio" name="role" id="business" value="business" defaultChecked />
                        <label className="form-check-label" htmlFor="business" style={{ marginTop: '9px', marginLeft: '9px' }}>Business</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="role" id="manager" value="manager" />
                        <label className="form-check-label" htmlFor="manager" style={{ marginTop: '9px', marginLeft: '9px' }}>Manager</label>
                      </div>
                    </div>
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
                    <div className="col-sm-12 mb-5">
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
                  </div>
                  <button type="submit" className="btn-primary w-100 mt-1">
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

