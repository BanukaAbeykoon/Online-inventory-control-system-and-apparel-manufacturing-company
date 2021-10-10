import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";
import {RMsetErrors, setErrors} from "./../conmmon/RMsetErrors"
import moment from "moment";

export default class EditPacking extends Component {
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
      errors: {},
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
      customerError = "*Cusasdftomer is Required!";
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
    const id = this.props.match.params.id;
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
    if (
      this.validate(
        customer,
        orderId,
        category,
        payment,
        quantity,
        weight,
        dueDate,
        address
      )
    ) {
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

      axios
        .put(`http://localhost:8000/packing/update/${id}`, data)
        .then((res) => {
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
            swal.fire("Updated", "Post Updated Successfully", "Updated");
            //    alert("Post Updated Successfully");
          }
        });
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/packing/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          customer: res.data.packing.customer,
          orderId: res.data.packing.orderId,
          category: res.data.packing.category,
          payment: res.data.packing.payment,
          quantity: res.data.packing.quantity,
          weight: res.data.packing.weight,
          dueDate: res.data.packing.dueDate,
          address: res.data.packing.address,
        });
        console.log(this.state.packing);
      }
    });
  }

  render() {
    const id = this.props.match.params.id;
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
                          <a href="/packingHome" className="nav-link">
                            Update Packing Form -
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
                Update Packing Details
              </h1>
              <form className="needs-validation" noValidation>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>OrderId</label>
                  <input
                    type="text"
                    readOnly
                    className="form-control"
                    name="orderId"
                    placeholder="Enter Order ID"
                    value={`OID${id.substr(0, 5)}`}
                    onChange={this.handleInputChange}
                  />
                  {this.state.errors.orderId && (
                    <div classNane="text-danger" style={{ color: "red" }}>
                      {this.state.errors.orderId}
                    </div>
                  )}
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Customer</label>
                  <input
                    type="text"
                    className="form-control"
                    name="customer"
                    placeholder="Enter New customer"
                    value={this.state.customer}
                    onChange={this.handleInputChange}
                  />

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.customerError}
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
                  &nbsp; UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}