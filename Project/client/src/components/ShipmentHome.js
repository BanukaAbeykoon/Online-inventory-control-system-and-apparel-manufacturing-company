import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";

export default class ShipmentHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shipment: []
    };
  }

  componentDidMount() {
    this.retrieveShipment();
  }

  retrieveShipment() {
    axios.get("/shipment").then((res) => {
      if (res.data.success) {
        this.setState({
          shipment: res.data.existingshipment,
        });

        console.log(this.state.shipment);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/shipment/deleteshipment/${id}`).then((res) => {
      swal.fire("Deleted", "deleted Successfilly", "success");
      this.retrieveShipment();
    });
  };

 /* filterData(shipment, searchKey) {
    const result = shipment.filter(
      (shipment) =>
        shipment.shipmentID.toLowerCase().includes(searchKey) ||
        shipment.supplierID.toLowerCase().includes(searchKey) ||
        shipment.supllierName.toLowerCase().includes(searchKey) ||
        shipment.materialID.toLowerCase().includes(searchKey) ||
        shipment.materialName.toLowerCase().includes(searchKey) ||
        shipment.quantity.toLowerCase().includes(searchKey) ||
        shipment.unitPrice.toLowerCase().includes(searchKey) ||
        shipment.date.toLowerCase().includes(searchKey)
    );

    this.setState({ shipment: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/shipment").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingshipment, searchKey);
      }
    });
  };*/

  filterData(shipment, searchKey) {
    const result = shipment.filter(
      (shipment) =>
        shipment.supllierName.toLowerCase().includes(searchKey) ||
        shipment.materialName.toLowerCase().includes(searchKey) ||
        shipment.shipmentID.toLowerCase().includes(searchKey)
    );

    this.setState({ shipment: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/shipment").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingshipment, searchKey);
      }
    });
  };

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-sm">
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <h4>All Shipments</h4>
              </div>
              <div className="col-lg-3 mt-2 mb-2">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  name="searchQuery"
                  onChange={this.handleSearchArea}
                ></input>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ShipmentID</th>
                  <th scope="col">SupplierID</th>
                  <th scope="col">SupllierName</th>
                  <th scope="col">MaterialID</th>
                  <th scope="col">MaterialName</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">UnitPrice</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.shipment.map((shipment,index) => (
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>
                      <a
                        href={`/shipment/${shipment._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {shipment.shipmentID}
                      </a>
                    </td>
                    <td>{shipment.supplierID}</td>
                    <td>{shipment.supllierName}</td>
                    <td>{shipment.materialID}</td>
                    <td>{shipment.materialName}</td>
                    <td>{shipment.quantity}</td>
                    <td>Rs {shipment.unitPrice}</td>
                    <td>{shipment.date}</td>
                    <td>
                      <a
                        className="btn btn-warning"
                        href={`/editSh/${shipment._id}`}
                      >
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() => this.onDelete(shipment._id)}
                      >
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="btn btn-success">
              <a href="/addSh" style={{ textdecoration: "none", color: "white" }}>
                Create New Shipment
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}


