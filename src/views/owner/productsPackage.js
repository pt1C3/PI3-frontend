import React from 'react';
import "./productsPackage.css";
import LicenseSidebar from '../../components/LicenseSidebar';
import LicenseDetails from '../../components/LicenseDetails';

export default function productsPackage() {
    return (
        <div className="managerProduct-wrapper d-flex flex-column justify-content-center align-items-center">
        <div className="managerProduct-content mt-5">
            <div className="managerProduct-card card mb-3 shadow-sm">
                <div className="managerProduct-card-body card-body">
                    <div className="managerProduct-form-group d-flex">
                        <div className="managerProduct-logo">
                            <div className="managerProduct-logo-box">
                                <span className="managerProduct-logo-text-c">C</span>
                                <span className="managerProduct-logo-text-v">v</span>
                            </div>
                        </div>
                        <div className="managerProduct-title">
                            <h1>Creativortex</h1>
                            <p>Design</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="managerProduct-card card mb-3 shadow-sm">
                <div className="managerProduct-card-body card-body">
                    <div className="managerProduct-custom-title">Addons</div>
                    <div className="managerProduct-divider"></div>
                    <div className="managerProduct-form-group">
                        <p className="managerProduct-no-items">No items to show.</p>
                    </div>
                </div>
            </div>
            <div className="managerProduct-card card shadow-sm">
                <div className="managerProduct-card-body card-body">
                    <div className="managerProduct-custom-title">Manage Licenses</div>
                    <div className="managerProduct-divider"></div>
                    <div className="managerProduct-form-group managerProduct-licenses">
                        <LicenseSidebar />
                        <LicenseDetails />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};