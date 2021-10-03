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
          swal.fire("Added", "Factory Added Successfully", "success");
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
            <a href="/pmHome">All Factories</a>
          </p>
          <hr />

          <h1 className="h3 mb-3 front-weight-normal">Add New Factory</h1>
          <form>
            <form className="needs-validation" noValidate>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Factory Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="shipID"
                  placeholder="Enter Factory Name"
                  value={this.state.shipID}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Factory Telephone</label>
                <input
                  type="number"
                  className="form-control"
                  name="supplierID"
                  placeholder="Enter Factory Telephone"
                  value={this.state.supplierID}
                  onChange={this.handleInputChange}
                />
              </div>

              <div class="form-group">
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Factory Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="supllierName"
                    placeholder="Enter Factory Email"
                    value={this.state.supllierName}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Factory Website</label>
                <input
                  type="text"
                  className="form-control"
                  name="lessmaterialID"
                  placeholder="Enter Factory Website"
                  value={this.state.lessmaterialID}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>CEO Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lessmaterialName"
                  placeholder="Factory CEO Name"
                  value={this.state.lessmaterialName}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>FCO Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="quantity"
                  placeholder="Factory FCO Name"
                  value={this.state.quantity}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Product</label>
                <input
                  type="text"
                  className="form-control"
                  name="unitPrice"
                  placeholder="Enter Production"
                  value={this.state.unitPrice}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Units</label>
                <input
                  type="Number"
                  className="form-control"
                  name="date"
                  placeholder="Enter Number of Units "
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
