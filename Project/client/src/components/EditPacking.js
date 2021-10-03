import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";
import {RMsetErrors, setErrors} from "./../conmmon/RMsetErrors"

export default class EditPacking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: "",
      orderId: "",
      category: "",
      payment: "",
      quantity: "",
      weight: "",
      dueDate: "",
      address: "",
       errors:{}
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

validate=(customer,orderId,category,payment,quantity,weight,dueDate,address)=>{
const errors = setErrors(customer,orderId,category,payment,quantity,weight,dueDate,address);
this.setState({errors: errors});
return Object.values(errors).every((err) => err === "");
};

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
      const {customer,orderId,category,payment,quantity,weight,dueDate,address} = this.state;
        if(this.validate(customer,orderId,category,payment,quantity,weight,dueDate,address)){
    const data = {
      customer:customer,
      orderId:orderId,
      category:category,
      payment:payment,
      quantity:quantity,
      weight:weight,
      dueDate:dueDate,
      address:address
    }
    console.log(data)

    axios.put(`http://localhost:8000/packing/update/${id}`, data).then((res) => {
      if (res.data.success) {
       
        this.setState({
          customer: "",
          orderId: "",
          category: "",
          payment: "",
          quantity: "",
          weight: "",
          dueDate: "",
          address: ""
        });
         swal.fire('Updated','Post Updated Successfully','Updated');
    //    alert("Post Updated Successfully");
      }
    });
  };
}

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/packing/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          customer: res.data.packing.customer,
          orderId: res.data.packing.orderId,
          category: res.data.packing.category,
          payment: res.data.packing.payment,
          quantity: res.data.packing.quantity,
          weight: res.data.packing.weight,
          dueDate: res.data.packing.dueDate,
          address: res.data.packing.address
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
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Update Packing Details</h1>
        <form className="needs-validation" noValidation>
          <div className="form-group" style={{ marginBottom:'15px'}}>
            <label style={{ marginBottom:'5px'}}>Customer</label>
            <input
              type="text"
              className="form-control"
              name="customer"
              placeholder="Enter New customer"
              value={this.state.customer}
              onChange={this.handleInputChange}
            />
             {this.state.errors.customer && (
                    <div classNane="text-danger" style={{ color:'red'}}>{this.state.errors.customer}</div>
                  )}
          </div>

          <div className="form-group" style={{ marginBottom:'15px'}}>
            <label style={{ marginBottom:'5px'}}>OrderId</label>
            <input
              type="text"
              className="form-control"
              name="orderId"
              placeholder="Enter Order ID"
              value={this.state.orderId}
              onChange={this.handleInputChange}
            />
             {this.state.errors.orderId && (
              <div classNane="text-danger" style={{ color:'red'}}>{this.state.errors.orderId}</div>
                  )}
          </div>

          <div className="form-group" style={{ marginBottom:'15px'}}>
            <label style={{ marginBottom:'5px'}}>Category</label>
            <input
              type="text"
              className="form-control"
              name="category"
              placeholder="Enter category"
              value={this.state.category}
              onChange={this.handleInputChange}
            />
             {this.state.errors.category && (
              <div classNane="text-ganger" style={{ color:'red'}}>{this.state.errors.category}</div>
                  )} 

          </div>

          <div className="form-group" style={{ marginBottom:'15px'}}>
            <label style={{ marginBottom:'5px'}}>Payment</label>
            <input
              type="text"
              className="form-control"
              name="payment"
              placeholder="Enter payment status"
              value={this.state.payment}
              onChange={this.handleInputChange}
            />
             {this.state.errors.payment && (
              <div classNane="text-gander" style={{ color:'red'}}>{this.state.errors.payment}</div>
                  )}
          </div>

          <div className="form-group" style={{ marginBottom:'15px'}}>
            <label style={{ marginBottom:'5px'}}>Quantity</label>
            <input
              type="text"
              className="form-control"
              name="quantity"
              placeholder="Enter quantity"
              value={this.state.quantity}
              onChange={this.handleInputChange}
            />
            {this.state.errors.quantity && (
                    <div classNane="text-danger" style={{ color:'red'}}>{this.state.errors.quantity}</div>
                  )}
          </div>

          <div className="form-group" style={{ marginBottom:'15px'}}>
            <label style={{ marginBottom:'5px'}}>Weight</label>
            <input
              type="text"
              className="form-control"
              name="weight"
              placeholder="Enter weight"
              value={this.state.weight}
              onChange={this.handleInputChange}
            />
             {this.state.errors.weight && (
                    <div classNane="text-gander" style={{ color:'red'}}>{this.state.errors.weight}</div>
                  )}
          </div>

          <div className="form-group" style={{ marginBottom:'15px'}}>
            <label style={{ marginBottom:'5px'}}>Duedate</label>
            <input
              type="text"
              className="form-control"
              name="dueDate"
              placeholder="Enter dueDate"
              value={this.state.dueDate}
              onChange={this.handleInputChange}
            />
             {this.state.errors.dueDate && (
                    <div classNane="text-danger" style={{ color:'red'}}>{this.state.errors.dueDate}</div>
                  )}
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{marginBottom:'5px'}}>Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="Enter address"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
             {this.state.errors.address && (
                    <div classNane="text-danger" style={{ color:'red'}}>{this.state.errors.address}</div>
                  )}
          </div>

          <button
            className="btn btn-success"type="submit"style={{ marginTop:'15px'}}onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp; UPDATE
          </button>
        </form>
      </div>
      </div>
      </div>
      </div>
    );
  }
}