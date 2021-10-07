import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import jsPDF from 'jspdf';

const generatePDF = lmomat => {
  const doc = new jsPDF();
  const tableColumn = ["LMOID", "MATID", "MAT NAME", "QTY", "CATEGORY", "DESCRIPTION"];
  const tableRows = [];

  lmomat.map(lmomat => {
    const lmomatdata = [
      lmomat.lmoID,
      lmomat.matID,
      lmomat.matName,
      lmomat.qty,
      lmomat.category,
      lmomat.description,
   
 ];
    tableRows.push(lmomatdata);
  })
  doc.text("CASANOVA", 70,8).setFontSize(13);
  doc.text("LMO SUMMURY", 14, 16).setFontSize(13); 
  doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
  doc.save("LMOSUMMARY.pdf");
}


export default class MatInsTwo extends Component {
constructor(props){
  super(props);

  this.state={
    lmomat:[]
  };
}


componentDidMount(){
  this.retriveLmo();
}


retriveLmo(){
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






  render() {
    return (


      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
            <div className="container-fluid">

      
      
            
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
        <a class="nav-link" href=""> &#62; Insights <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 





      
      
      
      
      
      
      
<hr/> 
      
      <div className="container p-3 mb-2 bg-info bg-gradient  rounded-3">


      
           
        
      <center>
              <div class="btn-group" role="group" aria-label="Basic example">
             
              <a href="/matins"><button type="button" class="btn btn-primary">INVENTORY</button></a>
              &nbsp;
  
              <a href="/matinstwo"><button type="button" class="btn btn-primary" >MATERIAL</button></a>
              
</div>
</center>
 
<hr/> 
<center>
<h1><b>LMO SUMMARY</b></h1>
</center>

&nbsp;&nbsp;&nbsp;&nbsp;
<ReactHTMLTableToExcel
              
              id="test-table-xls-button"
              className="btn btn-warning"
              table="tablee"
              filename="LMO Summary"
              sheet="tablexls"
              buttonText="Download Excell" />

<button
                  type="button"
                  style={{ backgroundColor: "#00000", padding: "7px" }}
                  class="btn btn-secondary btn-sm"
                  onClick={() => generatePDF(this.state.lmomat)}
                >
                  Download PDF
                </button>

         
         
        <div class="p-3 mb-2 bg-info text-dark rounded-3">
         <table id="tablee" className="table table-hover  table table-bordered border-info table table-info table-striped"style={{marginTop:'5px'}}>
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">LMOID</th>
               <th scope="col">MatID</th>
               <th scope="col">MatName</th>
             <th scope="col">Qty</th>
               <th scope="col">Category</th>
               <th scope="col">Description</th>
               

             </tr>
           </thead>
           <tbody>
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
