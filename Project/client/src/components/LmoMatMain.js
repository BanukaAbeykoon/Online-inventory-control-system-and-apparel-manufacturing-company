import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';



export default class LmoMatMain extends Component {
//Binding event handler method
constructor(props){
  super(props);

  //Initializing local state by assigning an object to this.state
  this.state={
    lmomat:[]
  };
}

//load data from a remote endpoint
componentDidMount(){
  this.retriveLmo();
}


retriveLmo(){
  //get server side http module to get data to client side Http request
  axios.get("http://localhost:8000/lmomat").then(res =>{
      if(res.data.success){
        this.setState({
          lmomat:res.data.existingPosts
        });

        console.log(this.state.lmomat);
      }

  });
}

//delete a material card

onDelete = (id) =>{

  axios.delete(`http://localhost:8000/lmomat/deletelmomat/${id}`).then((res) =>{
    Swal.fire('Deleted','LMO Card Deleted Successfilly','success')
    this.retriveLmo();
  })
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
        <a class="nav-link" href=""> &#62; LMO Card  <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 

<hr/> 
      
<div className="container p-3 mb-2 bg-primary bg-gradient text-white rounded-3">


     
          <center> 
          {/* Title        */}  
          <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>
           All LMO Cards
           </b>
           </h1>
           </center>
        

        {/* Add new LMO button */}
        <button className="btn btn-info" style={{ backgroundColor: "#0E3662" }}><a href="/lmoadd" style={{textDecoration:'none',color:'white'}}>Add New LMO &nbsp;
        <i class="fas fa-plus-circle"></i>
        </a></button>

         <br/>
         <br/>

        <div class="p-3 mb-2 bg-info text-dark rounded-3">
           {/* LMO Table */}
         <table className="table table-hover  table table-bordered border-info table table-info table-striped"style={{marginTop:'5px'}}>
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">LMOID</th>
               <th scope="col">MatID</th>
               <th scope="col">MatName</th>
             <th scope="col">Qty</th>
               <th scope="col">Category</th>
               <th scope="col">Description</th>
               <th scope="col">Action</th>

             </tr>
           </thead>
           <tbody>
             {/* Get data to the table using a map */}
             {this.state.lmomat.map((lmomat,index) =>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>

                    <td>{lmomat.lmoID}</td>
                    <td>
                      
                      {lmomat.matID}
                    
                      </td>
                    <td>{lmomat.matName}</td>
                   
                    <td>{lmomat.qty}</td>
                    <td>{lmomat.category}</td>
                    <td>{lmomat.description}</td>
                    <td>
                      {/* Edit button */}
                      <a className="btn btn-info" href={`/lmoedit/${lmomat._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      {/* Delete Button */}
                      <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(lmomat._id)}>
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
