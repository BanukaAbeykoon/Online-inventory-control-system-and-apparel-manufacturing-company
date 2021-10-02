import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import {validrawfactory, setErrors} from "../components/validationprocess/validrawfactory"

export default class CreateRawFactory extends Component {
  //Display form
  constructor(props) {
    super(props);
    this.state = {
      orderid: "",
      rawproduct: "",
      matone: "",
      matoneqty: "",
      mattwo: "",
      mattwoqty: "",
      matthree: "",
      matthreeqty: "",
      errors: {},
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
    orderid,
    rawproduct,
    matone,
    matoneqty,
    mattwo,
    mattwoqty,
    matthree,
    matthreeqty
  ) => {
    const errors = setErrors(
      orderid,
      rawproduct,
      matone,
      matoneqty,
      mattwo,
      mattwoqty,
      matthree,
      matthreeqty
    );

    this.setState({ errors: errors });

    return Object.values(errors).every((err) => err === "");
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {orderid,rawproduct,matone,matoneqty,mattwo,mattwoqty,matthree,matthreeqty,} = this.state;
    if(this.validate(orderid,rawproduct,matone,matoneqty,mattwo,mattwoqty,matthree,matthreeqty,)){
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

      axios.post("/factory/create", data).then((res) => {
        if (res.data.success) {
          //alert("Create Successfully !!!");
          swal.fire("Added", "Raw Mateials Send Factory Successfull", "success");
          //this.retrieveInventory();

          this.setState({
            orderid: "",
            rawproduct: "",
            matone: "",
            matoneqty: "",
            mattwo: "",
            mattwoqty: "",
            matthree: "",
            matthreeqty: "",
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
            <a href="/rawfacHome" class="btn btn-primary me-md-2" type="button">
              BACK
            </a>
          </div>
          <hr />

          <h1 className="display-3">
            <center>Raw Details Factory form</center>
          </h1>
          <h1 className="h3 mb-3 front-weight-normal">
            <center>Raw Materials To Send Factory</center>
          </h1>
          <br />
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Order ID</label>
              <input
                type="text"
                className="form-control"
                name="orderid"
                placeholder="OID_XXXX"
                value={this.state.orderid}
                onChange={this.handleInputChange}
              />

              {this.state.errors.orderid && (
                <div classNane="text-danger" style={{ color: "red" }}>
                  {this.state.errors.orderid}
                </div>
              )}
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Product</label>
              <input
                type="text"
                className="form-control"
                name="rawproduct"
                placeholder="Enter Product detils"
                value={this.state.rawproduct}
                onChange={this.handleInputChange}
              />

              {this.state.errors.rawproduct && (
                <div classNane="text-danger" style={{ color: "red" }}>
                  {this.state.errors.rawproduct}
                </div>
              )}
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Material 1(Fabric)</label>
              <input
                type="text"
                className="form-control"
                name="matone"
                placeholder="Material 1 Detils"
                value={this.state.matone}
                onChange={this.handleInputChange}
              />

              {this.state.errors.matone && (
                <div classNane="text-danger" style={{ color: "red" }}>
                  {this.state.errors.matone}
                </div>
              )}
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>
                Material 1 Quantity (Metes)
              </label>
              <input
                type="text"
                className="form-control"
                name="matoneqty"
                placeholder="Enter Material 1 Quantity"
                value={this.state.matoneqty}
                onChange={this.handleInputChange}
              />

              {this.state.errors.matoneqty && (
                <div classNane="text-danger" style={{ color: "red" }}>
                  {this.state.errors.matoneqty}
                </div>
              )}
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Material 2</label>
              <input
                type="text"
                className="form-control"
                name="mattwo"
                placeholder="Enter Material 2"
                value={this.state.mattwo}
                onChange={this.handleInputChange}
              />

              {this.state.errors.mattwo && (
                <div classNane="text-danger" style={{ color: "red" }}>
                  {this.state.errors.mattwo}
                </div>
              )}
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Material 2 Quantity</label>
              <input
                type="number"
                className="form-control"
                name="mattwoqty"
                placeholder="Enter Material 2 Quantity"
                value={this.state.mattwoqty}
                onChange={this.handleInputChange}
              />

              {this.state.errors.mattwoqty && (
                <div classNane="text-danger" style={{ color: "red" }}>
                  {this.state.errors.mattwoqty}
                </div>
              )}
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Material 3</label>
              <input
                type="text"
                className="form-control"
                name="matthree"
                placeholder="Enter Material 3"
                value={this.state.matthree}
                onChange={this.handleInputChange}
              />

              {this.state.errors.matthree && (
                <div classNane="text-danger" style={{ color: "red" }}>
                  {this.state.errors.matthree}
                </div>
              )}
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Material 3 Quantity</label>
              <input
                type="number"
                className="form-control"
                name="matthreeqty"
                placeholder="Enter Material 3 Quantity"
                value={this.state.matthreeqty}
                onChange={this.handleInputChange}
              />
              {this.state.errors.matthreeqty && (
                <div classNane="text-danger" style={{ color: "red" }}>
                  {this.state.errors.matthreeqty}
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
              &nbsp; Send To factory
            </button>
          </form>
        </div>
      </div>
    );
  }
}
