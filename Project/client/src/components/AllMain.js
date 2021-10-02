import React, { Component } from "react";

class mainhome extends Component {
  render() {
    return (
      <div className="container">
        <h2>
          {" "}
          <center>
            {" "}
            <br />
            <h1 class="display-2">CASANOVA</h1>
            <br />
          </center>{" "}
        </h2>
        <hr />

        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <img
                src="%PUBLIC_URL%../../om.jpg "
                width="200"
                height="200"
                position="absolute"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Order Management</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Order Management
                </a>
              </div>
            </div>
            <br />
          </div>

          <div class="col-sm-4">
            <div class="card">
              <img
                src="%PUBLIC_URL%../../rm.jpg "
                width="200"
                height="200"
                position="absolute"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Raw Meterial Stock Management</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/matDash" class="btn btn-primary">
                  Raw Stock Management
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <img
                src="%PUBLIC_URL%../../im.jpg "
                width="200"
                height="200"
                position="absolute"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Import Management</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/SHdashboard" class="btn btn-primary">
                  Import Management
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <img
                src="%PUBLIC_URL%../../pm.jpg "
                width="200"
                height="200"
                position="absolute"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Production Management</h5>
                <p class="card-text">
                  Countries are chasing textile and apparel exports for numerous
                  benefits
                </p>
                <a href="/PMDashboard" class="btn btn-primary">
                  Production Management
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <img
                src="%PUBLIC_URL%../../qm.jpg "
                width="200"
                height="200"
                position="absolute"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Quality Check Management</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/qcDash" class="btn btn-primary">
                  Quality Management
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <img
                src="%PUBLIC_URL%../../ready.jpg "
                width="200"
                height="200"
                position="absolute"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Ready-Made Management</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/RMDashbord" class="btn btn-primary">
                  Ready-Made Management
                </a>
              </div>
            </div>
            <br />
          </div>

          <div class="col-sm-4">
            <div class="card">
              <img
                src="%PUBLIC_URL%../../tm.jpg "
                width="200"
                height="200"
                position="absolute"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Transport Management</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/RMDashbord" class="btn btn-primary">
                  Transport Management
                </a>
              </div>
            </div>
            <br />
          </div>

          <div class="col-sm-4">
            <div class="card">
              <img
                src="%PUBLIC_URL%../../am.jpeg "
                width="200"
                height="200"
                position="absolute"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Account Management</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/RMDashbord" class="btn btn-primary">
                  Account Management
                </a>
              </div>
            </div>
            <br />
          </div>

          <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>
        </div>
      </div>
    );
  }
}

export default mainhome;
