import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./managerallproducts.css";

export default function managerallproducts() {
  return (
    <div className="wrapper d-flex flex-column justify-content-center mx-auto">
      <div className="container mt-5">
        <div className="row">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="col-md-4 mb-2">
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className={`image-placeholder ${index === 4 ? 'design-pack' : ''}`}></div>
                  <span>{index === 4 ? 'Design Pack' : 'Product Name'}</span>
                  <span>15/30</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
