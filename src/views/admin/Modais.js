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
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="productImage">Image</label>
                  <div className="mb-3">
                    <div className="image-placeholder"></div>
                    <input type="file" className="form-control-file mt-2" id="productImage" />
                  </div>
                </div>
                <button className="btn btn-primary btn-block">Save all</button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">General Information</h5>
                <div className="form-group">
                  <label htmlFor="productName">Name</label>
                  <input type="text" className="form-control" id="productName" placeholder="Product" />
                </div>
                <div className="form-group">
                  <label htmlFor="productCategory">Category</label>
                  <select className="form-control" id="productCategory">
                    <option>Productivity</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="productDescription">Description</label>
                  <textarea className="form-control" id="productDescription" rows="3"></textarea>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Requirements</h5>
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
          </div>
        </div>
      </div>
    </div>
  </>
  );
}