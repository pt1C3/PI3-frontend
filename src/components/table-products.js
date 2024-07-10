import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tables.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Table = ({ data }) => {
    console.log(data);
    const getStatusClass = (status) => {
        switch (status) {
            case 'Hidden':
                return 'text-warning';
            case 'Visible':
                return 'text-success';
            case 'Removed':
                return 'text-danger';
            default:
                return '';
        }
    };
    return (
        <div className='w-100 px-10vw mt-4'>
            <div className='w-100 rounded-3 regular-border bg-white'>
                <table className="w-100 border-0">
                    <thead>
                        <tr className='regular-border-bottom'>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Category</th>
                            <th scope="col">Status</th>
                            <th scope="col">Latest Version</th>
                            <th scope="col">Active Costumers</th>
                            <th scope="col">Users / Price</th>
                            <th scope="col">Users / Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr>
                                <td>{item.productid}</td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td className={`status ${getStatusClass(item.status)}`}>
                                    {item.status}
                                </td>
                                <td>{item.versions[0].version}</td>
                                <td>{item.totalPlans}</td>
                                <td>{item.prices[0].number_of_licenses} <span className='text-secondary'>/</span> {item.prices[0].price}€/mo.</td>
                                <td>{item.prices[1].number_of_licenses} <span className='text-secondary'>/</span> {item.prices[1].price}€/mo.</td>
                                <td className='d-flex'>
                                    <Link to={"/products/versions/" + item.productid} className='linknormal me-2'>Versions</Link>
                                    <Link to="/" className='linknormal me-2'><FontAwesomeIcon icon={faPen} /></Link>
                                    <Link to="/" className='linknormal'><FontAwesomeIcon icon={faTrash} /></Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
