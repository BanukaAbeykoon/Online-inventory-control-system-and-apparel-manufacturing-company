import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";


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

  

  onSubmit = (e) => {
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
    
  };

  render() {
    return (
      <div className="container">
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
                <label style={{ marginBottom: "5px" }}>Unit Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="unitPrice"
                  placeholder="Enter Unit Price"
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
                <i className="far fa-check-square"></i>
                &nbsp; Save
              </button>
            </form>
          </form>
        </div>
      </div>
    );
  }
}
