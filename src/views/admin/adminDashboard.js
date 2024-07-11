
import './adminDashboard.css'

export default function AdminHub() {
    return (
        <div className="adminHub-wrapper d-flex flex-column justify-content-center mx-auto adminHub-modais">
            <div className="adminHub-container mt-5">
                <div className="row adminHub-row">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="card adminHub-large-card adminHub-card"></div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="card adminHub-large-card adminHub-card"></div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card adminHub-small-card adminHub-card text-center">
                            <div className="adminHub-card-body">
                                <h6 className="adminHub-card-title">Gestores</h6>
                                <h2>200</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card adminHub-small-card adminHub-card text-center">
                            <div className="adminHub-card-body">
                                <h6 className="adminHub-card-title">Managers</h6>
                                <h2>150</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card adminHub-small-card adminHub-card text-center">
                            <div className="adminHub-card-body">
                                <h6 className="adminHub-card-title">Número produtos</h6>
                                <h2>30</h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-100"></div> {/* Force a new row */}
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4 offset-lg-6 offset-md-4 offset-sm-0">
                        <div className="card adminHub-small-card adminHub-card text-center">
                            <div className="adminHub-card-body">
                                <h6 className="adminHub-card-title">Número Tickets</h6>
                                <h2>15</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card adminHub-small-card adminHub-card text-center">
                            <div className="adminHub-card-body">
                                <h6 className="adminHub-card-title">Receita</h6>
                                <h2>$3,500</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                        <div className="card adminHub-small-card adminHub-card text-center">
                            <div className="adminHub-card-body">
                                <h6 className="adminHub-card-title">Receita Total</h6>
                                <h2>$3,500</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}