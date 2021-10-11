import React, { Component } from "react";
import axios from "axios";

export default class neworder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:8000/order").then((res) => {
      if (res.data.success) {
        this.setState({
          order: res.data.existingorder,
        });

        console.log(this.state.order);
      }
    });
  }


  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
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
                  <b>New Orders For production</b>
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
                          <th scope="col"> Order ID</th>
                          <th scope="col">Product </th>
                          <th scope="col">unit price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.order.map((order, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{`OID${order._id.substr(0, 5)}`}</td>
                            <td>{order.product}</td>
                            <td>{order.unprice}</td>
                            <td>{order.qty}</td>
                            <td>{Number(order.unprice) * Number(order.qty)}</td>
                            
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
