import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import {CreateFactoryValid, setErrors} from "./../components/validationprocess/CreateFactoryValid"

export default class CreateFactory extends Component {
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
      errors: {}
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

  //Form Validation part
  validate = (
    facname,
    factelephone,
    facemail,
    facwebsite,
    ceoname,
    fconame,
    product,
    units
  ) => {
    const errors = setErrors(
      facname,
      factelephone,
      facemail,
      facwebsite,
      ceoname,
      fconame,
      product,
      units
    );

    this.setState({ errors: errors });

    return Object.values(errors).every((err) => err === "");
  };

onSubmit = (e) => {
  e.preventDefault();

  const { facname, factelephone, facemail, facwebsite, ceoname, fconame, product, units, } = this.state;
  if (this.validate(facname, factelephone, facemail, facwebsite, ceoname, fconame, product, units)) {
    
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

  axios.post("/inventory/create", data).then((res) => {
    if (res.data.success) {
      //alert("Create Successfully !!!");
      swal.fire("Added", "Factory Added Successfully", "success");
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
  }
  
};

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
          <form>
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

                {this.state.errors.facname && (
                  <div classNane="text-danger" style={{ color: "red" }}>
                    {this.state.errors.facname}
                  </div>
                )}
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Factory Telephone</label>
                <input
                  type="number"
                  className="form-control"
                  name="factelephone"
                  placeholder="Enter Factory Telephone"
                  value={this.state.factelephone}
                  onChange={this.handleInputChange}
                />
                {this.state.errors.factelephone && (
                  <div classNane="text-danger" style={{ color: "red" }}>
                    {this.state.errors.factelephone}
                  </div>
                )}
              </div>

              <div class="form-group">
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label style={{ marginBottom: "5px" }}>Factory Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="facemail"
                    placeholder="Enter Factory Email"
                    value={this.state.facemail}
                    onChange={this.handleInputChange}
                  />

                  {this.state.errors.facemail && (
                    <div classNane="text-danger" style={{ color: "red" }}>
                      {this.state.errors.facemail}
                    </div>
                  )}
                </div>
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
                {this.state.errors.facwebsite && (
                  <div classNane="text-danger" style={{ color: "red" }}>
                    {this.state.errors.facwebsite}
                  </div>
                )}
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

                {this.state.errors.ceoname && (
                  <div classNane="text-danger" style={{ color: "red" }}>
                    {this.state.errors.ceoname}
                  </div>
                )}
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

                {this.state.errors.fconame && (
                  <div classNane="text-danger" style={{ color: "red" }}>
                    {this.state.errors.fconame}
                  </div>
                )}
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

                {this.state.errors.product && (
                  <div classNane="text-danger" style={{ color: "red" }}>
                    {this.state.errors.product}
                  </div>
                )}
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

                {this.state.errors.units && (
                  <div classNane="text-danger" style={{ color: "red" }}>
                    {this.state.errors.units}
                  </div>
                )}
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
