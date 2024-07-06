import React from 'react';
import "./managerProduct.css";

export default function ManagerProduct() {
    return (
        <div className="wrapper d-flex flex-column justify-content-center align-items-center">
        <div className="content mt-5">
          <div className="card mb-3">
            <div className="card-body">
              <div className="custom-title">Creativortex</div>
              <div className="divider"></div>
              <div className="form-group">
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
                <p>No items to show.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="custom-title">Manage Licenses</div>
              <div className="divider"></div>
              <div className="form-group licenses">
                <div className="licenses-sidebar">
                  <div className="search-bar">
                    <input type="text" placeholder="Search" />
                  </div>
                  <div className="license-list">
                    <div className="license-item">
                      <p>António Mendes</p>
                      <p>antoniomendes@empresa.pt</p>
                      <span className="license-check">&#10003;</span>
                    </div>
                    <div className="license-item">
                      <p>Employee 1</p>
                      <p>employee1@gmail.com</p>
                      <span className="license-check">&#10003;</span>
                    </div>
                    <div className="license-item">
                      <p>Employee 2</p>
                      <p>employee2@gmail.com</p>
                      <span className="license-check">&#10003;</span>
                    </div>
                    <div className="license-item">
                      <p>Employee 3</p>
                      <p>employee3@gmail.com</p>
                      <span className="license-check">&#10003;</span>
                    </div>
                  </div>
                  <div className="add-license">
                    <button>+</button>
                  </div>
                </div>
                <div className="licenses-details">
                  <p><strong>António Mendes</strong></p>
                  <p>antoniomendes@empresa.pt</p>
                  <p>License key</p>
                  <p>12345 12345 54321 54321 123 (Designer Pack)</p>
                  <button className="remove-license">Remove License</button>
                  <p className="license-count">15/30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};