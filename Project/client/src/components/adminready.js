import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";

export default class adminready extends Component {
  constructor(props) {
    super(props);

    this.state = {
      packing: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:8000/packing/").then((res) => {
      if (res.data.success) {
        this.setState({
          packing: res.data.existingPosts,
        });

        console.log(this.state.packing);
      }
    });
  }


  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                
              </div>
            </div>

           
         

            

            <h3>Packing Details</h3>
            <br />
            <div
              className="table"
              style={{
                background: "transparent",
                width: "100%",
                border: " solid #5f9ea0",
                padding: "20px",
              }}
            >
              
                        
              
              <div class="row">
                {this.state.packing.map((packing, index) => (
                  <div class="col-sm-4">
                    <div class="card" style={{ width: "18rem" }}>
                 

                      <div class="card-body">
                        <a
                          className="btn btn-primary"
                          href={`/packing/${packing._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <i class="fas fa-running"></i>&nbsp;View Packing Form
                          Details
                        </a>
                        <h5>No.0{index + 1}</h5>
                        <h6>Customer:{packing.customer} </h6>
                        <h6>Order ID:{`OID${packing._id.substr(0, 5)}`} </h6>
                        <h6>Category:{packing.category} </h6>
                        <h6>Payment:{packing.payment} </h6>
                        <h6>Quantity:{packing.quantity} </h6>
                        <h6>Weight:{packing.weight}kg </h6>
                        <h6>DueDate:{packing.dueDate} </h6>
                        <h6>Address:{packing.address} </h6>
                        
                      </div>
                    </div>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
