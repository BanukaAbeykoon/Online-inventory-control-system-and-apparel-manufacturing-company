import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert2';



export default class AccountCreate extends Component {

        constructor(props){
            super(props);
            this.state={
               // orderId:"",
                cusName:"",
                cusStatus:"",
                pjournal:"",
                sjournal:"",
                gjournal:"",
                other:"",

               // orderIdError:"",
                cusNameError:"",
                cusStatusError:"",
                pjournalError:"",
                sjournalError:"",
                gjournalError:"",
                otherError:"",
              
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
 
        validate= ()=>{
             // let orderIdError="";
               let cusNameError="";
               let cusStatusError="";
               let pjournalError="";
               let sjournalError="";
               let gjournalError="";
               let  otherError="";
   
          // if(!this.state.orderId){
          //   orderIdError="*Name is Required!"
          // }
          if(!this.state.cusName){
            cusNameError="* Customer Name is Required!"
          }
        
          
          if(!this.state.cusStatus){
            cusStatusError="* customer status is Required!"
            }


           if(!this.state.pjournal){
            pjournalError="* purchase journal amount is Required"
           }
           if(this.state.pjournal.toString().match("-")){
            pjournalError="* purchase journal amount should not be negative "
           }


           if(!this.state.sjournal){
            sjournalError="* sale journal is Required"
            }
            if(this.state.sjournal.toString().match("-")){
              sjournalError="* sale journal amount should not be negative "
             }




            if(!this.state.gjournal){
              gjournalError="*general journal  is Required"
             }
             if(this.state.gjournal.toString().match("-")){
              gjournalError="* general journal amount should not be negative "
             }




            if(!this.state.other){
              otherError="* other feild is Required"
             } 
                         
   
           if(cusNameError||cusStatusError||pjournalError || sjournalError || gjournalError || otherError){
           this.setState({cusNameError,cusStatusError,pjournalError , sjournalError , gjournalError , otherError});
           return false;
   
           }
   
        return true;
   
      }
    
  





        onSubmit = (e) =>{
            e.preventDefault();
            const isValid = this.validate();
            const {cusName,cusStatus,pjournal,sjournal,gjournal,other} = this.state;
          

            const data = {
               // orderId:orderId,
                cusName:cusName,
                cusStatus:cusStatus,
                pjournal:pjournal,
                sjournal:sjournal,
                gjournal:gjournal,
                other:other
            }
            if (isValid) {
            console.log(data)

            axios.post("http://localhost:8000/account/save",data).then((res)=>{
                if(res.data.success){
                   // alert("Create Successfully !!!");
                    swal.fire("Created", "Create Successfully", "success");
                    this.setState(
                    {

                       // orderId:"",
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
    
            const {  cusName, cusStatus, pjournal, sjournal, gjournal, other} = this.state;
    
            const data = {
                //orderId:orderId,
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
                   // orderId: "OID021",
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
                          <a href="/accountHome" className="nav-link">
                           Account Details -
                          </a>
                        </li>

                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/addAcc" className="nav-link">
                           Create Account Details -
                          </a>
                        </li>
                      
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>



           
            <div class="p-3 mb-2 bg-light text-dark rounded-3">
                <h1 className="h3 mb-3 front-weight-normal">Create new Accounts</h1>
                <form className="needs-validation" noValidate>
                   
                  

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Customer Name</label>
                        <input type = "text"
                        className="form-control"
                        name="cusName"
                        placeholder="Enter Customer Name"
                        value={this.state.cusName}
                        onChange={this.handleInputChange}/>

                        <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.cusNameError}
                        </div>




                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Customer Status</label>
                        <input type = "text"
                        className="form-control"
                        name="cusStatus"
                        placeholder="Enter Customer Status"
                        value={this.state.cusStatus}
                        onChange={this.handleInputChange}/>

                        <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.cusStatusError}
                        </div>   


                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Purchase Journal</label>
                        <input type = "Number"
                        className="form-control"
                        name="pjournal"
                        placeholder="Enter Purchase Journal"
                        value={this.state.pjournal}
                        onChange={this.handleInputChange}/>

                        <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.pjournalError}
                        </div>   

                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Sale Journal</label>
                        <input type = "Number"
                        className="form-control"
                        name="sjournal"
                        placeholder="Enter Sale Journal"
                        value={this.state.sjournal}
                        onChange={this.handleInputChange}/>

                        <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.sjournalError}
                        </div>   



                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>General Journal</label>
                        <input type = "Number"
                        className="form-control"
                        name="gjournal"
                        placeholder="Enter General Journal"
                        value={this.state.gjournal}
                        onChange={this.handleInputChange}/>

                        <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.gjournalError}
                        </div>   



                    </div>


                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Other</label>
                        <input type = "text"
                        className="form-control"
                        name="other"
                        placeholder="Enter Other DETAILS"
                        value={this.state.other}
                        onChange={this.handleInputChange}/>

                        <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.otherError}
                        </div>  




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
