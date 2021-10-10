import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";



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

  //identify which method youy input into values
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

    if (!this.state.facname) {
      facnameError = "*facnameError is Required!";
    }

    if (!this.state.factelephone) {
      factelephoneError = "* factelephoneError is Required!";
    } else if (!this.state.factelephone.match(/^[0-9]{10}$/)) {
      factelephoneError = "*Please Enter valid Telephonephone!";
    }

    if (!this.state.facemail) {
      facemailError = "* facemailError is Required!";
    } else if (
      !this.state.facemail.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    ) {
      facemailError = "*Please Enter valid email!";
    }

    if (!this.state.facwebsite) {
      facwebsiteError = "* facwebsiteError is Required";
    } else if (
      !this.state.facwebsite.match(
        /^([wW]{3})+\.[a-zA-Z0-9.-/@#$]+\.[a-z]{2,4}$/
      )
    ) {
      facwebsiteError = "*Please Enter valid website!";
    }

    if (!this.state.ceoname) {
      ceonameError = "* ceonameError is Required";
    }
    if (!this.state.fconame) {
      fconameError = "* fconameError is Required";
    }
    if (!this.state.product) {
      productError = "* productError is Required";
    }

    if (!this.state.units) {
      unitsError = "* unitsError is Required";
    } else if (this.state.units.match("-")) {
      unitsError = "*Units should not be Negetive!";
    } else if (!this.state.units.match("([0-9]{4})$")) {
      unitsError = "*Units should be more than 1000";
    }

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

    if (isValid) {
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


  
  btnDemo = (e) => {
    e.preventDefault();

    const {
      orderid,
      rawproduct,
      matone,
      matoneqty,
      mattwo,
      mattwoqty,
      matthree,
      matthreeqty,
    } = this.state;

    const data = {
      orderid: orderid,
      rawproduct: rawproduct,
      matone: matone,
      matoneqty: matoneqty,
      mattwo: mattwo,
      mattwoqty: mattwoqty,
      matthree: matthree,
      matthreeqty: matthreeqty,
    };

    console.log(data);

    this.setState({
      orderid: "Aida",
      rawproduct: "Bugg",
      matone: "Trainig class manager",
      matoneqty: "aida123",
      mattwo: "aida123",
      mattwoqty: "4422",
      matthree: "trouse",
      matthreeqty: 43563,
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
            </form>
          </form>
        </div>
      </div>
    );
  }
}
