import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert2';

export default class AccountEdit extends Component {


    constructor(props){
        super(props);
        this.state={
            orderId:"",
            cusName:"",
            cusStatus:"",
            pjournal:"",
            sjournal:"",
            gjournal:"",
            other:""
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
        const id = this.props.match.params.id;

        const {orderId,cusName,cusStatus,pjournal,sjournal,gjournal,other} = this.state;

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

        axios.put(`http://localhost:8000/account/updateaccount/${id}`,data).then((res)=>{
            if(res.data.success){
               // alert("Post update successfully!!")
                swal.fire("Updated", "update Successfully", "success");
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

   
   
   
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/account/${id}`).then((res) =>{

        if(res.data.success){

            this.setState({
                orderId:res.data.account.orderId,
                cusName:res.data.account.cusName,
                cusStatus:res.data.account.cusStatus,
                pjournal:res.data.account.pjournal,
                sjournal:res.data.account.sjournal,
                gjournal:res.data.account.gjournal,
                other:res.data.account.other
            });
            console.log(this.state.account);
        }

        });
    }
   
   
   
   
   
   
    render() {
        return (
            <div className="container">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 front-weight-normal">Update Account Details</h1>
                <form className="needs-validation" noValidate>
                   
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Order ID</label>
                        <input type = "text"
                        className="form-control"
                        name="orderId"
                        placeholder="Enter Order ID"
                        value={this.state.orderId}
                        readOnly
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Customer Name</label>
                        <input type = "text"
                        className="form-control"
                        name="cusName"
                        placeholder="Enter Customer Name"
                        value={this.state.cusName}
                        readOnly
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Customer Status</label>
                        <input type = "text"
                        className="form-control"
                        name="cusStatus"
                        placeholder="Enter Customer Status"
                        value={this.state.cusStatus}
                        readOnly
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Purchase Journal</label>
                        <input type = "Number"
                        className="form-control"
                        name="pjournal"
                        placeholder="Enter Purchase Journal"
                        value={this.state.pjournal}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Sale Journal</label>
                        <input type = "Number"
                        className="form-control"
                        name="sjournal"
                        placeholder="Enter Sale Journal"
                        value={this.state.sjournal}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>General Journal</label>
                        <input type = "Number"
                        className="form-control"
                        name="gjournal"
                        placeholder="Enter General Journal"
                        value={this.state.gjournal}
                        onChange={this.handleInputChange}/>
                    </div>


                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Other</label>
                        <input type = "text"
                        className="form-control"
                        name="other"
                        placeholder="Enter Other DETAILS"
                        value={this.state.other}
                        onChange={this.handleInputChange}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-squre"></i>
                        &nbsp; Update
                    </button>


                </form>
                
            </div>





            









            </div>
        )
    }
}

