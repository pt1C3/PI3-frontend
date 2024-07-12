import { useEffect, useState } from 'react';
import LicenseSidebar from '../../components/LicenseSidebar';
import LicenseDetails from '../../components/LicenseDetails';
import axios from 'axios';
import { data } from 'jquery';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function OwnerProduct() {
    const { productid } = useParams();
    const businessid = JSON.parse(localStorage.getItem('user')).data.businessid;
    const [product, setProduct] = useState()
    const baseURL = 'http://localhost:3000';
    const [addons, setAddons] = useState();
    function fetchAddons() {
        axios.get(baseURL + "/owner/addons/" + businessid + "/" + productid).then(res => {
            console.log(res.data)

            setAddons(res.data)
        })
    }
    useEffect(() => {
        axios.get(baseURL + "/product/" + productid).then(res => {
            setProduct(res.data)
        });
        fetchAddons()
    }, [])

    function removeAddon(id) {
        axios.delete(baseURL + "/owner/cancelplan/" + id).then(res => {
            if (res.data.success) {
                alert(res.data.message);
                fetchAddons();
            }
            else {
                alert(res.data.message);
            }
        })
    }
    if (!product || !addons) {
        return <div className="wrapper text-center">Loading...</div>;
    }
    return (
        <div className="wrapper">
            <div className="mx-10vw">
                <div className="row g-4 align-items-top mt-3">
                    <div className="col-12 bg-white p-4 regular-border rounded-3">
                        <div className="d-flex mb-3">
                            <img src={product.icon} alt={product.name} height="150" className="me-4" />
                            <div className=" d-flex justify-content-between flex-fill">
                                <div>
                                    <p className="text-medium fs-3 m-0">{product.name}</p>
                                    <p className="text-secondary m-0">{product.category.designation}</p></div>

                            </div>
                        </div>
                        <p>{data.description}</p>
                    </div>
                    <div className="bg-white regular-border rounded-3 p-4 mb-3">
                        <div className="card-body">
                            <p className='mb-2 fs-5 text-medium'>Subscription plan</p>
                            <hr />
                            <div className="owner-product-form-group d-flex justify-content-between align-items-center">
                                <div>
                                    <p>Your next bill is for <span className='text-bold'>€649.99</span> on <span className='text-bold'>2023-03-12</span></p>
                                </div>
                                <div>
                                    <button className="btn btn-secondary me-2">Pause</button>
                                    <button className="btn btn-secondary me-2">Cancel</button>
                                    <button className="btn btn-primary">Pay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white regular-border rounded-3 p-4 mb-3">
                        <div className='d-flex justify-content-between mb-2'>
                            <p className='fs-5 m-0 text-medium'>Addons</p>
                            <Link to={"/product/addons/" + productid} className='linknormal'>Buy addons</Link>
                        </div>
                        <hr />
                        <div className="row g-3">
                            {addons.map(item => (
                                <div className='col-4'>
                                    <div className='p-3 regular-border rounded-3 d-flex align-items-center justify-content-between'>
                                        <p className='mb-0'>{item.price.addon.name}</p>
                                        <button className='btn linknormal' onClick={() => { removeAddon(item.planid) }}>Remove</button>
                                    </div>
                                </div>
                            ))}
                            {addons.length === 0 && (<p className="text-center">No items to show.</p>
                            )}

                        </div>
                    </div>
                    <div className="bg-white regular-border rounded-3 p-4 mb-3">
                        <p className='mb-2 fs-5 text-medium'>Manage licenses</p>
                        <div className='manager-container row'>
                            <div className="manager-col col-lg-6 col-xl-4 h-100">
                                <div className="manager-select regular-border bg-gray1 rounded-2 w-100">
                                    <form className="inline-form" >
                                        <div className="input-group rounded-2 border-0">
                                            <input type="text" className="form-control bg-transparent border-0" placeholder="Search for email" name="searchValue" />
                                            <div className="input-group-btn">
                                                <button className="btn btn-default" type="submit">
                                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="manager-group p-3">
                                        <div className="mb-2" >

                                            <button className="manager-item regular-border d-flex w-100 align-items-center bg-white rounded-2 p-3">
                                                <img className="rounded-circle me-3" src={"imagem"} alt={"Nome Apelido"} />
                                                <div>
                                                    <h5 className="m-0 text-medium">{"Nome Apelido"}</h5>
                                                    <p className="m-0 text-secondary">{"Email"}</p>
                                                </div>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <button className="btn btn-secondary rounded-circle add-button mt-3"><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                            <LicenseDetails />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
