import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert2'
import './vehicleDash.css'
import jsPDF from "jspdf";
import "jspdf-autotable"; 

const generatePDF = vehicle => {
  const doc = new jsPDF();
  const tableColumn = [" Register No", "Engine No", "Brand Name", "Manufacture year"];
  const tableRows = [];

  vehicle.map(vehicle => {
    const vehicledata = [
      vehicle.regno,
      vehicle.engno,
      vehicle.brandname,
      vehicle.manuyear,
     
 ];
    tableRows.push(vehicledata);
  })
  doc.text("CASANOVA", 70,8).setFontSize(13);
  doc.text("Vehicle Detail Report", 14, 16).setFontSize(13); 
  doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
  doc.save("Vehicle details.pdf");
}





export default class vehicleDash extends Component {
    constructor(props){
        super(props);

        this.state={
            vehicle:[]
        }
    }
    componentDidMount(){
        this.getvehicle();
    }

    getvehicle(){
        axios.get("http://localhost:8000/vehicle/vehicleDash").then(res=>{
            if(res.data.success){
                this.setState({
                    vehicle:res.data.existingPosts
                });
                console.log(this.state.vehicle)
            }
        });
    }

    onDelete=(id)=>{
      axios.delete(`http://localhost:8000/vehicle/deletevehicle/${id}`).then((res)=>{
        this.getvehicle();
      swal.fire("Deleted!","Vehicle Deleted Successfull","warning")
      })
    }


    //search
    filterData(vehicle,searchresult){
      const result = vehicle.filter((vehicle)=>
        vehicle.regno.toLowerCase().includes(searchresult)||
        vehicle.engno.toLowerCase().includes(searchresult)||
        vehicle.brandname.toLowerCase().includes(searchresult)||
        vehicle.manuyear.toLowerCase().includes(searchresult)
      )
      this.setState({vehicle:result})
    }

    //search

    handlesearch=(e)=>{
      const searchresult= e.currentTarget.value
      axios.get("http://localhost:8000/vehicle/vehicleDash").then(res=>{
            if(res.data.success){
               this.filterData(res.data.existingPosts,searchresult)
            }
        });
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
        <a class="nav-link" href="/TMSDash">Dashboard</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link" href=""> &#62; Add Vehicle <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 
<br/>


            <div>
                <button
                  type="button"
                  style={{ backgroundColor: "#2E4661", padding: "10px" }}
                  class="btn btn-secondary btn-sm"
                  onClick={() => generatePDF(this.state.vehicle)}
                >
                 <i class="fa-solid fa-file-arrow-down"></i>Generate Report of Drivers
                </button>
              </div>

              <br/>


            <div class="row justify-content-evenly">
              <div  class="col-9">
              <h1 style={{backgroundColor:'black', color:'white', padding:'5px',textAlign:'center' ,opacity:".50"}}>Vehicle Management </h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/TMSDash" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-home"></i>Home</a></button>
                    </div> 
            <div className="col-lg-3 mt-2 mb-2">
          <input className="form-control" 
          type="search" placeholder="search" 
          name="search" 
          onChange={this.handlesearch}>
          
          </input>
        </div>
           
            <table className="table" >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Registration NO</th>
                    <th scope="col">Engine NO</th>
                    <th scope="col">Brand Name </th>
                    <th scope="col">Date of Manufacture</th>
                    <th scope="col">Action</th>
    
                  </tr>
                </thead>
                <tbody>
                    {this.state.vehicle.map((vehicle,index)=>(
                      <tr>
                        <th scope="row">{index+1}</th>
                        <td>{vehicle.regno}</td>
                        <td>{vehicle.engno}</td>
                        <td>{vehicle.brandname}</td>
                        <td>{vehicle.manuyear}</td>
                        <td>
                          <a className="btn btn-primary" href={`/vehicleDash/EditVehicle/${vehicle._id}`}>
                            <i className="fas fa-edit"></i>Edit</a>
                        </td>
                        <td>
                      <a className="btn btn-primary" href={`/vehicleDash/Vehischedule/${vehicle._id}`}>
                        <i className="fas fa-list"></i>Schedule</a>
                    </td>
                       
                        <td>
                          <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(vehicle._id)} ><i className="fas fa-trash-alt"></i>Delete</a>
                        </td>
    
                      </tr>
                    ))}
                </tbody>
            </table>
    
            <button className="btn btn-success"><a href= "/AddVehicle" style={{textDecoration:'none',color:'white'}}><i className="fas fa-plus-circle"></i>Add Vehicle</a></button>
            
              </div>
            
            
            
              
            </div>
          
          </div>
          </div>
          </div>
        )}
}
