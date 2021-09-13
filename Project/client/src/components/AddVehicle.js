
import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import { TimerOptions, setErrors } from './../TMSvalidation/TMError';


export default class AddVehicle extends Component {
    constructor(props){
        super(props);
        this.state={
            regno:"",
            engno:"",
            brandname:"",
            manuyear:"",
            errors:{}

        }
    }

    handleInputChange=(e)=>{
        const{name,value}=e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    validate=(regno,engno,brandname,manuyear)=>{

        const errors = setErrors(regno,engno,brandname,manuyear);
        
        this.setState({errors: errors});
        
        return Object.values(errors).every((err) => err === "");
        
        };

    onSubmit=(e)=>{
        e.preventDefault();

        
        const{regno,engno,brandname,manuyear}=this.state;
        if( this.validate=(regno,engno,brandname,manuyear)){
        
        const data={
            regno:regno,
            engno:engno,
            brandname:brandname,
            manuyear:manuyear
        }
        console.log(data)

        axios.post("http://localhost:8000/vehicle/save",data).then((res)=>{
            if(res.data.success){
                this.setState({
                    regno:"",
                    engno:"",
                    brandname:"",
                    manuyear:""
                })
            }
            Swal.fire("Added!","Vehicle Added Successfully","success")
        })

    }
    }





    render() {
        return (
            
            <div className= 'col-md-8 mt-8-4 mx-auto'>
              <h1 className="h3 mb-3 font-weight-normal">ADD NEW VEHICLE</h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/vehicleDash" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>See Vehicle List</a></button>
                    </div>         
               <form className="form-group" style={{marginBottom:'15px'}}> 
                <div>
                   <lable style={{marginBottom:'15px'}}>Registration NO</lable>
                    <input type='text' placeholder='Enter No' className = 'form-control'
                    name="regno" value={this.state.regno} onChange={this.handleInputChange}/> 

                    {this.state.errors.customer && (
                    <div classNane="text-danger" style={{ color:'red'}}>{this.state.errors.customer}</div>
                    )}

                </div>
                
                
                <div>

                    <lable style={{marginBottom:'15px'}}>Engine NO</lable>
                    <input type='text' placeholder='Enter NO' className = 'form-control'
                    name="engno" value={this.state.engno} onChange={this.handleInputChange}/> 
                </div>
                   


                <div>
                     <lable style={{marginBottom:'15px'}}> Brand Name</lable>
                    <input type='text' placeholder='Enter Name' className = 'form-control'
                    name="brandname" value={this.state.brandname} onChange={this.handleInputChange}/> 
                </div>
                   

                <div>
                      <lable style={{marginBottom:'15px'}}>Year of Manufacture</lable>
                    <textarea  cols='30' rows='5' placeholder='Enter Date' className='form-control'            
                     name="manuyear" value={this.state.manuyear} onChange={this.handleInputChange}/> <br/>
                </div>
                  
                   <div> 
                    <button  className='btn btn-success ' type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}> <i className="fas fa-save"></i>&nbsp;Save</button>
                    &nbsp;
                       
                </div>
                </form>
            </div>
            

  
        )
    }
}
