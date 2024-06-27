import { useEffect, useState } from 'react';
import Breadcrumbs from "../../components/breadcrumbs";
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import './adminversions.css';

export default function Version() {
    const baseURL = 'http://localhost:3000';
    const { productid } = useParams();
    const [product, setProduct] = useState({});
    const [status, setStatus] = useState([]);
    const [sameReq, setSameReq] = useState(true);

    const [version, setVersion] = useState("");
    const [statusid, setStatusId] = useState(null);
    const [download, setDownload] = useState("");
    const [releaseNotes, setReleaseNotes] = useState("");
    const [req, setReq] = useState({
        os: "",
        processor: "",
        ram: "",
        hard_disk_space: "",
        graphic_card: "",
        internet_conection: ""
    });

    useEffect(() => {
        axios.get(baseURL + "/product/" + productid).then(res => {
            setProduct(res.data)
        })
        axios.get(baseURL + "/version/status").then(res => {
            setStatus(res.data)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!version || !statusid || !download || !releaseNotes) alert("All fields are required. Please fill in all inputs.")
        else if (sameReq) {
            axios.post(baseURL + "/version/product/create", { versionNum: version, statusid: statusid, downloadlink: download, releasenotes: releaseNotes, productid: productid }).then(res => {
                alert(res.data.message);
            })
        }
        else {
            axios.post(baseURL + "/version/product/create", { versionNum: version, statusid: statusid, downloadlink: download, releasenotes: releaseNotes, productid: productid, reqNew: req }).then(res => {
                alert(res.data.message);
            })
        }
    }
    if (!product || !status) {
        return (<div className='wrapper'>Loading...</div>)
    }
    return (
        <div className="wrapper">
            <Helmet>
                <title>Versions - LogicLeap</title>
            </Helmet>
            <div className="d-flex flex-column align-items-center justify-content-center w-100">

                <div className="col-6 bg-white p-4 rounded-3 regular-border">
                    <h3 className="text-bold">Create version for {product.name}</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-6">
                                <label htmlFor="version" className="form-label">
                                    Version
                                </label>
                                <input type="text" className="form-control" id="version" placeholder="1.1.1" value={version} onChange={(e) => { setVersion(e.target.value) }} />
                            </div>
                            <div className="col-6">
                                <label htmlFor="status" className="form-label">
                                    Status
                                </label>
                                <select className="form-control form-select" id="status" name="status" value={statusid} onChange={(e) => { setStatusId(e.target.value) }}>
                                    {status.map((item) => (
                                        <option value={item.vstatusid}>{item.designation}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="download">Download</label>
                            <input type="url" className="form-control" id="download" name="download" placeholder="https://www.example.com" value={download} onChange={(e) => { setDownload(e.target.value) }} />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="releaseNotes">Release Notes</label>
                            <textarea className="form-control" id="releaseNotes" name="releaseNotes" rows="5" value={releaseNotes} onChange={(e) => { setReleaseNotes(e.target.value) }} />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="samereq">Same requirements?</label>
                            <input className="form-check-input ms-2" type="checkbox" checked={sameReq} onChange={() => { setSameReq(!sameReq) }} name="samereq" />
                        </div>
                        {!sameReq && (
                            <div>
                                <div className="form-group mt-3">
                                    <label htmlFor="os">Operating System</label>
                                    <input type="text" className="form-control" name="os" value={req.os} onChange={(e) => setReq({ ...req, os: e.target.value })}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="processor">Processor</label>
                                    <input type="text" className="form-control" name="processor" value={req.processor} onChange={(e) => setReq({ ...req, processor: e.target.value })}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="ram">RAM</label>
                                    <input type="text" className="form-control" name="ram" value={req.ram} onChange={(e) => setReq({ ...req, ram: e.target.value })}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="hard_disk_space">Hard disk space</label>
                                    <input type="text" className="form-control" name="hard_disk_space" value={req.hard_disk_space} onChange={(e) => setReq({ ...req, hard_disk_space: e.target.value })}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="graphic_card">Graphics card</label>
                                    <input type="text" className="form-control" name="graphic_card" value={req.graphic_card} onChange={(e) => setReq({ ...req, graphic_card: e.target.value })}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="internet_conection">Internet connection</label>
                                    <input type="text" className="form-control" name="internet_conection" value={req.internet_conection} onChange={(e) => setReq({ ...req, internet_conection: e.target.value })}
                                    />
                                </div>
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary mt-3 w-100">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

