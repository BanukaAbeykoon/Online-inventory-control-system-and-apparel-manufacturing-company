import React, { Component } from 'react';
import axios from 'axios';

export default class orderEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      orderID:"",
      product:"",
      unprice:"",
      qty:""
    }
  }

  handleInputChange = (e) =>{
    const { name,value } = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e) =>{

    e.preventDefault();
    const id = this.props.match.params.id;
    const {orderID,product,unprice,qty} = this.state;

    const data ={
      orderID:orderID,
      product:product,
      unprice:unprice,
      qty:qty
  }
        console.log(data)

    axios.put(`http://localhost:8000/order/updateorder/${id}`,data).then((res) =>{
      if (res.data.success) {
        alert("Post Updated Successfully");
        this.setState(
            {
              orderID: "",
              product: "",
              unprice: "",
              qty:""
            }
        )
      }
    })
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/order/${id}`).then((res) =>{
      if (res.data.success) {
        this.setState({
          orderID:res.data.order.orderID,
          product:res.data.order.product,
          unprice:res.data.order.unprice,
          qty:res.data.order.qty

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
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Edit Order</h1>
        <form className="needs-validation" noValidation>
          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{ marginBottom:'5px'}}>Order ID</label>
            <input type="text"
              readOnly
              className="form-control"
              name="orderID"
              placeholder="Enter Order ID"
              value={this.state.orderID}
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{ marginBottom:'15px'}}>
            <label style={{ marginBottom:'5px'}}>Product</label>
            <input type="text"
              className="form-control"
              name="product"
              placeholder="Enter Product"
              value={this.state.product}
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{ marginBottom:'15px'}}>
            <label style={{ marginBottom:'5px'}}>unit price</label>
            <input type="text"
              className="form-control"
              name="unprice"
              placeholder="Enter Quantity"
              value={this.state.unprice}
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{ marginBottom:'15px'}}>
            <label style={{ marginBottom:'5px'}}> Quantity </label>
            <input type="text"
              className="form-control"
              name="qty"
              placeholder="Enter Quantity"
              value={this.state.qty}
              onChange={this.handleInputChange}/>
          </div>

          <button className="btn btn-success" type="submit" style={{ marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp; Update Order
          </button>
        </form>
            </div>
          </div>
        </div>
        </div>
    );
  }
}