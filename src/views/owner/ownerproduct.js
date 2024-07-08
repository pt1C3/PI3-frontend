import React from 'react';
import "./product.css";
import LicenseSidebar from '../../components/LicenseSidebar';
import LicenseDetails from '../../components/LicenseDetails';

export default function ownerproduct() {
    return (
        <div className="wrapper d-flex flex-column justify-content-center align-items-center">
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