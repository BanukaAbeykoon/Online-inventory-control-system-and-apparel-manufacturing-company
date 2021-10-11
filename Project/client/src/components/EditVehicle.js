import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import moment from 'moment';

export default class EditVehicle extends Component {
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
        const {name,value}=e.target;

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
        const id = this.props.match.params.id;
        e.preventDefault();
        const isValid= this.validate();

        const{regno,engno,brandname,manuyear}= this.state;
        const data={
            regno:regno,
            engno:engno,
            brandname:brandname,
            manuyear:manuyear
        }
        if(isValid){
        console.log(data)

        axios.put(`http://localhost:8000/vehicle/vehicleDash/updatevehicle/${id}`,data).then((res)=>{
            if(res.data.success){
                this.setState({
                    regno:"",
                    engno:"",
                    brandname:"",
                    manuyear:""
                })
                Swal.fire("Updated!","Vehicle Update Successfully","success")
            }
        })
    }

    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8000/vehicle/vehicleDash/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    regno:res.data.vehicle.regno,
                    engno:res.data.vehicle.engno,
                    brandname:res.data.vehicle.brandname,
                    manuyear:res.data.vehicle.manuyear
                
                    
                });
                console.log(this.state.vehicle);
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
              <h1 className="h3 mb-3 font-weight-normal">UPDATE VEHICLE</h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/vehicleDash" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>See Driver List</a></button>
                    </div>          
               <form className="form-group" style={{marginBottom:'15px'}}> 
                <div>
                   <lable style={{marginBottom:'15px'}}>Registration NO</lable>
                    <input type='text' placeholder='Enter No' className = 'form-control'
                    name="regno" value={this.state.regno} onChange={this.handleInputChange}/> 
                     <div className="text-danger" style={{fontSize:12 ,color:"red"}}>
                           {this.state.regnoError}
                   </div>




                    <lable style={{marginBottom:'15px'}}>Engine NO</lable>
                    <input type='text' placeholder='Enter NO' className = 'form-control'
                    name="engno" value={this.state.engno} onChange={this.handleInputChange}/> 
                      <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.engnoError}
                   </div>


                    <lable style={{marginBottom:'15px'}}> Brand Name</lable>
                    <input type='text' placeholder='Enter Name' className = 'form-control'
                    name="brandname" value={this.state.brandname} onChange={this.handleInputChange}/> 
                    
                    <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.brandnameError}
                   </div>
                
                    <lable style={{marginBottom:'15px'}}>Year of Manufacture</lable>
                   <input type="date" placeholder='Enter Date' className='form-control'            
                     name="manuyear" value={this.state.manuyear} onChange={this.handleInputChange} max={moment().format("YYYY-MM-DD")} /> <br/>
                       <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.manuyearError}
                   </div>



                    <button  className='btn btn-success ' type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}> <i className="fas fa-save"></i>&nbsp;Update Vehicle</button>
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
