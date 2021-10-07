import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";


export default class HomeLSmaterial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lmocard: []
    };
  }

  componentDidMount() {
    this.retrievelmocard();
  }

  retrievelmocard() {
    axios.get("/lmocard").then((res) => {
      if (res.data.success) {
        this.setState({
          lmocard: res.data.existinglmocard,
        });

        console.log(this.state.lmocard);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/lmocard/deleteslmocard/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrievelmocard();
    });
  };

  filterData(lmocard, searchKey) {
    const result = lmocard.filter(
      (lmocard) =>
        lmocard.shipID.toLowerCase().includes(searchKey) ||
        lmocard.supplierID.toLowerCase().includes(searchKey) ||
        lmocard.supllierName.toLowerCase().includes(searchKey) ||
        lmocard.lessmaterialID.toLowerCase().includes(searchKey) ||
        lmocard.lessmaterialName.toLowerCase().includes(searchKey) ||
        lmocard.qunatity.toLowerCase().includes(searchKey) ||
        lmocard.unitPrice.toLowerCase().includes(searchKey) ||
        lmocard.date.toLowerCase().includes(searchKey)
    );
    this.setState({ lmocard: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/lmocard").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existinglmocard, searchKey);
      }
    });
  };

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <h4>All Imports</h4>
              </div>
              <div className="col-lg-3 mt-2 mb-2">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  name="searchQuery"
                  onChange={this.handleSearchArea}
                ></input>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ShipID</th>
                  <th scope="col">SupplierID</th>
                  <th scope="col">SupllierName</th>
                  <th scope="col">LessmaterialID</th>
                  <th scope="col">LessmaterialName</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">UnitPrice</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.lmocard.map((lmocard, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a
                        href={`/lmocard/${lmocard._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {lmocard.shipID}
                      </a>
                    </td>
                    <td>{lmocard.supplierID}</td>
                    <td>{lmocard.supllierName}</td>
                    <td>{lmocard.lessmaterialID}</td>
                    <td>{lmocard.lessmaterialName}</td>
                    <td>{lmocard.quantity}</td>
                    <td>{lmocard.unitPrice}</td>
                    <td>{lmocard.date}</td>

                    <td>
                      <a
                        className="btn btn-warning"
                        href={`/EditLSmaterial/${lmocard._id}`}
                      >
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() => this.onDelete(lmocard._id)}
                      >
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="btn btn-success">
              <a
                href="/CreateLSmaterial"
                style={{ textdecoration: "none", color: "white" }}
              >
                Create New Shipment
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
