import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert2';

export default class AccountplanCreate extends Component {
//constructor define variables
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
  //handle keyboard inputs 
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

   //Form Validation part
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
                  //clear field after inserting  
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

//Demo button
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

            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <nav
                  className="navbar navbar-expand-lg navbar-light"
                  style={{
                    backgroundColor: "#e3f2fd",
                    width: "134%",
                    border: " solid #5f9ea0",
                    padding: "0px",
                  }}
                >
                  <div className="container-fluid">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toogle="collapse"
                      data-bs-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Tooggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="/Accountdashboard">
                            Account Home -
                          </a>
                        </li>

                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/accountPlanHome" className="nav-link">
                           Account Future Plan  -
                          </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/addAccountPlan" className="nav-link">
                           Create Account Future Plan  -
                          </a>
                        </li>

                       
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div class="p-3 mb-2 bg-light text-dark rounded-3">
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


            
 













            </div>
        )
    }
}
