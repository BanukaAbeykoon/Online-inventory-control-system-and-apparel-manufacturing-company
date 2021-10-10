import React, { Component } from 'react';
import axios from 'axios';
import './styleSideNav.css';


export default class ReportDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            matreport:{}
        };
    }

    componentDidMount(){

        const id =this.props.match.params.id;

        axios.get(`http://localhost:8000/matreport/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    matreport:res.data.matreport
                });

                console.log(this.state.matreport);
            }
        });
    }

    render() {

        const id =this.props.match.params.id;      
        const{matreportID,matID,matName,date,shipID,defect,qty} = this.state.matreport;
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
        <a class="nav-link" href="/matDash">Dashboard </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/matreport"> &#62;Reports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=""> &#62; Report Details <span class="sr-only">(current)</span> </a>
      </li>
    </ul>
  </div>
</nav> 


<hr/>




              <div class="card text-left">
        <div class="card-header">
          Report Card
        </div>
        <div class="card-body">
          <h5 class="card-title"></h5>

         
                <div style={{marginTop:'20px'}}>
                
                <h4>  <i class="fas fa-angle-double-up"></i> &nbsp;{`RP${id.substr(0,7)}`}</h4>
                <hr/>
                
                <dl className="row">
                    <dt className="col-sm-3"><i class="fas fa-circle"></i> &nbsp;Material ID</dt>
                    <dd className="col-sm-9">{matID}</dd>

                    <dt className="col-sm-3"><i class="fas fa-circle"></i> &nbsp;Material Name</dt>
                    <dd className="col-sm-9">{matName}</dd>

                    <dt className="col-sm-3"><i class="fas fa-circle"></i> &nbsp;Date</dt>
                    <dd className="col-sm-9">{date}</dd>

                    <dt className="col-sm-3"><i class="fas fa-circle"></i> &nbsp;Shipment ID</dt>
                    <dd className="col-sm-9">{shipID}</dd>

                    <dt className="col-sm-3"><i class="fas fa-circle"></i> &nbsp;Defect</dt>
                    <dd className="col-sm-9">{defect}</dd>

                    <dt className="col-sm-3"><i class="fas fa-circle"></i> &nbsp;Qty</dt>
                    <dd className="col-sm-9">{qty}</dd>

                    

                </dl>
            </div>
          
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
