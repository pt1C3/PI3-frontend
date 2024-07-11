
import TableComponent from "../../components/table-products.js";
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import Breadcrumbs from "../../components/breadcrumbs";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  const baseURL = 'http://localhost:3000';

  const [search, setSearch] = useState('');
  const [data, setData] = useState();

  const deleteItem = (id) => {
    axios.delete(baseURL + "/product/delete/" + id).then(res => {
      alert(res.data.message);
      if (res.data.success) fetchData();
    })
  }
  function fetchData() {
    axios.get(baseURL + "/product/admin/list/" + search).then(res => { setData(res.data) })

  }
  useEffect(() => {
    fetchData();
  }, [search])


  if (!data) {
    return <div className="wrapper text-center">Loading...</div>;

  }
  return (
    <div className="wrapper background-color" style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>Products - LogicLeap</title>
      </Helmet>
      <Breadcrumbs page1="Products" />
      <div className="d-flex align-items-center bg-white py-2 px-10vw regular-border-bottom">
        <form className="inline-form ">
          <div className="input-group rounded-2 col-4">
            <input
              type="text"
              className="form-control bg-transparent border-0"
              placeholder="Search for name"
              name="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <div className="input-group-btn">
              <button className="btn btn-default border-0" type="button" disabled>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </form>
        <Link className="ms-3 linknormal" to="/products/form">
          Add Product
        </Link>
      </div>
      <TableComponent data={data} deleteItem={deleteItem} />
    </div>
  );
}

