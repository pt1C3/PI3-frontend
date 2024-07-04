import React, { useState } from 'react';
import { version } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './billing-table-managerList.css';

const BillingTable = ({ title, type, billingDate, paymentDate, status, maxUsers, billingAmount, startDate, action }) => { 
    const [search, setSearch] = useState('');
    const [country, setCountry] = useState(''); // State para armazenar o país selecionado

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value); // Atualiza o país selecionado
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
                <div className="country-container">
                    <select className="country-select" value={country} onChange={handleCountryChange}>
                        <option value="" disabled>Select Country</option>
                        <option value="Portugal">Portugal</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        {/* Adicione mais países conforme necessário */}
                    </select>
                    <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
                </div>
                <span className="add-product-text" onClick={() => console.log("Add Product clicked")}>
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
