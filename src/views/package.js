import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../components/breadcrumbs';
import countries from 'i18n-iso-countries';
import 'i18n-iso-countries/langs/pt.json';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Payment = () => {
  const baseURL = 'http://localhost:3000';
  const { price, productid } = useParams();
  const [data, setData] = useState(null);
  const [countryList, setCountryList] = useState({});

  useEffect(() => {
    countries.registerLocale(require('i18n-iso-countries/langs/pt.json'));
    const countryNames = countries.getNames('pt', { select: 'official' });
    setCountryList(countryNames);

    axios.get(`${baseURL}/product/${productid}`)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, [productid]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          email: document.getElementById('email').value,
          name: document.getElementById('cardholder').value,
          address: {
            country: document.getElementById('country').value,
            postal_code: document.getElementById('postal-code').value,
          },
        },
      });

      if (error) {
        console.error('Error:', error);
      } else {
        console.log('PaymentMethod:', paymentMethod);
        // Handle successful payment
        // You can send paymentMethod.id to your server to complete the payment
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!data) {
    return <div className="wrapper">Loading...</div>;
  }

  return (
    <div className="wrapper bg-white">
      <Helmet>
        <title>Payment - LogicLeap</title>
      </Helmet>
      <Breadcrumbs page1="Designer Pack" page2={data.name} page3="Payment" link1="/" link2={`/product/${data.productid}`} />
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
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
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
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cardnumber" className="form-label">
                  Card number
                </label>
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#9e2146',
                      },
                    },
                  }}
                />
              </div>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="expiry" className="form-label">
                    Expiration date
                  </label>
                  <input type="text" className="form-control" id="expiry" required />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="cvc" className="form-label">
                    CVC
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvc"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select className="form-select form-control" id="country" required>
                    {Object.entries(countryList).map(([code, name]) => (
                      <option key={code} value={code}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="postal-code" className="form-label">
                    Postal code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="postal-code"
                    required
                  />
                </div>
              </div>
              <span className="stripe-info mt-3 d-flex justify-content-center">Powered by <img src={`${process.env.PUBLIC_URL}/images/stripe.png`} height={25} alt="Stripe" /></span>
              <button type="submit" className="btn-primary w-100 mt-1">
                Finish payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
