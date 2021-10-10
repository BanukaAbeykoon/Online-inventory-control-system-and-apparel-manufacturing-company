import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import moment from "moment";


export default class CreatePacking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: "",
      orderId: "",
      category: "",
      payment: "",
      quantity: "",
      weight: "",
      dueDate: "",
      address: "",
      customerError: "",
      orderIdError: "",
      categoryError: "",
      paymentError: "",
      quantityError: "",
      weightError: "",
      dueDateError: "",
      addressError: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  validate = () => {
    let customerError = "";
    let orderIdError = "";
    let categoryError = "";
    let paymentError = "";
    let quantityError = "";
    let weightError = "";
    let dueDateError = "";
    let addressError = "";

    if (!this.state.customer) {
      customerError = "*Customer is Required!";
    }
    if (!this.state.orderId) {
      orderIdError = "* Order is Required!";
    }

    //  else if (!this.state.nic.validate){
    // nicError= '*NIC already exists!'

    // }

    if (!this.state.category) {
      categoryError = "* Category is Required!";
    }
    if (!this.state.payment) {
      paymentError = "* Payment is Required";
    }
    if (!this.state.quantity) {
      quantityError = "* quantity is Required";
    }

    if (this.state.quantity.match("-")) {
      quantityError = "* Quantity should not be Negetive ";
    }

    if (!this.state.weight) {
      weightError = "* Weight is Required";
    }
    if (this.state.weight.match("-")) {
      weightError = "* Weight should not be Negetive ";
    }
    if (this.state.weight.match("([0-9]{3})$")) {
      weightError = "* invalid Weight ";
    }

    if (!this.state.dueDate) {
      dueDateError = "* Date is Required";
    }
    if (!this.state.address) {
      addressError = "* Address is Required";
    }

    if (
      customerError ||
      orderIdError ||
      categoryError ||
      paymentError ||
      quantityError ||
      weightError ||
      dueDateError ||
      addressError
    ) {
      this.setState({
        customerError,
        orderIdError,
        categoryError,
        paymentError,
        quantityError,
        weightError,
        dueDateError,
        addressError,
      });
      return false;
    }

    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const isValid = this.validate();
    const {
      customer,
      orderId,
      category,
      payment,
      quantity,
      weight,
      dueDate,
      address,
    } = this.state;

    if (isValid) {
      const data = {
        customer: customer,
        orderId: orderId,
        category: category,
        payment: payment,
        quantity: quantity,
        weight: weight,
        dueDate: dueDate,
        address: address,
      };
      console.log(data);

      axios.post("http://localhost:8000/packing/save", data).then((res) => {
        if (res.data.success) {
          this.setState({
            customer: "",
            orderId: "",
            category: "",
            payment: "",
            quantity: "",
            weight: "",
            dueDate: "",
            address: "",
          });
          swal.fire("Added", "Packing Form Adding Successfully", "Added");
          //alert("Post Updated Successfully")
        }
      });
    }
  };

  //btn demo
  btnDemo = (e) => {
    e.preventDefault();

    const {
      customer,
      orderId,
      category,
      payment,
      quantity,
      weight,
      dueDate,
      address,
    } = this.state;

    const data = {
      customer: customer,
      orderId: orderId,
      category: category,
      payment: payment,
      quantity: quantity,
      weight: weight,
      dueDate: dueDate,
      address: address,
    };

    console.log(data);

    this.setState({
      customer: "Kasun Madushan",
      orderId: "O12",
      category: "t-shirt",
      payment: "Done",
      quantity: "5000",
      weight: "12",
      dueDate: "12/04/2021",
      address: "1/53,Malabe,Colombo",
    });
  };

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            {/* newbar */}

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
                          <a href="/packingHome" className="nav-link">
                            Packing Form -
                          </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/addph" className="nav-link">
                            Add New Packing Form -
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            <div className="col-md-8 mt-4 mx-auto">
              <h1 className="h3 mb-3 font-weight-normal">
                {" "}
                Add New Packing Form
              </h1>
              <form className="needs-validation" noValidate>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Customer</label>
                  <input
                    type="text"
                    className="form-control"
                    name="customer"
                    placeholder="Enter New customer"
                    value={this.state.customer}
                    onChange={this.handleInputChange}
                    recuired
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.customerError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  {/* <label style={{ marginBottom: "5px" }}>Order ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="orderId"
                    placeholder="Enter Order ID"
                    value={this.state.orderId}
                    onChange={this.handleInputChange}
                    required
                  /> */}

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.orderIdError}
                  </div>

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.orderIdError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Category</label>
                  <input
                    type="text"
                    className="form-control"
                    name="category"
                    placeholder="Enter category"
                    value={this.state.category}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.categoryError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Payment</label>
                  <input
                    type="text"
                    className="form-control"
                    name="payment"
                    placeholder="Enter payment status"
                    value={this.state.payment}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.paymentError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    name="quantity"
                    placeholder="Enter quantity"
                    value={this.state.quantity}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.quantityError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Weight</label>
                  <input
                    type="number"
                    className="form-control"
                    name="weight"
                    placeholder="Enter weight"
                    value={this.state.weight}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.weightError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Duedate</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dueDate"
                    placeholder="Enter dueDate"
                    value={this.state.dueDate}
                    onChange={this.handleInputChange}
                    required
                    max={moment().format("YYYY-MM-DD")}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.dueDateError}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Enter address"
                    value={this.state.address}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.addressError}
                  </div>
                </div>

                <button
                  className="btn btn-success"
                  type="submit"
                  style={{ marginTop: "15px" }}
                  onClick={this.onSubmit}
                >
                  <i className="far fa-check-square"></i>
                  &nbsp; save
                </button>

                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{
                    marginTop: "15px",
                    marginBottom: "20px",
                    marginLeft: "900px",
                    width: "140px",
                    backgroundColor: "#2E4661",
                    borderRadius: "10px",
                    padding: "10px 0px 10px 0px",
                  }}
                  onClick={this.btnDemo}
                >
                  Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
