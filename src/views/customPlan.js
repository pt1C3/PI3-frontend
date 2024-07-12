import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import Breadcrumbs from "../components/breadcrumbs";
import axios from 'axios';

export default function CustomPlan() {
    let { id } = useParams();
    const baseURL = 'http://localhost:3000';
    const [product, setProduct] = useState({});
    const [licenses, setLicenses] = useState(0);
    useEffect(() => {
        axios.get(baseURL + "/product/" + id).then(res => { setProduct(res.data) })
    }, [])

    if (!product) {
        return <div className="wrapper text-center">Loading...</div>;

    }
    return (
        <div className="wrapper" style={{ height: '100vh' }}>
            <Helmet>
                <title>{"Custom plan for " + product.name + " - LogicLeap"}</title>
            </Helmet>
            <Breadcrumbs page1={product.name} page2="Custom plan" link1={"/product/" + id} />
            <div className='d-flex justify-content-center py-4'>
                <div className="col-6 bg-white p-4 rounded-3 regular-border">
                    <h3 className='text-bold mb-0'>{"Custom plan for " + product.name}</h3>
                    <form className='mt-3'>
                        <div className="form-group">
                            <label htmlFor="licenses">Number of licenses</label>
                            <input
                                type="number"
                                className="form-control"
                                name="licenses"
                                value={licenses}
                                onChange={(e) => setLicenses(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3 w-100">Submit</button>
                    </form>
                </div >
            </div>
        </div >
    );
}
