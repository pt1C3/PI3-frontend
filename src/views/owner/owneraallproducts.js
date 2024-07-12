import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import ListItem from "../../components/list-item";

import axios from 'axios';

export default function OwnerAllProducts() {
  const baseURL = 'https://pi3-backend.onrender.com';

  const [search, setSearch] = useState('');
  const [searchFilter, setSearchFilter] = useState('pop-');
  const [products, setProducts] = useState([]);
  const businessid = JSON.parse(localStorage.getItem('user')).data.businessid;
  useEffect(() => {
    axios.get(baseURL + "/owner/products/" + businessid).then(res => {
      setProducts(res.data.map(plan => plan.price.product));
      console.log(res.data);
    })
  }, [search])

  const changeFilter = (isPop) => {
    switch (searchFilter) {
      case 'pop+':
        isPop ? setSearchFilter("pop-") : setSearchFilter("pri-");
        break;
      case 'pop-':
        isPop ? setSearchFilter("pop+") : setSearchFilter("pri-")
        break;
      case 'pri+':
        isPop ? setSearchFilter("pop-") : setSearchFilter("pri-")
        break;
      case 'pri-':
        isPop ? setSearchFilter("pop-") : setSearchFilter("pri+")
        break;
      default:
        setSearchFilter("pop-")
        break;
    }
  };
  if (!products) {
    return <div className="wrapper text-center">Loading...</div>;

  }
  if (products.length === 0) {
    return (
      <div className="wrapper text-center">No products available</div>);
  }
  return (
    <div className="wrapper">
      <section className='filter-tab bg-white d-flex regular-border-bottom px-10vw align-items-center'>
        <div className='col-4 me-3'>
          <div className="input-group rounded-2 ">
            <input
              type="text"
              className="form-control bg-transparent border-0"
              placeholder="Search"
              name="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <div className="input-group-btn">
              <button className="btn btn-default" disabled>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
        <button className={'btn py-3' + (searchFilter.substring(0, 3) === "pop" ? ' active' : '')} onClick={() => changeFilter(true)}>
          Popularity {searchFilter.includes("pop") && <FontAwesomeIcon icon={searchFilter.includes('+') ? faSortUp : faSortDown} />}
        </button>
        <button className={'btn py-3' + (searchFilter.substring(0, 3) === "pri" ? ' active' : '')} onClick={() => changeFilter(false)}>
          Price {searchFilter.includes("pri") && <FontAwesomeIcon icon={searchFilter.includes('+') ? faSortUp : faSortDown} />}
        </button>
      </section>
      <div className="mx-10vw mt-3">
        <div className="row">
          {products.map((item) => (
            <ListItem title={item.name} image={item.icon} toLink={"/owner/product/" + item.productid} />
          ))}
        </div>
      </div>
    </div>
  );
}
