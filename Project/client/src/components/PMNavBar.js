import React, { Component } from "react";
import "./styleSideNav.css";

class PMNavBar extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <br />
            <br />
            &nbsp; &nbsp; &nbsp;
            <img
              src="%PUBLIC_URL%../../../sk.png"
              class="rounded-circle"
              width="200"
              height="200"
              alt=""
            />
            <br />
            <br />
            <li>
              <a href="#">
                <i class="fas fa-sort-amount-up-alt"></i>
                &nbsp; Order Mangment
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-product-hunt"></i>
                &nbsp; Material Stock
              </a>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">
                  <i class="fas fa-cubes"></i>
                  &nbsp; Production
                </button>
                <div className="dropdown-content">
                  <a href="/PMDashboard">Production Dashboard</a>
                  <a href="/clientneworder">Client New Orders</a>
                  <a href="/searchfac">Search Factory</a>
                  <a href="/magictool">Magic Tool</a>
                  <a href="/rawfacHome">Raw Factory Dashboard</a>
                  <a href="/pmHome">Register Factory Dashboard</a>
                </div>
              </div>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-file-import"></i>
                &nbsp; Import Management
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-tasks"></i>
                &nbsp; Quality Check
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-file-invoice-dollar"></i>
                &nbsp; Accounts and Profits
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-truck"></i>
                &nbsp; Transport
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-tshirt"></i>
                &nbsp; Ready Made
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-users-cog"></i>
                &nbsp; Admin
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-file-invoice"></i>
                &nbsp; Reports
              </a>
            </li>
          </ul>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          {/* <!-- Image and text --> */}
          <a class="navbar-brand" href="#"></a>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i class="fas fa-question-circle"></i>
                    &nbsp; HELP
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i class="fas fa-phone-square"></i> &nbsp;Contact
                  </a>
                </li>

                <div class="position-absolute top-50 end-0 translate-middle-y">
                  <button
                    type="button"
                    class="btn btn-primary position-relative"
                  >
                    <i class="fas fa-bell"></i>
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                      <span class="visually-hidden">New alerts</span>
                    </span>
                  </button>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </div>

                <div class="position-absolute top-50 end-0 translate-middle-y">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img
                        src="%PUBLIC_URL%../../../ss.jpg"
                        class="rounded-circle"
                        width="40"
                        height="40"
                        alt=""
                      />
                      &nbsp; Fernando W T P &nbsp; &nbsp; &nbsp;{" "}
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default PMNavBar;
