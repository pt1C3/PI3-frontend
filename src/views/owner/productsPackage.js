import React from 'react';
import { Link } from 'react-router-dom';
import "./productsPackage.css";
import LicenseSidebar from '../../components/LicenseSidebar';
import LicenseDetails from '../../components/LicenseDetails';

export default function ProductsPackage() {
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

        {/* Subscription Plan Container */}
        <div className="managerProduct-container card shadow-sm mb-4">
          <div className="managerProduct-card-body card-body">
            <div className="managerProduct-custom-title">Subscription plan</div>
            <div className="managerProduct-divider"></div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p>
                  Your next bill is for <span className="fw-bold">€19.99</span> on <span className="fw-bold">2023-03-12</span>
                </p>
              </div>
              <div>
                <button className="btn btn-secondary me-2">Change Plan</button>
                <button className="btn btn-secondary me-2">Pause</button>
                <button className="btn btn-secondary me-2">Cancel</button>
                <button className="btn btn-primary">Pay</button>
              </div>
            </div>
          </div>
        </div>

        {/* Manage Licenses Container */}
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

        {/* Software Included Container */}
        <div className="managerProduct-container card shadow-sm mt-4">
          <div className="managerProduct-card-body card-body">
            <div className="managerProduct-custom-title">Software Included</div>
            <div className="managerProduct-divider"></div>
            <div className="managerProduct-software-library">
              <div className="software-item">
                <div className="managerProduct-logo-box small">
                  <span className="managerProduct-logo-text-c">C</span>
                  <span className="managerProduct-logo-text-v">v</span>
                </div>
                <div className="software-info">
                  <p className="software-title">Creativortex</p>
                  <p className="software-subtitle">Design</p>
                </div>
              </div>
              <div className="software-item">
                <div className="managerProduct-logo-box small">
                  <span className="managerProduct-logo-text-c">C</span>
                  <span className="managerProduct-logo-text-v">v</span>
                </div>
                <div className="software-info">
                  <p className="software-title">Creativortex</p>
                  <p className="software-subtitle">Design</p>
                </div>
              </div>
              <div className="software-item">
                <div className="managerProduct-logo-box small">
                  <span className="managerProduct-logo-text-c">C</span>
                  <span className="managerProduct-logo-text-v">v</span>
                </div>
                <div className="software-info">
                  <p className="software-title">Creativortex</p>
                  <p className="software-subtitle">Design</p>
                </div>
              </div>
              <div className="software-item">
                <div className="managerProduct-logo-box small">
                  <span className="managerProduct-logo-text-c">C</span>
                  <span className="managerProduct-logo-text-v">v</span>
                </div>
                <div className="software-info">
                  <p className="software-title">Creativortex</p>
                  <p className="software-subtitle">Design</p>
                </div>
              </div>
              {/* Adicione mais itens conforme necessário */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


