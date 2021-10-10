import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";

export default class EditLSmaterial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipID: "",
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
    const {
      shipID,
      supplierID,
      supllierName,
      lessmaterialID,
      lessmaterialName,
      quantity,
      unitPrice,
      date
    } = this.state;

    const data = {
      shipID: shipID,
      supplierID: supplierID,
      supllierName: supllierName,
      lessmaterialID: lessmaterialID,
      lessmaterialName: lessmaterialName,
      quantity: quantity,
      unitPrice: unitPrice,
      date: date
    };
    console.log(data);

    axios.put(`/lmocard/updatelmocard/${id}`, data).then((res) => {
      if (res.data.success) {
        swal.fire("Updated", "updated Successfilly", "success");
        this.setState({
          shipID: shipID,
          supplierID: supplierID,
          supllierName: supllierName,
          lessmaterialID: lessmaterialID,
          lessmaterialName: lessmaterialName,
          quantity: quantity,
          unitPrice: unitPrice,
          date: date
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/lmocard/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          shipID: res.data.lmocard.shipID,
          supplierID: res.data.lmocard.supplierID,
          supllierName: res.data.lmocard.supllierName,
          lessmaterialID: res.data.lmocard.lessmaterialID,
          lessmaterialName: res.data.lmocard.lessmaterialName,
          quantity: res.data.lmocard.quantity,
          unitPrice: res.data.lmocard.unitPrice,
          date: res.data.lmocard.date
        });

        console.log(this.state.lmocard);
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
                          <a href="/HomeLSmaterial" className="nav-link">
                            Less material Shipment Form -
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
            <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
            <form className="needs-validation" noValidate>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>ShipID</label>
                <input
                  type="text"
                  readOnly
                  classsName="form-control"
                  name="shipID"
                  placeholder="Enter ShipmentID"
                  value={`SHID${id.substr(0, 5)}`}
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
                  placeholder="Enter Post SupllierName"
                  value={this.state.supllierName}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>LessmaterialID</label>
                <input
                  type="text"
                  className="form-control"
                  name="lessmaterialID"
                  placeholder="Enter Post LessmaterialID"
                  value={this.state.lessmaterialID}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>LessmaterialName</label>
                <input
                  type="text"
                  className="form-control"
                  name="lessmaterialName"
                  placeholder="Enter LessmaterialName"
                  value={this.state.lessmaterialName}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  name="quantity"
                  placeholder="Enter Post Quantity"
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
                  placeholder="Enter Post UnitPrice"
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
                  placeholder="Enter Post Date"
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
      
    );
  }
}
