import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";

export default class pmHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
    };
  }

  //Retireve that id details
  componentDidMount() {
    this.retrieveInventory();
  }

  retrieveInventory() {
    axios.get("/inventory").then((res) => {
      if (res.data.success) {
        this.setState({
          inventory: res.data.existingInventory,
        });

        console.log(this.state.inventory);
      }
    });
  }

  //Delete function
  onDelete = (id) => {
    axios.delete(`/inventory/delete/${id}`).then((res) => {
      swal.fire("Deleted", "Factory Deleted Successfully", "warning");
      //Retieve othor data from DB
      this.retrieveInventory();
    });
  };

  filterData(inventory, searchKey) {
    const result = inventory.filter(
      (inventory) =>
        inventory.facname.toLowerCase().includes(searchKey) ||
        inventory.facemail.toLowerCase().includes(searchKey) ||
        inventory.facwebsite.toLowerCase().includes(searchKey)
    );

    this.setState({ inventory: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/inventory").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingInventory, searchKey);
      }
    });
  };

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
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

            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <h4>ALL Factories</h4>
              </div>
              <div className=" col-lg-3 mt-2 mb-2">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search..."
                  name="searchQuery"
                  onChange={this.handleSearchArea}
                ></input>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th scoop="col">#</th>
                    <th scoop="col">Factory Name</th>
                    <th scoop="col">Factory Telephone</th>
                    <th scoop="col">Factory Email</th>
                    <th scoop="col">Factory Website</th>
                    <th scoop="col">CEO Name</th>
                    <th scoop="col">FCO Name</th>
                    <th scoop="col">Product</th>
                    <th scoop="col">Units</th>
                    <th scoop="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.inventory.map((inventory, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <a
                          href={`/inventory/${inventory._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {inventory.facname}
                        </a>
                      </td>
                      <td>{inventory.factelephone}</td>
                      <td>{inventory.facemail}</td>
                      <td>{inventory.facwebsite}</td>
                      <td>{inventory.ceoname}</td>
                      <td>{inventory.fconame}</td>
                      <td>{inventory.product}</td>
                      <td>{inventory.units}</td>

                      <td>
                        <a
                          className="btn btn-warning"
                          href={`/pmedit/${inventory._id}`}
                        >
                          <i className="fas fa-edit"></i>&nbsp;Edit
                        </a>
                        &nbsp;&nbsp;
                        <a
                          className="btn btn-danger"
                          href="#"
                          onClick={() => this.onDelete(inventory._id)}
                        >
                          <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <br />
          <button className="btn btn-primary btn-lg">
            <a
              href="/pmadd"
              style={{
                textDecoration: "none",
                color: "white",
                width: "232rem",
                transition: "0.3s",
                opacity: "10",
                hover: "#006db9",
              }}
            >
              Add New Factory
            </a>
          </button>
        </div>
      </div>
    );
  }
}
