import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";

export default class packingHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      packing: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:8000/packing/").then((res) => {
      if (res.data.success) {
        this.setState({
          packing: res.data.existingPosts,
        });

        console.log(this.state.packing);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/packing/delete/${id}`).then((res) => {
      swal.fire("Deleted", "Delete Successfully", "delete ");
      //   alert("Delete Successfully")
      this.retrievePosts();
    });
  };

  filterData(packing, searchKey) {
    const result = packing.filter(
      (packing) =>
        packing.customer.toLowerCase().includes(searchKey) ||
        packing.orderId.toLowerCase().includes(searchKey) ||
        packing.category.toLowerCase().includes(searchKey) ||
        packing.payment.toLowerCase().includes(searchKey) ||
        packing.orderId.toLowerCase().includes(searchKey) ||
        packing.quantity.toLowerCase().includes(searchKey) ||
        packing.weight.toLowerCase().includes(searchKey) ||
        packing.dueDate.toLowerCase().includes(searchKey) ||
        packing.address.toLowerCase().includes(searchKey)
    );
    this.setState({ packing: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/packing").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

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
                    {/* <a class="navbar-brand" >CRUD App using Mern stack
                </a> */}

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
                          <a href="/packingHome" className="nav-link">
                            Packing Form -
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            <div
              className="p-3 mb-2 bg-dark text-light rounded-3"
              style={{
                background: "transparent",
                height: "50px",
                opacity: 0.5,
                padding: "10px",
              }}
            >
              <div class="form-check" style={{ float: "left" }}>
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value=""
                  onChange={this.handleSearchArea}
                />

                <label class="form-check-label" for="exampleRadios2">
                  ALL .
                </label>
              </div>
              <div class="form-check" style={{ float: "left" }}>
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="shirt"
                  onChange={this.handleSearchArea}
                />
                <label class="form-check-label" for="exampleRadios1">
                  Shirt .
                </label>
              </div>
              <div class="form-check" style={{ float: "left" }}>
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="short"
                  onChange={this.handleSearchArea}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Short .
                </label>
              </div>
              <div class="form-check" style={{ float: "left" }}>
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="skirt"
                  onChange={this.handleSearchArea}
                />
                <label class="form-check-label" for="exampleRadios3">
                  Skirt
                </label>
              </div>
            </div>
   
            <hr />
            <div className="col-lg-3 mt-2 mb-2" style={{ float: "right" }}>
              <input
                className="form-control"
                style={{
                  backgroundColor: "#e3f2fd",
                  width: "100%",
                  border: " solid #5f9ea0",
                  padding: "px",
                }}
                type="search"
                placeholder="search"
                name="searchQuery"
                onChange={this.handleSearchArea}
              ></input>
            </div>

            <h3>Packing Details</h3>
            <br />
            <div
              className="table"
              style={{
                background: "transparent",
                width: "100%",
                border: " solid #5f9ea0",
                padding: "20px",
              }}
            >
              {/* <table className="table table-hover" style={{ marginTop:'400'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer</th>
              <th scope="col">OrderId</th>
              <th scope="col">Category</th>
              <th scope="col">Payment</th>
              <th scope="col">Quantity</th>
              <th scope="col">weight</th>
              <th scope="col">DueDate</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.packing.map((packing, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/packing/${packing._id}`}
                    style={{ textDecoration:'none'}}>
                    {packing.customer}
                  </a>
                </td>
                <td>{packing.orderId}</td>
                <td>{packing.category}</td>
                <td>{packing.payment}</td>
                <td>{packing.quantity}</td>
                <td>{packing.weight}</td>
                <td>{packing.dueDate}</td>
                <td>{packing.address}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${packing._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  <br/>
                  <br/>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(packing._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          
        </table> */}
              <button className="btn btn-success">
                <a
                  href="/addph"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Create new Packing Form{" "}
                </a>{" "}
                &nbsp;
                <i class="far fa-plus-square"></i>
              </button>
              <br /> <br /> <br />
              <div class="row">
                {this.state.packing.map((packing, index) => (
                  <div class="col-sm-4">
                    <div class="card" style={{ width: "18rem" }}>
                      {/* <img
                  src="%PUBLIC_URL%../../fut.png"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                /> */}

                      <div class="card-body">
                        <a
                          className="btn btn-primary"
                          href={`/packing/${packing._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <i class="fas fa-running"></i>&nbsp;View Packing Form
                          Details
                        </a>
                        <h5>No.0{index + 1}</h5>
                        <h6>Customer:{packing.customer} </h6>
                        <h6>Order ID:{`OID${packing._id.substr(0,5)}`} </h6>
                        <h6>Category:{packing.category} </h6>
                        <h6>Payment:{packing.payment} </h6>
                        <h6>Quantity:{packing.quantity} </h6>
                        <h6>Weight:{packing.weight}kg </h6>
                        <h6>DueDate:{packing.dueDate} </h6>
                        <h6>Address:{packing.address} </h6>
                        <a
                          className="btn btn-warning"
                          href={`/editph/${packing._id}`}
                        >
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          className="btn btn-danger"
                          href="#"
                          onClick={() => this.onDelete(packing._id)}
                        >
                          <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                      </div>
                    </div>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
