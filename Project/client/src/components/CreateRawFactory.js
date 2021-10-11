import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";

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

      orderidError: "",
      rawproductError: "",
      matoneError: "",
      matoneqtyError: "",
      mattwoqtyError: "",
      matthreeqtyError: "",
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
    let orderidError = "";
    let rawproductError = "";
    let matoneError = "";
    let matoneqtyError = "";
    let mattwoqtyError = "";
    let matthreeqtyError = "";
   

    if (!this.state.orderid) {
      orderidError = "*Order ID is Required!";
    }

    if (!this.state.rawproduct) {
      rawproductError = "* Raw Product is Required!";
    }
    

    if (!this.state.matone) {
      matoneError = "* Material One is Required!";
    }
    


    if (!this.state.matoneqty) {
      matoneqtyError = "* Material One Quantity is Required";
    }
    else if (this.state.matoneqty.toString().match("-")) {
      matoneqtyError = "*Units should not be Negetive!";
    }

    if (!this.state.mattwoqty) {
      mattwoqtyError = "* Material two Quantity is Required";
    } else if (this.state.mattwoqty.toString().match("-")) {
      mattwoqtyError = "*Units should not be Negetive!";
    }
    
    
    if (!this.state.matthreeqty) {
      matthreeqtyError = "* Material three Quantity is Required";
    } else if (this.state.matthreeqty.toString().match("-")) {
      matthreeqtyError = "*Units should not be Negetive!";
    }



    if (
      orderidError ||
      rawproductError ||
      matoneError ||
      matoneqtyError ||
      mattwoqtyError ||
      matthreeqtyError
    ) {
      this.setState({
        orderidError,
        rawproductError,
        matoneError,
        matoneqtyError,
        mattwoqtyError,
        matthreeqtyError,
      });
      return false;
    }

    return true;
  };


  
  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();

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

    if (isValid) {
      console.log(data);

      axios.post("/factory/create", data).then((res) => {
        if (res.data.success) {
          //alert("Create Successfully !!!");
          swal.fire(
            "Added",
            "Raw Mateials Send Factory Successfull",
            "success"
          );
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
      orderid: "OID11111",
      rawproduct: "Trouses",
      matone: "fabric",
      matoneqty: 20000,
      mattwo: "zippers",
      mattwoqty: 2000,
      matthree: "buttons",
      matthreeqty: 4000,
    });
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

              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.orderidError}
              </div>
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

              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.rawproductError}
              </div>
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

              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.matoneError}
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>
                Material 1 Quantity (Metes)
              </label>
              <input
                type="number"
                className="form-control"
                name="matoneqty"
                placeholder="Enter Material 1 Quantity"
                value={this.state.matoneqty}
                onChange={this.handleInputChange}
              />

              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.matoneqtyError}
              </div>
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
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.mattwoqtyError}
              </div>
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
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.matthreeqtyError}
              </div>
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
      </div>
    );
  }
}
