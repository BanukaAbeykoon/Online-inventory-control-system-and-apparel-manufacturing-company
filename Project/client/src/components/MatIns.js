import React, { Component } from 'react'
import axios from 'axios';
import './styleSideNav.css';
import Swal from 'sweetalert2'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


export default class MatIns extends Component {

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
              <a class="nav-link" href="/matins"> &#62; Insights  <span class="sr-only">(current)</span> </a>
            </li>
         
          </ul>
        </div>
      </nav> 
      
      
      
      
      <hr/>
                
            <div className="container p-3 mb-2 bg-info text-dark rounded-3">
              <div className="row">
             
      
      
             
              
      
      
      
      
     
      
      
              <center>
              <div class="btn-group" role="group" aria-label="Basic example">
             
              <a href="/matRet"><button type="button" class="btn btn-info">1</button></a>
  
              <a href="/matRet"><button type="button" class="btn btn-primary" >2</button></a>
              <a href="/matRet"><button type="button" class="btn btn-info">3</button></a>
</div>
</center>
           
      
      
      
              </div>

<hr/>
<center>
<h1><b>INVENTORY SUMMARY</b></h1>
</center>
  
              <ReactHTMLTableToExcel
              
                        id="test-table-xls-button"
                        className="btn btn-warning"
                        table="tableee"
                        filename="tablexls"
                        sheet="tablexls"
                        buttonText="Download Report" />


      
             
    <br/>
      
                 
            
      
      
               <div class="p-3 mb-2 bg-info text-dark rounded-3">
               <table id="tableee" className="table table-hover  table table-bordered border-info table table-info table-striped" style={{marginTop:'5px'}}>
                 <thead>
                   <tr>
                     <th scope="col">#</th>
                     <th scope="col">Material ID</th>
                     
                     <th scope="col">Supplier ID</th>
                     
                     
                     <th scope="col">Shipment ID</th>
                     <th scope="col">Price</th>
                     <th scope="col">Qty</th>
                     <th scope="col">Category</th>
                     <th scope="col">Total</th>
                   
                     
                     
      
                   </tr>
                 </thead>
                 <tbody>
                   {this.state.material.map((material,index) =>(
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
                          <td>
                            
                            {material.matID}
                            
                            </td>
                        
                          <td>{material.supID}</td>
                        
                         
                          <td>{material.shipID}</td>
                          <td>Rs.{material.price}.00</td>
                          <td>{material.qty}</td>
                          <td>{material.category}</td>
                          <td>Rs.{material.price*material.qty}.00</td>
                          
                         
                         
      
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
      
