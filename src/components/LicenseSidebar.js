import React from 'react';
import "./licenseSidebar.css";

export default function LicenseSidebar() {
    return (
        <div className="licenses-sidebar">
    <div className="search-container">
      <input
        type="search"
        className="form-control2"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text" id="search-addon">
        <i className="fas fa-search"></i>
      </span>
    </div>
      <br></br>
            <div className="license-list">
                <div className="license-item">
                    <div>
                        <p className="license-name">António Mendes</p>
                        <p className="license-email">antoniomendes@empresa.pt</p>
                    </div>
                    <span className="license-check">&#10003;</span>
                </div>
                <div className="license-item">
                    <div>
                        <p className="license-name">Employee 1</p>
                        <p className="license-email">employee1@gmail.com</p>
                    </div>
                    <span className="license-check">&#10003;</span>
                </div>
                <div className="license-item">
                    <div>
                        <p className="license-name">Employee 2</p>
                        <p className="license-email">employee2@gmail.com</p>
                    </div>
                    <span className="license-check">&#10003;</span>
                </div>
                <div className="license-item">
                    <div>
                        <p className="license-name">Employee 3</p>
                        <p className="license-email">employee3@gmail.com</p>
                    </div>
                    <span className="license-check">&#10003;</span>
                </div>
            </div>
            <div className="add-license">
                <button>+</button>
            </div>
        </div>
    );
}

