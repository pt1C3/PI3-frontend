import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './billing-table-salessupport.css';

const BillingTable = ({ title, type, billingDate, paymentDate, status, maxUsers, billingAmount, startDate, action }) => { 

    const data = [
        { id: '1', name: 'António Mendes', billingDate: '2023-03-12', status: 'Payed', reponsestatus: 'Replied', replydate: '2023-03-15', product: 'Product Name', action: 'View' },
        { id: '2', name: 'António Mendes', billingDate: '2023-03-13', status: 'Didnt buy', reponsestatus: 'Replied', replydate: '2023-03-16', product: 'Another Product', action: 'View' },
        { id: '3', name: 'António Mendes', billingDate: '2023-03-14', status: 'Pending', reponsestatus: 'Pending', replydate: '-', product: 'Product Name', action: 'View' },
        { id: '4', name: 'António Mendes', billingDate: '2023-03-12', status: 'Pending', reponsestatus: 'Pending', replydate: '-', product: 'Another Product', action: 'View' },
    ];

    return (
        <div className="container mt-5 billing-table">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Response Status</th>
                        <th scope="col">Reply Date</th>
                        <th scope="col">Product</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name === 'António Mendes' ? item.name : ''}</td>
                            <td>{item.billingDate}</td>
                            <td>
                                <span className={`text-${item.status === 'Pending' ? 'warning' : item.status === 'Payed' ? 'success' : 'danger'}`}>
                                    {item.status}
                                </span>
                            </td>
                            <td>
                                <span className={`text-${item.reponsestatus === 'Pending' ? 'warning' : item.reponsestatus === 'Payed' ? 'success' : 'danger'}`}>
                                    {item.reponsestatus}
                                </span>
                            </td>
                            <td>{item.replydate}</td>
                            <td>{item.product}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default BillingTable;
