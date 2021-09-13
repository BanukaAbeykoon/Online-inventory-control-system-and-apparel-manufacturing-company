import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';

export default class schedule extends Component {
    constructor(props){
        super(props);
        this.state={
           name:"",
           nic:""
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
 
        const {name,nic}= this.state;
 
        const data={
            name:name,
           
            nic:nic
           
        }
 
        console.log(data)
 
        axios.post("http://localhost:8000/driver/Driverschedule/save",data).then((res)=>{
            if(res.data.success){
                this.setState({
                 name:"",
                
                 nic:""
                
                })
                Swal.fire("Updated","Driver Schedule Updated","success")
            }
        })
    }
 

    componentDidMount(){
       const id = this.props.match.params.id;
       
       axios.get(`http://localhost:8000/driver/DriHome/${id}`).then((res)=>{
           if(res.data.success){
               this.setState({
                name:res.data.driver.name,
                nic:res.data.driver.nic
               });
               console.log(this.state.driver);
           }
       })
      
    }

    render() {

       
        return (
           <div>
                 <hr/>
                <div className= 'col-md-8 mt-8-4 mx-auto'>
              <h1 className="h3 mb-3 font-weight-normal">Driver Schedule</h1>
             
                       
            
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end" role="group" aria-label="Basic example">
                         <button type="button" className="btn btn-warning"><a href="/DriHome" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-user-tie"></i>Driver List</a></button>
                         <button type="button" className="btn btn-warning"><a href="/Driverschedule" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>See Schedule</a></button>
                        
                    </div> 

                  
                        
                       
               <form className="form-group" style={{marginBottom:'15px'}}> 
                <div>
                   <lable style={{marginBottom:'15px'}}>Driver Name</lable>
                    <input disabled type='text' placeholder='Enter Name' className = 'form-control'
                    name="name" value={this.state.name} onChange={this.handleInputChange}/> 

                   

                    <lable style={{marginBottom:'15px'}}>Driver NIC</lable>
                    <input disabled type='text' placeholder='Enter NIC' className = 'form-control'
                    name="nic" value={this.state.nic} onChange={this.handleInputChange}/> 

                
                    <button  className='btn btn-success ' type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}> <i className="fas fa-update"></i>&nbsp;Save</button>
                    &nbsp;
                       
                </div>
                </form>
                 
            </div>
           </div>
        )
    }
}
