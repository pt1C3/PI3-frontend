
import './adminDashboard.css'

export default function AdminHub() {
    return (
      <div className="adminHub-wrapper d-flex flex-column justify-content-center mx-auto adminHub-modais">
      <div className="adminHub-container mt-5">
          <div className="adminHub-innerContainer">
              <div className="row">
                  <div className="col-md-8">
                      <div className="row">
                          <div className="col-md-6">
                              <div className="card adminHub-square-card"></div>
                          </div>
                          <div className="col-md-6">
                              <div className="card adminHub-square-card"></div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="row">
                          <div className="col-md-6 col-sm-6 col-6">
                              <div className="card adminHub-small-card text-center">
                                  <div className="card-body">
                                      <h6 className="card-title">Gestores</h6>
                                      <h2>200</h2>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-6 col-6">
                              <div className="card adminHub-small-card text-center">
                                  <div className="card-body">
                                      <h6 className="card-title">Managers</h6>
                                      <h2>150</h2>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="row mt-3">
                          <div className="col-md-6 col-sm-6 col-6">
                              <div className="card adminHub-small-card text-center">
                                  <div className="card-body">
                                      <h6 className="card-title">Número produtos</h6>
                                      <h2>30</h2>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-6 col-6">
                              <div className="card adminHub-small-card text-center">
                                  <div className="card-body">
                                      <h6 className="card-title">Número Tickets</h6>
                                      <h2>15</h2>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="row mt-3">
                          <div className="col-md-6 col-sm-6 col-6">
                              <div className="card adminHub-small-card text-center">
                                  <div className="card-body">
                                      <h6 className="card-title">Receita</h6>
                                      <h2>$3,500</h2>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6 col-sm-6 col-6">
                              <div className="card adminHub-small-card text-center">
                                  <div className="card-body">
                                      <h6 className="card-title">Receita Total</h6>
                                      <h2>$3,500</h2>
                                  </div>
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