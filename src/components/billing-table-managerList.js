import React, { useState } from 'react';
import { version } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import './billing-table-managerList.css'

const BillingTable = ({ title, type, billingDate, paymentDate, status, maxUsers, billingAmount, startDate, action }) => { 
    const [search, setSearch] = useState('');
    const [country, setCountry] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const data = [
        {
            id: '1',
            firstName: 'António',
            lastName: 'Mendes',
            email: 'antoniomendes@empresa.com',
            phoneNumber: '+123456789',
            country: 'Portugal',
            business: 'Empresa A',
            status: 'Pending',
            action: 'Send Notification'
        },
        {
            id: '2',
            firstName: 'António',
            lastName: 'Mendes',
            email: 'antoniomendes@empresa.com',
            phoneNumber: '+123456789',
            country: 'Portugal',
            business: 'Empresa B',
            status: 'Pending',
            action: 'Send Notification'
        }

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
                        <option value="" disabled>Country</option>
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
                    Businesses
                </span>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Country</th>
                        <th scope="col">Business</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.country}</td>
                            <td>{item.business}</td>
                            <td>
                                <span className={`text-${item.status === 'Pending' ? 'warning' : item.status === 'Payed' ? 'success' : 'danger'}`}>
                                    {item.status}
                                </span>
                            </td>
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
