import './tables.css';
import { Link } from 'react-router-dom';
import './tables.css';


const Table = ({ data }) => {
    console.log(data)
    function formatDate(isoDate) {
        const date = new Date(isoDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    function roundToTwoDecimals(num) {
        const roundedNum = Math.round(num * 100) / 100;
        return parseFloat(roundedNum.toString());
    }

    const getStatusClass = (status) => {
        switch (status) {
            case 'Pending':
                return 'text-warning';
            case 'Payed':
                return 'text-success';
            case 'Cancelled':
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
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Max users</th>
                            <th scope="col">Status</th>
                            <th scope="col">Billing date</th>
                            <th scope="col">Billing amount</th>
                            <th scope="col">Payment date</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr>
                                <td>{item.paymentid}</td>
                                <td>{item.plan.price.product ? item.plan.price.product.name : item.plan.price.addon.name + " (addon)"}</td>
                                <td>{item.plan.price.product ? item.plan.price.product.category.designation : "-"}</td>
                                <td>{item.plan.price.product ? item.plan.price.number_of_licenses : "-"}</td>
                                <td className={`status ${getStatusClass(item.pstatus.designation)}`}>
                                    {item.pstatus.designation}
                                </td>
                                <td>{formatDate(item.due_date)}</td>
                                <td>{roundToTwoDecimals(item.plan.price.price) + "€/mo."}</td>
                                <td>{item.payment_date ? formatDate(item.payment_date) : "-"}</td>
                                <td className='d-flex'>
                                    {!item.payment_date ? <><Link to="/" className='linknormal'>Pay</Link><Link to="/" className='linknormal ms-2'>Cancel</Link></> : "-"}

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