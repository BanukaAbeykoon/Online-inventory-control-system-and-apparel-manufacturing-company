import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert2';
import {createValid, setErrors} from "./../components/validateAcc/createValid"


export default class AccountCreate extends Component {

        constructor(props){
            super(props);
            this.state={
                orderId:"",
                cusName:"",
                cusStatus:"",
                pjournal:"",
                sjournal:"",
                gjournal:"",
                other:"",
                errors: {}
            }
        }

        handleInputChange = (e) => {
            const {name,value} = e.target;

            this.setState({
                ...this.state,
                [name]:value
            })

        }


        //Form Validation part
  validate = (
    orderId,
    cusName,
    cusStatus,
    pjournal,
    sjournal,
    gjournal,
    other
  ) => {
    const errors = setErrors(
        orderId,
        cusName,
        cusStatus,
        pjournal,
        sjournal,
        gjournal,
        other
     
    );

    this.setState({ errors: errors });

    return Object.values(errors).every((err) => err === "");
  };





        onSubmit = (e) =>{
            e.preventDefault();

            const {orderId,cusName,cusStatus,pjournal,sjournal,gjournal,other} = this.state;
            if (this.validate(orderId, cusName, cusStatus, pjournal, sjournal, gjournal, other)) {

            const data = {
                orderId:orderId,
                cusName:cusName,
                cusStatus:cusStatus,
                pjournal:pjournal,
                sjournal:sjournal,
                gjournal:gjournal,
                other:other
            }

            console.log(data)

            axios.post("http://localhost:8000/account/save",data).then((res)=>{
                if(res.data.success){
                   // alert("Create Successfully !!!");
                    swal.fire("Created", "Create Successfully", "success");
                    this.setState(
                    {

                        orderId:"",
                        cusName:"",
                        cusStatus:"",
                        pjournal:"",
                        sjournal:"",
                        gjournal:"",
                        other:""



                    }
                    
                    )
                }
            })
        }
        }


        btnDemo = (e) => {
            e.preventDefault();
    
            const {  orderId, cusName, cusStatus, pjournal, sjournal, gjournal, other} = this.state;
    
            const data = {
                orderId:orderId,
                cusName:cusName,
                cusStatus:cusStatus,
                pjournal:pjournal,
                sjournal:sjournal,
                gjournal:gjournal,
                other:other
            }
    
            console.log(data)
    
            this.setState(
                {
                    orderId: "OID021",
                    cusName: "Odel",
                    cusStatus: "special",
                    pjournal: "120000",
                    sjournal: "240000",
                    gjournal: "50000",
                    other: "no",
                   
                }
            )
        }





    render() {
        return (
            <div className="container">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 front-weight-normal">Create new Accounts</h1>
                <form className="needs-validation" noValidate>
                   
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Order ID</label>
                        <input type = "text"
                        className="form-control"
                        name="orderId"
                        placeholder="Enter Order ID"
                        value={this.state.orderId}
                        onChange={this.handleInputChange}/>


                                {this.state.errors.orderId && (

                                <div classNane="text-danger" style={{ color:'red'}}>{this.state.errors.orderId}</div>
                                )}


                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Customer Name</label>
                        <input type = "text"
                        className="form-control"
                        name="cusName"
                        placeholder="Enter Customer Name"
                        value={this.state.cusName}
                        onChange={this.handleInputChange}/>

                            {this.state.errors.cusName && (

                            <div classNane="text-danger" style={{ color:'red'}}>{this.state.errors.cusName}</div>
                            )}    





                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Customer Status</label>
                        <input type = "text"
                        className="form-control"
                        name="cusStatus"
                        placeholder="Enter Customer Status"
                        value={this.state.cusStatus}
                        onChange={this.handleInputChange}/>

                        {this.state.errors.cusStatus && (

                        <div classNane="text-danger" style={{ color:'red'}}>{this.state.errors.cusStatus}</div>
                        )}    


                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Purchase Journal</label>
                        <input type = "Number"
                        className="form-control"
                        name="pjournal"
                        placeholder="Enter Purchase Journal"
                        value={this.state.pjournal}
                        onChange={this.handleInputChange}/>

                        {this.state.errors.pjournal && (

                        <div classNane="text-danger" style={{ color:'red'}}>{this.state.errors.pjournal}</div>
                        )} 


                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Sale Journal</label>
                        <input type = "Number"
                        className="form-control"
                        name="sjournal"
                        placeholder="Enter Sale Journal"
                        value={this.state.sjournal}
                        onChange={this.handleInputChange}/>

                        {this.state.errors.sjournal && (

                        <div classNane="text-danger" style={{ color:'red'}}>{this.state.errors.sjournal}</div>
                        )} 



                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>General Journal</label>
                        <input type = "Number"
                        className="form-control"
                        name="gjournal"
                        placeholder="Enter General Journal"
                        value={this.state.gjournal}
                        onChange={this.handleInputChange}/>

                        {this.state.errors.gjournal && (

                        <div classNane="text-danger" style={{ color:'red'}}>{this.state.errors.gjournal}</div>
                        )} 



                    </div>


                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Other</label>
                        <input type = "text"
                        className="form-control"
                        name="other"
                        placeholder="Enter Other DETAILS"
                        value={this.state.other}
                        onChange={this.handleInputChange}/>

                        {this.state.errors.other && (

                        <div classNane="text-danger" style={{ color:'red'}}>{this.state.errors.other}</div>
                        )} 




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
