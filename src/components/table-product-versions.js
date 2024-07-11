import './tables.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Table = ({ data }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Hidden':
                return 'text-warning';
            case 'Stable':
                return 'text-success';
            case 'Removed':
                return 'text-danger';
            case 'Beta':
                return 'text-primary';
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
                            <th scope="col">Version</th>
                            <th scope="col">Status</th>
                            <th scope="col">Release date</th>
                            <th scope="col">Release notes</th>
                            <th scope="col">Download link</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr>
                                <td>{item.versionid}</td>
                                <td>{item.version}</td>
                                <td className={`status ${getStatusClass(item.status.designation)}`}>{item.status.designation}</td>
                                <td>{new Date(item.releasedate).toISOString().split('T')[0]}</td>
                                <td>{item.releasenotes}</td>
                                <td><Link to={item.downloadlink} className='linknormal'>{item.product.name + " " + item.version}</Link></td>
                                <td className='d-flex'>
                                    <Link to={"/versions/form/" + true + "/" + item.productid + "/" + item.versionid} className='linknormal me-2'><FontAwesomeIcon icon={faPen} /></Link>
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