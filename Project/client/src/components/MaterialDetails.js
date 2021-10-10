import React, { Component } from 'react';
import axios from 'axios';
import './styleSideNav.css';


export default class MaterialDetails extends Component {
  //Binding event handler method
    constructor(props){
        super(props);

        this.state={
            material:{}
        };
    }
   //load data from a remote endpoint
    componentDidMount(){

        const id =this.props.match.params.id;
        //get server side http module to get data to client side Http request
        axios.get(`http://localhost:8000/material/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    material:res.data.material
                });

                console.log(this.state.material);
            }
        });
    }
    //gather outputs
    render() {
      const id =this.props.match.params.id;
        const{matID,matName,supID,supName,arrDate,shipID,price,qty,category,description} = this.state.material;
        return (

            //component organizer
            <div id="wrapper" className="toggled">
            <div id="page-content-wrapper">
            <div className="container-fluid">



                {/* custom navigation        */}
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark  rounded-3">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/matDash">Dashboard </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/matRet"> &#62;Material Card</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=""> &#62; Material MaterialDetails <span class="sr-only">(current)</span> </a>
      </li>
    </ul>
  </div>
</nav> 


<hr/>



        {/* Title        */}
        <div class="card bg-info text-left col-lg-7 mt-2 mb-2">
                
        <div class="card-header">
          MATERIAL CARD
        </div>

        {/* Card */}
        <div class="card-body">
          <h5 class="card-title"></h5>

         
                <div style={{marginTop:'20px'}}>
                
                <h4>  <i class="fas fa-angle-double-up"></i> &nbsp; {`MAT${id.substr(0,5)}`}</h4>
                <hr/>
                
                <dl className="row ">
                    <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Material Name</b></dt>
                    <dd className="col-sm-9">{matName}</dd>

                    <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Suplier ID</b></dt>
                    <dd className="col-sm-9">{supID}</dd>

                    <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Supplier Name</b></dt>
                    <dd className="col-sm-9">{supName}</dd>

                    <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Arrival Date</b></dt>
                    <dd className="col-sm-9">{arrDate}</dd>

                    <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Shipment ID</b></dt>
                    <dd className="col-sm-9">{shipID}</dd>

                    <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Price</b></dt>
                    <dd className="col-sm-9">{price}</dd>

                    <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Qty</b></dt>
                    <dd className="col-sm-9">{qty}</dd>

                    <dt className="col-sm-3"><i class="fas fa-circle"></i><b> &nbsp;Category</b></dt>
                    <dd className="col-sm-9">{category}</dd>

                    <dt className="col-sm-3"><i class="fas fa-circle"></i><b>&nbsp;&nbsp;Description</b></dt>
                    <dd className="col-sm-9">{description}</dd>

                </dl>
                
            </div>
           
            
    </div>
    
          </div>
          </div>
          </div>
          
{/* Footer */}
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
