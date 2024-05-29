import './billing-table.css';

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
        {
            id: '5',
        }
    ];

    return (
        <div className="container mt-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product</th>
                    <th scope="col">Type</th>
                    <th scope="col">Max Users</th>
                    <th scope="col">Status</th>
                    <th scope="col">Billing date</th>
                    <th scope="col">Billing amount</th>
                    <th scope="col">Payment Date</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{title}</td>
                            <td>{type}</td>
                            <td>{maxUsers}</td>
                            <td>
                                <span className={`text-${status === 'Pending' ? 'warning' : status === 'Payed' ? 'success' : 'danger'}`}>
                                    {status}
                                </span>
                            </td>
                            <td>{billingDate}</td>
                            <td>{billingAmount}</td>
                            <td>{paymentDate}</td>
                            <td>{startDate}</td>
                            <td>
                                {action && <a className="linknormal" href="#">{action}</a>}
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BillingTable;