import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./owneraallproducts.css";

export default function Modais() {
  const products = [
    { name: 'Product Name', count: '15/30', designPack: false },
    { name: 'Product Name', count: '15/30', designPack: false },
    { name: 'Product Name', count: '15/30', designPack: false },
    { name: 'Product Name', count: '15/30', designPack: false },
    { name: 'Design Pack', count: '15/30', designPack: true },
    { name: 'Product Name', count: '15/30', designPack: false },
    { name: 'Product Name', count: '15/30', designPack: false },
    { name: 'Product Name', count: '15/30', designPack: false },
    { name: 'Product Name', count: '15/30', designPack: false }
  ];

  return (
    <div className="wrapper">
      <div className="search-nav-bar">
        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">Recents</a>
          <a href="#" className="nav-link active">A-Z &#8593;</a>
        </div>
      </div>
      <div className="content">
        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className={`image-placeholder ${product.designPack ? 'design-pack' : ''}`}></div>
              <span className="product-name">{product.name}</span>
              <span className="product-count">{product.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
