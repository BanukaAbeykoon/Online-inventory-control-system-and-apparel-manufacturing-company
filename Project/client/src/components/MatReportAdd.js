import React, { Component } from 'react'
import axios from 'axios'
import './styleSideNav.css';
import Swal from 'sweetalert2';



export default class MatReportAdd extends Component {
       //handle data to database
       constructor(props){
           super(props);
           this.state={
            matreportID:"",
            matID:"",
            matName:"",
            date:"",
            shipID:"",
            defect:"",
            qty:"",
            matreportIDError:"",
            matIDError:"",
            matNameError:"",
            dateError:"",
            shipIDError:"",
            defectError:"",
            qtyError:""
           

          }
       } 

       handleInputChange = (e) =>{
           const{name,value} = e.target;

           this.setState({
               ...this.state,
               [name]:value
           })

       } 
        //validation
       validate= ()=>{
        let matreportIDError="";
        let matIDError="";
        let matNameError="";
        let dateError="";
        let shipIDError="";
        let defectError="";
        let qtyError="";
       //statements
        if(!this.state.matreportID){
          matreportIDError="*Report ID is Required!"
        }
        if(!this.state.matID){
          matIDError="*Material ID is Required!"
        }
       
        if(!this.state.matName){
          matNameError="*Material name is Required!"
        }
        if(!this.state.date){
          dateError="*Date is Required"
        }
        if(!this.state.shipID){
          shipIDError="*Shipment ID  is Required"
        }
        if(!this.state.defect){
          defectError="*Defect is Required"
        }

        if(!this.state.qty){
          qtyError="*QTY is Required"
        }
          else if (!this.state.qty.match('^[1-9]+[0-9]*$')){
           qtyError= '*Please Enter a Valid QTY Range '
         } 
    
 
        if(matreportIDError||matIDError||matNameError||dateError||shipIDError||defectError||qtyError){
         this.setState({matreportIDError,matIDError,matNameError,dateError,shipIDError,defectError,qtyError});
         return false;
 
     }
 
     return true;
 
    }
        


//onsubmit method
 onSubmit =(e) =>{
           e.preventDefault();
           const isValid= this.validate();
           const {matreportID,matID,matName,date,shipID,defect,qty} = this.state;
          

           const data = {
            matreportID:matreportID,
            matID:matID,
            matName:matName,
            date:date,
            shipID:shipID,
            defect:defect,
            qty:qty
           }
           //if validation succussesfully pass
           if(isValid){
           console.log(data)
           //Post data to back end using the Http link
           axios.post("http://localhost:8000/matreport/save", data).then((res) =>{
               if(res.data.success){
                Swal.fire('Added','Report Added Successfilly','success')
                   this.setState(
                       {
                        matreportID:"",   
                        matID:"",
                        matName:"",
                        date:"",
                        shipID:"",
                        defect:"",
                        qty:""
                       }
                   )
               }
           })

       
       }
      }
       //Demo button
       btnDemo = (e) => {
        e.preventDefault();
      
        const {  matreportID, matID, matName, date, shipID,defect, qty} = this.state;
      
        const data = {
          matreportID: matreportID,
          matID: matID,
          matName: matName,
          date: date,
          shipID: shipID,
          defect: defect,
          qty: qty,
        }
      
        console.log(data)
      
        this.setState(
            {
              matreportID: "RP007",
              matID: "MAT17",
              matName: "Clips",
              date: "	2021-09-07",
              shipID: "SHP005",
              defect: "Damaged",
              qty: "2000",
              
            }
        )
      }
    //gather outputs
    render() {
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
        <a class="nav-link" href="/matreport"> &#62;Reports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=""> &#62; Add a Report <span class="sr-only">(current)</span> </a>
      </li>
    </ul>
  </div>
</nav> 


<hr/>
{/* Instruction section */}
<div class="card">
  <div class="card-body">
    <h5 class="card-title">INSTRUCTIONS</h5>

    <div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    <p class="card-text">Imagine having just the right number of products for a certain SKU, given demand -- but your team is working with old data and, based on that data, projects that your inventory will fall short of demand in a month. It is obvious what your team would do: begin the process of acquiring more inventory to make up the difference. Now there will be excess inventory, and you will be in an Overstock situation.</p>
    <p class="card-text"><small class="text-muted">Latest Regulations</small></p>
  </div>
  <img src="%PUBLIC_URL%../../CASANOVA04.png" class="card-img-bottom" alt="..."/>
</div>
             

{/* Title        */}
<div class="p-3 mb-2 bg-info text-dark  rounded-3">
            <div className="col-md-8 mt-4 mx-auto">
              <center>
            <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>ADD NEW REPORT</b></h1>
              </center>
              <hr/>



               {/* Material add form */}
                <form className="needs-validation" noValidate>
                    

                
                    <div class="row">
  <div class="col">
    <label style={{marginBottom:'5px'}} >Report ID</label>
    <input type="text" class="form-control" name="matreportID" placeholder="Enter Report ID"
    value={this.state.matreportID}
    onChange={this.handleInputChange}
    required
    />

<div style={{fontSize:15 ,color:"red"}}>
                           {this.state.matreportIDError}
                   </div>
  </div>

  <div class="col">
  <label style={{marginBottom:'5px'}} >Material ID</label>
    <input type="text" class="form-control" name="matID"  placeholder="Enter Material ID"
     value={this.state.matID}
     onChange={this.handleInputChange}
     required
     />

<div style={{fontSize:15 ,color:"red"}}>
                           {this.state.matIDError}
                   </div>
  </div>
</div>

   
<div class="row">
  <div class="col">
  <label style={{marginBottom:'5px'}} >Material Name</label>
    <input type="text" class="form-control" name="matName" placeholder="Enter Material Name"
    value={this.state.matName}
    onChange={this.handleInputChange}
    required
    />

<div style={{fontSize:15 ,color:"red"}}>
                           {this.state.matNameError}
                   </div>
  </div>

  <div class="col">
  <label style={{marginBottom:'5px'}} >Date</label>
    <input type="date" class="form-control" name="date"  placeholder="Enter Date"
     value={this.state.date}
     onChange={this.handleInputChange}
     required
     />
     <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.dateError}
                   </div>
  </div>
</div>




<div class="row">
  <div class="col">
  <label style={{marginBottom:'5px'}} >Ship ID</label>
    <input type="text" class="form-control" name="shipID" placeholder="Enter Ship ID"
    value={this.state.shipID}
    onChange={this.handleInputChange}
    required
    />
     <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.shipIDError}
                   </div>
  </div>
  <div class="mb-3">

  <div class="col">
  <label for="exampleFormControlTextarea1" class="form-label" style={{marginBottom:'5px'}} >Defect</label>

  <textarea class="form-control" name="defect" id="exampleFormControlTextarea1" rows="3"
  placeholder="Enter Defect"
  value={this.state.defect}
     onChange={this.handleInputChange}
     required
  
  ></textarea>

<div style={{fontSize:15 ,color:"red"}}>
                           {this.state.defectError}
                   </div>
   
     </div>
  </div>
</div>






                        
                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Qty</label>
                        <input type="number"
                        className="form-control"
                        name="qty"
                        placeholder="Enter Qty"
                        value={this.state.qty}
                        onChange={this.handleInputChange}
                        required
                        />

<div style={{fontSize:15 ,color:"red"}}>
                           {this.state.qtyError}
                   </div>

                        </div>

                        <hr/>

                       
                        <button className="btn btn-success" type="submit" style={{ backgroundColor: "#0E3662" }} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Add Report
                        </button>

                        <br/>
                        <br/>
                        <button type="submit" className="btn btn-dark"  style={{ backgroundColor: "#2D5F97"}}  onClick={this.btnDemo}>DEMO</button>

                    </form>  
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
            
            
        )
    }
}
