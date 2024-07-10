import Table from "../../components/table-product-versions.js";
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Breadcrumbs from "../../components/breadcrumbs";

export default function ProductVersions() {
  const [data, setData] = useState();
  const baseURL = 'http://localhost:3000';
  const { productid } = useParams();
  useEffect(() => {
    axios.get(baseURL + "/product/admin/versions/" + productid).then(res => { setData(res.data) })
  }, [])

  if (!data) {
    return <div className="wrapper">Loading...</div>;

  }
  return (
    <div className="wrapper" style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>{data[0].product.name} versions - LogicLeap</title>
      </Helmet>
      <Breadcrumbs page1="Products" page2={data[0].product.name} page3='Versions' link1="/products" link2="/products"/> 

      <Table data={data} />
    </div>
  );
}
