import React, { Component } from "react"; 
import axios from 'axios';
import './style.css';
import jsPDF from "jspdf";
import 'jspdf-autotable';


class PostDetailsQC extends Component {

  constructor(props){
    super(props);

    this.state = {
      post:{}
    };

  }
  generatePDF=()=>{
    var doc = new jsPDF("p","pt","a4");
    doc.html(document.querySelector("#print"),{
      callback: function(pdf){
        var pageCount = doc.internal.getNumberOfPages();
        pdf.save("CASANOVAQC");
      }
    });
  };


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({ 
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }

  render() {

    const {OrderID,CheckedDate,ArrivalDate,BuyerID,requirment1,requirment2,Qualityrate} = this.state.post;

      return (
          <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
            <div className="container-fluid">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/dash">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dash"> &#62; Quality Check Manager</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/rep"> &#62; Monitoring</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/rep"> &#62; Report</a>
      </li>
    </ul>
  </div>
</nav>

          <div class="card text-center">
    
    <div className="card-body" id="print">
    <div className="card-header" >
      CASANOVAQC
    </div>
      <h5 className="card-title"></h5>
      <div style={{margineTop:'20px'}}>
       <dt className="col-sm-3"><h4>Order ID</h4><h4>{OrderID}</h4></dt>
         <hr/>

        <dl className="row">
          <dt className="col-sm-3">CheckedDate</dt>
          <dd className="col-sm-9">{CheckedDate}</dd>
  
          <dt className="col-sm-3">ArrivalDate</dt>
          <dd className="col-sm-9">{ArrivalDate}</dd>
  
          <dt className="col-sm-3">BuyerID</dt>
          <dd className="col-sm-9">{BuyerID}</dd>
  
          <dt className="col-sm-3">requirment1</dt>
          <dd className="col-sm-9">{requirment1}</dd>
  
          <dt className="col-sm-3">requirment2</dt>
          <dd className="col-sm-9">{requirment2}</dd>
  
          <dt className="col-sm-3">Quality rate</dt>
          <dd className="col-sm-9">{Qualityrate}</dd>
        </dl>
        All right reserved @casanova
    </div>
    </div>
    <button className="btn btn-danger" onClick={this.generatePDF()} type="primary">Report auto genarated please check the download</button>
    <hr/>
            <div className="row">
    <div className="col-sm-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">TESTING</h5>
          <p className="card-text">You can add, update or delete the quality checked products details into Check Card.</p>
          <a href="/qcDash" className="btn btn-primary">Go Testing</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">MONITORING</h5>
          <p class="card-text">Automatically generating the Effectiveness Report.</p>
          <a href="#" class="btn btn-primary">Go Monitoring</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">REPORTING</h5>
          <p class="card-text">Can add the details to the defect card by only using numericals.</p>
          <a href="#" class="btn btn-primary">Go Reporting</a>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
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
<a href="/matDash" style={{textDecoration:'none'}}><h1>CASANOVA</h1></a>
  
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

export default PostDetailsQC;