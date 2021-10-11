import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";

export default class EditRawFactory extends Component {
  //Consturctor define
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


  //onsubmit method
  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;

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

    //above state pass, "data" object
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

    //update put method
    axios.put(`/factory/update/${id}`, data).then((res) => {
      if (res.data.success) {
        swal.fire(
          "Updated",
          "Raw Factory Details Updated Successfully",
          "success"
        );

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
  };

  //Retireve that id details
  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/factory/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          orderid: res.data.factory.orderid,
          rawproduct: res.data.factory.rawproduct,
          matone: res.data.factory.matone,
          matoneqty: res.data.factory.matoneqty,
          mattwo: res.data.factory.mattwo,
          mattwoqty: res.data.factory.mattwoqty,
          matthree: res.data.factory.matthree,
          matthreeqty: res.data.factory.matthreeqty,
        });

        console.log(this.state.factory);
      }
    });
  }

  render() {
    const id = this.props.match.params.id;

    return (
      <div className="container">
        <div className="col-md-8 mt-4 mx-auto">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <a href="/rawfacHome" class="btn btn-primary me-md-2" type="button">
              BACK
            </a>
          </div>

          <h1 className="h3 mb-3 front-weight-normal">
            Edit Raw Factory Details
          </h1>
          <br />

          <form className="needs-validation" noValidate>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>
                <h1 className="h3 mb-3 front-weight-normal">Order ID</h1>
              </label>

              <input
                type="text"
                className="form-control"
                name="orderid"
                placeholder="Enter Order ID"
                value={this.state.orderid}
                onChange={this.handleInputChange}
                style={{ marginBottom: "15px" }}
                padding="20px"
                readOnly
              />
            </div>

            <hr />
            <br />

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
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Material 1</label>
              <input
                type="text"
                className="form-control"
                name="matone"
                placeholder="Material 1 Detils"
                value={this.state.matone}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Material 1 Quantity</label>
              <input
                type="text"
                className="form-control"
                name="matoneqty"
                placeholder="Enter Material 1 Quantity"
                value={this.state.matoneqty}
                onChange={this.handleInputChange}
              />
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
                type="text"
                className="form-control"
                name="mattwoqty"
                placeholder="Enter Material 2 Quantity"
                value={this.state.mattwoqty}
                onChange={this.handleInputChange}
              />
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
                type="text"
                className="form-control"
                name="matthreeqty"
                placeholder="Enter Material 3 Quantity"
                value={this.state.matthreeqty}
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
              &nbsp; Send To factory
            </button>
          </form>
        </div>
      </div>
    );
  }
}
