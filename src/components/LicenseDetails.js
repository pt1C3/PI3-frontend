import React from 'react';
import "./licenseDetails.css";

export default function LicenseDetails() {
    return (
        <div className="licenses-details">
            <div className="license-header">
                <div className="header-left">
                    <p><strong>António Mendes</strong></p>
                    <div className="subtitulo">antoniomendes@empresa.pt</div>
                </div>
                <button className="btn btn-secondary mt-2">Remove License</button>
            </div>
            <div className="license-key-section">
                <p>License key</p>
                <p className="license-key">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-files" viewBox="0 0 16 16">
                        <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1M3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>
                    </svg> 
                    12345 12345 54321 54321 123 (Designer Pack)
                </p>
            </div>
            <p className="license-count">15/30</p>
        </div>
    );
}