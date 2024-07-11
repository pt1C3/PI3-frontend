import { useEffect, useState } from 'react';
import Breadcrumbs from "../../components/breadcrumbs";
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

export default function Version() {
    const baseURL = 'http://localhost:3000';
    const { isproduct, id, versionid } = useParams();
    const isProductBool = (isproduct === 'true');
    const navigate = useNavigate();
    const [item, setItem] = useState({});
    const [status, setStatus] = useState([]);
    const [sameReq, setSameReq] = useState(false);

    const [version, setVersion] = useState("");
    const [statusid, setStatusId] = useState(1);
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
        if (isProductBool) {
            axios.get(baseURL + "/product/" + id).then(res => {
                setItem(res.data)
            })
        }
        else {
            axios.get(baseURL + "/addon/" + id).then(res => {
                setItem(res.data)
            })
        }
        axios.get(baseURL + "/version/status").then(res => {
            setStatus(res.data)
        })
        if (versionid) {
            axios.get(baseURL + "/version/single/" + versionid).then(res => {
                setVersion(res.data.version);
                setStatusId(res.data.statusid);
                setDownload(res.data.downloadlink);
                setReleaseNotes(res.data.releasenotes);
                setReq(res.data.req);
            })
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isProductBool && !versionid) { //Se for para criar uma versão para o produto
            if (!version || !statusid || !download || !releaseNotes) {
                alert("All fields are required. Please fill in all inputs.")
            }
            else if (sameReq) { //Se for para utilizar os reqs da versão mais recente
                axios.post(baseURL + "/version/product/create", { versionNum: version, statusid: statusid, downloadlink: download, releasenotes: releaseNotes, productid: id }).then(res => {
                    alert(res.data.message);
                    if (res.data.success) navigate('/products/versions/' + id)

                })
            }
            else { //Se for para utilizar novos reqs
                axios.post(baseURL + "/version/product/create", { versionNum: version, statusid: statusid, downloadlink: download, releasenotes: releaseNotes, productid: id, reqNew: req }).then(res => {
                    alert(res.data.message);
                    if (res.data.success) navigate('/products/versions/' + id)
                })
            }
        }
        else if (isProductBool && versionid) { //Se for para editar uma versão para o produto
            if (!version || !statusid || !download || !releaseNotes) {
                alert("All fields are required. Please fill in all inputs.")
            }
            else if (sameReq) { //Se for para utilizar os reqs da versão mais recente
                axios.post(baseURL + "/version/product/edit", { versionNum: version, statusid: statusid, downloadlink: download, releasenotes: releaseNotes, productid: id, versionid: versionid }).then(res => {
                    alert(res.data.message);
                    if (res.data.success) navigate('/products/versions/' + id)

                })
            }
            else { //Se for para utilizar novos reqs
                axios.post(baseURL + "/version/product/edit", { versionNum: version, statusid: statusid, downloadlink: download, releasenotes: releaseNotes, productid: id, reqNew: req, versionid: versionid }).then(res => {
                    alert(res.data.message);
                    if (res.data.success) navigate('/products/versions/' + id)
                })
            }
        }
        else if (!isProductBool && !versionid) { //Se for para criar uma versão para o addon
            if (!version || !statusid || !download || !releaseNotes) alert("All fields are required. Please fill in all inputs.")
            else {
                axios.post(baseURL + "/version/addon/create", { versionNum: version, statusid: statusid, downloadlink: download, releasenotes: releaseNotes, addonid: id }).then(res => {
                    alert(res.data.message);
                    if (res.data.success) navigate('/addons/versions/' + id)
                })
            }

        }
        else if (!isProductBool && versionid) {//Se for para editar uma versão para o addon
            if (!version || !statusid || !download || !releaseNotes) alert("All fields are required. Please fill in all inputs.")
            else {
                axios.post(baseURL + "/version/addon/edit", { versionNum: version, statusid: statusid, downloadlink: download, releasenotes: releaseNotes, versionid: versionid }).then(res => {
                    alert(res.data.message);
                    if (res.data.success) navigate('/addons/versions/' + id)
                })
            }
        }
    }
    if (!item || !status) {
        return (<div className='wrapper'>Loading...</div>)
    }
    const breadcrumbs = () => {
        if (isProductBool) {
            return <Breadcrumbs page1={item.name} page2="Versions" page3="Version" link1="/products/" link2={"/products/versions/" + item.productid} />
        }
        else {
            return <Breadcrumbs page1={item.name} page2="Versions" page3="Version" link1={"/products/addons/" + item.productid} link2={"/addons/versions/" + item.addonid} />

        }

    }
    return (
        <div className="wrapper">
            <Helmet>
                <title>Version Form - LogicLeap</title>
            </Helmet>
            {breadcrumbs()}
            <div className="d-flex flex-column align-items-center justify-content-center w-100">

                <div className="col-6 bg-white p-4 rounded-3 regular-border mt-5">
                    <h3 className="text-bold">
                        {!versionid ? (//Se estiver a criar
                            isProductBool ? ( //um produto
                                'Create version for ' + item.name
                            ) : ( //um addon
                                'Create version for ' + item.name + ' (addon)'
                            )
                        ) : ( //Se estiver a editar
                            isProductBool ? ( //um produto
                                'Edit version for ' + item.name
                            ) : ( //um addon
                                'Edit version for ' + item.name + ' (addon)'
                            )
                        )}

                    </h3>

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
                        {isProductBool && (
                            <>
                                <div className="form-group mt-3">
                                    <input className="form-check-input me-2" type="checkbox" checked={sameReq} onChange={() => { setSameReq(!sameReq) }} name="samereq" />
                                    <label htmlFor="samereq">{versionid ? 'Same requirements' : 'Same requirements as latest version'}</label>
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
                            </>
                        )}

                        <button type="submit" className="btn btn-primary mt-3 w-100">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

