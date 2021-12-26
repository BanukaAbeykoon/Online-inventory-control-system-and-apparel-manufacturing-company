import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";

//report generate
const generatePDF = (factory) => {
  const doc = new jsPDF();
  const tableColumn = [
    "Order Id",
    "Product",
    "Material 1",
    "Material 1 Quantity",
    "Material 2",
    "Material 2 Quantity",
    "Material 3",
    "Material 3 Quantity",
  ];
  const tableRows = [];

  factory.map((factory) => {
    const factorydata = [
      factory.orderid,
      factory.rawproduct,
      factory.matone,
      factory.matoneqty,
      factory.mattwo,
      factory.mattwoqty,
      factory.matthree,
      factory.matthreeqty,
    ];
    tableRows.push(factorydata);
  });
  doc.text("CASANOVA", 70, 8).setFontSize(13);
  doc.text("Raw Factory Report", 14, 16).setFontSize(13);
  doc.autoTable(tableColumn, tableRows, {
    styles: { fontSize: 8 },
    startY: 35,
  });
  doc.save("Raw Factory Details.pdf");
};

export default class RawFactoryHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      factory: [],
    };
  }

  componentDidMount() {
    this.retrieveFactory();
  }

  retrieveFactory() {
    axios.get("/factory").then((res) => {
      if (res.data.success) {
        this.setState({
          factory: res.data.existingFactory,
        });

        console.log(this.state.factory);
      }
    });
  }

  //Delete command
  onDelete = (id) => {
    axios.delete(`/factory/delete/${id}`).then((res) => {
      //alert("Delete Factory successfully");
      swal.fire(
        "Deleted",
        "Raw Factory details deleted Successfully",
        "warning"
      );
      this.retrieveFactory();
    });
  };

  //search
  filterData(factory, searchKey) {
    const result = factory.filter(
      (factory) =>
        factory.orderid.toLowerCase().includes(searchKey) ||
        factory.rawproduct.toLowerCase().includes(searchKey)
    );

    this.setState({ factory: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/factory").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingFactory, searchKey);
      }
    });
  };

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="container p-3 mb-2 bg-primary bg-gradient text-white rounded-3">
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <a
                  href="/PMDashboard"
                  class="btn btn-primary me-md-2"
                  type="button"
                >
                  Production Dashboard
                </a>
              </div>

              <br />
              <br />

              <center>
                <h1
                  className="h3 mb-3 font-weight-normal rounded-3 "
                  style={{
                    backgroundColor: "#000000",
                    padding: "10px",
                    color: "#FFFFFF",
                  }}
                >
                  <b>Raw Factory Details</b>
                </h1>
              </center>
              <br />

              <div className=" col-lg-3 mt-2 mb-2">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search..."
                  name="searchQuery"
                  onChange={this.handleSearchArea}
                ></input>
              </div>
              <br />
              <hr />
              <br />

              <div>
                <button
                  type="button"
                  style={{
                    backgroundColor: "#2E4661",
                    padding: "10px",
                    float: "left",
                  }}
                  class="btn btn-secondary btn-sm"
                  onClick={() => generatePDF(this.state.factory)}
                >
                  Generate Report of Raw Factory Forms
                </button>
              </div>

              <br />

              <br />

              <table
                className="table table-hover  table table-bordered border-info table table-info table-striped"
                style={{ marginTop: "5px" }}
              >
                <thead>
                  <tr>
                    <th scoop="col">#</th>
                    <th scoop="col">Order ID</th>
                    <th scoop="col">Product</th>
                    <th scoop="col">Material 1</th>
                    <th scoop="col">Material 1 Quantity</th>
                    <th scoop="col">Material 2</th>
                    <th scoop="col">Material 2 Quantity</th>
                    <th scoop="col">Material 3</th>
                    <th scoop="col">Material 3 Quantity</th>
                    <th scoop="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.factory.map((factory, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <a
                          href={`/factory/${factory._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {factory.orderid}
                        </a>
                      </td>
                      <td>{factory.rawproduct}</td>
                      <td>{factory.matone}</td>
                      <td>{factory.matoneqty}</td>
                      <td>{factory.mattwo}</td>
                      <td>{factory.mattwoqty}</td>
                      <td>{factory.matthree}</td>
                      <td>{factory.matthreeqty}</td>

                      <td>
                        <a
                          className="btn btn-warning"
                          href={`/editrawfac/${factory._id}`}
                        >
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;&nbsp;
                        <a
                          className="btn btn-danger"
                          href="#"
                          onClick={() => this.onDelete(factory._id)}
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
                  href="/createrawfac"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Ceate New Raw Details Factory Form
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
