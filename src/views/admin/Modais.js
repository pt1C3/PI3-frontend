import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "./Modais.css";

export default function Modais() {
  return (
    <>
      <Helmet>
        <title>Modais de edição</title>
      </Helmet>
      <div className="wrapper d-flex flex-column justify-content-center">
        <div className="content mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="custom-title">Image</div>
                  <div className="divider"></div>
                  <div className="form-group">
                    <div className="mb-3">
                      <div className="image-placeholder"></div>
                      <label className="btn btn-secondary mt-2" htmlFor="productImage">Choose File</label>
                      <input type="file" className="form-control-file mt-2" id="productImage" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary btn-block custom-save-button mt-3">Save all</button>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="custom-title">General Information</div>
                  <div className="divider"></div>
                  <div className="form-group">
                    <label htmlFor="productName">Name</label>
                    <input type="text" className="form-control" id="productName" placeholder="Product" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productCategory">Category</label>
                    <select className="form-control" id="productCategory">
                      <option>Design</option>
                      <option>Productivity</option>
                      <option>Communication</option>
                      <option>Development</option>
                      <option>Entertainment</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="productDescription">Description</label>
                    <textarea className="form-control" id="productDescription" rows="3"></textarea>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="custom-title">Requirements</div>
                  <div className="divider"></div>
                  <div className="form-group">
                    <label htmlFor="os">Operating System</label>
                    <input type="text" className="form-control" id="os" placeholder="Windows 10 64 bits" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="processor">Processor</label>
                    <input type="text" className="form-control" id="processor" placeholder="Multicore Intel" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ram">RAM</label>
                    <select className="form-control" id="ram">
                      <option>8 GB</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="hdd">Hard Disk Space</label>
                    <input type="text" className="form-control" id="hdd" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="graphicsCard">Graphics Card</label>
                    <input type="text" className="form-control" id="graphicsCard" />
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="internetRequirement" />
                    <label className="form-check-label" htmlFor="internetRequirement">
                      This product needs internet connectivity to activate the software
                    </label>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="custom-title">Individual Plans</div>
                  <div className="divider"></div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="plan1Users">Up to 100 users</label>
                        <input type="text" className="form-control" id="plan1Users" placeholder="€649.99" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="plan1Discount">Discount Percentage</label>
                        <input type="text" className="form-control" id="plan1Discount" placeholder="20" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="plan1PreviousPrice">Previous Price</label>
                        <input type="text" className="form-control" id="plan1PreviousPrice" placeholder="€799.99" />
                      </div>
                      <div className="form-group">
                        <span className="discounted-price">-20% €799.99/yr. €649.99/yr.</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="plan2Users">Up to 30 users</label>
                        <input type="text" className="form-control" id="plan2Users" placeholder="€359.99" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="plan2Discount">Discount Percentage</label>
                        <input type="text" className="form-control" id="plan2Discount" placeholder="0" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="plan2PreviousPrice">Previous Price</label>
                        <input type="text" className="form-control" id="plan2PreviousPrice" placeholder="-" />
                      </div>
                      <div className="form-group">
                        <span className="discounted-price">€359.99/yr.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="custom-title">Business Plans</div>
                  <div className="divider"></div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="businessPlan1Users">Up to 100 users</label>
                        <input type="text" className="form-control" id="businessPlan1Users" placeholder="€649.99" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="businessPlan2Users">Up to 30 users</label>
                        <input type="text" className="form-control" id="businessPlan2Users" placeholder="€359.99" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="custom-title">FAQ</div>
                  <div className="divider"></div>
                  <div className="form-group">
                    <label htmlFor="faqQuestion1">Question 1</label>
                    <input type="text" className="form-control" id="faqQuestion1" placeholder="Can I access Product Name offline?" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="faqAnswer1">Answer 1</label>
                    <textarea className="form-control" id="faqAnswer1" rows="3" placeholder="Yes, you can access Product Name offline. However, internet is required for the installation and to access certain features and receive updates."></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="faqQuestion2">Question 2</label>
                    <input type="text" className="form-control" id="faqQuestion2" placeholder="Can I transfer my data from another software to Product Name?" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="faqAnswer2">Answer 2</label>
                    <textarea className="form-control" id="faqAnswer2" rows="3" placeholder="Yes, you can transfer your data from another software to Product Name."></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}