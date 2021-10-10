import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert2';

export default class orderCreate extends Component {

    constructor(props){
        super(props);
        this.state={
            
            product:"",
            unprice:"",
            qty:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{

        e.preventDefault();
        const {product,unprice,qty} = this.state;

        const data ={
           
            product:product,
            unprice:unprice,
            qty:qty
        }
        console.log(data)

        axios.post("http://localhost:8000/order/save", data).then((res) => {
          if (res.data.success) {
            this.setState({
             
              product: "",
              unprice: "",
              qty:""
            });
          }
          swal.fire("Created", "Create Successfully", "success");
        });
    }

    render() {
        return (

            <div id="wrapper" className="toggled">
            <div id="page-content-wrapper">
              <div className="container-fluid">
                <div className="col-md-8 mt-4 mx-auto">
                  <h1 className="h3 mb-3 font-weight-normal">
                    Create New Order
                  </h1>
                  <form className="needs-validation" noValidation>
                    {/* <div
                      className="form-group"
                      style={{
                        marginBottom: "15px",
                       
                      }}
                    >
                        
                      <label style={{ marginBottom: "5px" }}>Order ID</label>
                      <input
                        type="text"
                        className="form-control"
                        name="orderID"
                        placeholder="Enter OrderID"
                        value={this.state.orderID}
                        onChange={this.handleInputChange}
                      />
                    </div> */}

                    <div
                      className="form-group"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>Product </label>
                      <input
                        type="text"
                        className="form-control"
                        name="product"
                        placeholder="Enter Product"
                        value={this.state.product}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div
                      className="form-group"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>Unit Price</label>
                      <input
                        type="number"
                        className="form-control"
                        name="unprice"
                        placeholder="Enter Quantity"
                        value={this.state.unprice}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div
                      className="form-group"
                      style={{ marginBottom: "15px" }}
                    >
                      <label style={{ marginBottom: "5px" }}>Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        name="qty"
                        placeholder="Enter Quantity"
                        value={this.state.qty}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <button
                      className="btn btn-success"
                      type="submit"
                      style={{ marginTop: "15px" }}
                      onClick={this.onSubmit}
                    >
                      <i className="far fa-check-square"></i>
                      &nbsp; save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
