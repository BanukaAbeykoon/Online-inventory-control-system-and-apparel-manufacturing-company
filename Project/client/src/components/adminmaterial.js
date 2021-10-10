import React, { Component } from "react";
import axios from "axios";
import "./styleSideNav.css";
import Swal from "sweetalert2";

export default class adminmaterial extends Component {
  //Binding event handler method
  constructor(props) {
    super(props);

    //Initializing local state by assigning an object to this.state
    this.state = {
      material: [],
    };
  }
  //load data from a remote endpoint
  componentDidMount() {
    this.retriveMaterial();
  }

  retriveMaterial() {
    //get server side http module to get data to client side Http request
    axios.get("http://localhost:8000/material").then((res) => {
      if (res.data.success) {
        this.setState({
          material: res.data.existingPosts,
        });

        console.log(this.state.material);
      }
    });
  }

  //gather outputs
  render() {
    return (
      //component organizer
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div class="p-3 mb-2 bg-primary text-dark rounded-3">
                {/* Material Table */}
                <table
                  className="table table-hover  table table-bordered border-info table table-info table-striped"
                  style={{ marginTop: "5px" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Material ID</th>
                      <th scope="col">Material Name</th>
                      <th scope="col">Supplier ID</th>
                      <th scope="col">Suppler Name</th>

                      <th scope="col">Shipment ID</th>
                      <th scope="col">
                        Price <br />
                        (Rs.)
                      </th>
                      <th scope="col">Qty</th>
                      <th scope="col">Category</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Get data to the table using a map */}
                    {this.state.material.map((material, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <a
                            href={`/matpost/${material._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            {material.matID}
                          </a>
                        </td>
                        <td>{material.matName}</td>
                        <td>{material.supID}</td>
                        <td>{material.supName}</td>

                        <td>{material.shipID}</td>
                        <td>{material.price}</td>
                        <td>{material.qty}</td>
                        <td>{material.category}</td>
                        <td>{material.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
