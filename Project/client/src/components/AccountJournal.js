import React, { Component } from 'react'

export default class AccountJournal extends Component {
    render() {
        return (


            <div id="wrapper" className="toggled">
            <div id="page-content-wrapper">
              <div className="container-fluid"></div>


              <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <nav
                  className="navbar navbar-expand-lg navbar-light"
                  style={{
                    backgroundColor: "#e3f2fd",
                    width: "134%",
                    border: " solid #5f9ea0",
                    padding: "0px",
                  }}
                >
                  <div className="container-fluid">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toogle="collapse"
                      data-bs-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Tooggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="/Accountdashboard">
                            Account Home -
                          </a>
                        </li>

                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/journal" className="nav-link">
                           Journal Details -
                          </a>
                        </li>
                      
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>



    
              <div class="row">
                <div class="col-sm-4">
                  <div class="card">
                  
                    
                    <div class="card-body">

                    <img
                  src="%PUBLIC_URL%../../sale.png"
                  width="300"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />



                      <h4 class="card-title">Sale Journal</h4>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="/salejournal" class="btn btn-primary">
                      Go Sale Journal
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card">
                   
                    <div class="card-body">

                    <img
                  src="%PUBLIC_URL%../../puch2.png"
                  width="300"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />


                      <h4 class="card-title">Purchase Journal</h4>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="/purchasejournal" class="btn btn-primary">
                      Go Purchase Journal
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card">
                   
                    <div class="card-body">
                    <img
                  src="%PUBLIC_URL%../../general.png"
                  width="300"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />

                      <h4 class="card-title">General Journal</h4>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="/reporte" class="btn btn-primary">
                        Go General Journal
                      </a>
                    </div>
                  </div>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>
              </div>
            </div>



            














          </div>
        )
    }
}
