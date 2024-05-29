import Breadcrumbs from "../components/breadcrumbs";
import "./myProducts.css";

export default function MyProducts() {
    return (
        <div class="container mt-4">
            <div class="row">

                <div class="col-md-6">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                </div>
                <div class="col-md-6 text-right">
                    <button class="btn btn-outline-secondary">Recents</button>
                    <button class="btn btn-outline-secondary">A-Z</button>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="product-card">
                        <div class="d-flex align-items-center">
                            <div class="product-image"></div>
                            <div class="ml-3">
                                <div>Product Name</div>
                                <div class="text-right">15/30</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="product-card">
                        <div class="d-flex align-items-center">
                            <div class="product-image"></div>
                            <div class="ml-3">
                                <div>Product Name</div>
                                <div class="text-right">15/30</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="product-card">
                        <div class="d-flex align-items-center">
                            <div class="product-image"></div>
                            <div class="ml-3">
                                <div>Product Name</div>
                                <div class="text-right">15/30</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="product-card">
                        <div class="d-flex align-items-center">
                            <div class="product-image"></div>
                            <div class="ml-3">
                                <div>Product Name</div>
                                <div class="text-right">15/30</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="product-card">
                        <div class="d-flex align-items-center">
                            <div class="product-image"></div>
                            <div class="ml-3">
                                <div>Product Name</div>
                                <div class="text-right">15/30</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="product-card">
                        <div class="d-flex align-items-center">
                            <div class="product-image"></div>
                            <div class="ml-3">
                                <div>Product Name</div>
                                <div class="text-right">15/30</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="product-card">
                        <div class="d-flex align-items-center">
                            <div class="product-image"></div>
                            <div class="ml-3">
                                <div>Product Name</div>
                                <div class="text-right">15/30</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="product-card">
                        <div class="d-flex align-items-center">
                            <div class="product-image"></div>
                            <div class="ml-3">
                                <div>Product Name</div>
                                <div class="text-right">15/30</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="product-card">
                        <div class="d-flex align-items-center">
                            <div class="product-image"></div>
                            <div class="ml-3">
                                <div>Product Name</div>
                                <div class="text-right">15/30</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}