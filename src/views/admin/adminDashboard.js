
import './adminDashboard.css'
import DoughnutChart from '../../components/DoughnutChart';
import DoughnutChart2 from '../../components/DoughnutChart2';
import TicketsTable from '../../components/TicketTable';

export default function AdminHub() {
    return (
        <div className="adminHub-wrapper d-flex flex-column justify-content-center mx-auto adminHub-modais">
            <div className="adminHub-container">
                <div className="row adminHub-row m-5">
                    <div className="col-lg-6 col-md-12">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="card adminHub-large-card adminHub-card">
                                    <DoughnutChart />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="card adminHub-large-card adminHub-card">
                                    <DoughnutChart2 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card adminHub-small-card adminHub-card text-center">
                                    <div className="adminHub-card-body">
                                        <p><strong>Gestores</strong></p>
                                        <h2>200</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card adminHub-small-card adminHub-card text-center">
                                    <div className="adminHub-card-body">
                                        <p><strong>Managers</strong></p>
                                        <h2>150</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card adminHub-small-card adminHub-card text-center">
                                    <div className="adminHub-card-body">
                                        <p><strong>Número de produtos</strong></p>
                                        <h2>30</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card adminHub-small-card adminHub-card text-center">
                                    <div className="adminHub-card-body">
                                        <p><strong>Número de Tickets</strong></p>
                                        <h2>15</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card adminHub-small-card adminHub-card text-center">
                                    <div className="adminHub-card-body">
                                        <p><strong>Receita</strong></p>
                                        <h2>$3,500</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card adminHub-small-card adminHub-card text-center">
                                    <div className="adminHub-card-body">
                                        <p><strong>Receita Total</strong></p>
                                        <h2>$3,500</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center custom-margin-top"> {/* Reduce the top margin and center the row */}
                    <div className="col-11">
                    <div className="transparent-card">
                            <TicketsTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}