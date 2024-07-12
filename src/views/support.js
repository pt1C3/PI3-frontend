import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { Helmet } from 'react-helmet';

export default function Support() {
    return (
        <div className="wrapper d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
            <Helmet>
                <title>Support - LogicLeap</title>
            </Helmet>
            <div className="col-md-6 bg-white p-4 rounded-3 form-container">
                <h3 className='text-bold mb-0'>Contact Support</h3>
                <form method="post">
                    <div className="form-group mt-3">
                        <label htmlFor="reason">Reason</label>
                        <select className="form-select form-control" id="reason" name="reason">
                            <option>Problem with a product</option>
                            <option>Another reason</option>
                        </select>

                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="details">Details</label>
                        <textarea className="form-control details-textarea" id="details" name="details" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 w-100">Submit</button>
                </form>
            </div >
        </div >
    );
}
