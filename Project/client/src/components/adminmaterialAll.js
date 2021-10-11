import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default class adminmaterialAll extends Component {
  //Binding event handler method
  constructor(props) {
    super(props);

    //Initializing local state by assigning an object to this.state
    this.state = {
      lmomat: [],
    };
  }

  //load data from a remote endpoint
  componentDidMount() {
    this.retriveLmo();
  }

  retriveLmo() {
    //get server side http module to get data to client side Http request
    axios.get("http://localhost:8000/lmomat").then((res) => {
      if (res.data.success) {
        this.setState({
          lmomat: res.data.existingPosts,
        });

        console.log(this.state.lmomat);
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
            <br />
            <br />
            <br />
            <div className="container p-3 mb-2 bg-primary bg-gradient text-white rounded-3">
              {/* Table Header*/}
              <center>
                <h1
                  className="h3 mb-3 font-weight-normal rounded-3 "
                  style={{
                    backgroundColor: "#000000",
                    padding: "10px",
                    color: "#FFFFFF",
                  }}
                >
                  <b>All LMO Cards</b>
                </h1>
              </center>

              <br />

              <table
                className="table table-hover  table table-bordered border-info table table-info table-striped"
                style={{ marginTop: "5px" }}
              >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">LMOID</th>
                    <th scope="col">MatID</th>
                    <th scope="col">MatName</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Get data to the table using a map */}
                  {this.state.lmomat.map((lmomat, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>

                      <td>{lmomat.lmoID}</td>
                      <td>{lmomat.matID}</td>
                      <td>{lmomat.matName}</td>

                      <td>{lmomat.qty}</td>
                      <td>{lmomat.category}</td>
                      <td>{lmomat.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
