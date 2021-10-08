import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";




export default class packingtrasport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      driverschedul: [],
      vehicleschedule: [],
    };
  }
  componentDidMount() {
    this.getdriver();
     this.getvehicle();
  }

  getdriver() {
    axios
      .get("http://localhost:8000/driverschedul/Driverschedule")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            driverschedul: res.data.existingPosts,
          });
          console.log(this.state.driverschedul);
        }
      });
  }

  filterData(driverschedul, searchresult) {
    const result = driverschedul.filter(
      (driverschedul) =>
        driverschedul.name.toLowerCase().includes(searchresult) ||
        driverschedul.nic.toLowerCase().includes(searchresult)
    );

    this.setState({ driverschedul: result });
  }

  handlesearch = (e) => {
    const searchresult = e.currentTarget.value;
    axios
      .get("http://localhost:8000/driverschedul/Driverschedule")
      .then((res) => {
        if (res.data.success) {
          this.filterData(res.data.existingPosts, searchresult);
        }
      });
  };

 

  getvehicle() {
    axios
      .get("http://localhost:8000/vehicleschedule/VehicleSchedule")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            vehicleschedule: res.data.existingPosts,
          });
          console.log(this.state.vehicleschedule);
        }
      });
  }

 
 

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     driver: [],
  //   };
  // }
  // componentDidMount() {
  //   this.getdriver();
  // }
  // getdriver() {
  //   axios.get("http://localhost:8000/driver/DriHome").then((res) => {
  //     if (res.data.success) {
  //       this.setState({
  //         driver: res.data.existingPosts,
  //       });
  //       console.log(this.state.driver);
  //     }
  //   });
  // }

  // filterData(driver, searchresult) {
  //   const result = driver.filter(
  //     (driver) =>
  //       driver.name.toLowerCase().includes(searchresult) ||
  //       //driver.age.toLowerCase().includes(searchresult)||
  //       driver.nic.toLowerCase().includes(searchresult) ||
  //       driver.address.toLowerCase().includes(searchresult)
  //   );

  //   this.setState({ driver: result });
  // }

  // handlesearch = (e) => {
  //   const searchresult = e.currentTarget.value;
  //   axios.get("http://localhost:8000/driver/DriHome").then((res) => {
  //     if (res.data.success) {
  //       this.filterData(res.data.existingPosts, searchresult);
  //     }
  //   });
  // };

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
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
                          <a href="/RMDashbord" className="nav-link">
                            Readymade Dashboard -
                          </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/packingtrasport#" className="nav-link">
                            Trasport Details -
                          </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/packingtrasport#" className="nav-link">
                            Driver Schedule and Vehicle Schedule -
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            <hr />
            <br />
            <div className="row  ">
              <div className="col-lg-9 mt-2 mb-2 ">
                <h1
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "5px",
                    width: "134%",
                    textAlign: "center",
                    opacity: ".50",
                  }}
                >
                  Driver Schedule
                </h1>
                <div
                  className="d-grid gap-2 d-md-flex justify-content-md-end"
                  role="group"
                  aria-label="Basic example"
                ></div>
                <br /> <br /> <br />
                <div class="row">
                  {this.state.driverschedul.map((driverschedul, index) => (
                    <div class="col-sm-4">
                      <div class="card" style={{ width: "12rem" }}>
                        <div
                          class="card-body"
                          style={{
                            background: "#e3f2fd",
                            border: " solid #5f9ea0",
                            padding: "10px",
                          }}
                        >
                          <h5>No.0{index + 1}</h5>
                          <h6>Name : {driverschedul.name} </h6>
                          <h6>Nic : {driverschedul.nic} </h6>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Driver Name</th>

                      <th scope="col">NIC </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.driverschedul.map((driverschedul, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{driverschedul.name} </td>

                        <td>{driverschedul.nic}</td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}
                <br /> <br /> <br />
                <h1
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "5px",
                    width: "134%",
                    textAlign: "center",
                    opacity: ".50",
                  }}
                >
                  Vehicle Schedule
                </h1>
                <br /> <br /> <br />
                <div class="row">
                  {this.state.vehicleschedule.map((vehicleschedule, index) => (
                    <div class="col-sm-4">
                      <div class="card" style={{ width: "12rem" }}>
                        <div
                          class="card-body"
                          style={{
                            background: "#e3f2fd",
                            border: " solid #5f9ea0",
                            width: "130%",
                            padding: "10px",
                          }}
                        >
                          <h5>No.0{index + 1}</h5>
                          <h6>Registration No : {vehicleschedule.regno} </h6>
                          <h6>Brand Name : {vehicleschedule.brandname} </h6>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Registration NO</th>

                      <th scope="col">Brand Name </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.vehicleschedule.map(
                      (vehicleschedule, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{vehicleschedule.regno} </td>

                          <td>{vehicleschedule.brandname}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
