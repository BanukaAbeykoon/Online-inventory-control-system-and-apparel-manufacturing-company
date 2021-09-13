import React, { Component } from 'react'
import axios from 'axios'
import './DriHome.css'
import Swal from 'sweetalert2';

export default class VehicleSchedule extends Component {
    constructor(props){
        super(props);
    
        this.state={
          vehicleschedule:[]
        }
      }
      componentDidMount(){
        this.getdriver();
      }

      getdriver(){
        axios.get("http://localhost:8000/vehicleschedule/VehicleSchedule").then(res=>{
          if(res.data.success){
            this.setState({
                vehicleschedule:res.data.existingPosts
            });
            console.log(this.state.vehicleschedule)
          }
        })
      }

      onDelete=(id)=>{
        axios.delete(`/vehicleschedule/deletevehicle/${id}`).then((res)=>{
          Swal.fire("Deleted","Driver Delete Successfully","warning")
          this.getdriver();
        })
      }
      filterData(vehicleschedule,searchresult){
        const result = vehicleschedule.filter((vehicleschedule)=>
        vehicleschedule.regno.toLowerCase().includes(searchresult)||
        vehicleschedule.brandname.toLowerCase().includes(searchresult)
        
        )
        this.setState({vehicleschedule:result})
      }

      handlesearch=(e)=>{
        const searchresult= e.currentTarget.value
        axios.get("http://localhost:8000/vehicleschedule/VehicleSchedule").then(res=>{
          if(res.data.success){
            
              this.filterData(res.data.existingPosts,searchresult)
           
           
          }
        })

      }


      render() {
        return (
          <div className="container">
             <div className="row justify-content-center ">
                  <div  className="col-9 ">
                  <h1 style={{backgroundColor:'black', color:'white', padding:'5px',textAlign:'center',opacity:".50"}}>Vehicle Schedule</h1>
             
              <div className="d-grid gap-2 d-md-flex justify-content-md-end" role="group" aria-label="Basic example">
                         <button type="button" className="btn btn-warning"><a href="/vehicleDash" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-truck-monster"></i>Vehicle List</a></button>
                         <button type="button" className="btn btn-success"><a href="/TMSDash" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-home"></i>Home</a></button>
                        
                    </div>   
         
                        <div className="col-lg-3 mt-2 mb-2">
                            <input className="form-control" 
                            type="search" placeholder="search" 
                            name="search" 
                            onChange={this.handlesearch}>
          
                             </input>
                        </div>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Registration NO</th>
                  
                    <th scope="col">Brand Name </th>
                   
                    <th scope="col">Action</th>
    
                  </tr>
                </thead>
                <tbody>
                    {this.state.vehicleschedule.map((vehicleschedule,index)=>(
                      <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{vehicleschedule.regno}  </td>
                            
                        
                        
                        <td>{vehicleschedule.brandname}</td>
                       
                        
                       
                       
                        <td>
                          <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(vehicleschedule._id)}><i className="fas fa-trash-alt"></i>Delete</a>
                        </td>
    
                      </tr>
                    ))}
                </tbody>
            </table>
           


            
         
          
          
        </div>
            
        </div>
    
    </div>
  
    
    
  

         
        )}
      
}
