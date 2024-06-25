import "./payment.css";
import axios from 'axios';
import Breadcrumbs from "../components/breadcrumbs";
import countries from 'i18n-iso-countries';
import 'i18n-iso-countries/langs/pt.json';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


export default function Payment() {
  const baseURL = 'http://localhost:3000';
  var { price, productid } = useParams();
  const [data, setData] = useState();
  const [countryList, setCountryList] = useState({});

  useEffect(() => {
    // Register the Portuguese locale
    countries.registerLocale(require('i18n-iso-countries/langs/pt.json'));

    // Get the country names in Portuguese
    const countryNames = countries.getNames('pt', { select: 'official' });

    // Set the country names to state
    setCountryList(countryNames);

    axios.get(baseURL + '/product/' + productid)
      .then(res => {
        setData(res.data);
        console.log(price);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });

  }, []);

  if (!data) {
    return <div className="wrapper">Loading...</div>;

  }
  return (
    <div className="wrapper bg-white">
      <Helmet>
        <title>Payment - LogicLeap</title>
      </Helmet>
      <Breadcrumbs page1="Designer Pack" page2={data.name} page3="Payment" link1="/" link2={"/product/" + data.productid}></Breadcrumbs>
      <div className="mx-10vw">
        <div className="row">
          <div className="col-md-6 mt-4">
            <div>
              <div className="d-flex align-items-center mb-5">
                <img src={data.icon} alt={data.name} height="70" />
                <span className="ms-3"><h4>{data.name}</h4></span>
              </div>
              <div className="d-flex align-items-end justify-content-between mb-2">
                <div>
                  <p className="product-info">Up to {data.prices[price].number_of_licenses} users - Initial Payment<br />€{data.prices[price].price} a month</p>
                </div>
                <p className="product-price">€{data.prices[price].price}</p>
              </div>
              <hr></hr>
              <div className="payment-total d-flex justify-content-between">
                <p>Total</p>
                <p>€{data.prices[price].price}</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cardholder" className="form-label">
                  Cardholder name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardholder"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cardnumber" className="form-label">
                  Card number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardnumber"
                />
              </div>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="expiry" className="form-label">
                    Expiration date
                  </label>
                  <input type="date" className="form-control" id="expiry" />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="cvc" className="form-label">
                    CVC
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvc"
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select className="form-select form-control" id="country">
                  {Object.entries(countryList).map(([code, name]) => (
                          <option key={code} value={name}>
                            {name}
                          </option>
                        ))}                  </select>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="postal-code" className="form-label">
                    Postal code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="postal-code"
                  />
                </div>
              </div>
              <span class="stripe-info mt-3 d-flex justify-content-center">Powered by <img src={process.env.PUBLIC_URL + '/images/stripe.png'} height={25} /></span>
              <button type="submit" className="btn-primary w-100 mt-1">
                Finish payment
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
