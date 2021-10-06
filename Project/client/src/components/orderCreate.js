import React, { Component } from 'react'
import axios from 'axios'

export default class orderCreate extends Component {

    constructor(props){
        super(props);
        this.state={
            topic:"",
            description:"",
            postCategory:""
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
        const {topic,description,postCategory} = this.state;

        const data ={
            topic:topic,
            description:description,
            postCategory:postCategory
        }
        console.log(data)

        axios.post("http://localhost:8000/order/save", data).then((res) => {
          if (res.data.success) {
            this.setState({
              topic: "",
              description: "",
              postCategory: "",
            });
          }
          alert("Added")
        });
    }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create New Order</h1>
                <form className="needs-validation" noValidation>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}} >Order ID</label>
                    <input type="text"
                    className="form-control"
                    name="topic"
                    placeholder="Enter OrderID"
                    value={this.state.topic}
                    onChange={this.handleInputChange}/>            
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Product </label>
                <input type="text"
                 className="form-control"
                 name="description"
                 placeholder="Enter Product"
                 value={this.state.description}
                 onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Quantity</label>
                <input type="text"
                 className="form-control"
                 name="postCategory"
                 placeholder="Enter Quantity"
                 value={this.state.postCategory}
                 onChange={this.handleInputChange}/>
            </div>
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>
                &nbsp; save
            </button>

            </form>
            </div>
        )
    }
}
