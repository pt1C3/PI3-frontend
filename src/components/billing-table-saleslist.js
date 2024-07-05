import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './billing-table-saleslist.css';

const BillingTable = ({ title, type, billingDate, paymentDate, status, maxUsers, billingAmount, startDate, actions }) => { 

    const data = [
        { id: '1', product: 'Product Name', billingDate: '2023-03-12', status: 'Payed', productstatus: 'Replied', replydate: '2023-03-15',  actions: 'View' },
        { id: '2', product: 'Product Name', billingDate: '2023-03-13', status: 'Didnt buy', productstatus: 'Replied', replydate: '2023-03-16', actions: 'View' },
        { id: '3', product: 'Product Name', billingDate: '2023-03-14', status: 'Pending', productstatus: 'Pending', replydate: '-', actions: 'View' },
        { id: '4', product: 'Another Product', billingDate: '2023-03-12', status: 'Pending', productstatus: 'Pending', replydate: '-', actions: 'View' },
    ];

    return (
        <div className="container mt-7 billing-table">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Product Status</th>
                        <th scope="col">Reply Date</th>
                        
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.product}</td>
                            <td>{item.billingDate}</td>
                            <td>
                                <span className={`text-${item.status === 'Pending' ? 'warning' : item.status === 'Payed' ? 'success' : 'danger'}`}>
                                    {item.status}
                                </span>
                            </td>
                            <td>
                                <span className={`text-${item.productstatus === 'Pending' ? 'warning' : item.productstatus === 'Payed' ? 'success' : 'danger'}`}>
                                    {item.productstatus}
                                </span>
                            </td>
                            <td>{item.replydate}</td>
                            
                            <td>
                                {item.actions && <a className="linknormal" href="#">{item.actions}</a>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default BillingTable;
