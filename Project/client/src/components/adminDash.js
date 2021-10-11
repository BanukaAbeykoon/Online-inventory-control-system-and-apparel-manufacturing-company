import React, { Component } from "react";

export default class adminDash extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div
              class="p-3 mb-2 text-dark rounded-3"
              style={{ backgroundColor: "rgb(11, 37, 77)" }}
            >
              <div class="row">
                <div class="col-sm-6">
                  <div class="card bg-light">
                    <div
                      class="card-body"
                      style={{ backgroundColor: "#93a5cf" }}
                    >
                      <center>
                        <h2 class="card-title">Order Management</h2>
                        <p class="card-text"></p>
                        <a href="/admincus" class="btn btn-info">
                          <i class="fas fa-arrow-alt-circle-right"></i>
                        </a>
                      </center>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card bg-light">
                    <div
                      class="card-body"
                      style={{ backgroundColor: "#93a5cf" }}
                    >
                      <center>
                        <h2 class="card-title">Material Management</h2>
                        <p class="card-text"></p>
                        <a href="/adminmaterial/adminmaterialAll" class="btn btn-info">
                          <i class="fas fa-arrow-alt-circle-right"></i>
                        </a>
                      </center>
                    </div>
                  </div>
                  <br />
                </div>

                <div class="col-sm-6">
                  <div class="card bg-light">
                    <div
                      class="card-body"
                      style={{ backgroundColor: "#93a5cf" }}
                    >
                      <center>
                        <h2 class="card-title">Production Management</h2>
                        <p class="card-text"></p>
                        <a href="/adminproduction" class="btn btn-info">
                          <i class="fas fa-arrow-alt-circle-right"></i>
                        </a>
                      </center>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="card bg-light">
                    <div
                      class="card-body"
                      style={{ backgroundColor: "#93a5cf" }}
                    >
                      <center>
                        <h2 class="card-title">Import Management</h2>
                        <p class="card-text"></p>
                        <a href="/adminimport" class="btn btn-info">
                          <i class="fas fa-arrow-alt-circle-right"></i>
                        </a>
                      </center>
                    </div>
                  </div>
                  <br />
                </div>

                <div class="col-sm-6">
                  <div class="card bg-light">
                    <div
                      class="card-body"
                      style={{ backgroundColor: "#93a5cf" }}
                    >
                      <center>
                        <h2 class="card-title">Quality Management</h2>
                        <p class="card-text"></p>
                        <a href="/adminquality" class="btn btn-info">
                          <i class="fas fa-arrow-alt-circle-right"></i>
                        </a>
                      </center>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="card bg-light">
                    <div
                      class="card-body"
                      style={{ backgroundColor: "#93a5cf" }}
                    >
                      <center>
                        <h2 class="card-title">Account Management</h2>
                        <p class="card-text"></p>
                        <a href="/adminaccount" class="btn btn-info">
                          <i class="fas fa-arrow-alt-circle-right"></i>
                        </a>
                      </center>
                    </div>
                  </div>
                  <br />
                </div>

                <div class="col-sm-6">
                  <div class="card bg-light">
                    <div
                      class="card-body"
                      style={{ backgroundColor: "#93a5cf" }}
                    >
                      <center>
                        <h2 class="card-title">Transport Management</h2>
                        <p class="card-text"></p>
                        <a href="/admintransport" class="btn btn-info">
                          <i class="fas fa-arrow-alt-circle-right"></i>
                        </a>
                      </center>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="card bg-light">
                    <div
                      class="card-body"
                      style={{ backgroundColor: "#93a5cf" }}
                    >
                      <center>
                        <h2 class="card-title">ReadyMade Management</h2>
                        <p class="card-text"></p>
                        <a href="/adminready" class="btn btn-info">
                          <i class="fas fa-arrow-alt-circle-right"></i>
                        </a>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
