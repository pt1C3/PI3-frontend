import "./managers.css";
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Managers() {
    return (
        <div className="wrapper mx-10vw">
            <div className="manager-container row regular-border bg-white rounded-2 p-3 mt-4">
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
                                <div className="manager-item regular-border d-flex w-100 align-items-center bg-white rounded-2 p-3">
                                    <img className="rounded-circle me-3" src={process.env.PUBLIC_URL + "/logo192.png"} />
                                    <div>
                                        <h5 className="m-0 text-medium">António Mendes</h5>
                                        <p className="m-0 text-secondary">antoniomendes@empresa.pt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn"><FontAwesomeIcon icon={faPlus} /></button>
                </div>
                <div className="col-lg-6 col-xl-8">
                    <div className="manager-selected d-flex align-items-center mb-3">
                        <img className="rounded-circle me-3" src={process.env.PUBLIC_URL + "/logo192.png"} />
                        <div>
                            <p className="mb-0 text-medium fs-4">António Mendes</p>
                            <p className="mb-0 text-secondary">antoniomendes@empresa.pt</p>
                        </div>
                        <button className="btn btn-secondary ms-auto">Remove Manager</button>
                    </div>
                    <div className="row">
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
                                <button className="btn btn-secondary">Remove Licenses</button>
                                <button className="btn btn-secondary">Add Licenses</button>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    );
}
