import React from 'react';
import Breadcrumbs from "../../components/breadcrumbs";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './adminversions.css';

export default function adminversions() {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
            <Helmet>
                <title>Versions - LogicLeap</title>
            </Helmet>
            <Breadcrumbs page1="Products" page2="Product Name" page3="Versions" link1="/" link2="/"></Breadcrumbs>
            <div className="col-md-6 bg-white p-4 rounded-3 form-container">
                <form>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="version" className="form-label">
                                Version
                            </label>
                            <input type="text" className="form-control" id="version" placeholder="1.0.3b" />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="status" className="form-label">
                                Status
                            </label>
                            <select className="form-control" id="status" name="status">
                                <option>Alpha</option>
                                <option>Beta</option>
                                <option>Stable</option>
                            </select>
                        </div>
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

