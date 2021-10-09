import React,{Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert2';





export default class AccountplanHome extends Component {
  constructor(props){
    super(props);

    this.state={
      accountplan:[]
    };
  }

  componentDidMount(){
    this.retrieveAccountplan();
  }

  retrieveAccountplan(){
     axios.get("http://localhost:8000/accountplan").then(res =>{
      if(res.data.success){ 
       this.setState({
         accountplan:res.data.existingPosts
       });

       console.log(this.state.accountplan);

      }
     
     
      });
 }



 onDelete = (id) => {

  axios.delete(`/accountplan/deleteaccountplan/${id}`).then((res)=>{
    //alert("Delete Successfully !!!");
    swal.fire("Deleted", "Delete Successfully", "warning");
    

    this.retrieveAccountplan();
  })
 }

 filterData(accountplan,searchKey){

  const result = accountplan.filter((accountplan)=>
  accountplan.plan.toLowerCase().includes(searchKey) ||
  accountplan.time.toLowerCase().includes(searchKey) ||
  accountplan.section.toLowerCase().includes(searchKey) 
 
  )

    this.setState({accountplan:result})
 }

 handleSearchArea=(e)=>{

  const searchKey =e.currentTarget.value;

  axios.get("http://localhost:8000/accountplan").then(res =>{
    if(res.data.success){ 
     
      this.filterData(res.data.existingPosts,searchKey)
     

    }
   
   
    });

 } 
 

 
 

     render() {
         return (
            <div id="wrapper" className="toggled">
            <div id="page-content-wrapper">
            <div className="container-fluid">

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

                       
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>




            <div className="row">

<div className="col-lg-9 mt-2 mb-2">
  <h4> Future Accounts Plans</h4>
  <hr/>
</div>
<div className=" col-lg-3 mt-2 mb-2">

  <input

  className="form-control"
  type="search"
  placeholder="Search..."
  name="searchQuery"
  onChange={this.handleSearchArea}>
    

  </input>
 

</div>
</div>







{/* <table className ="table"> 
<thead>

  <tr>
    <th scope = "col">#</th>
    <th scope = "col">Plan</th>
    <th scope = "col">Section</th>
    <th scope = "col">Description</th>
    <th scope = "col">Requirment</th>
    <th scope = "col">Time period</th>
   
    <th scope = "col">&nbsp;&nbsp;&nbsp;&nbsp;Action</th>
  </tr>
</thead>
<tbody>
 {this.state.accountplan.map((accountplan,index)=>(
    <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>
          <a href={`/AccountplanDetails/${accountplan._id}`} style={{textDecoration:'none'}}>
          {accountplan.plan} 
          </a>
          </td>
      
      <td>{accountplan.section}</td>
      <td>  {accountplan.deci}</td>
      <td> {accountplan.requr}</td>
      <td>  {accountplan.time}</td>
      
     

      <td><a className = "btn btn-warning" href = {`/editAccountPlan/${accountplan._id}`}>
          <i className = "fas fa-edit"></i>&nbsp;Edit
        </a>
        &nbsp;
        <a className="btn btn-danger" href = "#" onClick={()=>this.onDelete(accountplan._id)}>
          <i className="far fa-trash-alt"></i>&nbsp;Delete
      </a>
      </td>
    </tr>  


    
      

  ))}
</tbody>

</table> */}








<button className="btn btn-success"><a href= "/addAccountPlan" style={{textDecoration:'none', color:'white'}}>

  Create new Plan </a> &nbsp;
  <i class="far fa-plus-square"></i>

</button>


<br/> <br/> <br/>



<div class="row">
{this.state.accountplan.map((accountplan,index)=>(
            <div class="col-sm-4">
              <div class="card" style={{width:"18rem"}}>
               <img
                  src="%PUBLIC_URL%../../fut3.png"
                  width="100"
                  height="200"
                  class="card-img-top"
                  alt="..."
                /> 
                
                <div class="shadow bg-white rounded">
                <div class="card-body" >

               
                <a className="btn btn-primary" href={`/AccountplanDetails/${accountplan._id}`} style={{textDecoration:'none'}}>
                <i class="fas fa-running"></i>&nbsp;View Plan
          
                   </a>

                  <h2>{accountplan.plan} </h2>
                  
                  
                  

                  <a className = "btn btn-warning" href = {`/editAccountPlan/${accountplan._id}`}>
                      <i className = "fas fa-edit"></i>&nbsp;Edit
                   </a>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="btn btn-danger" href = "#" onClick={()=>this.onDelete(accountplan._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
          
                      </a>
     

     
                </div>
              </div>
              </div>
              <br/>
            </div>



))}






</div>
</div>













</div>
</div>

         )
     }
 }

 





