import React from 'react';

export default function ManagerProduct() {
    return (
<body>
    <div class="container mt-4">
        <div class="card border-dashed mb-4">
            <div class="card-body d-flex align-items-center">
             <div className="mb-3">
                      <div className="image-placeholder"></div>
                      <label className="btn btn-secondary mt-2" htmlFor="productImage">Choose File</label>
                      <input type="file" className="form-control-file mt-2" id="productImage" /> 
                    </div>
                </div>
                <div>
                    <h5 class="card-title mb-0">Creativortex</h5>
                    <small class="text-muted">Design</small>
                </div>
            </div>
        </div>
        <div class="card border-dashed">
            <div class="card-body">
                <h5 class="card-title">Addons</h5>
                <p class="card-text">No items to show.</p>
            </div>
        </div>
</body >
    );
};