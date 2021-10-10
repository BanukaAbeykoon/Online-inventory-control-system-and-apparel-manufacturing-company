import React, { Component } from "react";

class SHdashboard extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid"></div>

          <div className="container-fluid">
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
                          <a className="nav-link" aria-current="page" href="/">
                            Home -
                          </a>
                        </li>

                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/SHDashbord" className="nav-link">
                            Shipment Dashboard -
                          </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/ShipmentHome" className="nav-link">
                            Regular Shipment Form -
                          </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/addph" className="nav-link">
                            Dash Board -
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="lessmaterial1.jpg"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Shipment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="/ShipmentHome" class="btn btn-primary">
                    Regular shipment
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="regularshipment1.jpg"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Shipment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="/HomeLSmaterial" class="btn btn-primary">
                    Less material shipment
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="reportSH.jpg"
                  width="300"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Reporting</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Report
                  </a>
                </div>
              </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SHdashboard;
