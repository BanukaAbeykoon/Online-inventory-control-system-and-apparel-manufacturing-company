import React, { Component } from 'react'
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import jsPDF from 'jspdf';

//PDF generate
const generatePDF = matreport => {
    const doc = new jsPDF();
    const tableColumn = [  "MAT NAME", "DATE", "SHIPMENT ID", "DEFECT", "QTY"];
    const tableRows = [];
  
    // Generate according to the map
    matreport.map(matreport => {
      const matreportdata = [
       
        
        matreport.matName,
        matreport.date,
        matreport.shipID,
        matreport.defect,
        matreport.qty,
     
   ];
      tableRows.push(matreportdata);
    })
    // PDF Details
    doc.text("CASANOVA", 70,8).setFontSize(13);
    doc.text("REPORTING SUMMURY", 14, 16).setFontSize(13); 
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
    doc.save("REPORTINGSUMMARY.pdf");
  }

//Binding event handler method
export default class MatInsThree extends Component {
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



 //filter data
 filterData(matreport,searchKey){

    const result = matreport.filter((matreport) =>
      //  matreport.matreportID.toLowerCase().includes(searchKey) ||
       matreport.matID.toLowerCase().includes(searchKey) ||
       matreport.date.toLowerCase().includes(searchKey)||
       matreport.defect.toLowerCase().includes(searchKey)
      
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
        <a class="nav-link" href="/matinsthree"> &#62; Insights  <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 

<div class="card">
  <div class="card-body">
    <h5 class="card-title">INSTRUCTIONS</h5>

    <div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    <p class="card-text">Imagine having just the right number of products for a certain SKU, given demand -- but your team is working with old data and, based on that data, projects that your inventory will fall short of demand in a month. It is obvious what your team would do: begin the process of acquiring more inventory to make up the difference. Now there will be excess inventory, and you will be in an Overstock situation.</p>
    <p class="card-text"><small class="text-muted">Latest Regulations</small></p>
  </div>
  <img src="%PUBLIC_URL%../../lmo1.png" class="card-img-bottom" alt="..."/>
</div>



      
      
      
      
      
      
      
<hr/> 
      
      <div className="container p-3 mb-2 bg-info bg-gradient rounded-3">


      <div class="btn-group" role="group" aria-label="Basic example">
             
             <a href="/matins"><button type="button" class="btn btn-primary"style={{ backgroundColor: "#0E3662" }}>INVENTORY</button></a>
             &nbsp;
 
             <a href="/matinstwo"><button type="button" class="btn btn-primary" style={{ backgroundColor: "#0E3662" }}>LMO</button></a>
             &nbsp;
             <a href="/matinsthree"><button type="button" class="btn btn-primary" style={{ backgroundColor: "#0E3662" }}>REPORTING</button></a>
    </div>
    <hr/>
     {/* Title        */}
    <center>
<h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>REPORTING SUMMARY</b></h1>
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
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="error in wool" onChange={this.handleSearchArea} />
  <label class="form-check-label" for="exampleRadios1">
    Error in wool
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="cutting edges" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios2">
  Cutting edges
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="colour patch" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios3">
  Colour patch
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="damaged edges" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios3">
  Damaged edges
  </label>
</div>

</div>


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


{/* print excell      */}
<ReactHTMLTableToExcel
              
              id="test-table-xls-button"
              className="btn btn-warning"
              table="table"
              filename="REPORTING Summary"
              sheet="tablexls"
              buttonText="Download As Excel" />

&nbsp;

<button
                  type="button"
                  style={{ backgroundColor: "#00000", padding: "7px" }}
                  class="btn btn-secondary btn-sm"
                  onClick={() => generatePDF(this.state.matreport)}
                >
                  Download As PDF
                </button>

  {/* Print table          */}
<table id="table" className="table table-hover  table table-bordered border-info table table-info table-striped"style={{marginTop:'5px'}}>
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
             

             </tr>
           </thead>
           <tbody>
             {this.state.matreport.map((matreport,index) =>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                     
                    
                      {/* {matreport.matreportID} */}
                      <td>{`RP${matreport._id.substr(0,7)}`}</td>
                      
                    <td>
                      
                      {matreport.matID}
                    
                      </td>
                    <td>{matreport.matName}</td>
                   
                    <td>{matreport.date}</td>
                    <td>{matreport.shipID}</td>
                    <td>{matreport.defect}</td>
                    <td>{matreport.qty}</td>
                  

                  </tr>


            ))}
            </tbody>          
         </table>

        </div>
        </div>
        </div>
     

{/* Footer section */}
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
