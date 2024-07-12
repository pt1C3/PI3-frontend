import React, { useState } from 'react';

const TicketsTable = () => { 
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const data = [
        { id: '1002', ticket: 'Problem with login', status: 'Replied', product: 'Nome do Produto', license: 'Nome da licença' },
        { id: '1001', ticket: 'Problem with license', status: 'Not Replied', product: 'Nome do Produto', license: 'Nome da licença' },
        { id: '1001', ticket: 'Addons not updating', status: 'Replied', product: 'Nome do Produto', license: 'Nome da licença' },
        { id: '1001', ticket: 'Problem with payment', status: 'Replied', product: 'Nome do Produto', license: 'Nome da licença' },
    ];

    return (
        <div className="tickets-table-container mt-5">
            <div className="search-bar-container">
                <div className="search-bar">
                    <input 
                        type="text" 
                        className="form-control search-input" 
                        placeholder="Search tickets..." 
                        value={search} 
                        onChange={handleSearchChange} 
                    />
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tickets</th>
                        <th scope="col">Status</th>
                        <th scope="col">Product</th>
                        <th scope="col">License</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .filter(item => 
                            item.ticket.toLowerCase().includes(search.toLowerCase()) || 
                            item.product.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.ticket}</td>
                                <td>
                                    <span className={`text-${item.status === 'Replied' ? 'success' : 'warning'}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td>{item.product}</td>
                                <td>{item.license}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
};

export default TicketsTable;