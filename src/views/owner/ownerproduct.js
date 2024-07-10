import React from 'react';
import "./ownerproduct.css";
import LicenseSidebar from '../../components/LicenseSidebar';
import LicenseDetails from '../../components/LicenseDetails';

export default function OwnerProduct() {
    return (
        <div className="owner-product-wrapper d-flex flex-column justify-content-center align-items-center">
            <div className="owner-product-content mt-5">
                <div className="owner-product-card card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="owner-product-form-group d-flex">
                            <div className="owner-product-logo">
                                <div className="owner-product-logo-box">
                                    <span className="owner-product-logo-text-c">C</span>
                                    <span className="owner-product-logo-text-v">v</span>
                                </div>
                            </div>
                            <div className="owner-product-title">
                                <h1>Creativortex</h1>
                                <p>Design</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owner-product-card card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="owner-product-custom-title">Subscription</div>
                        <div className="owner-product-divider"></div>
                        <div className="owner-product-form-group d-flex justify-content-between align-items-center">
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
                <div className="owner-product-card card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="owner-product-custom-title">Addons</div>
                        <div className="owner-product-divider"></div>
                        <div className="owner-product-form-group">
                            <p className="owner-product-no-items">No items to show.</p>
                        </div>
                    </div>
                </div>
                <div className="owner-product-card card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="owner-product-custom-title">Manage Licenses</div>
                        <div className="owner-product-divider"></div>
                        <div className="owner-product-form-group owner-product-licenses">
                            <LicenseSidebar />
                            <LicenseDetails />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
