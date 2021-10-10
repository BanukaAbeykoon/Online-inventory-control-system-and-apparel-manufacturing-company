
import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import moment from 'moment';



export default class AddVehicle extends Component {
    constructor(props){
        super(props);
        this.state={
            regno:"",
            engno:"",
            brandname:"",
            manuyear:"",
           regnoError:"",
           engnoError:"",
           brandnameError:"",
           manuyearError:""

        }
    }

    handleInputChange=(e)=>{
        const{name,value}=e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
   
   
   
    }
    
 

    validate=()=>{
        let regnoError="";
        let engnoError="";
        let brandnameError="";
        let manuyearError="";

        if(!this.state.regno){
            regnoError= '*Register Number is Required!'
        }
        else if (!this.state.regno.includes('-')){
            regnoError= '*Please enter valid Register Number!'
        }

        if(!this.state.engno){
            engnoError="*Engine Number is Required! "
        }
        if(!this.state.brandname){
            brandnameError="*Brand Name is Required!"
        }

        if(!this.state.manuyear){
            manuyearError="*Manufacture year   is Required!"
        }
       


        if(regnoError||engnoError||brandnameError||manuyearError){
            this.setState({regnoError,engnoError,brandnameError,manuyearError});
            return false;
        }
        return true;
    }

  

    onSubmit=(e)=>{
        e.preventDefault();

        const isValid= this.validate();
        const{regno,engno,brandname,manuyear}=this.state;

     
        
        const data={
            regno:regno,
            engno:engno,
            brandname:brandname,
            manuyear:manuyear
        }

        if(isValid){

        
          
        console.log(data)

        axios.post("http://localhost:8000/vehicle/save",data).then((res)=>{
            if(res.data.success){
                this.setState({
                    regno:"",
                    engno:"",
                    brandname:"",
                    manuyear:"",
                    regnoError:"",
                    engnoError:"",
                    brandnameError:"",
                    manuyearError:""
                })
            }
            Swal.fire("Added!","Vehicle Added Successfully","success")
        })

    }
    };
    
    btnDemo = (e) => {
        e.preventDefault();
    
        const {  regno,engno,brandname, manuyear} = this.state;
    
        const data = {
               regno:regno,
               engno:engno,
               brandname:brandname,
               manuyear: manuyear,
        }
    
        console.log(data)
    
        this.setState(
            {
                regno:"TC-2345",
                engno:"54xxGC",
                brandname:"Mitsubishi L200",
                manuyear: "",
            }
        )
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
        <a class="nav-link" href="/vehicleDash"> &#62; Vehicle Details</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=""> &#62; Add Vehicle <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 
<br/>
            
            <div className= 'col-md-8 mt-8-4 mx-auto'>
              <h1 className="h3 mb-3 font-weight-normal">ADD NEW VEHICLE</h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/vehicleDash" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>See Vehicle List</a></button>
                    </div>         
               <form className="form-group" style={{marginBottom:'15px'}}> 
                <div>
                   <lable style={{marginBottom:'15px'}}>Registration NO</lable>
                    <input type='text' placeholder='Enter No' className = 'form-control'
                    name="regno" value={this.state.regno} onChange={this.handleInputChange} required/> 

                    <div className="text-danger" style={{fontSize:12 ,color:"red"}}>
                           {this.state.regnoError}
                   </div>
                </div>
                
                
                <div>

                    <lable style={{marginBottom:'15px'}}>Engine NO</lable>
                    <input type='text' placeholder='Enter NO' className = 'form-control'
                    name="engno" value={this.state.engno} onChange={this.handleInputChange} required/> 
                   
                   <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.engnoError}
                   </div>
                </div>
                   


                <div>
                     <lable style={{marginBottom:'15px'}}> Brand Name</lable>
                    <input type='text' placeholder='Enter Name' className = 'form-control'
                    name="brandname" value={this.state.brandname} onChange={this.handleInputChange} required/> 

                    <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.brandnameError}
                   </div>

                </div>
                   

                <div>
                      <lable style={{marginBottom:'15px'}}>Year of Manufacture</lable>
                    <input type="date" placeholder='Enter Date' className='form-control'            
                     name="manuyear" value={this.state.manuyear} onChange={this.handleInputChange} max={moment().format("YYYY-MM-DD")} required/> 
                        <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.manuyearError}
                   </div>
                     
                     <br/>

                  
                    
                </div>
                  
                   <div> 
                    <button  className='btn btn-success ' type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}> <i className="fas fa-save"></i>&nbsp;Save</button>
                    &nbsp;

                    <button type="submit" className="btn btn-dark" style={{ marginTop: '15px', marginBottom:'20px', marginLeft:"900px", width:"140px", backgroundColor:"#2E4661", borderRadius:"10px", padding:"10px 0px 10px 0px"}} onClick={this.btnDemo}>Demo</button>
                       
                </div>
                </form>
            </div>

            </div>
            </div>
            </div>
            

  
        )
    }
}
