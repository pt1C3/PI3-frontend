import React from 'react';
import Breadcrumbs from "../../components/breadcrumbs";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './customeredit';

export default function adminversions() {
    return (
        <div className="wrapper bg-white">
            <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
                <Helmet>
                    <title> Costumers - LogicLeap</title>
                </Helmet>
                <Breadcrumbs page1="Costumers" page2="António Mendes" page3="Notification" link1="/" link2="/"></Breadcrumbs>
                <div className="col-md-6 bg-white p-4 rounded-3 form-container">
                    <form>
                        <div className="row g-3">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" name="title" placeholder="Creativortex got updated!" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="link">Redirect link</label>
                            <input type="url" className="form-control" id="link" name="link" placeholder="https://www.logicleap.pt/products/creativortex" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" name="description" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3 w-100">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

