import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';



export default class MatReportMain extends Component {
//Binding event handler method  
constructor(props){
  super(props);
  //Initializing local state by assigning an object to this.state
  this.state={
    matreport:[]
  };
}

//load data from a remote endpoint
componentDidMount(){
  this.retriveReport();
}


retriveReport(){
  //get server side http module to get data to client side Http request
  axios.get("http://localhost:8000/matreport").then(res =>{
      if(res.data.success){
        this.setState({
          matreport:res.data.existingPosts
        });

        console.log(this.state.matreport);
      }

  });
}

//delete a material card

onDelete = (id) =>{

  axios.delete(`http://localhost:8000/matreport/deletematreport/${id}`).then((res) =>{
    Swal.fire('Deleted','Report Deleted Successfilly','success')
    this.retriveReport();
  })
}

//filter data
filterData(matreport,searchKey){

  const result = matreport.filter((matreport) =>
  // matreport.matreportID.toLowerCase().includes(searchKey) ||
  matreport.matID.toLowerCase().includes(searchKey) ||
  matreport.matName.toLowerCase().includes(searchKey) ||
  matreport.date.toLowerCase().includes(searchKey)
  )
  
  this.setState({matreport:result})
  
  }
  
  //Search Function
  handleSearchArea = (e) =>{
  
    const searchKey= e.currentTarget.value;
  
    axios.get("http://localhost:8000/matreport").then(res =>{
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
        <a class="nav-link" href=""> &#62; Reports  <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 

<hr/> 
      {/* Title        */}
      <div className="container p-3 mb-2 bg-primary bg-gradient text-white rounded-3">

       
      <center> 
          <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>
           
          
             ALL REPORTS
           </b>
             </h1>
             </center>
           
        

        {/* Add new report button */}
        <button className="btn btn-info" style={{ backgroundColor: "#0E3662" }}><a href="/matreportadd" style={{textDecoration:'none',color:'white'}}>Add New Report &nbsp;
        <i class="fas fa-plus-circle"></i>
        </a></button>

        <center>
        <div  className="col-lg-3 mt-2 mb-2">
          {/* Searchbar */}
          <input
          className="form-control "
          type="search"
          placeholder="Search Report"
          name="searchQuery"
          onChange={this.handleSearchArea}>

          </input>
          </div>
          </center>

         <div class="p-3 mb-2 bg-info text-dark rounded-3">
          {/* Report Table */} 
         <table className="table table-hover  table table-bordered border-info table table-info table-striped"style={{marginTop:'5px'}}>
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">Report ID</th>
               <th scope="col">Material ID</th>
               <th scope="col">Material Name</th>
               <th scope="col">Date</th>
             <th scope="col">Shipment ID</th>
               <th scope="col">Defect</th>
               <th scope="col">Qty</th>
               <th scope="col">Action</th>

             </tr>
           </thead>
           <tbody>
             {/* Get data to the table using a map */}
             {this.state.matreport.map((matreport,index) =>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                     
                    <td>
                    <a href={`/matreportone/${matreport._id}`} style={{textDecoration:'none'}}>
                      {/* {matreport.matreportID} */}
                      {`RP${matreport._id.substr(0,7)}`}
                      </a>
                      </td>
                    <td>
                      
                      {matreport.matID}
                    
                      </td>
                    <td>{matreport.matName}</td>
                   
                    <td>{matreport.date}</td>
                    <td>{matreport.shipID}</td>
                    <td>{matreport.defect}</td>
                    <td>{matreport.qty}</td>
                    <td>
                      {/* Edit button */}
                      <a className="btn btn-info" href={`/matreportedit/${matreport._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      {/* Delete Button */}
                      <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(matreport._id)}>
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
