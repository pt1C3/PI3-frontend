import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './adminversions.css';
export default function adminversions() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
            <Helmet>
                <title>Version - LogicLeap</title>
            </Helmet>
            <div className="col-md-6 bg-white p-4 rounded-3 form-container">
                <div className="breadcrumb">
                    <a href="/">Products</a> / <a href="/">Product Name</a> / Versions
                </div>
                <form>
                    <div className="form-group mt-3">
                        <label htmlFor="version">Version</label>
                        <input type="text" className="form-control" id="version" name="version" placeholder="1.0.3b" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="status">Status</label>
                        <select className="form-control" id="status" name="status">
                            <option>Alpha</option>
                            <option>Beta</option>
                            <option>Stable</option>
                        </select>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="download">Download</label>
                        <input type="url" className="form-control" id="download" name="download" placeholder="https://www.example.com" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="releaseNotes">Release Notes</label>
                        <textarea className="form-control" id="releaseNotes" name="releaseNotes" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 w-100">Save</button>
                </form>
            </div>
        </div>
  );
};

