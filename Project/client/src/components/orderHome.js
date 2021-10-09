import React, { Component } from "react";
import axios from "axios";

export default class orderHome extends Component {
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
    axios.get("http://localhost:8000/order").then(res => {
      if (res.data.success){
        this.setState({
          order:res.data.existingorder,
        });

        console.log(this.state.order);
      }
    });
  }

onDelete =(id) =>{
    axios.delete(`http://localhost:8000/order/deleteorder/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    })
}


filterData(order,searchKey){

    const result = order.filter((order) =>
    order.orderID.toLowerCase().includes(searchKey)||
    order.product.toLowerCase().includes(searchKey)
    
    )
    this.setState({order:result})
}

handleSearchArea = (e) =>{

    const searchKey= e.currentTarget.value;

    axios.get("http://localhost:8000/order").then(res =>{
        if(res.data.success){
            this.filterData(res.data.existingorder,searchKey)
        }
    });
}

  render() {
    return (
      <div id="wrapper" className="toggled">
      <div id="page-content-wrapper">
      <div className="container-fluid">


      <div className="row justify-content-center">
              <div  class="col-9">
          <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <h4>ALL Order</h4>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
                <input
                className="form-control"
                type="search"
                placeholder="search"
                name="searchQuery"
                onChange={this.handleSearchArea}>
                </input>
            </div>
        </div>
       
        <table className="table table-hover" style={{marginTop:'400'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"> Order ID</th>
              <th scope="col">Product </th>
              <th scope="col">unit price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.order.map((order,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                   
                {`OID${order._id.substr(0,5)}`}
                   
                    </td>
                <td>{order.product}</td>
                <td>{order.unprice}</td>
                <td>{order.qty}</td>
                <td>{Number(order.unprice) * Number(order.qty)}</td>
                <td>
                  <a className="btn btn-warning" href={`/editOrder/${order._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(order._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success"><a href="/addOrder" style={{textDecoration:'none',color:'white'}}>Create New Post</a></button>
              </div>
              </div>


      </div>
      </div>
      </div>
    );
  }
}
