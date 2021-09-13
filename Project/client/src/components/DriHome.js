import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import './DriHome.css'




//import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class DriHome extends Component {

  constructor(props){
    super(props);

    this.state={
      driver:[]
    }
  }
componentDidMount(){
  this.getdriver();
}
  getdriver(){
    axios.get("http://localhost:8000/driver/DriHome").then(res=>{
      if(res.data.success){
        this.setState({
          driver:res.data.existingPosts
        });
        console.log(this.state.driver)
      }
    })
  }

onDelete=(id)=>{
  axios.delete(`/driver/deletedriver/${id}`).then((res)=>{
    Swal.fire("Deleted","Driver Delete Successfully","warning")
    this.getdriver();
  })
}

filterData(driver,searchresult){
  const result = driver.filter((driver)=>
  driver.name.toLowerCase().includes(searchresult)||
//driver.age.toLowerCase().includes(searchresult)||
  driver.nic.toLowerCase().includes(searchresult)||
  driver.address.toLowerCase().includes(searchresult)
  )

  this.setState({driver:result})

}

handlesearch=(e)=>{
  const searchresult = e.currentTarget.value
  axios.get("http://localhost:8000/driver/DriHome").then(res=>{
    if(res.data.success){
    this.filterData(res.data.existingPosts,searchresult)
       }
   });
}


  render() {
    return (
      <div class="container">
          <div class="row justify-content-evenly">
              <div  class="col-9">
          <h1 style={{backgroundColor:'black', color:'white', padding:'5px',textAlign:'center',opacity:".50"}}>Driver Management</h1>
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
        <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Driver Name</th>
                <th scope="col">Age</th>
                <th scope="col">NIC </th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
                {this.state.driver.map((driver,index)=>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{driver.name}</td>
                    <td>{driver.age}</td>
                    <td>{driver.nic}</td>
                    <td>{driver.address}</td>
                    <td>
                      <a className="btn btn-primary" href={`/DriHome/Editdriver/${driver._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit</a>
                    </td>
                    <td>
                      <a className="btn btn-primary" href={`/DriHome/schedule/${driver._id}`}>
                        <i className="fas fa-list"></i>&nbsp;Schedule</a>
                    </td>
                   
                    <td>
                      <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(driver._id)}><i className="fas fa-trash-alt"></i>Delete</a>
                    </td>

                  </tr>
                ))}
            </tbody>
        </table>

        <button className="btn btn-success"><a href= "/AddDriver" style={{textDecoration:'none',color:'white'}}><i className="fas fa-plus-circle"></i>Add New Driver</a></button>
        
          </div>

        </div>
      
        
        
      </div>
    )}
  


 }
              
    
