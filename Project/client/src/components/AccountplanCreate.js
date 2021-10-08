import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert2';

export default class AccountplanCreate extends Component {

        constructor(props){
            super(props);
            this.state={
                plan:"",
                section:"",
                deci:"",
                requr:"",
                time:""
                
            }
        }

        handleInputChange = (e) => {
            const {name,value} = e.target;

            this.setState({
                ...this.state,
                [name]:value
            })

        }

        onSubmit = (e) =>{
            e.preventDefault();

            const {plan,section,deci,requr,time,} = this.state;

            const data = {
                plan:plan,
                section:section,
                deci:deci,
                requr:requr,
                time:time,
               
            }


            if(plan =="" )
            {
              swal.fire('WARNING','Add Plan !  ','warning')
            }
            else if(section ==""){
              swal.fire('WARNING','Add Section !','warning')
            }
            else if(deci ==""){
              swal.fire('WARNING','Add Description !','warning')
            }
            else if(requr ==""){
              swal.fire('WARNING','Add  Requirment !','warning')
            }
            else if(time ==""){
             swal.fire('WARNING','Add Time !','warning')
            }
           

            console.log(data)

            axios.post("http://localhost:8000/accountplan/save",data).then((res)=>{
                if(res.data.success){
                   // alert("Create Successfully !!!");
                    swal.fire("Created", "Create Successfully", "success");
                    this.setState(
                    {

                        plan:"",
                        section:"",
                        deci:"",
                        requr:"",
                        time:""
                       


                    }
                    
                    )
                }
            })

        }


        btnDemo = (e) => {
            e.preventDefault();
    
            const {  plan, section, deci, requr, time} = this.state;
    
            const data = {
                plan:plan,
                section:section,
                deci:deci,
                requr:requr,
                time:time,
               
            }
    
            console.log(data)
    
            this.setState(
                {
                    plan:"increase sales",
                    section:"production",
                    deci: "new machine",
                    requr:"order new machine",
                    time:"1 month",
                }
            )
        }





    render() {
        return (
            <div className="container">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 front-weight-normal">Create new Plan </h1>
                <form className="needs-validation" noValidate>
                   
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Plan</label>
                        <input type = "text"
                        className="form-control"
                        name="plan"
                        placeholder="Enter Plan"
                        value={this.state.plan}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Section</label>
                        <input type = "text"
                        className="form-control"
                        name="section"
                        placeholder="Enter Section"
                        value={this.state.section}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Description</label>
                        <textarea  
                        className="form-control"
                        name="deci"
                        placeholder="Enter Description"
                        value={this.state.deci}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}> Requirment </label>
                        <input type = "text"
                        className="form-control"
                        name="requr"
                        placeholder="Enter Requirment"
                        value={this.state.requr}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Time Period</label>
                        <input type = "text"
                        className="form-control"
                        name="time"
                        placeholder="Enter Time Period"
                        value={this.state.time}
                        onChange={this.handleInputChange}/>
                    </div>

                   

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                    <button type="submit" className="btn btn-dark" style={{ marginTop: '15px', marginBottom:'20px', marginLeft:"900px", width:"140px", backgroundColor:"#2E4661", borderRadius:"10px", padding:"10px 0px 10px 0px"}} onClick={this.btnDemo}>Demo</button>


                </form>
                
            </div>


            
 













            </div>
        )
    }
}
