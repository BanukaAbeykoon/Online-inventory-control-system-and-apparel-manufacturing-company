import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";




export default class packingtrasport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      driver: [],
    };
  }
  componentDidMount() {
    this.getdriver();
  }
  getdriver() {
    axios.get("http://localhost:8000/driver/DriHome").then((res) => {
      if (res.data.success) {
        this.setState({
          driver: res.data.existingPosts,
        });
        console.log(this.state.driver);
      }
    });
  }

 

  filterData(driver, searchresult) {
    const result = driver.filter(
      (driver) =>
        driver.name.toLowerCase().includes(searchresult) ||
        //driver.age.toLowerCase().includes(searchresult)||
        driver.nic.toLowerCase().includes(searchresult) ||
        driver.address.toLowerCase().includes(searchresult)
    );

    this.setState({ driver: result });
  }

  handlesearch = (e) => {
    const searchresult = e.currentTarget.value;
    axios.get("http://localhost:8000/driver/DriHome").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchresult);
      }
    });
  };

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div class="col-9">
                <h1
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "5px",
                    textAlign: "center",
                    opacity: ".50",
                  }}
                >
                  Transport Details
                </h1>
                <div style={{ float: "right" }}>
                  <button className="btn btn-warning ">
                    <a
                      href="/packingHome"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <i className="fas fa-home"></i>Packing Home
                    </a>
                  </button>
                </div>
                <div style={{ float: "left" }}>
                  <input
                    className="form-control"
                    type="search"
                    placeholder="search"
                    name="search"
                    onChange={this.handlesearch}
                  ></input>
                </div>
                <br /> <br /> <br /> <br /> <br />
                {/* <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Driver Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">NIC </th>
                      <th scope="col">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.driver.map((driver, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{driver.name}</td>
                        <td>{driver.age}</td>
                        <td>{driver.nic}</td>
                        <td>{driver.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}
                <div
                  className="table"
                  style={{
                    background: "transparent",
                    width: "100%",

                    padding: "20px",
                  }}
                >
                  <div class="row">
                    {this.state.driver.map((driver, index) => (
                      <div class="col-sm-4">
                        <div class="card" style={{ width: "18rem" }}>
                          <div class="card-body">
                            <h5>No.0{index + 1}</h5>
                            <h6>Driver Name:{driver.name} </h6>
                            <h6>Age:{driver.age} </h6>
                            <h6>NIC:{driver.nic} </h6>
                            <h6>Address:{driver.address} </h6>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <br /> <br /> <br />
                          </div>
                        </div>
                        <br /> <br /> <br />
                      </div>
                    ))}
                  </div>
                </div>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    );     
  }
}
