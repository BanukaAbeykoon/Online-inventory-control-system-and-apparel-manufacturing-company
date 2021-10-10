import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2'

export default class ShipmentCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipmentID: "",
      supplierID: "",
      supllierName: "",
      materialID: "",
      materialName: "",
      qunatity: "",
      unitPrice: "",
      date: "",
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

    if (shipmentID == "") {
      swal.fire("WARNING", "Add regular shipment", "warning");
    } else if (shipmentID == "") {
      swal.fire("WARNING", "Add Material ID", "warning");
    } else if (supplierID == "") {
      swal.fire("WARNING", "Add Material Name", "warning");
    } else if (supllierName == "") {
      swal.fire("WARNING", "Add Material Qty", "warning");
    } else if (materialID == "") {
      swal.fire("WARNING", "Add Material Category", "warning");
    } else if (materialName == "") {
      swal.fire("WARNING", "Add Description", "warning");
    } else if (quantity == "") {
      swal.fire("WARNING", "Add Material Category", "warning");
    } else if (unitPrice == "") {
      swal.fire("WARNING", "Add Material Category", "warning");
    } else if (date == "") {
      swal.fire("WARNING", "Add Material Category", "warning");
    }

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
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Create new Shipment</h1>
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
            <label style={{ marginBottom: "5px" }}>SupllierName</label>
            <input
              type="text"
              className="form-control"
              name="supllierName"
              placeholder="Enter SupllierName"
              value={this.state.supllierName}
              onChange={this.handleInputChange}
            />
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
            />
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
    );
  }
};




