import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default function Support() {
    return (
        <div className="wrapper background-color d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="col-md-6 bg-white p-4 rounded-3 form-container">
                <h3 className='text-bold mb-0'>Contact Support</h3>
                <form action="login.php" method="post">
                    <div className="form-group mt-3">
                        <label htmlFor="reason">Reason</label>
                        <div className="input-group">
                            <select className="form-control" id="reason" name="reason">
                                <option>Problem with a product</option>
                                <option>Another reason</option>
                            </select>
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="fas fa-chevron-down"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="details">Details</label>
                        <textarea className="form-control details-textarea" id="details" name="details" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 w-100">Submeter</button>
                </form>
            </div>
        </div>
    );
}
