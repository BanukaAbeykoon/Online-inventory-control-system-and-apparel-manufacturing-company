import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2'
import moment from "moment";

export default class ShipmentCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipmentID: "",
      supplierID: "",
      supllierName: "",
      materialID: "",
      materialName: "",
      quantity: "",
      unitPrice: "",
      date: "",
      shipmentIDError:",",
      supplierIDError:",",
      supplierNameError:",",
      materialIDError:",",
      materialNameError:",",
      quantityError:",",
      unitPriceError:",",
      dateError:","
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
    let shipmentIDError = "";
    let supplierIDError = "";
    let supplierNameError = "";
    let materialIDError = "";
    let materialNameError = "";
    let quantityError = "";
    let unitPriceError = "";
    let dateError = "";
   

     if (!this.state.shipmentID) {
       shipmentIDError = "* shipmentID is Required!";
     }

    if (!this.state.supplierID) {
      supplierIDError = "* supplierID is Required!";
    }

    if (!this.state.supllierName) {
      supplierNameError = "* supllierName is Required!";
    }

    if (!this.state.materialID) {
      materialIDError = "* materialID is Required!";
    }

    if (!this.state.materialName) {
      materialNameError = "* materialName is Required!";
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

      shipmentIDError ||
      supplierIDError ||
      supplierNameError ||
      materialIDError ||
      materialNameError ||
      quantityError ||
      unitPriceError ||
      dateError

    ) {
      this.setState({
        shipmentIDError,
        supplierIDError,
        supplierNameError,
        materialIDError,
        materialNameError,
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
      shipmentID,
      supplierID,
      supllierName,
      materialID,
      materialName,
      quantity,
      unitPrice,
      date,
    } = this.state;

    if (isValid) {

    const data = {
      shipmentID: shipmentID,
      supplierID: supplierID,
      supllierName: supllierName,
      materialID: materialID,
      materialName: materialName,
      quantity: quantity,
      unitPrice: unitPrice,
      date: date,
    };
    
//  if (supplierID == "") {
//        swal.fire("WARNING", "Add supplier Name", "warning");
//      } else if (supllierName == "") {
//        swal.fire("WARNING", "Add Material ID", "warning");
//      } else if (quantity == "") {
//        swal.fire("WARNING", "Add Material name", "warning");
//      } else if (unitPrice == "") {
//        swal.fire("WARNING", "Add quantity", "warning");
//      } else if (date == "") {
//        swal.fire("WARNING", "Add unit price", "warning");
//      } else if (date == "") {
//        swal.fire("WARNING", "Add date", "warning");
//      }

    console.log(data);

    axios.post("/shipment/save", data).then((res) => {
      if (res.data.success) {
        swal.fire("Created", "created successfully", "success");

        this.setState({
          shipmentID: shipmentID,
          supplierID: supplierID,
          supllierName: supllierName,
          materialID: materialID,
          materialName: materialName,
          quantity: quantity,
          unitPrice: unitPrice,
          date: date,
        });
      }
    });
  }
  };

  btnDemo = (e) => {
    e.preventDefault();

    const {
      shipmentID,
      supplierID,
      supllierName,
      materialID,
      materialName,
      quantity,
      unitPrice,
      date,
    } = this.state;

    const data = {
      shipmentID: shipmentID,
      supplierID: supplierID,
      supllierName: supllierName,
      materialID: materialID,
      materialName: materialName,
      quantity: quantity,
      unitPrice: unitPrice,
      date: date,
    };

    console.log(data);

    this.setState({
      shipmentID: "SHP0089",
      supplierID: "SUP88778",
      supllierName: "Kate linn",
      materialID: "MAT88990",
      materialName: "cotton",
      quantity: "10000",
      unitPrice: "1000",
      date: "2021.09.17",
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
              <h1 className="h3 mb-3 font-weight-normal">
                Create new Shipment
              </h1>
              <form className="needs-validation" noValidate>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>ShipmentID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="shipmentID"
                    placeholder="Enter ShipmentID"
                    value={this.state.shipmentID}
                    onChange={this.handleInputChange}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.supplierIDError}
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>SupplierID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="supplierID"
                    placeholder="Enter SupplierID"
                    value={this.state.supplierID}
                    onChange={this.handleInputChange}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.supplierIDError}
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>SupllierName</label>
                  <input
                    type="text"
                    className="form-control"
                    name="supllierName"
                    placeholder="Enter SupllierName"
                    value={this.state.supllierName}
                    onChange={this.handleInputChange}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.supplierNameError}
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>MaterialID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="materialID"
                    placeholder="Enter MaterialID"
                    value={this.state.materialID}
                    onChange={this.handleInputChange}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.materialIDError}
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>MaterialName</label>
                  <input
                    type="text"
                    className="form-control"
                    name="materialName"
                    placeholder="Enter MaterialName"
                    value={this.state.materialName}
                    onChange={this.handleInputChange}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.materialNameError}
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
                    {this.state.quantityError}
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>UnitPrice</label>
                  <input
                    type="number"
                    className="form-control"
                    name="unitPrice"
                    placeholder="Enter UnitPrice"
                    value={this.state.unitPrice}
                    onChange={this.handleInputChange}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.unitPriceError}
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
                  <i className="far f-check-square"></i>
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
      
    );
  }
};




