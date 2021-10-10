import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";

export default class EditPost extends Component {
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
      date: ""
    };
    
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
      
    e.preventDefault();
    const id = this.props.match.params.id;
    const { shipmentID, supplierID, supllierName, materialID ,materialName,quantity, unitPrice,date } = this.state;

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
    console.log(data)

    axios.put(`/shipment/updateshipment/${id}`,data).then((res) => {
      if (res.data.success) {
      swal.fire("Updated", "updated Successfilly", "success");
       this.setState
       ({
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
    })
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/shipment/${id}`).then((res) => {
      if (res.data.success){
        this.setState({
          shipmentID: res.data.shipment.shipmentID,
          supplierID: res.data.shipment.supplierID,
          supllierName: res.data.shipment.supllierName,
          materialID: res.data.shipment.materialID,
          materialName: res.data.shipment.materialName,
          quantity: res.data.shipment.quantity,
          unitPrice: res.data.shipment.unitPrice,
          date: res.data.shipment.date,
        });

        console.log(this.state.shipment);
      }
    });
  }

  render() {
    const id = this.props.match.params.id;
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
                            Edit Form -
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
            <h1 className="h3 mb-3 font-weight-normal">Edit Shipment</h1>
            <form className="needs-validation" noValidate>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>ShipmentID</label>
                <input
                  type="text"
                  classsName="form-control"
                  name="shipmentID"
                  placeholder="Enter ShipmentID"
                  value={`SID${id.substr(0, 5)}`}
                  onChange={this.handleInputChange}
                />
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
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>SupllierName </label>
                <input
                  type="text"
                  className="form-control"
                  name="supllierName"
                  placeholder="Enter SupllierName "
                  value={this.state.supllierName}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>MaterialID </label>
                <input
                  type="text"
                  className="form-control"
                  name="materialID"
                  placeholder="Enter MaterialID "
                  value={this.state.materialID}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>MaterialName </label>
                <input
                  type="text"
                  className="form-control"
                  name="materialName"
                  placeholder="Enter MaterialName "
                  value={this.state.materialName}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Quantity </label>
                <input
                  type="number"
                  className="form-control"
                  name="quantity"
                  placeholder="Enter Quantity "
                  value={this.state.quantity}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>UnitPrice</label>
                <input
                  type="number"
                  className="form-control"
                  name="unitPrice"
                  placeholder="Enter UnitPrice "
                  value={this.state.unitPrice}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="Date"
                  placeholder="Enter Date "
                  value={this.state.date}
                  onChange={this.handleInputChange}
                />
              </div>

              <button
                className="btn btn-success"
                type="submit"
                style={{ marginTop: "15px" }}
                onClick={this.onSubmit}
              >
                <i className="far f-check-square"></i>
                &nbsp; update
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

