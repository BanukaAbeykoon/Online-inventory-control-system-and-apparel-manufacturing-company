import React, { Component } from "react"; 
import axios from 'axios';
import './style.css';
import Swal from 'sweetalert2';

class EditPostQC extends Component {


  constructor(props){
    super(props);
    this.state={
        OrderID:"",
        CheckedDate:"",
        ArrivalDate:"",
        BuyerID:"",
        requirment1:"",
        requirment2:"",
        Qualityrate:""
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
    const id = this.props.match.params.id;
    const {OrderID,CheckedDate,ArrivalDate,BuyerID,requirment1,requirment2,Qualityrate} = this.state;
    const data ={
      OrderID:OrderID,
      CheckedDate:CheckedDate,
      ArrivalDate:ArrivalDate,
      BuyerID:BuyerID,
      requirment1:requirment1,
      requirment2:requirment2,
      Qualityrate:Qualityrate
    }

    console.log(data)

    axios.put(`/post/update/${id}`,data).then((res)=>{
      if (res.data.success)
        {
          Swal.fire('Updated','Updated Successfully','success')
        this.setState(
          { 
            OrderID:"",
            CheckedDate:"",
            ArrivalDate:"",
            BuyerID:"",
            requirment1:"",
            requirment2:"",
            Qualityrate:""
          }
          )
        }
    })
  }



  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({ 
          OrderID:res.data.post.OrderID,
          CheckedDate:res.data.post.CheckedDate,
          ArrivalDate:res.data.post.ArrivalDate,
          BuyerID:res.data.post.BuyerID,
          requirment1:res.data.post.requirment1,
          requirment2:res.data.post.requirment2,
          Qualityrate:res.data.post.Qualityrate
        });
      }
    });
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
        <a class="nav-link" href="/qcDash"> &#62; Add Card</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> &#62; Update Card</a>
      </li>
    </ul>
  </div>
</nav>
     <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-nomal">Update Quality Check Card</h1>
        <form className="needs-validation" noValidate>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Order ID</lable>
          <input type="text"
          className="form-control"
          name="OrderID"
          placeholder="Enter Order ID"
          value={this.state.OrderID}
          onChange={this.handleInputChange}
          readOnly/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Checked Date</lable>
          <input type="date"
          className="form-control"
          name="CheckedDate"
          placeholder="Enter CheckedDate"
          value={this.state.CheckedDate}
          onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Arrival Date</lable>
          <input type="date"
          className="form-control"
          name="ArrivalDate"
          placeholder="EnterArrivalDate"
          value={this.state.ArrivalDate}
          onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>BuyerID</lable>
          <input type="text"
          className="form-control"
          name="BuyerID"
          placeholder="Enter BuyerID"
          value={this.state.BuyerID}
          onChange={this.handleInputChange}
          readOnly/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Requirment 1</lable>
          <input type="text"
          className="form-control"
          name="requirment1"
          placeholder="Enter requirment1"
          value={this.state.requirment1}
          onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Requirment 2</lable>
          <input type="text"
          className="form-control"
          name="requirment2"
          placeholder="Enter requirment2"
          value={this.state.requirment2}
          onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
          <lable style={{marginBottom:'5px'}}>Qualityrate</lable>
          <input type="number"  min="0" max="100" step="1"
          className="form-control"
          name="Qualityrate"
          placeholder="Enter Quality"
          value={this.state.Qualityrate}
          onChange={this.handleInputChange}/>
          </div>

          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp; Update
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

export default EditPostQC;