import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../components/breadcrumbs';
import countries from 'i18n-iso-countries';
import 'i18n-iso-countries/langs/pt.json';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';

const PaymentForm = ({ stripePromise, data, price }) => {
  const { productid } = useParams();
  const [countryList, setCountryList] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [canBuy, setCanBuy] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const baseURL = 'https://pi3-backend.onrender.com';

  useEffect(() => {
    countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
    const countryNames = countries.getNames('en', { select: 'official' });
    setCountryList(countryNames);

    axios.get(baseURL + '/user/plans/' + JSON.parse(localStorage.getItem('user')).data.businessid)
      .then(res => {
        setCanBuy(!(Object.values(res.data).some(item => item.price.product.productid.toString() === productid.toString())))
        console.log(res.data)
        console.log(productid)
        console.log("can buy: " + !(Object.values(res.data).some(item => item.price.product.productid.toString() === productid.toString())))
      })

  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (canBuy) {
      if (!stripe || !elements) {
        console.error('Stripe.js has not loaded yet.');
        return;
      }

      const cardElement = elements.getElement('card');

      const paymentDetails = {
        email: event.target.email.value,
        name: event.target.cardholder.value,
        address: {
          country: event.target.country.value,
        },
      };

      try {
        // Make a POST request to backend to create Payment Intent
        const response = await axios.post(baseURL + '/create-payment-intent', {
          amount: Math.round(data.prices[price].price * 100), // Stripe expects amount in cents
          currency: 'eur', // Currency code (EUR in this case)
        });

        const { clientSecret } = response.data;

        // Confirm the payment with the clientSecret
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: paymentDetails,
          },
        });

        if (error) {
          console.error('[Error]', error);
          setShowErrorModal(true); // Show error modal
        } else {
          axios.post(baseURL + '/owner/addplanpayment', {
            priceid: data.prices[price].priceid,
            businessid: JSON.parse(localStorage.getItem('user')).data.businessid,
          }).then(response => {
            if (!response.data.success) {
              console.error('Error creating payment plan:', response.data.message);
            }
          })
            .catch(error => {
              console.error('Error creating payment plan:', error.message);
              // Handle network or other errors
            });
          setShowSuccessModal(true); // Show success modal
        }
      } catch (error) {
        console.error('Error creating Payment Intent:', error);
        setShowErrorModal(true); // Show error modal
      }
    }
    else alert("You already own this product")
  };

  const handleCloseSuccessModal = () => { setShowSuccessModal(false); navigate('/owner/plans') };
  const handleCloseErrorModal = () => setShowErrorModal(false);

  if (!data) {
    return <div className="wrapper text-center">Loading...</div>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
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
            name="cardholder"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cardnumber" className="form-label">
            Card number
          </label>
          <CardElement
            id="card"
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
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select className="form-select form-control" id="country" name="country" required>
            {Object.entries(countryList).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <span className="stripe-info mt-3 d-flex justify-content-center">
          Powered by <img src={`${process.env.PUBLIC_URL}/images/stripe.png`} height={25} alt="Stripe" />
        </span>
        <button type="submit" className="btn-primary w-100 mt-1">
          Finish payment
        </button>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Payment Successful!</h5>
                <button type="button" className="btn-close" onClick={handleCloseSuccessModal}></button>
              </div>
              <div className="modal-body">Your payment has been successfully processed.</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleCloseSuccessModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Error Processing Payment</h5>
                <button type="button" className="btn-close" onClick={handleCloseErrorModal}></button>
              </div>
              <div className="modal-body">There was an error processing your payment. Please try again.</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={handleCloseErrorModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Payment = () => {
  const baseURL = 'https://pi3-backend.onrender.com';
  const [data, setData] = useState(null);
  const { productid, price } = useParams();

  useEffect(() => {
    axios.get(`${baseURL}/product/${productid}`)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, [productid]);

  const stripePromise = loadStripe('pk_test_51PVjYGAJPMUjqPpZSTVhiOBBLKrevztR8K9MBnm4tibPvb8BtM4vWiBYFmB0DjZQYB5o16QP1W4RwKzK8fDIQ7ZB00Im3xRwVk');

  if (!data) {
    return <div className="wrapper text-center">Loading...</div>;
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
                  <p className="product-info">
                    Up to {data.prices[price].number_of_licenses} users - Initial Payment<br />€{data.prices[price].price} a month
                  </p>
                </div>
                <p className="product-price">€{data.prices[price].price}</p>
              </div>
              <hr />
              <div className="payment-total d-flex justify-content-between">
                <p>Total</p>
                <p>€{data.prices[price].price}</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4">
            <Elements stripe={stripePromise}>
              <PaymentForm stripePromise={stripePromise} data={data} price={price} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
