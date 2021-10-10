import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import moment from "moment";


export default class CreateLSmaterial extends Component {
  //Display form
  constructor(props) {
    super(props);
    this.state = {
      shipID: "",
      supplierID: "",
      supllierName: "",
      lessmaterialID: "",
      lessmaterialName: "",
      quantity: "",
      unitPrice: "",
      date: "",
      shipIDError: "",
      supplierIDError: "",
      supplierNameError: "",
      lessmaterialIDError: ",",
      lessmaterialNameError: "",
      quantityError: "",
      unitPriceError: "",
      dateError: "",
    };
  }

  //identify which method youy input into values
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  validate = () => {
    let shipIDError = "";
    let supplierIDError = "";
    let supplierNameError = "";
    let lessmaterialIDError = "";
    let lessmaterialNameError = "";
    let quantityError = "";
    let unitPriceError = "";
    let dateError = "";

    if (!this.state.shipID) {
      shipIDError = "* shipID is Required!";
    }

    if (!this.state.supplierID) {
      supplierIDError = "* supplierID is Required!";
    }

    if (!this.state.supllierName) {
      supplierNameError = "* supllierName is Required!";
    }

    if (!this.state.lessmaterialID) {
      lessmaterialIDError = "* lessmaterialID is Required!";
    }

    if (!this.state.lessmaterialName) {
      lessmaterialNameError = "* lessmaterialName is Required!";
    }

    if (!this.state.quantity) {
      quantityError = "* qunatity is Required!";
    }
    if (this.state.quantity.match("-")) {
      quantityError = "* Quantity should not be Negetive ";
    }

    if (!this.state.unitPrice) {
      unitPriceError = "* unitPrice is Required!";
    }

    if (!this.state.date) {
      dateError = "* date is Required!";
    }

    if (
      shipIDError ||
      supplierIDError ||
      supplierNameError ||
      lessmaterialIDError ||
      lessmaterialNameError ||
      quantityError ||
      unitPriceError ||
      dateError

    ) {
      this.setState({
        shipIDError,
        supplierIDError,
        supplierNameError,
        lessmaterialIDError,
        lessmaterialNameError,
        quantityError,
        unitPriceError,
        dateError,
      });

      return false;
    }
    return true;
  }

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();

    const {
      shipID,
      supplierID,
      supllierName,
      lessmaterialID,
      lessmaterialName,
      quantity,
      unitPrice,
      date,
    } = this.state;

    if (isValid) {

      const data = {
        shipID: shipID,
        supplierID: supplierID,
        supllierName: supllierName,
        lessmaterialID: lessmaterialID,
        lessmaterialName: lessmaterialName,
        quantity: quantity,
        unitPrice: unitPrice,
        date: date,
      };

      console.log(data);

      axios.post("/lmocard/save", data).then((res) => {
        if (res.data.success) {
          //alert("Create Successfully !!!");
          swal.fire("Added", "shipment Added Successfully", "success");
          //this.retrieveInventory();

          this.setState({
            shipID: "",
            supplierID: "",
            supllierName: "",
            lessmaterialID: "",
            lessmaterialName: "",
            quantity: "",
            unitPrice: "",
            date: "",
          });
        }
      });
    }
  };

  btnDemo = (e) => {
    e.preventDefault();

    const {
      shipID,
      supplierID,
      supllierName,
      lessmaterialID,
      lessmaterialName,
      quantity,
      unitPrice,
      date,
    } = this.state;

    const data = {
      shipID: shipID,
      supplierID: supplierID,
      supllierName: supllierName,
      lessmaterialID: lessmaterialID,
      lessmaterialName: lessmaterialName,
      quantity: quantity,
      unitPrice: unitPrice,
      date: date,
    };

    console.log(data);

    this.setState({
      shipID: "SHP88779",
      supplierID: "SUP22333",
      supllierName: "Mathiv rain",
      lessmaterialID: "MAT88990",
      lessmaterialName: "cotton",
      quantity: "10000",
      unitPrice: "1000",
      date: "2021.07.02",
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
                            <a
                              className="nav-link"
                              aria-current="page"
                              href="/"
                            >
                              Home -
                            </a>
                          </li>

                          <li className="nav-item d-none d-sm-inline-block">
                            <a href="/SHDashbord" className="nav-link">
                              Shipment Dashboard -
                            </a>
                          </li>
                          <li className="nav-item d-none d-sm-inline-block">
                            <a href="/ShipmentHome" className="nav-link">
                              Regular Shipment Form -
                            </a>
                          </li>
                          <li className="nav-item d-none d-sm-inline-block">
                            <a href="/addph" className="nav-link">
                              create new shipment Form -
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
           
        <div className="col-md-8 mt-4 mx-auto">
          <p>
            <a href="/pmHome">All Shipments</a>
          </p>
          <hr />

          <h1 className="h3 mb-3 front-weight-normal">Add New shipment</h1>
          <form>
            <form className="needs-validation" noValidate>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Ship ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="shipID"
                  placeholder="Enter Shipment ID"
                  value={this.state.shipID}
                  onChange={this.handleInputChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.dateError}
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Supplier ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="supplierID"
                  placeholder="Enter Supplier ID"
                  value={this.state.supplierID}
                  onChange={this.handleInputChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.dateError}
                </div>
              </div>

              <div class="form-group">
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="supllierName"
                    placeholder="Enter Supplier email"
                    value={this.state.supllierName}
                    onChange={this.handleInputChange}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.dateError}
                  </div>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>lessmaterialID</label>
                <input
                  type="text"
                  className="form-control"
                  name="lessmaterialID"
                  placeholder="Enter Lessmaterial ID"
                  value={this.state.lessmaterialID}
                  onChange={this.handleInputChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.dateError}
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>lessmaterialName</label>
                <input
                  type="text"
                  className="form-control"
                  name="lessmaterialName"
                  placeholder="Enter Lessmaterial name"
                  value={this.state.lessmaterialName}
                  onChange={this.handleInputChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.dateError}
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  name="quantity"
                  placeholder="Enter Quantity"
                  value={this.state.quantity}
                  onChange={this.handleInputChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.dateError}
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Unit Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="unitPrice"
                  placeholder="Enter Unit Price"
                  value={this.state.unitPrice}
                  onChange={this.handleInputChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.dateError}
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  placeholder="Enter Date"
                  value={this.state.date}
                  onChange={this.handleInputChange}
                  max={moment().format("YYYY-MM-DD")}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.dateError}
                </div>
              </div>

              <button
                className="btn btn-success"
                type="submit"
                style={{ marginTop: "15px" }}
                onClick={this.onSubmit}
              >
                <i className="far fa-check-square"></i>
                &nbsp; Save
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
          </form>
        </div>
      </div>
      </div>
      
    );
  }
}
