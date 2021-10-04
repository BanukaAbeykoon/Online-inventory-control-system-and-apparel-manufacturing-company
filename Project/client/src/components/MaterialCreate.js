import React, { Component } from 'react'
import axios from 'axios'
import './styleSideNav.css';
import Swal from 'sweetalert2';

export default class MaterialCreate extends Component {

       constructor(props){
           super(props);
           this.state={
               matID:"",
               matName:"",
               supID:"",
               supName:"",
               arrDate:"",
               shipID:"",
               price:"",
               qty:"",
               category:"",
               description:""

          }
       } 

       handleInputChange = (e) =>{
           const{name,value} = e.target;

           this.setState({
               ...this.state,
               [name]:value
           })

       } 
       
       onSubmit =(e) =>{
           e.preventDefault();

           const {matID,matName,supID,supName,arrDate,shipID,price,qty,category,description} = this.state;

           const data = {
               matID:matID,
               matName:matName,
               supID:supID,
               supName:supName,
               arrDate:arrDate,
               shipID:shipID,
               price:price,
               qty:qty,
               category:category,
               description:description

           }


           if(matID =="" )
           {
            Swal.fire('WARNING','Add Material ID','warning')
           }
           else if(matName ==""){
            Swal.fire('WARNING','Add Material Name','warning')
           }
           else if(supID ==""){
            Swal.fire('WARNING','Add Supplier ID','warning')
           }
           else if(supName ==""){
            Swal.fire('WARNING','Add Supplier Name','warning')
           }
           else if(arrDate ==""){
            Swal.fire('WARNING','Add Arrival Date','warning')
           }
           else if(shipID ==""){
            Swal.fire('WARNING','Add Shipment ID','warning')
            
          }
          else if(price ==""){
            Swal.fire('WARNING','Add Material Price','warning')
          }

          else if(qty ==""){
            Swal.fire('WARNING','Add Material Qty','warning')
            
          }

          else if(category ==""){
            Swal.fire('WARNING','Add Material Category','warning')
            
          }

          else if(description ==""){
            Swal.fire('WARNING','Add Material Description','warning')
            
          }



           console.log(data)

           axios.post("http://localhost:8000/material/save", data).then((res) =>{
               if(res.data.success){
              Swal.fire('Added','Material Card Added Successfilly','success')
                   this.setState(
                       {
                        matID:"",
                        matName:"",
                        supID:"",
                        supName:"",
                        arrDate:"",
                        shipID:"",
                        price:"",
                        qty:"",
                        category:"",
                        description:""
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


            
              <nav class="navbar navbar-expand-lg navbar-info bg-light">
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
        <a class="nav-link" href=""> &#62; Add a Material Card <span class="sr-only">(current)</span> </a>
      </li>
    </ul>
  </div>
</nav> 


<hr/>





<div class="p-3 mb-2 bg-info text-dark  rounded-3">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add New Material</h1>




               
                <form className="needs-validation" noValidate>
                    

                
                    <div class="row">
  <div class="col">
    <label  style={{marginBottom:'5px'}} >Material ID</label>
    <input type="text" class="form-control"  name="matID" placeholder="Enter Material ID"
    value={this.state.matID}
  
    onChange={this.handleInputChange}
    />


  </div>

  <div class="col">
  <label  style={{marginBottom:'5px'}} >Material Name</label>
    <input type="text" class="form-control" name="matName"  placeholder="Enter Material Name"
     value={this.state.matName}
     onChange={this.handleInputChange}
     />
  </div>
</div>

   
<div class="row">
  <div class="col">
  <label style={{marginBottom:'5px'}} >Supplier ID</label>
    <input type="text" class="form-control" name="supID" placeholder="Enter Supplier ID"
    value={this.state.supID}
    onChange={this.handleInputChange}
    />
  </div>

  <div class="col">
  <label style={{marginBottom:'5px'}} >Supplier Name</label>
    <input type="text" class="form-control" name="supName"  placeholder="Enter Suppler Name"
     value={this.state.supName}
     onChange={this.handleInputChange}
     />
  </div>
</div>




<div class="row">
  <div class="col">
  <label style={{marginBottom:'5px'}} >Arrival Date</label>
    <input type="date" class="form-control" name="arrDate" placeholder="Enter Arrival Date"
    value={this.state.arrDate}
    onChange={this.handleInputChange}
    />
  </div>

  <div class="col">
  <label style={{marginBottom:'5px'}} >Shipment ID</label>
    <input type="text" class="form-control" name="shipID"  placeholder="Enter Shipment ID"
     value={this.state.shipID}
     onChange={this.handleInputChange}
     />
  </div>
</div>




<div class="row">
  <div class="col">
  <label style={{marginBottom:'5px'}} >Price Per Piece</label>
    <input   type="number" min="0.00" max="1000000.00" step="0.01"   class="form-control" name="price" placeholder="Enter Price"
    value={this.state.price}
    onChange={this.handleInputChange}
    />
  </div>

  <div class="col">
  <label style={{marginBottom:'5px'}} >Qty</label>
    <input type="number" class="form-control" name="qty" placeholder="Enter Qty"
     value={this.state.qty}
     onChange={this.handleInputChange}
     />
  </div>
</div>

                        
<div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Category</label>
                        <input type="text"
                        className="form-control"
                        name="category"
                        placeholder="Enter Category"
                        value={this.state.category}
                        onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Description</label>
                        <textarea 
                        className="form-control"
                        name="description"
                        placeholder="Enter Description"
                        value={this.state.description}
                        onChange={this.handleInputChange}/>
                        </div>

                        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Add Material
                        </button>

                    </form>  
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
            
            
        )
    }
}
