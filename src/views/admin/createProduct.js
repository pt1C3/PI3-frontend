import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './createProduct.css';
import axios from 'axios';
import Breadcrumbs from "../../components/breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faSubtract } from "@fortawesome/free-solid-svg-icons";

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


    const changePrice = (isCurrent, isFirst, value) => {
        if (+value < 0) {
            alert("Price value invalid.")
        }
        else {
            if (isCurrent) {
                value = (+value).toFixed(0);
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
                value = (+value).toFixed(0);

                if (isFirst) {
                    value = (+value).toFixed(0);
                    setOldPrice1(value);
                    setPrice1(+(+value * (1 - (+discount1 / 100))).toFixed(2));
                }
                else {
                    setOldPrice2(value);
                    setPrice2(+(+value * (1 - (+discount2 / 100))).toFixed(2));
                }
            }
        }
    }
    const changeDiscount = (isFirst, value) => {
        if (+value >= 100 || +value < 0) {
            alert("Discount value invalid.")
        }
        else {
            value = (+value).toFixed(0);
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
        console.log(typeof (discount1));
        console.log(discount1);

    }

    //FAQ
    const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);

    const handleFaqChange = (index, event) => {
        const { name, value } = event.target;
        const newFaqs = [...faqs];
        newFaqs[index][name] = value;
        setFaqs(newFaqs);
    };

    const addFaq = () => {
        setFaqs([...faqs, { question: '', answer: '' }]);
    };

    const removeFaq = (index) => {
        const newFaqs = faqs.filter((_, i) => i !== index);
        setFaqs(newFaqs);
    };

    //Version
    const [version, setVersion] = useState('');
    const [statusid, setStatusId] = useState('');
    const [status, setStatus] = useState([]);
    const [download, setDownload] = useState('');
    const [releaseNotes, setReleaseNotes] = useState('');
    const [sameReq, setSameReq] = useState(false);
    const [req, setReq] = useState({
        os: '',
        processor: '',
        ram: '',
        hard_disk_space: '',
        graphic_card: '',
        internet_conection: ''
    });


    useEffect(() => {
        axios.get(baseURL + "/version/status").then(res => {
            setStatus(res.data)
        })
    }, [])
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
                <title>Create Product - LogicLeap</title>
            </Helmet>
            <Breadcrumbs page1="Products" page2="Create" link1="/"></Breadcrumbs>
            <form className='row mx-10vw gx-3 mt-3 add-product' style={{ marginBottom: "10vh" }}>
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
                            <textarea type="text" className='form-control mb-3 description' name="description" />
                            <label htmlFor="features">Features</label>
                            <textarea type="text" className='form-control mb-3 features' name="features" />

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
                                <input type="number" className='form-control mb-3' max="100" name="discount1" value={discount1} onChange={(e) => { changeDiscount(true, (e.target.value)) }}></input>
                                <label htmlFor="oldprice1">Previous Price</label>
                                <input type="number" className='form-control mb-3' name="oldprice1" value={oldPrice1} onChange={(e) => { changePrice(false, true, e.target.value) }}></input>
                                <div className='d-flex align-items-center'>
                                    {discount1 && +discount1 != 0 ?
                                        <h3 className="card-discount rounded-3 p-1 text-white text-bold me-2 mb-0">-{discount1}%</h3>
                                        : <h3 className="my-1" style={{ width: "0" }}>-</h3>
                                    }
                                    <div>
                                        {discount1 && +discount1 != 0 ?
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
                                <input type="number" className='form-control mb-3' max="100" name="discount2" value={discount2} onChange={(e) => { changeDiscount(false, (e.target.value)) }}></input>
                                <label htmlFor="oldprice2">Previous Price</label>
                                <input type="number" className='form-control mb-3' name="oldprice2" value={oldPrice2} onChange={(e) => { changePrice(false, false, e.target.value) }}></input>
                                <div className='d-flex align-items-center'>
                                    {discount2 && +discount2 != 0 ?
                                        <h3 className="card-discount rounded-3 p-1 text-white text-bold me-2 mb-0">-{discount2}%</h3>
                                        : <h3 className="my-1" style={{ width: "0" }}>-</h3>
                                    }
                                    <div>
                                        {discount2 && +discount2 != 0 ?
                                            <h5 class="card-text fs-6 text-secondary text-decoration-line-through m-0">€{oldPrice2}/mo.</h5>
                                            : null}
                                        <h5 class="card-text fs-5 m-0">€{price2}/mo.</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white regular-border rounded-3 mb-4'>
                        <p className='m-0 px-4 py-3 text-medium'>FAQ</p>
                        <hr className='m-0' />
                        <div className='px-4 py-3 d-flex align-items-center flex-column'>
                            {faqs.map((faq, index) => (
                                <div key={index} className='row w-100'>
                                    <div className='col-1 d-flex justify-content-center align-items-center flex-column'>
                                        <p className='text-medium'>{index}</p>
                                        <button className='btn btn-secondary rounded-circle' type="button" onClick={() => removeFaq(index)}><FontAwesomeIcon icon={faSubtract} /></button>
                                    </div>
                                    <div className='col-11'>
                                        <label htmlFor={`question-${index}`}>Question</label>
                                        <input
                                            type="text"
                                            className='form-control mb-3'
                                            name="question"
                                            value={faq.question}
                                            onChange={(e) => handleFaqChange(index, e)}
                                        />
                                        <label htmlFor={`answer-${index}`}>Answer</label>
                                        <input
                                            type="text"
                                            className='form-control mb-3'
                                            name="answer"
                                            value={faq.answer}
                                            onChange={(e) => handleFaqChange(index, e)}
                                        />
                                    </div>
                                    <hr />

                                </div>
                            ))}
                            <button className='btn btn-secondary rounded-circle' type="button" onClick={addFaq}><FontAwesomeIcon icon={faAdd} /></button>
                        </div>
                    </div>
                    <div className='bg-white regular-border rounded-3 mb-4'>
                        <p className='m-0 px-4 py-3 text-medium'>First version</p>
                        <hr className='m-0' />
                        <div className='px-4 py-3'>
                            <label htmlFor="version">
                                Version
                            </label>
                            <input type="text" className="form-control mb-3" id="version" placeholder="1.1.1" value={version} onChange={(e) => { setVersion(e.target.value) }} />
                            <label htmlFor="status" className="form-label">
                                Status
                            </label>
                            <select className="form-control form-select mb-3" id="status" name="status" value={statusid} onChange={(e) => { setStatusId(e.target.value) }}>
                                {status.map((item) => (
                                    <option value={item.vstatusid}>{item.designation}</option>
                                ))}
                            </select>
                            <label htmlFor="download">Download</label>
                            <input type="url" className="form-control mb-3" id="download" name="download" placeholder="https://www.example.com" value={download} onChange={(e) => { setDownload(e.target.value) }} />
                            <label htmlFor="releaseNotes">Release Notes</label>
                            <textarea className="form-control mb-3 description" id="releaseNotes" name="releaseNotes" rows="5" value={releaseNotes} onChange={(e) => { setReleaseNotes(e.target.value) }} />
                            <label htmlFor="os">Operating System</label>
                            <input type="text" className="form-control mb-3" name="os" value={req.os} onChange={(e) => setReq({ ...req, os: e.target.value })}
                            />
                            <label htmlFor="processor">Processor</label>
                            <input type="text" className="form-control mb-3" name="processor" value={req.processor} onChange={(e) => setReq({ ...req, processor: e.target.value })}
                            />

                            <label htmlFor="ram">RAM</label>
                            <input type="text" className="form-control mb-3" name="ram" value={req.ram} onChange={(e) => setReq({ ...req, ram: e.target.value })}
                            />
                            <label htmlFor="hard_disk_space">Hard disk space</label>
                            <input type="text" className="form-control mb-3" name="hard_disk_space" value={req.hard_disk_space} onChange={(e) => setReq({ ...req, hard_disk_space: e.target.value })}
                            />
                            <label htmlFor="graphic_card">Graphics card</label>
                            <input type="text" className="form-control mb-3" name="graphic_card" value={req.graphic_card} onChange={(e) => setReq({ ...req, graphic_card: e.target.value })}
                            />
                            <label htmlFor="internet_conection">Internet connection</label>
                            <input type="text" className="form-control" name="internet_conection" value={req.internet_conection} onChange={(e) => setReq({ ...req, internet_conection: e.target.value })}
                            />
                        </div>
                    </div>

                </div>

                <input type="submit" className="btn btn-primary submit" value="Submit" />
            </form>


        </div>
    );
}
