import React, { Component } from 'react'
import "./orderDashbord.css";

export default class orderDashboard extends Component {
    render() {
        return (
          <div id="wrapper" className="toggled">
            <div id="page-content-wrapper">
              <div className="container-fluid">
                <div>
                  <h1
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "5px",
                      width: "100%",
                      textAlign: "center",
                      opacity: ".50",
                    }}
                  >
                    About Us
                  </h1>
                  <hr />



                  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="%PUBLIC_URL%../../ord1.png"  height="400" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="%PUBLIC_URL%../../ord2.png"   height="400" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
       
      </div>
    </div>
    <div class="carousel-item">
      <img src="%PUBLIC_URL%../../ord3.png" height="400" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
       
       
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<br /> <hr/> <br />  





                  <div class="row">
                    <div class="col-sm-4">
                      <div
                        class="card"
                        style={{
                          background: "transparent",
                          width: "100%",
                          padding: "20px",
                        }}
                      >
                        <div class="col-xs-1" align="center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="200"
                            height="200"
                            fill="currentColor"
                            class="bi bi-people-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path
                              fill-rule="evenodd"
                              d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                            />
                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                          </svg>

                          <div class="shadow  rounded">
                            <div
                              class="card-body"
                              style={{ textAlign: "center" }}
                            >
                              <h3 class="card-title">Over 800 Employees</h3>
                              <h5 class="card-title">50% Engineering</h5>
                            </div>
                            <p class="card-text"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div
                        class="card"
                        style={{
                          background: "transparent",
                          width: "100%",
                          padding: "20px",
                        }}
                      >
                        <div class="col-xs-1" align="center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="150"
                            height="200"
                            fill="currentColor"
                            class="bi bi-globe"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                          </svg>

                          <div class="shadow  rounded">
                            <div
                              class="card-body"
                              style={{ textAlign: "center" }}
                            >
                              <h3 class="card-title">Global Presence</h3>
                              <h5 class="card-title">
                                8 offices around the world
                              </h5>
                            </div>
                            <p class="card-text"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div
                        class="card"
                        style={{
                          background: "transparent",
                          width: "100%",
                          padding: "20px",
                        }}
                      >
                        <div class="col-xs-1" align="center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="150"
                            height="200"
                            fill="currentColor"
                            class="bi bi-house-door-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                          </svg>

                          <div class="shadow  rounded">
                            <div
                              class="card-body"
                              style={{ textAlign: "center" }}
                            >
                              <h3 class="card-title">Founded in 2005</h3>
                              <h5 class="card-title">
                                Backed by Cisco and Toba Capital
                              </h5>
                            </div>
                            <p class="card-text"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div
                        class="card"
                        style={{
                          background: "transparent",
                          width: "100%",
                          padding: "20px",
                        }}
                      >
                        <div class="col-xs-1" align="center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="200"
                            height="200"
                            fill="currentColor"
                            class="bi bi-person-plus"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            <path
                              fill-rule="evenodd"
                              d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                            />
                          </svg>

                          <div class="shadow  rounded">
                            <div
                              class="card-body"
                              style={{ textAlign: "center" }}
                            >
                              <h3 class="card-title">Close to 700 Customers</h3>
                              <h5 class="card-title">
                                Around the world (150 new in 2020)
                              </h5>
                            </div>
                            <p class="card-text"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div
                        class="card"
                        style={{
                          background: "transparent",
                          width: "100%",
                          padding: "20px",
                        }}
                      >
                        <div class="col-xs-1" align="center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="150"
                            height="200"
                            fill="currentColor"
                            class="bi bi-telephone-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                            />
                          </svg>

