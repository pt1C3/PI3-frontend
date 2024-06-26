import "./managers.css";
import { Helmet } from 'react-helmet';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Breadcrumbs from "../../components/breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Managers() {
    const baseURL = 'http://localhost:3000';
    const [data, setData] = useState();
    const [selectedUser, setSelectedUser] = useState();
    useEffect(() => {

        axios.get(baseURL + '/owner/' + JSON.parse(localStorage.getItem('user')).data.businessid)
            .then(res => {
                setData(res.data);
                setSelectedUser(res.data[0])
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });

    }, []);

    if (!data) {
        return <div className="wrapper">Loading...</div>;

    }
    return (
        <div className="wrapper">
            <Helmet>
                <title>Managers - LogicLeap</title>
            </Helmet>
            <Breadcrumbs page1="Managers"></Breadcrumbs>
            <div className="pt-4">
                <div className="manager-container row regular-border bg-white rounded-2 p-3 mx-10vw">
                    <div className="manager-col col-lg-6 col-xl-4 h-100">
                        <div className="manager-select regular-border bg-gray1 rounded-2">
                            <form className="inline-form">
                                <div className="input-group rounded-2 border-0">
                                    <input type="text" className="form-control bg-transparent border-0" placeholder="Search" name="searchValue" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="manager-group p-3">
                                <div className="mb-2">
                                    {data.map((item, index) => (
                                        <button className="manager-item regular-border d-flex w-100 align-items-center bg-white rounded-2 p-3">
                                        <img className="rounded-circle me-3" src={item.image} />
                                        <div>
                                            <h5 className="m-0 text-medium">{item.firstname + " " + item.lastname}</h5>
                                            <p className="m-0 text-secondary">{item.email}</p>
                                        </div>
                                    </button>
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-secondary rounded-circle add-button mt-3"><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <div className="manager-selected-col col-lg-6 col-xl-8 ps-xl-3">
                        {selectedUser && (
                            <div className="manager-selected d-flex align-items-center mb-3">
                            <img className="rounded-circle me-3" src={selectedUser.image} />
                            <div>
                                <p className="mb-0 text-medium fs-4">{selectedUser.firstname + " " + selectedUser.lastname}</p>
                                <p className="mb-0 text-secondary">{selectedUser.email}</p>
                            </div>
                            <button className="btn btn-secondary ms-auto">Remove Manager</button>
                        </div>
                        )}
                        
                        <div className="right row">
                            <div className="regular-border rounded-2 p-3 mb-2">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <img src={process.env.PUBLIC_URL + "/images/Produto.png"} className="rounded-2 me-3" height="60" />
                                        <div>
                                            <p className="mb-0 text-medium fs-5">CreativeVortex</p>
                                            <p className="mb-0 text-secondary">Software</p>
                                        </div>
                                    </div>
                                    <span className="badge badge-secondary badge-pill">R</span>
                                    <span className="ml-auto text-right">100 licenses <b>(30 available)</b></span>
                                </div>
                                <div className="d-flex justify-content-end mt-2">
                                    <button className="btn btn-secondary me-2">Remove Licenses</button>
                                    <button className="btn btn-secondary">Add Licenses</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
