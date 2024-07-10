import React from 'react';
import "./ownerproduct.css";
import LicenseSidebar from '../../components/LicenseSidebar';
import LicenseDetails from '../../components/LicenseDetails';

export default function OwnerProduct() {
    return (
        <div className="wrapper d-flex flex-column justify-content-center align-items-center o-product">
            <div className="content mt-5">
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="form-group d-flex">
                            <div className="logo">
                                <div className="logo-box">
                                    <span className="logo-text-c">C</span>
                                    <span className="logo-text-v">v</span>
                                </div>
                            </div>
                            <div className="title">
                                <h1>Creativortex</h1>
                                <p>Design</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="custom-title">Subscription</div>
                        <div className="divider"></div>
                        <div className="form-group d-flex justify-content-between align-items-center">
                            <div>
                                <p>Your next bill is for <strong>€649.99</strong> on <strong>2023-03-12</strong></p>
                            </div>
                            <div>
                                <button className="btn btn-outline-secondary rounded-pill mr-2">Change Plan</button>
                                <button className="btn btn-outline-secondary rounded-pill mr-2">Pause</button>
                                <button className="btn btn-outline-secondary rounded-pill mr-2">Cancel</button>
                                <button className="btn btn-primary">Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="custom-title">Addons</div>
                        <div className="divider"></div>
                        <div className="form-group">
                            <p className="no-items">No items to show.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="custom-title">Manage Licenses</div>
                        <div className="divider"></div>
                        <div className="form-group licenses">
                            <LicenseSidebar />
                            <LicenseDetails />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