                          <div class="shadow  rounded">
                            <div
                              class="card-body"
                              style={{ textAlign: "center" }}
                            >
                              <h3 class="card-title">Customer Service</h3>
                              <h5 class="card-title">
                                Fast Service (24*7*365)
                              </h5>
                            </div>
                            <p class="card-text"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div
                        class="card"
                        style={{
                          background: "transparent",
                          width: "100%",
                          padding: "20px",
                        }}
                      >
                        <div class="col-xs-1" align="center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="200"
                            height="200"
                            fill="currentColor"
                            class="bi bi-stack"
                            viewBox="0 0 16 16"
                          >
                            <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                            <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
                          </svg>
                          <div class="shadow  rounded">
                            <div
                              class="card-body"
                              style={{ textAlign: "center" }}
                            >
                              <h3 class="card-title"> High-Quality Clothing</h3>
                              <h5 class="card-title">Quality Products</h5>
                            </div>
                            <p class="card-text"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div class="card bg-dark text-white">
                      <img
                        class="card-img"
                        src="%PUBLIC_URL%../../30.jpeg"
                        width="100"
                        height="400"
                        alt="Card image"
                      />
                    </div>
                    <hr />
                    <br />
                    <div class="gallery">
                      <figure class="gallery__item gallery__item--1">
                        <img
                          src="%PUBLIC_URL%../../11.jpg"
                          class="gallery__img"
                          alt="Image 1"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--2">
                        <img
                          src="%PUBLIC_URL%../../12.jpg"
                          class="gallery__img"
                          alt="Image 2"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--3">
                        <img
                          src="%PUBLIC_URL%../../13.jpg"
                          class="gallery__img"
                          alt="Image 3"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--4">
                        <img
                          src="%PUBLIC_URL%../../14.png"
                          class="gallery__img"
                          alt="Image 4"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--5">
                        <img
                          src="%PUBLIC_URL%../../15.jpg"
                          class="gallery__img"
                          alt="Image 5"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../16.jpg"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../17.jpeg"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../18.jpeg"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../19.jpeg"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../20.png"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../21.jpg"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../22.jpg"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../23.jpeg"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../24.jpg"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../26.jfif"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../25.png"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../27.jpeg"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../28.jpeg"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../29.png"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                      <figure class="gallery__item gallery__item--6">
                        <img
                          src="%PUBLIC_URL%../../23.jpeg"
                          class="gallery__img"
                          alt="Image 6"
                        />
                      </figure>
                    </div>
                    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
                    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
                    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
                    <br /> <br /> <br />
                    <div>
                      <h1
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          padding: "5px",
                          width: "100%",
                          textAlign: "center",
                          opacity: ".50",
                        }}
                      >
                        WHAT IS CASANOVA?
                      </h1>
                      <hr />
                      <div>
                        <h5
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            padding: "5px",
                            width: "100%",
                            textAlign: "left",
                            opacity: ".50",
                          }}
                        >
                          Casanova is an apparel manufacturing company based in
                          Sri Lanka.
                          <br />
                          Casanova import materials through Priyantha
                          Distributers.
                          <br />
                          The raw-materials are sending to local garments to
                          produce a ready-made product.
                          <br />
                          Distributing those ready-made products to several local buyers.
                        </h5>
                      </div>
                    </div>

                    <button className="btn btn-success"><a href= "/orderHome" style={{textDecoration:'none', color:'white'}}>
            
                   Place A Order </a> &nbsp;
                    <i class="far fa-plus-square"></i>

                     </button>



                    {/* 

<div class="row">
  <div class="col-lg-3 col-md-12 mb-3 mb-lg-0">
    <img
      src="%PUBLIC_URL%../../odel.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src="%PUBLIC_URL%../../deedat.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div class="col-lg-3 mb-3 mb-lg-0">
    <img
      src="%PUBLIC_URL%../../cool.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src="%PUBLIC_URL%../../cotton.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
    
  </div>

  <div class="col-lg-3 mb-3 mb-lg-0">
    <img
      src="%PUBLIC_URL%../../brandix.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src="%PUBLIC_URL%../../mas.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
     <img
      src="%PUBLIC_URL%../../mas.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
    
  </div>


  
</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

