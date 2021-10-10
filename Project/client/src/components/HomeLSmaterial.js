import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";


const generatePDF = (lmocard) => {
  const doc = new jsPDF();
  const tableColumn = [
    "shipmentID",
    "supplierID",
    "materialID",
    "materialName",
    "quantity ",
    "unitPrice",
    "date",
  ];
  const tableRows = [];

  lmocard.map((lmocard) => {
    const shipmentdata = [
      lmocard.shipmentID,
      lmocard.supplierID,
      lmocard.materialID,
      lmocard.materialName,
      lmocard.quantity,
      lmocard.unitPrice,
      lmocard.date,
    ];
    tableRows.push(shipmentdata);
  });
  doc.text("Casanova Inventory", 70, 8).setFontSize(13);
  doc.text("Shipment Details Report", 14, 16).setFontSize(13);
  doc.autoTable(tableColumn, tableRows, {
    styles: { fontSize: 8 },
    startY: 35,
  });
  doc.save("shipment details.pdf");
};


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
       swal.fire("Deleted", "deleted Successfully", "success");
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
        lmocard.quantity.toLowerCase().includes(searchKey) ||
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
          <div className="container-sm">
            <div className="row">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-9 mt-2 mb-2">
                    <nav
                      className="navbar navbar-expand-lg navbar-light"
                      style={{
                        backgroundColor: "#e3f2fd",
                        width: "134%",
                        border: " solid #5f9ea0",
                        padding: "0px",
                      }}
                    >
                      <div className="container-fluid">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toogle="collapse"
                          data-bs-target="#navbarNav"
                          aria-controls="navbarNav"
                          aria-expanded="false"
                          aria-label="Tooggle navigation"
                        >
                          <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                          className="collapse navbar-collapse"
                          id="navbarNav"
                        >
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                aria-current="page"
                                href="/"
                              >
                                Home -
                              </a>
                            </li>

                            <li className="nav-item d-none d-sm-inline-block">
                              <a href="/SHDashbord" className="nav-link">
                                Shipment Dashboard -
                              </a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                              <a href="/HomeLSmaterial" className="nav-link">
                                Less material Shipment Form -
                              </a>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 mt-2 mb-2">
                <h4>All Shipments</h4>
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
            <div>
              <button
                type="button"
                style={{ backgroundColor: "#2E4661", padding: "10px" }}
                class="btn btn-secondary btn-sm"
                onClick={() => generatePDF(this.state.lmocard)}
              >
                Generate Report of shipments
              </button>
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
                  <th scope="col">Total</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.lmocard.map((lmocard, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a
                        href={`/DetailsLSmaterial/${lmocard._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {`SHID${lmocard._id.substr(0, 5)}`}
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
                      Rs {Number(lmocard.quantity) * Number(lmocard.unitPrice)}
                    </td>

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
