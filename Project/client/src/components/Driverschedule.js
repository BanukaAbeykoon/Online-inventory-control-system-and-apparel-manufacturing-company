import React, { Component } from 'react'
import axios from 'axios'
import './DriHome.css'
import './VehicleSchedule'
import Swal from 'sweetalert2'

export default class Driverschedule extends Component {
    constructor(props){
        super(props);
    
        this.state={
          driverschedul:[]
       
        }
      }
      componentDidMount(){
        this.getdriver();
      }

      getdriver(){
        axios.get("http://localhost:8000/driverschedul/Driverschedule").then(res=>{
          if(res.data.success){
            this.setState({
                driverschedul:res.data.existingPosts
            });
            console.log(this.state.driverschedul)
          }
        })
      }

      onDelete=(id)=>{
        axios.delete(`/driverschedul/deletedriver/${id}`).then((res)=>{
          Swal.fire("Deleted","Driver Delete Successfully","warning")
          this.getdriver();
        })
      }

      filterData(driverschedul,searchresult){
        const result = driverschedul.filter((driverschedul)=>
        driverschedul.name.toLowerCase().includes(searchresult)||
    
        driverschedul.nic.toLowerCase().includes(searchresult)
        
        )
      
        this.setState({driverschedul:result})
      
      }
      
      handlesearch=(e)=>{
        const searchresult = e.currentTarget.value
        axios.get("http://localhost:8000/driverschedul/Driverschedule").then(res=>{
          if(res.data.success){
          this.filterData(res.data.existingPosts,searchresult)
             }
         });
      }
      


      render() {
        return (

          <div>

          

          <div className="container">
          
             
          <div className="row justify-content-center ">
              <div  className="col-9 ">
              <h1 style={{backgroundColor:'black', color:'white', padding:'5px',textAlign:'center',opacity:".50"}}>Driver Schedule</h1>
         
          <div className="d-grid gap-2 d-md-flex justify-content-md-end" role="group" aria-label="Basic example">
                     <button type="button" className="btn btn-warning"><a href="/DriHome" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-user-tie"></i>Driver List</a></button>
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
                <th scope="col">Driver Name</th>
              
                <th scope="col">NIC </th>
               
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
                {this.state.driverschedul.map((driverschedul,index)=>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{driverschedul.name}  </td>
                        
                    
                    
                    <td>{driverschedul.nic}</td>
                   
                    
                   
                   
                    <td>
                      <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(driverschedul._id)}><i className="fas fa-trash-alt"></i>Delete</a>
                    </td>

                  </tr>
                ))}
            </tbody>
        </table>

       


        
     
      
      
    </div>
        
    </div>

</div>

          </div>
         
    
    
  

         
        )}
      
}
