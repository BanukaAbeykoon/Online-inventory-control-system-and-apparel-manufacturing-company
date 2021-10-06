import React, { Component } from 'react'
import axios from 'axios';
import './styleSideNav.css';
import Swal from 'sweetalert2'





export default class MaterialDash extends Component {
constructor(props){
  super(props);

  this.state={
    material:[]
  };
}


 


componentDidMount(){
  this.retriveMaterial();
}


retriveMaterial(){
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
        <a class="nav-link" href="/matDash">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=""> &#62; Material Card  <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 




<hr/>
          
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>
           
            <p class="fw-bold">
              ALL MATERIAL CARDS
              </p>
            
              </h4>
               </div>


             
          <div  className="col-lg-3 mt-2 mb-2 ">
          
            <input
            className="form-control "
            type="search"
            placeholder="Search Material"
            name="searchQuery"
            onChange={this.handleSearchArea}>

            </input>
             
          </div>
        




<div className="p-3 mb-2 bg-dark text-light rounded-3">
          <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios2">
    ALL
  </label>
</div>

          <div class="form-check">
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
        <hr/>


        <button className="btn btn-primary"><a href="/matadd" style={{textDecoration:'none',color:'white'}}>Add New Material &nbsp;
        <i class="fas fa-plus-circle"></i> 
          </a></button>

         <br/>
         <br/>

           
      


         <div class="p-3 mb-2 bg-info text-dark rounded-3">
         <table className="table table-hover  table table-bordered border-info table table-info table-striped" style={{marginTop:'5px'}}>
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">Material ID</th>
               <th scope="col">Material Name</th>
               <th scope="col">Supplier ID</th>
               <th scope="col">Suppler Name</th>
               
               <th scope="col">Shipment ID</th>
               <th scope="col">Price</th>
               <th scope="col">Qty</th>
               <th scope="col">Category</th>
               <th scope="col">Description</th>
               <th scope="col">Action</th>

             </tr>
           </thead>
           <tbody>
             {this.state.material.map((material,index) =>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>
                      <a href={`/matpost/${material._id}`} style={{textDecoration:'none'}}>
                      {material.matID}
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
                      <a className="btn btn-info" href={`/matedit/${material._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(material._id)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>
                    </td>

                  </tr>


            ))}
            </tbody>          
         </table>
         
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
