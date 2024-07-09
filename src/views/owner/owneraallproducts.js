import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./owneraallproducts.css";

export default function Modais() {
  const products = [
    { name: 'Product Name', count: '15/30' },
    { name: 'Product Name', count: '15/30' },
    { name: 'Product Name', count: '15/30' },
    { name: 'Product Name', count: '15/30' },
    { name: 'Design Pack', count: '15/30', designPack: true },
    { name: 'Product Name', count: '15/30' },
    { name: 'Product Name', count: '15/30' },
    { name: 'Product Name', count: '15/30' },
    { name: 'Product Name', count: '15/30' },
  ];

  return (
    <div className="wrapper d-flex flex-column justify-content-center mx-auto">
      <div className="search-bar d-flex align-items-center">
        <input type="text" placeholder="Search" className="form-control search-input" />
        <div className="nav-links ml-auto d-flex align-items-center">
          <a href="#" className="nav-link">Recents</a>
          <a href="#" className="nav-link active">A-Z <span>&#8593;</span></a>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className={`image-placeholder ${product.designPack ? 'design-pack' : ''}`}></div>
                  <span>{product.name}</span>
                  <span>{product.count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
