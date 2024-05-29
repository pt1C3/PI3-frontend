import "./payment.css";
import Breadcrumbs from "../components/breadcrumbs";

export default function Payment() {
  return (
    <div className="wrapper">
      <Breadcrumbs page1="Designer Pack" page2="CreatiVortex" page3="Payment" link1="/" link2="/"></Breadcrumbs>
      <div className="mx-10vw">
        <div className="row">

          <div className="col-md-6 mt-5">
            <div>
              <div className="d-flex align-items-center mb-5">
                <img src={process.env.PUBLIC_URL + "/images/Produto.png"} alt="CreatiVortex" height="70" />
                <span className="ms-3"><h4>Creativortex</h4></span>
              </div>
              <div className="d-flex align-items-end justify-content-between mb-2">
                <div>
                  <p className="product-info">Up to 100 users - Initial Payment<br />€649.99 a year</p>
                </div>
                <p className="product-price">€649.99</p>
              </div>
              <hr></hr>
              <div className="payment-total d-flex justify-content-between">
                <p>Total</p>
                <p>€649.99</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-5">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="antonio@empresa.pt"
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
                    placeholder="António José Gomes Mendes"
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
                    placeholder="4242 4242 4242 4242"
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
                      placeholder="321"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <select className="form-select form-control" id="country">
                      <option selected>Portugal</option>
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
                      placeholder="1234-123"
                    />
                  </div>
                </div>
                <span class="stripe-info mt-3 d-flex justify-content-center">Powered by <img src="images/stripe.png" height={25}/></span>
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
