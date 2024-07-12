
import TableComponent from "../components/billing-table.js";
import "./login.css";
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PaymentHistory() {
  const [data, setData] = useState([]);
  const baseURL = 'http://localhost:3000';
  const businessid = JSON.parse(localStorage.getItem('user')).data.businessid;
  useEffect(() => {
    axios.get(baseURL + "/user/history/" + businessid).then(res => {
      setData(res.data);
    })
  }, [])

  return (
    <div className="wrapper" style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>Payment history - LogicLeap</title>
      </Helmet>
      <TableComponent data={data} />
    </div>
  );
}
