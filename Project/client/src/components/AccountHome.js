import React,{Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert2';





export default class AccountHome extends Component {
  constructor(props){
    super(props);

    this.state={
      account:[]
    };
  }

  componentDidMount(){
    this.retrieveAccount();
  }

  retrieveAccount(){
     axios.get("http://localhost:8000/account").then(res =>{
      if(res.data.success){ 
       this.setState({
         account:res.data.existingPosts
       });

       console.log(this.state.account);

      }
     
     
      });
 }



 onDelete = (id) => {

  axios.delete(`/account/deleteaccount/${id}`).then((res)=>{
    //alert("Delete Successfully !!!");
    swal.fire("Deleted", "Delete Successfully", "warning");
    

    this.retrieveAccount();
  })
 }

 filterData(account,searchKey){

  const result = account.filter((account)=>
  account.orderId.toLowerCase().includes(searchKey) ||
  account.cusName.toLowerCase().includes(searchKey) ||
  account.cusStatus.toLowerCase().includes(searchKey) 
 
  )

    this.setState({account:result})
 }

 handleSearchArea=(e)=>{

  const searchKey =e.currentTarget.value;

  axios.get("http://localhost:8000/account").then(res =>{
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
                          <a href="/accountHome" className="nav-link">
                           Account Details -
                          </a>
                        </li>
                      
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>




            <div className="container bg-info rounded-3">
              <br/>
      <h4>ALL Account Details</h4>
      <hr/>

      <div class="card">
    <div class="card-body">
    <h5 class="card-title">INSTRUCTIONS</h5>

    <div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
    </div>
    <p class="card-text">Imagine having just the right number of products for a certain SKU, given demand -- but your team is working with old data and, based on that data, projects that your inventory will fall short of demand in a month. It is obvious what your team would do: begin the process of acquiring more inventory to make up the difference. Now there will be excess inventory, and you will be in an Overstock situation.</p>
    <p class="card-text"><small class="text-muted">Latest Regulations</small></p>
  </div>
  <img src="%PUBLIC_URL%../../lmo1.png" class="card-img-bottom" alt="..."/>
    </div>            

    <br/> <br/> 

      <div
              className="p-3 mb-2 bg-dark text-light rounded-3"
              style={{
                background: "transparent",
                height: "50px",
                opacity: 0.5,
                padding: "10px",
              }}
            >
          <div class="form-check"  style={{ float: "left" }} >
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="" onChange={this.handleSearchArea}/>
  
  <label class="form-check-label" for="exampleRadios2">
    ALL &nbsp;  &nbsp;
  </label>
</div>
 

          <div class="form-check"  style={{ float: "left" }}>
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="special" onChange={this.handleSearchArea} />
  <label class="form-check-label" for="exampleRadios1">
   Special Customer&nbsp;  &nbsp;
  </label>
</div>
<div class="form-check"  style={{ float: "left" }}>
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="normal" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios2">
  Normal Customer&nbsp;  &nbsp;
  </label>
</div>
<div class="form-check"  style={{ float: "left" }}>
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="new" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios3">
    New Customer&nbsp;  &nbsp;
  </label>
</div>

</div>






       




          <div className="row">

            <div className="col-lg-9 mt-2 mb-2">
             
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

          <button className="btn btn-success"><a href= "/addAcc" style={{textDecoration:'none', color:'white'}}>
            
            Create new </a> &nbsp;
            <i class="far fa-plus-square"></i>

          </button>

      
          <br/> <br/> 

       
          <div class="p-3 mb-2 bg-primary text-dark rounded-3">

          <table className="table table-hover  table table-bordered border-info table table-info table-striped" style={{marginTop:'5px'}}>
            <thead>

              <tr>
                <th scope = "col">#</th>
                <th scope = "col">Order ID</th>
                <th scope = "col">Customer Name</th>
                <th scope = "col">Customer Status</th>
                <th scope = "col">Purchase Journal</th>
                <th scope = "col">Sale Journal</th>
                <th scope = "col">General Journal</th>
                <th scope = "col">Other</th>
                <th scope = "col">Profit</th>
                <th scope = "col">&nbsp;&nbsp;&nbsp;&nbsp;Action</th>
              </tr>
            </thead>
            <tbody>
             {this.state.account.map((account,index)=>(

               
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>
                      <a href={`/postAcc/${account._id}`} style={{textDecoration:'none'}}>
                      {`OID${account._id.substr(0,5)}`}
                      </a>
                      </td>
                  <td> {account.cusName}</td>
                  <td>{account.cusStatus}</td>
                  <td> Rs {account.pjournal}</td>
                  <td>Rs {account.sjournal}</td>
                  <td> Rs {account.gjournal}</td>
                  <td>{account.other}</td>
                  <td>Rs {Number( account.sjournal)-(Number(account.pjournal)+Number(account.gjournal)) }</td>

                  <td><a className = "btn btn-warning" href = {`/editAcc/${account._id}`}>
                      <i className = "fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href = "#" onClick={()=>this.onDelete(account._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                  </td>
                </tr>  
                  

              ))}
            </tbody>
      
            </table>

        

           
           
           
            

            </div>
        </div>
        </div>
        </div>





              











        </div>
        
      
    )
  }
}
