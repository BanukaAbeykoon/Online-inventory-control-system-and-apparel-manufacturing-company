import React, { Component } from 'react'
import axios from "axios";
import swal from "sweetalert2";

export default class EditFactory extends Component {
  //Display form
  constructor(props) {
    super(props);
    this.state = {
      facname: "",
      factelephone: "",
      facemail: "",
      facwebsite: "",
      ceoname: "",
      fconame: "",
      product: "",
      units: "",
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
    const id = this.props.match.params.id;

    const {
      facname,
      factelephone,
      facemail,
      facwebsite,
      ceoname,
      fconame,
      product,
      units,
    } = this.state;

    const data = {
      facname: facname,
      factelephone: factelephone,
      facemail: facemail,
      facwebsite: facwebsite,
      ceoname: ceoname,
      fconame: fconame,
      product: product,
      units: units,
    };


    console.log(data);

    axios.put(`/inventory/update/${id}`, data).then((res) => {
      if (res.data.success) {
        //alert("Factory Details Update Successfully");
        
        swal.fire("Updated", "Factory Details Updated Successfully", "success");
        //this.retrieveInventory();

        this.setState({
          facname: "",
          factelephone: "",
          facemail: "",
          facwebsite: "",
          ceoname: "",
          fconame: "",
          product: "",
          units: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/inventory/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          facname: res.data.inventory.facname,
          factelephone: res.data.inventory.factelephone,
          facemail: res.data.inventory.facemail,
          facwebsite: res.data.inventory.facwebsite,
          ceoname: res.data.inventory.ceoname,
          fconame: res.data.inventory.fconame,
          product: res.data.inventory.product,
          units: res.data.inventory.units,
        });

        console.log(this.state.inventory);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-8 mt-4 mx-auto">

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <a href="/pmHome" class="btn btn-primary me-md-2" type="button">
                BACK
              </a>
            </div>
          
          <hr />

          <h1 className="h3 mb-3 front-weight-normal">Edit Factory Details</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Factory Name</label>
              <input
                type="text"
                className="form-control"
                name="facname"
                placeholder="Enter Factory Name"
                value={this.state.facname}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Factory Telephone</label>
              <input
                type="text"
                className="form-control"
                name="factelephone"
                placeholder="Enter Factory Telephone"
                value={this.state.factelephone}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Factory Email</label>
              <input
                type="text"
                className="form-control"
                name="facemail"
                placeholder="Enter Factory Email"
                value={this.state.facemail}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Factory Website</label>
              <input
                type="text"
                className="form-control"
                name="facwebsite"
                placeholder="Enter Factory Website"
                value={this.state.facwebsite}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>CEO Name</label>
              <input
                type="text"
                className="form-control"
                name="ceoname"
                placeholder="Factory CEO Name"
                value={this.state.ceoname}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>FCO Name</label>
              <input
                type="text"
                className="form-control"
                name="fconame"
                placeholder="Factory FCO Name"
                value={this.state.fconame}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Product</label>
              <input
                type="text"
                className="form-control"
                name="product"
                placeholder="Enter Production"
                value={this.state.product}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Units</label>
              <input
                type="Number"
                className="form-control"
                name="units"
                placeholder="Enter Number of Units "
                value={this.state.units}
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
              &nbsp; Update Factory Detils
            </button>
          </form>
        </div>
      </div>
    );
  }
}
