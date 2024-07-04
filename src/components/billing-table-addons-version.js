import { version } from 'react';
import Products from '../views/admin/productAddonsVersions';
import './billing-table-addons-version';

const BillingTable = ({ title, type, billingDate, status, action }) => { 

    const data = [
        {
            id: '1',
            releaseNote: 'Lorem ipsum dolor sit amet consectetur. Id leo malesuada lobortis sit sagittis quis orci sit id. Tortor odio nunc ut ipsum. Convallis et sollicitudin sollicitudin dui leo molestie.'
        },
        {
            id: '2',
            releaseNote: 'Lorem ipsum dolor sit amet consectetur. Id leo malesuada lobortis sit sagittis quis orci sit id. Tortor odio nunc ut ipsum. Convallis et sollicitudin sollicitudin dui leo molestie.'
        },
        {
            id: '3',
            releaseNote: 'Lorem ipsum dolor sit amet consectetur. Id leo malesuada lobortis sit sagittis quis orci sit id. Tortor odio nunc ut ipsum. Convallis et sollicitudin sollicitudin dui leo molestie.'
        },
        {
            id: '4',
            releaseNote: 'Lorem ipsum dolor sit amet consectetur. Id leo malesuada lobortis sit sagittis quis orci sit id. Tortor odio nunc ut ipsum. Convallis et sollicitudin sollicitudin dui leo molestie.'
        },
        {
            id: '5',
            releaseNote: 'Lorem ipsum dolor sit amet consectetur. Id leo malesuada lobortis sit sagittis quis orci sit id. Tortor odio nunc ut ipsum. Convallis et sollicitudin sollicitudin dui leo molestie.'
        }
    ];

    return (
        <div className="container mt-5 billing-table">
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Status</th>
                    <th scope="col">Release Data</th>
                    <th scope="col">Release Note</th>
                    <th scope="col">Download link</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>
                            <span className={`text-${status === 'Pending' ? 'warning' : status === 'Payed' ? 'success' : 'danger'}`}>
                                    {status}
                                </span>
                            </td>
                            <td>{billingDate}</td>
                            <td>{item.releaseNote}</td>
                            <td>
                                {version && <a className="linknormal" href="#">{version}</a>}
                            </td>                      
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