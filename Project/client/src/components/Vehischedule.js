import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';

export default class Vehischedule extends Component {
    constructor(props){
        super(props);
        this.state={
           regno:"",
           brandname:""
        };
    }
    handleInputChange=(e)=>{
        const {name,value}=e.target;
 
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit=(e)=>{
        //const id = this.props.match.params.id;
        e.preventDefault();
 
        const {regno,brandname}= this.state;
 
        const data={
            regno:regno,
           
            brandname:brandname
           
        }
 
        console.log(data)
 
        axios.post("/vehicle/VehicleSchedule/save",data).then((res)=>{
            if(res.data.success){
                this.setState({
                 regno:"",
                
                 brandname:""
                
                })
                Swal.fire("Updated","vehicle Schedule Updated","success")
            }
        })
    }
 

    componentDidMount(){
       const id = this.props.match.params.id;
       
       axios.get(`http://localhost:8000/vehicle/vehicleDash/${id}`).then((res)=>{
           if(res.data.success){
               this.setState({
                regno:res.data.vehicle.regno,
                brandname:res.data.vehicle.brandname
               });
               console.log(this.state.vehicle);
           }
       })
      
    }

    render() {

       
        return (
           <div>
               <hr/>
                <div className= 'col-md-8 mt-8-4 mx-auto'>
              <h1 className="h3 mb-3 font-weight-normal">Vehicle Schedule</h1>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end" role="group" aria-label="Basic example">
                         <button type="button" className="btn btn-warning"><a href="/vehicleDash" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-truck-monster"></i>Vehicle List</a></button>
                         <button type="button" className="btn btn-warning"><a href="/VehicleSchedule" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>See Schedule</a></button>
                        
                    </div>      
               <form className="form-group" style={{marginBottom:'15px'}}> 
                <div>
                   <lable style={{marginBottom:'15px'}}>Registration NO </lable>
                    <input disabled type='text' placeholder='Enter No' className = 'form-control'
                    name="regno" value={this.state.regno} onChange={this.handleInputChange}/> 

                   

                    <lable style={{marginBottom:'15px'}}>Brand Name</lable>
                    <input disabled type='text' placeholder='Enter Name' className = 'form-control'
                    name="brandname" value={this.state.brandname} onChange={this.handleInputChange}/> 

                
                    <button  className='btn btn-success ' type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}> <i className="fas fa-update"></i>&nbsp;Save</button>
                    &nbsp;
                       
                </div>
                </form>
            </div>
           </div>
        )
    }
}