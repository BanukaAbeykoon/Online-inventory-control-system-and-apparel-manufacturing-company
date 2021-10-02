import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";


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
      swal.fire("Deleted", "Raw Factory details deleted Successfully", "warning");
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
    
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <a href="/PMDashboard" class="btn btn-primary me-md-2" type="button">Production Dashboard</a>
                  </div>        

            <br /><br />

            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <center><h4>Raw Factory Dashboard</h4></center><br/>
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
            </div>
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
    );
  }
}
