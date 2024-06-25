import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './business.css';

export default function Business() {
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
                <h3 className="card-title text-left"><strong>Nome da empresa</strong></h3>
                <p className="text-left">Plano</p>
                <form>
                  <div className="col-sm-12 mb-3">
                    <label htmlFor="businessWebsite" className="form-label">
                      Website
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="businessWebsite"
                      placeholder="empresa.pt"
                    />
                  </div>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">
                        Owner
                      </label>
                      <input type="text" className="form-control" id="firstName" placeholder="António Mendes" />
                    </div>
                    <div className="col-sm-6">
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
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button type="submit" className="btn btn-primary w-50">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
