import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './business.css';
import axios from 'axios';
import Breadcrumbs from "../../components/breadcrumbs";

export default function Product() {
    const baseURL = 'http://localhost:3000';

    //Prices
    const [nLicenses1, setNLicenses1] = useState(0);
    const [discount1, setDiscount1] = useState(0);
    const [oldPrice1, setOldPrice1] = useState(0);
    const [price1, setPrice1] = useState(0);

    const [nLicenses2, setNLicenses2] = useState(0);
    const [discount2, setDiscount2] = useState(0);
    const [oldPrice2, setOldPrice2] = useState(0);
    const [price2, setPrice2] = useState(0);

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    useEffect(() => {

    }, []);

    const changePrice = (isCurrent, isFirst, value) => {
        if (isCurrent) {
            if (isFirst) {
                setPrice1(value);
                setOldPrice1(+(+value * (1 + (+discount1 / 100))).toFixed(2));
            }
            else {
                setPrice2(value);
                setOldPrice2(+(+value * (1 + (+discount2 / 100))).toFixed(2));
            }
        }
        else {
            if (isFirst) {
                setOldPrice1(value);
                setPrice1(+(+value * (1 - (+discount1 / 100))).toFixed(2));
            }
            else {
                setOldPrice2(value);
                setPrice2(+(+value * (1 - (+discount2 / 100))).toFixed(2));
            }
        }
    }
    const changeDiscount = (isFirst, value) => {
        if (isFirst) {
            if (price1) {
                setOldPrice1(+(+price1 * (1 + (+value / 100))).toFixed(2));
            }
            else if (oldPrice1) {
                setPrice1(+(+oldPrice1 * (1 - (+value / 100))).toFixed(2));

            }
            setDiscount1(value)
        }
        else {
            if (price2) {
                setOldPrice2(+(+price2 * (1 + (+value / 100))).toFixed(2));
            } else if (oldPrice2) {
                setPrice2(+(+oldPrice2 * (1 - (+value / 100))).toFixed(2));

            }
            setDiscount2(value)

        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        /*if (!question || !answer) alert("All fields are required. Please fill in all inputs.")
        else {
            axios.post(baseURL + "/faq/create", { question: question, answer: answer, productid: productid })
                .then(res => {
                    alert(res.data.message);
                })
        }*/
    }

    /*if (!product) {
        return <div className="wrapper">Loading...</div>;

    }*/
    return (
        <div className="wrapper" style={{ minHeight: '100vh' }}>
            <Helmet>
                <title>Create FAQ - LogicLeap</title>
            </Helmet>
            <Breadcrumbs page1="Products" page2="Create" link1="/"></Breadcrumbs>
            <form className='row mx-10vw gx-3 my-3'>
                <div className="col-4">
                    <div className='bg-white regular-border rounded-3 px-4 py-3'>
                        a
                    </div>
                </div>
                <div className="col-8">
                    <div className='bg-white regular-border rounded-3 mb-4'>
                        <p className='m-0 px-4 py-3 text-medium'>General Information</p>
                        <hr className='m-0' />
                        <div className='px-4 py-3'>
                            <label htmlFor="name">Name</label>
                            <input type="text" className='form-control mb-3' name="name"></input>
                            <label htmlFor="country" className="form-label">Category</label>
                            <select className="form-select form-control mb-3" name="country">
                                <option>
                                    bom dia
                                </option>
                            </select>
                            <label htmlFor="description">Description</label>
                            <textarea type="text" className='form-control mb-3' name="description" />

                        </div>
                    </div>
                    <div className='bg-white regular-border rounded-3 mb-4'>
                        <p className='m-0 px-4 py-3 text-medium'>Plans</p>
                        <hr className='m-0' />
                        <div className='row px-4 py-3'>
                            <div className='col-6'>
                                <label htmlFor="nlicenses1">Number of licenses</label>
                                <input type="text" className='form-control mb-3' name="nlicenses1" value={nLicenses1} onChange={(e) => { setNLicenses1(e.target.value) }}></input>
                                <label htmlFor="price1">Final Price</label>
                                <input type="number" className='form-control mb-3' name="price1" value={price1} onChange={(e) => { changePrice(true, true, e.target.value) }}></input>
                                <label htmlFor="discount1">Discount Percentage</label>
                                <input type="number" className='form-control mb-3' name="discount1" value={discount1} onChange={(e) => { changeDiscount(true,(e.target.value)) }}></input>
                                <label htmlFor="oldprice1">Previous Price</label>
                                <input type="number" className='form-control mb-3' name="oldprice1" value={oldPrice1} onChange={(e) => { changePrice(false, true, e.target.value) }}></input>
                                <div className='d-flex align-items-center'>
                                    {discount1 ?
                                        <h3 className="card-discount rounded-3 p-1 text-white text-bold me-2 mb-0">-{discount1}%</h3>
                                        : <h3 className="my-1" style={{ width: "0" }}>-</h3>
                                    }
                                    <div>
                                        {discount1 ?
                                            <h5 class="card-text fs-6 text-secondary text-decoration-line-through m-0">€{oldPrice1}/mo.</h5>
                                            : null}
                                        <h5 class="card-text fs-5 m-0">€{price1}/mo.</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <label htmlFor="nlicenses2">Number of licenses</label>
                                <input type="text" className='form-control mb-3' name="nlicenses2" value={nLicenses2} onChange={(e) => { setNLicenses2(e.target.value) }}></input>
                                <label htmlFor="price2">Final Price</label>
                                <input type="number" className='form-control mb-3' name="price2" value={price2} onChange={(e) => { changePrice(true, false, e.target.value) }}></input>
                                <label htmlFor="discount2">Discount Percentage</label>
                                <input type="number" className='form-control mb-3' name="discount2" value={discount2} onChange={(e) => { changeDiscount(false,(e.target.value)) }}></input>
                                <label htmlFor="oldprice2">Previous Price</label>
                                <input type="number" className='form-control mb-3' name="oldprice2" value={oldPrice2} onChange={(e) => { changePrice(false, false, e.target.value) }}></input>
                                <div className='d-flex align-items-center'>
                                    {discount2 ?
                                        <h3 className="card-discount rounded-3 p-1 text-white text-bold me-2 mb-0">-{discount2}%</h3>
                                        : <h3 className="my-1" style={{ width: "0" }}>-</h3>
                                    }
                                    <div>
                                        {discount2 ?
                                            <h5 class="card-text fs-6 text-secondary text-decoration-line-through m-0">€{oldPrice2}/mo.</h5>
                                            : null}
                                        <h5 class="card-text fs-5 m-0">€{price2}/mo.</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>


        </div>
    );
}
