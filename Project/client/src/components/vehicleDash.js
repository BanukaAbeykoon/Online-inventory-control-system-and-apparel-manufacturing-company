import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert2'
import './vehicleDash.css'
import Nav from './DriNav' 

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

    filterData(vehicle,searchresult){
      const result = vehicle.filter((vehicle)=>
        vehicle.regno.toLowerCase().includes(searchresult)||
        vehicle.engno.toLowerCase().includes(searchresult)||
        vehicle.brandname.toLowerCase().includes(searchresult)||
        vehicle.manuyear.toLowerCase().includes(searchresult)
      )
      this.setState({vehicle:result})
    }

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
          <div className= "container">
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
                            <i className="fas fa-edit"></i>&nbsp;Edit&nbsp;</a>
                        </td>
                        <td>
                      <a className="btn btn-primary" href={`/vehicleDash/Vehischedule/${vehicle._id}`}>
                        <i className="fas fa-list"></i>&nbsp;Schedule</a>
                    </td>
                       
                        <td>
                          <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(vehicle._id)} ><i className="fas fa-trash-alt"></i>Delete</a>
                        </td>
    
                      </tr>
                    ))}
                </tbody>
            </table>
    
            <button className="btn btn-success"><a href= "/AddVehicle" style={{textDecoration:'none',color:'white'}}>Add New Vehicle</a></button>
            
              </div>
            
            
            
              
            </div>
          
          </div>
        )}
}
