import Breadcrumbs from "../components/breadcrumbs";
import "./manager.css";


export default function Manager() {
    return (
        <div class="container mt-4">
            <div class="row">

                <div class="col-md-4">
                    <div class="card bg-light-gray">
                        <div class="card-body">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Search"/>
                                    <div class="input-group-append">
                                        <span class="input-group-text"><i class="fas fa-search"></i></span>
                                    </div>
                            </div>
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action mb-2">
                                    <div class="d-flex w-100 align-items-center">
                                        <div class="image-placeholder rounded-circle mr-3"></div>
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