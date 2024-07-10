import React, { useState } from 'react';
import './table-products.css';

const BillingTable = ({ data }) => {
console.log(data);
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
                                <td>{item.category.designation}</td>
                                <td>{item.status.designation}</td>
                                <td>{item.versions[0].version}</td>
                                <td>ainda n ta</td>
                                <td>{item.prices[0].number_of_licenses} <span className='text-secondary'>/</span> {item.prices[0].price}€/mo.</td>
                                <td>{item.prices[1].number_of_licenses} <span className='text-secondary'>/</span> {item.prices[1].price}€/mo.</td>
                                <td>actions...</td>
                            </tr>
                        ))}

                        {/*data.map((item, index) => (
                        <tr key={item.productid}>
                            <td>{item.productid}</td>
                            <td>{item.name}</td>
                            <td>{item.category.designation}</td>
                            <td>
                                <span className={`text-${item.status.designation === 'Pending' ? 'warning' : item.status.designation === 'Payed' ? 'success' : 'danger'}`}>
                                    {item.status.designation}
                                </span>
                            </td>
                            <td>{"version"}</td>
                            <td>{"customers"}</td>
                            <td>{"price1"}</td>
                            <td>{"price2"}</td>
                            <td>
                                {"ações"}
                            </td>
                        </tr>
                    ))*/}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BillingTable;
