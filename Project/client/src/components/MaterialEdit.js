import React, { Component } from 'react'
import axios from 'axios'
import './styleSideNav.css';
import Swal from 'sweetalert2';

export default class MaterialEdit extends Component {

    //Binding event handler method
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
            description:"",
            matIDError:"",
            matNameError:"",
            supIDError:"",
            supNameError:"",
            arrDateError:"",
            shipIDError:"",
            priceError:"",
            qtyError:"",
            categoryError:"",
            descriptionError:""

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
      let matIDError="";
      let matNameError="";
      let supIDError="";
      let supNameError="";
      let arrDateError="";
      let shipIDError="";
      let priceError="";
      let qtyError="";
      let categoryError="";
      let descriptionError="";
      //statements
      // if(!this.state.matID){
      //   matIDError="*Material ID is Required!"
      // }
      if(!this.state.matName){
        matNameError="*Material name is Required!"
      }
     
      if(!this.state.supID){
        supIDError="*Supplier ID is Required!"
   }
   if(!this.state.supName){
    supNameError="*Supplier name is Required"
   }

   if(!this.state.arrDate){
    arrDateError="*Arrival date is Required"
   }
   if(!this.state.shipID){
    shipIDError="*Shipment ID is Required"
   }
   if(!this.state.price){
    priceError="*Price is Required"
   }

  //  else if(this.state.price.match(/-/)){
  //   priceError="*Price should not be negative"
  //  }

//     else if (!this.state.price.match('^[1-9]+[0-9]*$')){
//     priceError= '*Please Enter a Valid Price Range'
//  } 

   if(!this.state.qty){
    qtyError="*QTY is Required"
   }
  //  if(this.state.qty.match("-")){
  //   qtyError="*QTY should not be negative"
  //  }

  //    else if (!this.state.qty.match('^[1-9]+[0-9]*$')){
  //     qtyError= "*Please Enter a Valid QTY Range "
  //  } 

   if(!this.state.category){
    categoryError="*Category is Required"
   }

   if(!this.state.description){
    descriptionError="Description is Required"
   }

   if(matIDError||matNameError||supIDError||supNameError||arrDateError||shipIDError||priceError||qtyError||categoryError||descriptionError){
       this.setState({matIDError,matNameError,supIDError,supNameError,arrDateError,shipIDError,priceError,qtyError,categoryError,descriptionError});
       return false;

   }

   return true;

  }
    //onsubmit method
    onSubmit =(e) =>{
        e.preventDefault();
        const isValid= this.validate();
        const id =this.props.match.params.id;

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
        //if validation succussesfully pass
        if(isValid){
        console.log(data)
       //Put data to back end using the Http link
        axios.put(`http://localhost:8000/material/updatematerial/${id}`, data).then((res) =>{
            if(res.data.success){
              Swal.fire('Updated','Material Card Updated Successfilly','success')
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

    }
    //load data from a remote endpoint
    componentDidMount(){

        const id =this.props.match.params.id;

        axios.get(`http://localhost:8000/material/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                   matID:res.data.material.matID,
                   matName:res.data.material.matName,
                   supID:res.data.material.supID,
                   supName:res.data.material.supName,
                   arrDate:res.data.material.arrDate,
                   shipID:res.data.material.shipID,
                   price:res.data.material.price,
                   qty:res.data.material.qty,
                   category:res.data.material.category,
                   description:res.data.material.description
                });

                console.log(this.state.material);
            }
        });
    }



    //gather outputs
    render() {
      const id =this.props.match.params.id;
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
        <a class="nav-link" href=""> &#62; Update Material Card <span class="sr-only">(current)</span> </a>
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
    <label style={{marginBottom:'5px'}} >Material ID</label>
    <input type="text" class="form-control" name="matID" placeholder="Enter Material ID"
    value={`MAT${id.substr(0,7)}`}
    readOnly
    onChange={this.handleInputChange}
    />
    <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.matIDError}
                   </div>
  </div>

  <div class="col">
  <label style={{marginBottom:'5px'}} >Material Name</label>
    <input type="text" class="form-control" name="matName"  placeholder="Enter Material Name"
     value={this.state.matName}
     readOnly
     onChange={this.handleInputChange}
     required
     />
     <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.matNameError}
                   </div>
  </div>
</div>

   
<div class="row">
  <div class="col">
  <label style={{marginBottom:'5px'}} >Supplier ID</label>
    <input type="text" class="form-control" name="supID" placeholder="Enter Supplier ID"
    value={this.state.supID}
    readOnly
    onChange={this.handleInputChange}
    required
    />
    <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.supIDError}
                   </div>
  </div>

  <div class="col">
  <label style={{marginBottom:'5px'}} >Supplier Name</label>
    <input type="text" class="form-control" name="supName"  placeholder="Enter Suppler Name"
     value={this.state.supName}
     readOnly
     onChange={this.handleInputChange}
     required
     />
     <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.supNameError}
                   </div>
  </div>
</div>




<div class="row">
  <div class="col">
  <label style={{marginBottom:'5px'}} >Arrival Date</label>
    <input type="dste" class="form-control" name="arrDate" placeholder="Enter Arrival Date"
    value={this.state.arrDate}
    readOnly
    onChange={this.handleInputChange}
    required
    />
    <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.arrDateError}
                   </div>
  </div>

  <div class="col">
  <label style={{marginBottom:'5px'}} >Shipment ID</label>
    <input type="text" class="form-control" name="shipID"  placeholder="Enter Shipment ID"
     value={this.state.shipID}
     readOnly
     onChange={this.handleInputChange}
     required
     />
     <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.shipIDError}
                   </div>
  </div>
</div>




<div class="row">
  <div class="col">
  <label style={{marginBottom:'5px'}} >Price Per Piece</label>
    <input type="number" class="form-control" name="price" placeholder="Enter Price"
    value={this.state.price}
    onChange={this.handleInputChange}
    required
    />
    <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.priceError}
                   </div>
  </div>

  <div class="col">
  <label style={{marginBottom:'5px'}} >Qty</label>
    <input type="number" class="form-control" name="qty" placeholder="Enter Qty"
     value={this.state.qty}
     onChange={this.handleInputChange}
     required
     />
     <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.qtyError}
                   </div>
  </div>
</div>

                        
                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Category</label>
                        <input type="text"
                        className="form-control"
                        name="category"
                        placeholder="Enter Category"
                        value={this.state.category}
                        
                        onChange={this.handleInputChange}
                        required/>
                        <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.categoryError}
                   </div>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Description</label>
                        <textarea 
                        className="form-control"
                        name="description"
                        placeholder="Enter Description"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        required/>
                        <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.descriptionError}
                   </div>
                        </div>
                         
                         <hr/>
                        <button className="btn btn-success" type="submit"  style={{backgroundColor: "#0E3662"}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Update Card
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
