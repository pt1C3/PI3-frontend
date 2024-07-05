import React, { useState } from 'react';
import { version } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Products from '../views/admin/package';
import './billing-table-package.css';

const BillingTable = ({ packages, status, versions, activeCustomers, billingAmountYr, billingAmountMo, actions }) => { 
    const [search, setSearch] = useState('');
    const [selectedPackage, setSelectedPackage] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handlePackageChange = (e) => {
        setSelectedPackage(e.target.value);
    };

    const data = [
        { id: '1', package: 'Package 1', status: 'Active', versions: '1.0', activeCustomers: 15931, billingAmountYr: '€119.99', billingAmountMo: '€19.99' , action: 'Addons Versions'},
        { id: '2', package: 'Package 2', status: 'Hidden', versions: '1.5', activeCustomers: 2001, billingAmountYr: '€119.99', billingAmountMo: '€19.99', action: 'Addons Versions'},
        // Adicione mais dados conforme necessário
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
                <div className="package-container">
                    <select className="package-select" value={selectedPackage} onChange={handlePackageChange}>
                        <option value="" disabled>Packages</option>
                        <option value="Packages 1">Packages 1</option>
                        <option value="Packages 2">Packages 2</option>
                        <option value="Packages 3">Packages 3</option>

                    </select>

                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Package</th>
                        <th scope="col">Status</th>
                        <th scope="col">Versions</th>
                        <th scope="col">Active Customers</th>
                        <th scope="col">Billing Amount (yr.)</th>
                        <th scope="col">Billing Amount (mo.)</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.package}</td>
                            <td>
                                <span className={`text-${item.status === 'Active' ? 'success' : 'danger'}`}>
                                    {item.status}
                                </span>
                            </td>
                            <td>{item.versions}</td>
                            <td>{item.activeCustomers}</td>
                            <td>{item.billingAmountYr}</td>
                            <td>{item.billingAmountMo}</td>
                            <td>
                                {item.action && <a className="linknormal" href="#">{item.action}</a>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BillingTable;
