import Breadcrumbs from "../../components/breadcrumbs";
import "./managers.css";
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Managers() {
    return (
        <div class="wrapper">
            <Helmet>
                <title>Managers - LogicLeap</title>
            </Helmet>
            <div class="row mx-10vw bg-white ">

                <div class="col-md-4 bg-gray1">
                    <div class="card">
                        <div class="card-body p-0">
                            <form className="inline-form">
                                <div className="input-group rounded-2">
                                    <input type="text" className="form-control bg-transparent border-0" placeholder="Search" name="searchValue" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div class="bg-transparent">
                                <a href="#" class="mb-2 ">
                                    <div class="d-flex w-100 align-items-center bg-transparent">
                                        <div class="image-placeholder rounded-circle mr-3">p</div>
                                        <div>
                                            <h5 class="mb-1 font-weight-bold">António Mendes</h5>
                                            <p class="mb-1 text-small">antoniomendes@empresa.pt</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action mb-2">
                                    <div class="d-flex w-100 align-items-center">
                                        <div class="image-placeholder rounded-circle mr-3"></div>
                                        <div>
                                            <h5 class="mb-1 font-weight-bold">Employee 1</h5>
                                            <p class="mb-1 text-small">employee1@gmail.com</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action mb-2">
                                    <div class="d-flex w-100 align-items-center">
                                        <div class="image-placeholder rounded-circle mr-3"></div>
                                        <div>
                                            <h5 class="mb-1 font-weight-bold">Employee 2</h5>
                                            <p class="mb-1 text-small">employee2@gmail.com</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action mb-2">
                                    <div class="d-flex w-100 align-items-center">
                                        <div class="image-placeholder rounded-circle mr-3"></div>
                                        <div>
                                            <h5 class="mb-1 font-weight-bold">Employee 3</h5>
                                            <p class="mb-1 text-small">employee3@gmail.com</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <button class="btn btn-light mt-3 w-100"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                </div>

                <div class="col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-3">
                                <div class="image-placeholder-lg rounded-circle mr-3"></div>
                                <div class="flex-grow-1">
                                    <h3 class="mb-0 font-weight-bold">António Mendes</h3>
                                    <p class="mb-0 text-small">antoniomendes@empresa.pt</p>
                                </div>
                                <button class="btn btn-outline-danger ml-auto">Remove Manager</button>
                            </div>
                            <div class="list-group">
                                <div class="list-group-item list-group-item-action mb-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div class="image-placeholder-square mr-3"></div>
                                            <div>
                                                <h5 class="mb-1 font-weight-bold">CreativeVortex</h5>
                                                <p class="mb-0 text-small">Software</p>
                                            </div>
                                        </div>
                                        <span class="badge badge-secondary badge-pill">R</span>
                                        <span class="ml-auto text-right">100 licenses <b>(30 available)</b></span>
                                    </div>
                                    <div class="d-flex justify-content-end mt-2">
                                        <button class="btn btn-outline-secondary">Remove Permissions</button>
                                    </div>
                                </div>
                                <div class="list-group-item list-group-item-action mb-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div class="image-placeholder-square mr-3"></div>
                                            <div>
                                                <h5 class="mb-1 font-weight-bold">AddonName</h5>
                                                <p class="mb-0 text-small">Addon</p>
                                            </div>
                                        </div>
                                        <span class="badge badge-secondary badge-pill">R</span>
                                        <span class="ml-auto text-right">100 licenses <b>(15 available)</b></span>
                                    </div>
                                    <div class="d-flex justify-content-end mt-2">
                                        <button class="btn btn-outline-secondary">Remove Permissions</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}