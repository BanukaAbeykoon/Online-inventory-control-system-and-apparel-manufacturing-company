import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";

//import inventory from '../../backend/models/inventory';

export default class pmHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
    };
  }

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

  //Delete command
  onDelete = (id) => {
    axios.delete(`/inventory/delete/${id}`).then((res) => {
      //alert("Delete Factory successfully");
      swal.fire("Deleted", "Factory Deleted Successfully", "warning");
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
              <a href="/PMDashboard" class="btn btn-primary me-md-2" type="button">
                Production Dashboard
              </a>
            </div>            
            <br />

            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <h4>Search Factory For Order</h4>
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

              <br />
              <br />
              <br />
              <hr />

              {/* <table className="table">
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
                          href={`/edit/${inventory._id}`}
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
              </table> */}
      
                <div class="row">
                  {this.state.inventory.map((inventory, index) => (
                    <div class="col-sm-4">
                      <div class="card" style={{ width: "18rem" }}>
                        <img
                          src="%PUBLIC_URL%../../akl.jpeg"
                          width="100"
                          height="200"
                          position="absolute"
                          class="card-img-top"
                          alt="..."
                        />

                        <div class="card-body">
                          <a
                            href={`/inventory/${inventory._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <h2>{inventory.facname} </h2>
                          </a>
                          <h4>Product - {inventory.product} </h4>
                          <h4>Quantity - {inventory.units} </h4>
                          <a className="btn btn-warning" href={`/createrawfac`}>
                            <i className="fas fa-edit"></i>&nbsp;Create Raw
                            Factory Form
                          </a>
                          &nbsp;
                          {/* <a
                          className="btn btn-danger"
                          href="#"
                          onClick={() => this.onDelete(inventory._id)}
                        >
                          <i className="far fa-trash-alt"></i>&nbsp;Delete
                        </a> */}
                        </div>
                      </div>
                      <br />
                    </div>
                  ))}
                </div>
                {/* <button className="btn btn-success">
                <a
                  href="/add"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Add New Factory
                </a>
              </button> */}
              </div>
            </div>
          </div>
        </div>
    );
  }
}
