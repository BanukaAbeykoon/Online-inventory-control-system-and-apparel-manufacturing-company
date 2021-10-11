import axios from 'axios';
import React, { Component } from 'react'
import Swal from 'sweetalert2';

export default class Editdriver extends Component {



    constructor(props){
        super(props);
        this.state={
            name:"",
            age:"",
            nic:"",
            address:"",
            nameError:"",
            ageError:"",
            nicError:"",
            addressError:""
        }
    }
    handleInputChange=(e)=>{
        const {name,value}=e.target;
 
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    validate= ()=>{
        let nameError="";
        let ageError="";
        let nicError="";
        let addressError="";
 
        if(!this.state.name){
            nameError="*Name is Required!"
        }
        if(!this.state.nic){
            nicError="* NIC is Required!"
        }
        else if (!this.state.nic.match('[0-9+]{10}[vV|xX]$')){
         nicError= '*Please Enter valid Nic!'
         }

         else if (this.state.nic.match('-')){
            nicError= '*Please Enter valid Nic!'
            }
 
         //  else if (!this.state.nic.validate){
         // nicError= '*NIC already exists!'
 
         // }
 
 
 
        if(!this.state.address){
         addressError="* Address is Required!"
          }
         if(!this.state.age){
         ageError="* Age is Required"
         }

         if(this.state.age.toString().match('-')){
            ageError="* Age should not be negetive"
            }
  
 
         if(nameError||ageError||nicError||addressError){
         this.setState({nameError,ageError,nicError,addressError});
         return false;
 
         }
 
     return true;
 
    }
 


    
    onSubmit=(e)=>{
        const id = this.props.match.params.id;
        e.preventDefault();
        const isValid= this.validate();
        const {name,age,nic,address}= this.state;
 
        const data={
            name:name,
            age:age,
            nic:nic,
            address:address
        }
        if(isValid){
        console.log(data)
 
        axios.put(`/driver/DriHome/updatedriver/${id}`,data).then((res)=>{
            if(res.data.success){
                this.setState({
                 name:"",
                 age:"",
                 nic:"",
                 address:""
                })
            Swal.fire("Updated!", "Driver Updated Successfully","success")
            }
        })
    }
}
 
    
    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/driver/DriHome/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                   name:res.data.driver.name,
                   age:res.data.driver.age,
                   nic:res.data.driver.nic,
                   address:res.data.driver.address


                });
                console.log(this.state.driver);
                
            }
        })
    }

    
    render() {
        return (

            <div>
                <hr/>
                <div id="wrapper" className="toggled">
                <div id="page-content-wrapper">
                <div className="container-fluid">


                    <div className= 'col-md-8 mt-8-4 mx-auto'>
              <h1 className="h3 mb-3 font-weight-normal">EDIT DRIVER</h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/DriHome" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>See Driver List</a></button>
                    </div>          
               <form className="form-group" style={{marginBottom:'15px'}}> 
                <div>
                   <lable style={{marginBottom:'15px'}}>Driver Name</lable>
                    <input type='text' placeholder='Enter Name' className = 'form-control'
                    name="name" value={this.state.name} onChange={this.handleInputChange}/> 
                      <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.nameError}
                   </div>

                    <lable style={{marginBottom:'15px'}}>Driver Age</lable>
                    <input type='text' placeholder='Enter Age' className = 'form-control'
                    name="age" value={this.state.age} onChange={this.handleInputChange}/> 
                          <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.ageError}
                   </div>


                    <lable style={{marginBottom:'15px'}}>Driver NIC</lable>
                    <input type='text' placeholder='Enter NIC' className = 'form-control'
                    name="nic" value={this.state.nic} onChange={this.handleInputChange}/> 
                              <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.nicError}
                   </div>
                
                    <lable style={{marginBottom:'15px'}}>Driver Address</lable>
                    <textarea  cols='30' rows='5' placeholder='Address' className='form-control'            
                     name="address" value={this.state.address} onChange={this.handleInputChange}/> <br/>
                          <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.addressError}
                   </div>


                    <button  className='btn btn-success ' type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}> <i className="fas fa-update"></i>&nbsp;UPDATE</button>
                    &nbsp;
                       
                </div>
                </form>
            </div>

            </div>

            </div>
            </div>
            </div>
            
            
            

  
        )
    }
}
