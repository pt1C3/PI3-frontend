import { useEffect, useState } from 'react';
import Breadcrumbs from "../../components/breadcrumbs";
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

export default function Addon() {
    const baseURL = 'http://localhost:3000';
    const { addonid } = useParams();
    const navigate = useNavigate();

    //Addon
    const [status, setStatus] = useState();
    const [products, setProducts] = useState([]);

    const [previousName, setPreviousName] = useState("");
    const [name, setName] = useState("");
    const [statusid, setStatusId] = useState();
    const [description, setDescription] = useState("");
    const [productid, setProductid] = useState();

    //Version
    const [version, setVersion] = useState('');
    const [vstatusid, setVStatusId] = useState('');
    const [vstatus, setVStatus] = useState([]);
    const [download, setDownload] = useState('');
    const [releaseNotes, setReleaseNotes] = useState('');


    //Price
    const [priceid, setPriceid] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [oldPrice, setOldPrice] = useState(0);
    const [price, setPrice] = useState(0);


    function roundToTwoDecimals(num) {
        const roundedNum = Math.round(num * 100) / 100;
        return parseFloat(roundedNum.toString());
    }
    const changePrice = (isCurrent, value) => {
        if (+value <= 0) {
            alert("Price value invalid.")
        }
        else {
            if (isCurrent) {
                value = roundToTwoDecimals(+value);
                setPrice(value);
                setOldPrice(+(+value * (1 + (+discount / 100))).toFixed(2));
            }
            else {
                value = roundToTwoDecimals(+value);
                setOldPrice(value);
                setPrice(roundToTwoDecimals(+value * (1 - (+discount / 100))));
            }
        }

    }

    const changeDiscount = (value) => {
        if (+value >= 100 || +value < 0) {
            alert("Discount value invalid.")
        }
        else {
            value = (+value).toFixed(0);
            if (price) {
                setOldPrice(roundToTwoDecimals(+price * (1 + (+value / 100))));
            }
            else if (oldPrice) {
                setPrice(roundToTwoDecimals(+oldPrice * (1 - (+value / 100))));

            }
            setDiscount(value)
        }

    }


    useEffect(() => {
        axios.get(baseURL + "/product/status").then(res => { //Status do addon
            setStatus(res.data)
            setStatusId(res.data[0].pstatusid)
        })
        axios.get(baseURL + '/product/admin/list/').then(res => { //Produtos
            setProducts(res.data)
            setProductid(res.data[0].productid);
        });
        axios.get(baseURL + "/version/status").then(res => { //Status da versão
            setVStatus(res.data)
            setVStatusId(res.data[0].vstatusid)

        })
        if (addonid) {
            axios.get(baseURL + "/addon/" + addonid).then(res => { //Se for editar vai buscar a info inicial
                setName(res.data.name);
                setPreviousName(res.data.name);
                setStatusId(res.data.status);
                setDescription(res.data.description);
                setProductid(res.data.productid);
                setPriceid(res.data.prices[0].priceid);
                setPrice(roundToTwoDecimals(+res.data.prices[0].price));
                setDiscount(roundToTwoDecimals(+res.data.prices[0].discount_percentage));
                setOldPrice(roundToTwoDecimals(+res.data.prices[0].price * (1 + (+res.data.prices[0].discount_percentage / 100))));
            })
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !statusid || !description || !price) alert("All fields are required. Please fill in all inputs.")
        else {
            if (!addonid) { //Se for para criar uma versão para o addon
                if (!version || !vstatusid || !download || !releaseNotes) alert("All fields are required. Please fill in all inputs.")
                else {
                    axios.post(baseURL + "/addon/admin/add", { name: name, status: statusid, description: description, productid: productid, priceVal: price, discount_percentage: discount, versionNum: version, vstatusid: vstatusid, download: download, releasenotes: releaseNotes }).then(res => {
                        alert(res.data.message);
                        if (res.data.success) navigate('/products/addons/' + productid)
                    })
                }
            }
            else {//Se for para editar uma versão para o addon
                axios.post(baseURL + "/addon/admin/edit", { addonid: addonid, name: name, status: statusid, description: description, productid: productid, priceid: priceid, priceVal: price, discount_percentage: discount })
                    .then(res => {
                        alert(res.data.message);
                        console.log(res.data);
                        if (res.data.success) navigate('/products/addons/' + productid)
                    })
            }

        }

    }



    if (!status || !products) {
        return (<div className='wrapper'>Loading...</div>)
    }
    return (
        <div className="wrapper">
            <Helmet>
                <title> Addon Form - LogicLeap</title>
            </Helmet>
            <div className="d-flex flex-column align-items-center justify-content-center w-100">

                <div className="col-6 bg-white p-4 rounded-3 regular-border mt-5">
                    <h3 className="text-bold">
                        {!addonid ? (//Se estiver a criar
                            'Create an addon'
                        ) : ( //Se estiver a editar
                            'Edit ' + previousName + ' (addon)'
                        )}

                    </h3>

                    <form onSubmit={handleSubmit}>
                        <p className='mb-2 fs-5 text-medium'>Information</p>

                        <div className="row g-3">
                            <div className="col-6">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input type="text" className="form-control" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="col-6">
                                <label htmlFor="status" className="form-label">
                                    Status
                                </label>
                                <select className="form-control form-select" name="status" value={statusid} onChange={(e) => { setStatusId(e.target.value) }}>
                                    {status.map((item) => (
                                        <option value={item.pstatusid}>{item.designation}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="product" className="form-label">
                                Product
                            </label>
                            <select className="form-control form-select" name="product" value={productid} onChange={(e) => { setProductid(e.target.value) }}>
                                {products.map((item) => (
                                    <option value={item.productid}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" name="description" rows="5" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                        </div>
                        <div className='mt-4'>
                            <p className='mb-2 fs-5 text-medium'>Price</p>
                            <label htmlFor="price1">Final Price</label>
                            <input type="number" className='form-control mb-3' name="price1" value={price} onChange={(e) => { changePrice(true, e.target.value) }}></input>
                            <label htmlFor="discount1">Discount Percentage</label>
                            <input type="number" className='form-control mb-3' max="100" name="discount1" value={discount} onChange={(e) => { changeDiscount((e.target.value)) }}></input>
                            <label htmlFor="oldprice1">Previous Price</label>
                            <input type="number" className='form-control mb-3' name="oldprice1" value={oldPrice} onChange={(e) => { changePrice(false, e.target.value) }}></input>
                            <div className='d-flex align-items-center'>
                                {discount && +discount !== 0 ?
                                    <h3 className="card-discount rounded-3 p-1 text-white text-bold me-2 mb-0">-{discount}%</h3>
                                    : <h3 className="my-1" style={{ width: "0" }}>-</h3>
                                }
                                <div>
                                    {discount && +discount !== 0 ?
                                        <h5 class="card-text fs-6 text-secondary text-decoration-line-through m-0">€{oldPrice}/mo.</h5>
                                        : null}
                                    <h5 class="card-text fs-5 m-0">€{price}/mo.</h5>
                                </div>
                            </div>
                        </div>
                        {!addonid && (
                            <div className='mt-4'>
                                <p className='mb-2 fs-5 text-medium'>First version</p>
                                <label htmlFor="version">
                                    Version
                                </label>
                                <input type="text" className="form-control mb-3" id="version" placeholder="1.1.1" value={version} onChange={(e) => { setVersion(e.target.value) }} />
                                <label htmlFor="status" className="form-label">
                                    Status
                                </label>
                                <select className="form-control form-select mb-3" id="status" name="status" value={vstatusid} onChange={(e) => { setVStatusId(e.target.value) }}>
                                    {vstatus.map((item) => (
                                        <option value={item.vstatusid}>{item.designation}</option>
                                    ))}
                                </select>
                                <label htmlFor="download">Download</label>
                                <input type="url" className="form-control mb-3" id="download" name="download" placeholder="https://www.example.com" value={download} onChange={(e) => { setDownload(e.target.value) }} />
                                <label htmlFor="releaseNotes">Release Notes</label>
                                <textarea className="form-control mb-3 description" id="releaseNotes" name="releaseNotes" rows="5" value={releaseNotes} onChange={(e) => { setReleaseNotes(e.target.value) }} />
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary mt-3 w-100">Save</button>
                    </form>
                </div>
            </div >
        </div >
    );
};

