import TableComponent from "../../components/table-addon-versions.js";
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Breadcrumbs from "../../components/breadcrumbs";

export default function ProductVersions() {
  const [data, setData] = useState();
  const baseURL = 'http://localhost:3000';
  const { addonid } = useParams();
  useEffect(() => {
    axios.get(baseURL + "/addon/admin/versions/" + addonid).then(res => { setData(res.data) })
  }, [])

  if (!data) {
    return <div className="wrapper text-center">Loading...</div>;

  }
  return (
    <div className="wrapper" style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>{data[0].addon.name} versions - LogicLeap</title>
      </Helmet>
      <Breadcrumbs page1={data[0].addon.product.name + " Addons"} page2={data[0].addon.name} page3='Versions' link1={"/products/addons/" + data[0].addon.productid} link2={"/products/addons/" + data[0].addon.productid} />
      <div className="d-flex align-items-center bg-white py-2 px-10vw regular-border-bottom">
        <Link className="ms-3 linknormal" to={"/versions/form/" + false + "/" + addonid}>
          Add Version
        </Link>
      </div>
      <TableComponent data={data} />
    </div>
  );
}
