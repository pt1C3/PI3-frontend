import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './billing-table-costumplan.css';

const BillingTable = ({ title, type, billingDate, paymentDate, status, maxUsers, billingAmount, startDate, action }) => { 
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleAddProduct = () => {
        // Lógica para adicionar produto
        console.log("Add Product clicked");
    };

    const data = [
        { id: '1', business: 'António Mendes', billingDate: '2023-03-12', status: 'Payed', reponsestatus: 'Replied', replydate: '2023-03-15', product: 'Product Name', numberoflicenses: '200', billingAmount: '€19.99', action: 'View' },
        { id: '2', business: 'António Mendes', billingDate: '2023-03-13', status: 'Didnt buy', reponsestatus: 'Replied', replydate: '2023-03-16', product: 'Another Product', numberoflicenses: '200', billingAmount: '€19.99', action: 'View' },
        { id: '3', business: 'António Mendes', billingDate: '2023-03-14', status: 'Pending', reponsestatus: 'Pending', replydate: '-', product: 'Product Name', numberoflicenses: '200', billingAmount: '-', action: 'View' },
        { id: '4', business: 'António Mendes', billingDate: '2023-03-12', status: 'Pending', reponsestatus: 'Pending', replydate: '-', product: 'Another Product', numberoflicenses: '200', billingAmount: '-', action: 'View' },
    ];

    return (
        <div className="container mt-5 billing-table">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Business</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Response Status</th>
                        <th scope="col">Reply Date</th>
                        <th scope="col">Product</th>
                        <th scope="col">Number of licenses</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.business === 'António Mendes' ? item.business : ''}</td>
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
                            <td>{item.numberoflicenses}</td>
                            <td>{item.billingAmount}</td>
                            <td>
                                {item.action && <a className="linknormal" href="#">{item.action}</a>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default BillingTable;
