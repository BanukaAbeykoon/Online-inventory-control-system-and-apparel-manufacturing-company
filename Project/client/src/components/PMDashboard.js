import React, { Component } from "react";
import "./PMfootstyle.css";

class PMDashboard extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div>
            <h2>
              {" "}
              <center>
                {" "}
                <br />
                <h1 class="display-2">CASANOVA Production</h1>
              </center>{" "}
            </h2>
            <hr />
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="%PUBLIC_URL%../../main1.png"
                    height="400"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Prevent Covid 19</h5>
                    <p>
                      COVID-19 affects different people in different ways. Most
                      infected people will develop mild to moderate illness and
                      recover without hospitalization.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="%PUBLIC_URL%../../cpp1.jpg"
                    height="400"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h1 class="display-2">Textile and Apparel Industry</h1>
                    <p>
                      Countries are chasing textile and apparel exports for
                      numerous benefits
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="%PUBLIC_URL%../../bvc.jpg"
                    height="400"
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h1 class="display-2">Industrial Materials</h1>
                    <p>
                      One of good examples that can be found in the raw material
                      field is our environment-friendly product
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;
            <hr />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;
            <div class="row">
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src="%PUBLIC_URL%../../no.jpg"
                    width="400"
                    height="400"
                    class="card-img-top"
                    alt="..."
                  />

                  <div class="card-body">
                    <h5 class="card-title">Client New Orders</h5>
                    <p class="card-text"></p>
                    <a href="/clientneworder" class="btn btn-primary">
                      Go Client Orders
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src="%PUBLIC_URL%../../sf.jpg"
                    width="400"
                    height="400"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Search Factory</h5>
                    <p class="card-text"></p>
                    <a href="/searchfac" class="btn btn-primary">
                      Go Search Factory
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src="%PUBLIC_URL%../../mt.jpg"
                    width="400"
                    height="400"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Magic Tools</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">
                      Go Magic Tools
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <br />
              <br />
              <br />
              <br />
              &nbsp;
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src="%PUBLIC_URL%../../rf.jpg"
                    width="300"
                    height="400"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Raw Factory Dashboard</h5>
                    <p class="card-text"></p>
                    <a href="/rawfacHome" class="btn btn-primary">
                      Go Raw Factory Dashboard
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src="%PUBLIC_URL%../../la.jpg"
                    width="400"
                    height="400"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Register Factory</h5>
                    <p class="card-text"></p>
                    <a href="/pmHome" class="btn btn-primary">
                      Go Register Factory
                    </a>
                  </div>
                </div>
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </div>
          </div>
        </div>

        <div class="footer">
          <div class="contain">
            <br />
            <div class="col">
              <h1>ABOUT US</h1>

              <ul>
                <li>
                  <i class="fas fa-phone-square"></i>&nbsp; &nbsp; Contact us
                </li>
                <li>
                  <i class="fas fa-comment-alt"></i>&nbsp; &nbsp;Suggestion
                </li>
              </ul>
            </div>
            <div class="col">
              <h1></h1>
              <ul>
                <li></li>
              </ul>
            </div>
            <div class="col">
              <div class="position-absolute top-50 start-50 translate-middle">
                <br />

                <img
                  src="%PUBLIC_URL%../../sk.png"
                  class="rounded-circle"
                  width="40"
                  height="40"
                  alt=""
                />
                <h1>CASANOVA</h1>

                <ul>
                  <li>@ Copyright reserved</li>
                </ul>
              </div>
            </div>
            <div class="col">
              <h1></h1>
              <ul></ul>
            </div>

            <div class="position-absolute top-50 end-0 translate-middle-y">
              <div class="col social">
                <h1>Help</h1>

                <ul>
                  <li>
                    <i class="fas fa-envelope"></i>&nbsp; &nbsp;{" "}
                    <i class="fas fa-map-marker-alt"></i>&nbsp; &nbsp;
                    <i class="fas fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PMDashboard;


