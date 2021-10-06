import React, { Component } from "react";
import axios from "axios";
import './style.css';
import Swal from 'sweetalert2';

class DefectCard extends Component {

  constructor(props){
    super(props);
    this.state={
        missingitem:"",
        misplased:"",
        ambigusitem:"",
        duplicateitem:"",
        srate:""
    }
  }

  handleInputChange= (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const {missingitem,misplased,ambigusitem,duplicateitem,srate} = this.state;
    const data ={
        missingitem:missingitem,
        misplased:misplased,
        ambigusitem:ambigusitem,
        duplicateitem:duplicateitem,
        srate:srate
    }


    if(missingitem =="")
    {
      Swal.fire('WARNING','Enter Missing Items Amount','warning')
    }
    else if(misplased ==""){
      Swal.fire('WARNING','Enter Misplaced Items Amount','warning')
    }
    else if(ambigusitem ==""){
      Swal.fire('WARNING','Enter Ambigus Items Amount','warning')
    }
    else if(duplicateitem ==""){
      Swal.fire('WARNING','Enter Duplicate Items Amount','warning')
    }
    else if(srate ==""){
      Swal.fire('WARNING','Enter Satisfication Rate','warning')
      
    }


    console.log(data)

    axios.post("/post/save2",data).then((res)=>{
      if (res.data.success)
        {
          Swal.fire('Added','Defect Card Added Successfully','success') 
        this.setState(
          { 
            missingitem:"",
            misplased:"",
            ambigusitem:"",
            duplicateitem:"",
            srate:""
          }
          )
        }
    })
  }

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
        <a class="nav-link" href="/dash">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dash"> &#62; Quality Check Manager</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dash"> &#62; Reporting</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/defect"> &#62; Defect Card</a>
      </li>
    </ul>
  </div>
</nav>


     <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-nomal">Add New Defect Card</h1>
        <form className="needs-validation" >

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Incomplete / missing items</lable>
          <input type="number"
          className="form-control"
          name="missingitem"
          placeholder="Enter Order ID"
          value={this.state.missingitem}
          onChange={this.handleInputChange}
          required/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Misplaced items</lable>
          <input type="number"
          className="form-control"
          name="misplased"
          placeholder="Misplaced items"
          value={this.state.misplased}
          onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Inconsistance / ambiguous items</lable>
          <input type="number"
          className="form-control"
          name="ambigusitem"
          placeholder="Inconsistance / ambiguous items"
          value={this.state.ambigusitem}
          onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Redundant / Duplicate items</lable>
          <input type="number"
          className="form-control"
          name="duplicateitem"
          placeholder="Redundant / Duplicate items"
          value={this.state.duplicateitem}
          onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Requirements Satification Rate</lable>
          <input type="number"
          className="form-control"
          name="srate"
          placeholder="Requirements Satification Rate"
          value={this.state.srate}
          onChange={this.handleInputChange}/>
          </div>

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp; Submit
          </button>
        </form>
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

export default DefectCard;