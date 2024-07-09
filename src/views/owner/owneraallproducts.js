import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import "./owneraallproducts.css";

export default function OwnerAllProducts() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('recent'); // Estado para controlar a ordenação
  const [products, setProducts] = useState([
    { id: 1, name: 'Product Name', count: '15/30' },
    { id: 2, name: 'Product Name', count: '15/30' },
    { id: 3, name: 'Product Name', count: '15/30' },
    { id: 4, name: 'Design Pack', count: '15/30' },
    { id: 5, name: 'Product Name', count: '15/30' },
    { id: 6, name: 'Product Name', count: '15/30' },
    { id: 7, name: 'Product Name', count: '15/30' },
    { id: 8, name: 'Design Pack', count: '15/30' },
    { id: 9, name: 'Product Name', count: '15/30' }
  ]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSortBy = (sortByType) => {
    setSortBy(sortByType);
    // Implemente a lógica de ordenação aqui, se necessário
  };

  return (
    <div className="container mt-5 billing-table">
      <div className="wrapper d-flex flex-column justify-content-center mx-auto">
        <div className="d-flex align-items-center search-bar-container">
          <div className="search-bar mr-3">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search"
              className="search-input"
            />
          </div>
          <div className="buttons-container">
            <button
              className={`btn btn-link ${sortBy === 'recent' ? 'active' : ''}`}
              onClick={() => handleSortBy('recent')}
            >
              Recents
            </button>
            <button
              className={`btn btn-link ${sortBy === 'az' ? 'active' : ''}`}
              onClick={() => handleSortBy('az')}
            >
              A-Z
            </button>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 card-margin-reduced">
                <div className="card">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div className={`image-placeholder ${product.name === 'Design Pack' ? 'design-pack' : ''}`}></div>
                    <span>{product.name}</span>
                    <span>{product.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
