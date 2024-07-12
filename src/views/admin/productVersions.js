import TableComponent from "../../components/table-product-versions.js";
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Breadcrumbs from "../../components/breadcrumbs";

export default function ProductVersions() {
  const [data, setData] = useState();
  const baseURL = 'http://localhost:3000';
  const { productid } = useParams();

  const deleteItem = (id) => {
    axios.delete(baseURL + "/version/delete/" + id).then(res => {
      alert(res.data.message);
      if (res.data.success) fetchData();
    })
  }
  function fetchData() {
    axios.get(baseURL + "/product/admin/versions/" + productid).then(res => { setData(res.data) })

  }
  useEffect(() => {
    fetchData();
  }, [])

  if (!data) {
    return <div className="wrapper text-center">Loading...</div>;

  }
  return (
    <div className="wrapper" style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>{data[0].product.name} versions - LogicLeap</title>
      </Helmet>
      <Breadcrumbs page1="Products" page2={data[0].product.name} page3='Versions' link1="/products" link2={"/products/form/"+productid} />
      <div className="d-flex align-items-center bg-white py-2 px-10vw regular-border-bottom">
        <Link className="ms-3 linknormal" to={"/versions/form/" + true + "/" + productid}>
          Add Version
        </Link>
      </div>
      <TableComponent data={data} deleteItem={deleteItem} />
    </div>
  );
}
