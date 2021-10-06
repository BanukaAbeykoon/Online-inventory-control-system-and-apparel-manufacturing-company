import React, { Component } from 'react';
import axios from 'axios';

export default class orderEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      topic:"",
      description:"",
      postCategory:""
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
    const {topic,description,postCategory} = this.state;

    const data ={
      topic:topic,
      description:description,
      postCategory:postCategory
    }
        console.log(data)

    axios.put(`http://localhost:8000/order/updateorder/${id}`,data).then((res) =>{
      if (res.data.success) {
        alert("Post Updated Successfully");
        this.setState(
            {
                topic:"",
                description:"",
                postCategory:""
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
          topic:res.data.order.topic,
          description:res.data.order.description,
          postCategory:res.data.order.postCategory
        });
        console.log(this.state.order);
      }
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Edit Order</h1>
        <form className="needs-validation" noValidation>
          <div className="form-group" style={{marginBottom:'15px'}}>
            <label style={{ marginBottom:'5px'}}>Order ID</label>
            <input type="text"
              readOnly
              className="form-control"
              name="topic"
              placeholder="Enter Order ID"
              value={this.state.topic}
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{ marginBottom:'15px'}}>
            <label style={{ marginBottom:'5px'}}>Product</label>
            <input type="text"
              className="form-control"
              name="description"
              placeholder="Enter Product"
              value={this.state.description}
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{ marginBottom:'15px'}}>
            <label style={{ marginBottom:'5px'}}>Quantity</label>
            <input type="text"
              className="form-control"
              name="postCategory"
              placeholder="Enter Quantity"
              value={this.state.postCategory}
              onChange={this.handleInputChange}/>
          </div>
          <button className="btn btn-success" type="submit" style={{ marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp; Update Order
          </button>
        </form>
      </div>
    );
  }
}