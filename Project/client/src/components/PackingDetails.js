import React, { Component } from 'react';
import axios from 'axios';

export default class PackingDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            packing:{}

        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/packing/${id}`).then((res) => {
          if(res.data.success) {
            this.setState({
              packing: res.data.packing,
            });
            console.log(this.state.packing);
          }
        });
    }
    
    render() {

        const id = this.props.match.params.id;
        const {customer,orderId,category,payment,quantity,weight,dueDate,address} = this.state.packing;
        return (



          
          <div id="wrapper" className="toggled">


           <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{     backgroundColor: "#e3f2fd",
                         width: "100%",
                          border: " solid #5f9ea0",
                          padding: "0px" }}
          >
            <div className="container-fluid">
              {/* <a class="navbar-brand" >CRUD App using Mern stack
                </a> */}

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
                    <a className="nav-link" aria-current="page" href="/">
                      Posts
                    </a>
                  </li>
                  <li className="nav-item d-none d-sm-inline-block">
                    <a href="/RMDashbord" className="nav-link">
                      Home
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>


            <div id="page-content-wrapper">
          <div className="container-fluid">
          <div style={{ marginTop: "20px" }}>
            <h4>{customer}</h4>
            <hr/>

            <dl className="row">
              <dt className="col-sm-3">OrderID</dt>
              <dd className="col-sm-9">{`OID${id.substr(0,5)}`}</dd>
              <br/>
              <br/>
              <dt className="col-sm-3">Category</dt>
              <dd className="col-sm-9">{category}</dd>
              <br/>
              <br/>
              <dt className="col-sm-3">Payment</dt>
              <dd className="col-sm-9">{payment}</dd>
               <br/>
               <br/>
              <dt className="col-sm-3">Quantity</dt>
              <dd className="col-sm-9">{quantity}</dd>
               <br/>
               <br/>
              <dt className="col-sm-3">Weight</dt>
              <dd className="col-sm-9">{weight}</dd>
                <br/>
                <br/>
              <dt className="col-sm-3">Duedate</dt>
              <dd className="col-sm-9">{dueDate}</dd>
                <br/>
                <br/>
              <dt className="col-sm-3">Address</dt>
              <dd className="col-sm-9">{address}</dd>

            </dl>
          </div>
          </div>
          </div>
          </div>
        );
    }
}
