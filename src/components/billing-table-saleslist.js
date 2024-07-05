import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './billing-table-saleslist.css';

const BillingTable = () => {
    const data = [
        { id: '1', product: 'Product Name', costumer: 'António Mendes', billingDate: '2023-03-12', biillingFrequency: 'Monthly', billingAmount: '€19.99', status: 'Payed', productstatus: 'Installed and used', actions: 'View' },
        { id: '2', product: 'Product Name', costumer: 'António Mendes', billingDate: '2023-03-13', biillingFrequency: 'Monthly', billingAmount: '€19.99', status: 'Payed', productstatus: 'Installed', actions: 'View' },
        { id: '3', product: 'Product Name', costumer: 'António Mendes', billingDate: '2023-03-14', biillingFrequency: 'Monthly', billingAmount: '€19.99', status: 'Payed', productstatus: 'Not installed', actions: 'View' },
        { id: '4', product: 'Another Product', costumer: 'António Mendes', billingDate: '2023-03-12', biillingFrequency: 'Monthly', billingAmount: '€19.99', status: 'Pending', productstatus: 'Pending', actions: 'View' },
    ];

    const [search, setSearch] = useState('');
    const [selectedPackage, setSelectedPackage] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handlePackageChange = (e) => {
        setSelectedPackage(e.target.value);
    };

    return (
        <div className="container mt-7 billing-table">
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
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product</th>
                        <th scope="col">Costumer</th>
                        <th scope="col">Date</th>
                        <th scope="col">Billing Frequency</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Product Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.product}</td>
                            <td>{item.costumer}</td>
                            <td>{item.billingDate}</td>
                            <td>{item.biillingFrequency}</td>
                            <td>{item.billingAmount}</td>
                            <td>
                                <span className={`text-${item.status === 'Pending' ? 'warning' : item.status === 'Payed' ? 'success' : 'danger'}`}>
                                    {item.status}
                                </span>
                            </td>
                            <td>
                                <span className={`product-status-${item.productstatus.toLowerCase().replace(/ /g, '-')}`}>
                                    {item.productstatus}
                                </span>
                            </td>
                            <td>
                                {item.actions && <a className="linknormal" href="#">{item.actions}</a>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BillingTable;
