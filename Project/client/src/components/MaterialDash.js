import React, { Component } from 'react'
import axios from 'axios';
import './styleSideNav.css';
import Swal from 'sweetalert2'


export default class MaterialDash extends Component {

//Binding event handler method
constructor(props){
  super(props);

  //Initializing local state by assigning an object to this.state
  this.state={
    material:[]
  };
}
//load data from a remote endpoint
componentDidMount(){
  this.retriveMaterial();
}


retriveMaterial(){
  //get server side http module to get data to client side Http request
  axios.get("http://localhost:8000/material").then(res =>{
      if(res.data.success){
        this.setState({
          material:res.data.existingPosts
        });

        console.log(this.state.material);
      }

  });
}

//delete a material card
onDelete = (id) =>{

  axios.delete(`http://localhost:8000/material/deletematerial/${id}`).then((res) =>{
    Swal.fire('Deleted','Material Card Deleted Successfilly','success')
    this.retriveMaterial();
  })
}


//filter data
filterData(material,searchKey){

const result = material.filter((material) =>
   material.matID.toLowerCase().includes(searchKey) ||
   material.matName.toLowerCase().includes(searchKey) ||
   material.category.toLowerCase().includes(searchKey)
)

this.setState({material:result})

}

//Search Function
handleSearchArea = (e) =>{

  const searchKey= e.currentTarget.value;

  axios.get("http://localhost:8000/material").then(res =>{
      if(res.data.success){

        this.filterData(res.data.existingPosts,searchKey)

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
         <a class="nav-link" href="/matDash">Dashboard</a>
       </li>
      <li class="nav-item">
        <a class="nav-link" href=""> &#62; Material Card  <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
    </nav> 




<hr/>

   {/* Title        */}
  <div className="container bg-info rounded-3">
        <div className="row">
        <center>
          <div className="col-lg-12 mt-2 mb-2">
           
          <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>
          ALL MATERIAL CARDS
             </b></h1>
           
          </div>
        </center>
              

{/* Filter Category */}
<div className="p-3 mb-2 text-light rounded-3" style={{ backgroundColor: "#0E3662" }} >
          <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios2">
    ALL
  </label>
</div>

          <div class="form-check" >
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="fabric" onChange={this.handleSearchArea} />
  <label class="form-check-label" for="exampleRadios1">
    Fabrics
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="accessory" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios2">
    Accessories
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="packing" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios3">
    Packing Materials
  </label>
</div>

</div>
 </div>
       

       <center>
        <div  className="col-lg-3 mt-2 mb-2">
          {/* Searchbar */}
          <input
          className="form-control "
          type="search"
          placeholder="Search Material"
          name="searchQuery"
          onChange={this.handleSearchArea}>

          </input>
          </div>
          </center>

    <hr/>


         {/* Add new material button */}
        <button className="btn btn-info" style={{ backgroundColor: "#0E3662" }} ><a href="/matadd" style={{textDecoration:'none',color:'white'}}>Add New Material &nbsp;
        <i class="fas fa-plus-circle"></i> 
          </a></button>

         
           
      <br/>
      <br/>


         <div class="p-3 mb-2 bg-primary text-dark rounded-3">
        {/* Material Table */}
         <table className="table table-hover  table table-bordered border-info table table-info table-striped" style={{marginTop:'5px'}}>
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">Material ID</th>
               <th scope="col">Material Name</th>
               <th scope="col">Supplier ID</th>
               <th scope="col">Suppler Name</th>
               
               <th scope="col">Shipment ID</th>
               <th scope="col">Price <br/>(Rs.)</th>
               <th scope="col">Qty</th>
               <th scope="col">Category</th>
               <th scope="col">Description</th>
               <th scope="col">Action</th>

             </tr>
           </thead>
           <tbody>
             {/* Get data to the table using a map */}
             {this.state.material.map((material,index) =>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>
                      <a href={`/matpost/${material._id}`} style={{textDecoration:'none'}}>
                      {/* {material.matID} */}
                      {`MAT${material._id.substr(0,7)}`}
                      </a>
                      </td>
                    <td>{material.matName}</td>
                    <td>{material.supID}</td>
                    <td>{material.supName}</td>
                   
                    <td>{material.shipID}</td>
                    <td>{material.price}</td>
                    <td>{material.qty}</td>
                    <td>{material.category}</td>
                    <td>{material.description}</td>
                    <td>
                      {/* Edit button */}
                      <a className="btn btn-info" href={`/matedit/${material._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      {/* Delete Button */}
                      <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(material._id)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>
                    </td>

                  </tr>


            ))}
            </tbody>          
         </table>
         
       

   

         </div>
         <br/>
        </div>
        
        </div>
        
        </div>
        
        {/* Footer Section */}
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
