import { version } from 'react';
import costumplan from '../views/admin/costumplan';
import './billing-table-costumplan.css';

const BillingTable = ({ title, type, billingDate, paymentDate, status, maxUsers, billingAmount, startDate, action }) => {

    const data = [
        {
            id: '1',
        },
        {
            id: '2',
        },
        {
            id: '3',
        },
        {
            id: '4',
        },
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
                        <th scope="col">Versions</th>
                        <th scope="col">Active Costumers</th>
                        <th scope="col">billingAmount (yr.)</th>
                        <th scope="col">billingAmount (mo.)</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>
                                <span className={`text-${item.status === 'Pending' ? 'warning' : item.status === 'Payed' ? 'success' : 'danger'}`}>
                                    {item.status}
                                </span>
                            </td>
                            <td>{item.version}</td>
                            <td>{item.billingDate}</td>
                            <td>{item.billingAmount}</td>
                            <td>{item.billingAmount}</td>
                            {item.business === 'António Mendes' && (
                                <td>{item.business}</td>
                            )}
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