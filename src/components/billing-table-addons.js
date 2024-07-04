import React, { useState } from 'react';
import { version } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Products from '../views/admin/productAddons';
import './billing-table-addons.css';

const BillingTable = ({ title, type, billingDate, paymentDate, status, maxUsers, billingAmount, startDate, action }) => { 
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleAddProduct = () => {
        // Lógica para adicionar produto
        console.log("Add Product clicked");
    };

    const data = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' }
    ];

    return (
        <div className="container mt-5 billing-table">
            <div className="search-bar-container">
                <div className="search-bar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Search"
                        className="search-input"
                    />
                </div>
                <span className="add-product-text" onClick={handleAddProduct}>
                    Add Product
                </span>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Addon</th>
                        <th scope="col">Status</th>
                        <th scope="col">Versions</th>
                        <th scope="col">Active Costumers</th>
                        <th scope="col">billingAmount (yr.)</th>
                        <th scope="col">billingAmount (mo.)</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{title}</td>
                            <td>
                                <span className={`text-${status === 'Pending' ? 'warning' : status === 'Payed' ? 'success' : 'danger'}`}>
                                    {status}
                                </span>
                            </td>
                            <td>{version}</td>
                            <td>{billingDate}</td>
                            <td>{billingAmount}</td>
                            <td>{billingAmount}</td>
                            <td>
                                {action && <a className="linknormal" href="#">{action}</a>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BillingTable;
