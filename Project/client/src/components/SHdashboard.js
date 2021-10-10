import React, { Component } from "react";

class SHdashboard extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid"></div>

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
