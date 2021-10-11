import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";



export default class CreateFactory extends Component {
  //Consturctor define
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
      facnameError: "",
      factelephoneError: "",
      facemailError: "",
      facwebsiteError: "",
      ceonameError: "",
      fconameError: "",
      productError: "",
      unitsError: "",
    };
  }

  //Form Values set for setstate
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  //validation
  validate = () => {
    let facnameError = "";
    let factelephoneError = "";
    let facemailError = "";
    let facwebsiteError = "";
    let ceonameError = "";
    let fconameError = "";
    let productError = "";
    let unitsError = "";

    //statements check values and patterns
    if (!this.state.facname) {
      facnameError = "*Factory Name is Required!";
    }

    if (!this.state.factelephone) {
      factelephoneError = "* Factory Telephone is Required!";
    } else if (!this.state.factelephone.toString().match(/^[0-9]{10}$/)) {
      factelephoneError = "*Please Enter valid Telephone Number!";
    }

    if (!this.state.facemail) {
      facemailError = "* Factory Email is Required!";
    } else if (
      !this.state.facemail.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    ) {
      facemailError = "*Please Enter valid Email!";
    }

    if (!this.state.facwebsite) {
      facwebsiteError = "* Factory Website is Required";
    } else if (
      !this.state.facwebsite.match(
        /^([wW]{3})+\.[a-zA-Z0-9.-/@#$]+\.[a-z]{2,4}$/
      )
    ) {
      facwebsiteError = "*Please Enter valid website!";
    }

    if (!this.state.ceoname) {
      ceonameError = "* CEO Name is Required";
    }
    if (!this.state.fconame) {
      fconameError = "* FCO Name is Required";
    }
    if (!this.state.product) {
      productError = "* Product Category is Required";
    }

    if (!this.state.units) {
      unitsError = "* Unit quantity is Required";
    } else if (this.state.units.toString().match("-")) {
      unitsError = "*Units should not be Negetive!";
    } else if (!this.state.units.toString().match("([0-9]{4})$")) {
      unitsError = "*Units should be more than 1000";
    }

    //Check whether any errors,
    if (
      facnameError ||
      factelephoneError ||
      facemailError ||
      facwebsiteError ||
      ceonameError ||
      fconameError ||
      productError ||
      unitsError
    ) {
      this.setState({
        facnameError,
        factelephoneError,
        facemailError,
        facwebsiteError,
        ceonameError,
        fconameError,
        productError,
        unitsError,
      });
      return false;
    }

    return true;
  };

  //onsubmit method
  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();

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

    //above state pass, "data" object
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

    //if validation succussesfully pass
    if (isValid) {
      console.log(data);

      //Send data / Post method
      axios.post("/inventory/create", data).then((res) => {
        if (res.data.success) {
          swal.fire("Added", "Factory Added Successfully", "success");

          //clear fields
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

  //Demo button
  btnDemo = (e) => {
    e.preventDefault();

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

    this.setState({
      facname: "ABC Company",
      factelephone: "0123456789",
      facemail: "abc@gmail.com",
      facwebsite: "www.abc.com",
      ceoname: "M.K Perera",
      fconame: "N.L Silva",
      product: "Trouses",
      units: "4000",
    });
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
                  required
                />

                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.facnameError}
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Factory Telephone</label>
                <input
                  type="number"
                  className="form-control"
                  name="factelephone"
                  placeholder="Enter Valid Factory Telephone (Ex:- 0123456789)"
                  value={this.state.factelephone}
                  onChange={this.handleInputChange}
                  required
                />

                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.factelephoneError}
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Factory Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="facemail"
                  placeholder="Enter Valid Factory Email (Ex:- abc@gmail.com)"
                  value={this.state.facemail}
                  onChange={this.handleInputChange}
                  required
                />

                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.facemailError}
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Factory Website</label>
                <input
                  type="text"
                  className="form-control"
                  name="facwebsite"
                  placeholder="Enter Factory Website (Ex:- www.abc.com)"
                  value={this.state.facwebsite}
                  onChange={this.handleInputChange}
                  required
                />

                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.facwebsiteError}
                </div>
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
                  required
                />

                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.ceonameError}
                </div>
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
                  required
                />

                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.fconameError}
                </div>
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
                  required
                />

                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.productError}
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px" }}>Units</label>
                <input
                  type="Number"
                  className="form-control"
                  name="units"
                  placeholder="Units (Minimum Units should be more than 1000)"
                  value={this.state.units}
                  onChange={this.handleInputChange}
                  required
                />

                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.unitsError}
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
    );
  }
}
