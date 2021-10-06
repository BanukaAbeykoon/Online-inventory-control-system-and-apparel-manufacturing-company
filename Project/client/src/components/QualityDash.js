import React, { Component } from "react"; 
import './style.css';

class QualityDash extends Component {
  render() {
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
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dash"> &#62; Quality Check Manager</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dash"> &#62; Dashboard</a>
      </li>
    </ul>
  </div>
</nav>


          <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">TESTING</h5>
        <p class="card-text">You can add, update or delete the quality checked products details into Check Card. </p>
        <a href="/qcDash" class="btn btn-primary">Go Testing</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">MONITORING</h5>
        <p class="card-text">Automatically generating the Effectiveness Report. </p>
        <a href="#" class="btn btn-primary">Go Monitoring</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">REPORTING</h5>
        <p class="card-text">Can add the details to the defect card by only using numericals.</p>
        <a href="/defect" class="btn btn-primary">Go Reporting</a>
      </div>
    </div>
  </div>
</div>

<hr/>
<img src="%PUBLIC_URL%../../white.jpg" width="400" height="400" class="d-inline-block align-top" alt=""/>
<img src="%PUBLIC_URL%../../white.jpg" width="400" height="400" class="d-inline-block align-top" alt=""/>
<img src="%PUBLIC_URL%../../white.jpg" width="400" height="400" class="d-inline-block align-top" alt=""/>

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

export default QualityDash;