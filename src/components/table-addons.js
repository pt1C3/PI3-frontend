import { useState } from 'react';
import { Link } from 'react-router-dom';
import './tables.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Table = ({ data, deleteItem }) => { 
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
        <div className='w-100 px-10vw my-4'>
            <div className='w-100 rounded-3 regular-border bg-white'>
                <table className="w-100 border-0">
                    <thead>
                        <tr className='regular-border-bottom'>
                            <th scope="col">#</th>
                            <th scope="col">Addon</th>
                            <th scope="col">Status</th>
                            <th scope="col">Latest Version</th>
                            <th scope="col">Active Costumers</th>
                            <th scope="col">Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr>
                                <td>{item.addonid}</td>
                                <td>{item.name}</td>
                                <td className={`status ${getStatusClass(item.status)}`}>
                                    {item.status}
                                </td>
                                <td>{item.versions[0].version}</td>
                                <td>{item.totalPlans}</td>
                                <td>{item.prices[0].price}€/mo.</td>
                                <td className='d-flex'>
                                    <Link to={"/addons/versions/" + item.addonid} className='linknormal me-2'>Versions</Link>
                                    <Link to={"/addons/form/" + item.addonid} className='linknormal me-2'><FontAwesomeIcon icon={faPen} /></Link>
                                    <button className='btn m-0 p-0 linknormal' onClick={() => deleteItem(item.addonid)}>
                                        <FontAwesomeIcon icon={faTrash} /></button>
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
