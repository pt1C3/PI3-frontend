import React, { useState } from 'react';
import { version } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import './billing-table-businessList.css';

const BillingTable = () => { 
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
            name: 'Empresa A',
            website: 'www.empresa.com',
            owner: 'António Mendes',
            ownerEmail: 'antoniomendes@empresa.com',
            numberOfEmployees: '12',
            status: 'Active',
            action: 'View'
        },
        {
            id: '2',
            name: 'Empresa B',
            website: 'www.empresa.com',
            owner: 'António Mendes',
            ownerEmail: 'antoniomendes@empresa.com',
            numberOfEmployees: '12',
            status: 'Active',
            action: 'View'
        },

    ];

    return (
        <div className="container mt-5 business-table">
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
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Website</th>
                        <th scope="col">Owner</th>
                        <th scope="col">Owner Email</th>
                        <th scope="col">Number of Employees</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><a href={`https://${item.website}`} target="_blank" rel="noopener noreferrer">{item.website}</a></td>
                            <td>{item.owner}</td>
                            <td>{item.ownerEmail}</td>
                            <td>{item.numberOfEmployees}</td>
                            <td>
                                <span className={`text-${item.status === 'Active' ? 'success' : 'danger'}`}>
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
