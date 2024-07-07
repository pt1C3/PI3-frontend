import React from 'react';
import "./licenseDetails.css";

export default function LicenseDetails() {
    return (
        <div className="licenses-details">
            <p><strong>António Mendes</strong></p>
            <p>antoniomendes@empresa.pt</p>
            <p>License key</p>
            <p>12345 12345 54321 54321 123 (Designer Pack)</p>
            <button className="remove-license">Remove License</button>
            <p className="license-count">15/30</p>
        </div>
    );
}