import React, { Component } from 'react'
import axios from 'axios'
import './styleSideNav.css';
import Swal from 'sweetalert2';

export default class MatReportEdit extends Component {

    //Binding event handler method
    constructor(props){
        super(props);
        this.state={
            matreportID:"",
            matID:"",
            matName:"",
            supID:"",
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
        const id =this.props.match.params.id;

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
        //Put data to back end using the Http link
        axios.put(`http://localhost:8000/matreport/updatematreport/${id}`, data).then((res) =>{
            if(res.data.success){
              Swal.fire('Updated','Report Updated Successfilly','success')
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
    //load data from a remote endpoint
    componentDidMount(){

        const id =this.props.match.params.id;

        axios.get(`http://localhost:8000/matreport/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                   matreportID:res.data.matreport.matreportID, 
                   matID:res.data.matreport.matID, 
                   matName:res.data.matreport.matName,
                   date:res.data.matreport.date,
                   shipID:res.data.matreport.shipID,
                   defect:res.data.matreport.defect, 
                   qty:res.data.matreport.qty    
                
                
                });

                console.log(this.state.matreport);
            }
        });
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
        <a class="nav-link" href="/matreport"> &#62;Report</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=""> &#62; Update Report <span class="sr-only">(current)</span> </a>
      </li>
    </ul>
  </div>
</nav> 
<hr/>
{/* Title        */}
<div class="p-3 mb-2 bg-info text-dark rounded-3">
            <div className="col-md-8 mt-4 mx-auto">
              <center>
            <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>EDIT MATERIAL CARD</b></h1>
            </center>

            <hr/>
            {/* Edit form */}
                <form className="needs-validation" noValidate>

           


                <div class="row">


                    
  <div class="col">
    <label style={{marginBottom:'5px'}} >MatRepID</label>
    <input type="text" class="form-control" name="matreportID" placeholder="Report ID"
    value={this.state.matreportID}
    readOnly
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
     readOnly
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
  <label style={{marginBottom:'5px'}} >Mat Name</label>
    <input type="text" class="form-control" name="matName" placeholder="Enter Material Name"
    value={this.state.matName}
    readOnly
    onChange={this.handleInputChange}
    required
    />
    <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.matNameError}
                   </div>
  </div>

  <div class="col">
  <label style={{marginBottom:'5px'}} >Date</label>
    <input type="text" class="form-control" name="date"  placeholder="Enter Date"
     value={this.state.date}
     readOnly
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
    <input type="text" class="form-control" name="shipID" placeholder="Enter ShipID"
    value={this.state.shipID}
    readOnly
    onChange={this.handleInputChange}
    required
    />
    <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.shipIDError}
                   </div>
  </div>

  <div class="col">
  <label style={{marginBottom:'5px'}} >Defects</label>
    <input type="text" class="form-control" name="defect"  placeholder="Enter defect"
     value={this.state.defect}
     
     onChange={this.handleInputChange}
     required
     />
     <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.defectError}
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

                        <button className="btn btn-success" type="submit" style={{ backgroundColor: "#0E3662" }}  onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Update Report
                        </button>

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
