import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";


export default class MatDis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      factory: [],
    };
  }

  componentDidMount() {
    this.retrieveFactory();
  }

  retrieveFactory() {
    axios.get("/factory").then((res) => {
      if (res.data.success) {
        this.setState({
          factory: res.data.existingFactory,
        });

        console.log(this.state.factory);
      }
    });
  }

  //Delete command
  onDelete = (id) => {
    axios.delete(`/factory/delete/${id}`).then((res) => {
      //alert("Delete Factory successfully");
      swal.fire("Deleted", "Raw Factory details deleted Successfully", "warning");
      this.retrieveFactory();
    });
  };

    
//search 
  filterData(factory, searchKey) {
    const result = factory.filter(
      (factory) =>
        factory.orderid.toLowerCase().includes(searchKey) ||
        factory.rawproduct.toLowerCase().includes(searchKey)
    );

    this.setState({ factory: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/factory").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingFactory, searchKey);
      }
    });
  };

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">




          <nav class="navbar navbar-expand-lg navbar-dark bg-dark  rounded-3">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/matdash">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=""> &#62;Distribution Cards <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 
    
       


            <div className="row">
             
              <div className=" col-lg-3 mt-2 mb-2">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search..."
                  name="searchQuery"
                  onChange={this.handleSearchArea}
                ></input>
              </div>

             
            </div>





            <div class="p-3 mb-2 bg-light text-dark rounded-3">

 
         
            <div class="row">
                {this.state.factory.map((factory, index) => (
                  <div class="col-sm-4">
                    <div class="card" style={{ width: "18rem" }}>
                      {/* <img
                  src="%PUBLIC_URL%../../fut.png"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                /> */}




                      <div class="card-body bg-info rounded-3">
                        
                        <h5>No.0{index + 1}</h5>
                        <h6>Order ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{factory.orderid} </h6>
                        <h6>Product:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{factory.rawproduct} </h6>
                        <h6>Material:{factory.matone} </h6>
                        <h6>Quantity:{factory.matoneqty} </h6>
                        <h6>Material:{factory.mattwo} </h6>
                        <h6>Quantity:{factory.mattwoqty} </h6>
                        <h6>Material:{factory.matthree} </h6>
                        <h6>Quantity:{factory.matthreeqty} </h6>
                        <a
                          className="btn btn-warning"
                         
                        >
                          <i className="fas fa-edit"></i>&nbsp;ACCEPT
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a
                          className="btn btn-danger"
                          href="#"
                          onClick={() => this.onDelete(factory._id)}
                        >
                          <i className="far fa-trash-alt"></i>&nbsp;DELETE
                        </a>
                      </div>
                    </div>
                    <br />
                  </div>
                ))}
              </div>










            
           </div>
           </div>
           </div>





           <div class="footer">
      
      
      <div class="contain">
      
        <br/>
      <div class="col">
        <h1>ABOUT US</h1>
      
        
        <ul>
       
          <li><i class="fas fa-phone-square"></i>&nbsp; &nbsp; Contact us</li>
          <li><i class="fas fa-comment-alt"></i>&nbsp; &nbsp;Suggestion</li>
          
        </ul>
        
        
      </div>
      <div class="col">
        <h1></h1>
        <ul>
          <li></li>
        </ul>
      </div>
      <div class="col">
      <div class="position-absolute top-50 start-50 translate-middle">
      <br/>
      
      <img src="%PUBLIC_URL%../../white.jpg" class="rounded-circle" width="40" height="40"  alt=""/>
        <h1>CASANOVA</h1>
        
        <ul>
          <li>@ Copyright reserved</li>
        </ul>
        </div>
      </div>
      <div class="col">
        <h1></h1>
        <ul>
        </ul>
        </div>
      
        <div class="position-absolute top-50 end-0 translate-middle-y">
      <div class="col social">
        <h1>Help</h1>
        
        <ul>
        
          <li><i class="fas fa-envelope"></i>&nbsp; &nbsp; <i class="fas fa-map-marker-alt"></i>&nbsp; &nbsp;<i class="fas fa-star"></i></li>
          
        </ul>
        
        </div>
      </div>
      <div class="clearfix">
      
      
      </div>
      </div>
      </div>

           </div>        
        
    );
  }
}
