import React, { Component } from "react";
import axios from "axios";

export default class AccountSaleJournal extends Component {
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


      <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <nav
                  className="navbar navbar-expand-lg navbar-light"
                  style={{
                    backgroundColor: "#e3f2fd",
                    width: "134%",
                    border: " solid #5f9ea0",
                    padding: "0px",
                  }}
                >
                  <div className="container-fluid">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toogle="collapse"
                      data-bs-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Tooggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="/Accountdashboard">
                            Account Home -
                          </a>
                        </li>

                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/journal" className="nav-link">
                           Journal Details -
                          </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/salejournal" className="nav-link">
                           Sale Journal Details -
                          </a>
                        </li>
                      
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>



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
             
              </tr>
            ))}
          </tbody>
        </table>

       
              </div>
              </div>


      </div>
      </div>
      </div>
    );
  }
}
