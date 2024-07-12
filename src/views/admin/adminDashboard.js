
import './adminDashboard.css'

export default function AdminHub() {
    return (
        <div className="adminHub-wrapper d-flex flex-column justify-content-center mx-auto adminHub-modais">
        <div className="adminHub-container mt-5">
            <div className="row adminHub-row">
                <div className="col-lg-6 col-md-12">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card adminHub-large-card adminHub-card"></div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card adminHub-large-card adminHub-card"></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card adminHub-small-card adminHub-card text-center">
                                <div className="adminHub-card-body">
                                    <p>Gestores</p>
                                    <h2>200</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card adminHub-small-card adminHub-card text-center">
                                <div className="adminHub-card-body">
                                <p>Managers</p>
                                    <h2>150</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card adminHub-small-card adminHub-card text-center">
                                <div className="adminHub-card-body">
                                <p>Número de produtos</p>
                                    <h2>30</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card adminHub-small-card adminHub-card text-center">
                                <div className="adminHub-card-body">
                                <p>Número de Tickets</p>
                                    <h2>15</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card adminHub-small-card adminHub-card text-center">
                                <div className="adminHub-card-body">
                                <p>Receita</p>
                                    <h2>$3,500</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card adminHub-small-card adminHub-card text-center">
                                <div className="adminHub-card-body">
                                <p>Receita Total</p>
                                    <h2>$3,500</h2>
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