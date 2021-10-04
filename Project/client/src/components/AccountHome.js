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




      <div className="p-3 mb-2 bg-dark text-light rounded-3">
          <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="" onChange={this.handleSearchArea}/>
  
  <label class="form-check-label" for="exampleRadios2">
    ALL
  </label>
</div>

          <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="special" onChange={this.handleSearchArea} />
  <label class="form-check-label" for="exampleRadios1">
   Special Customer
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="normal" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios2">
  Normal Customer
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="new" onChange={this.handleSearchArea}/>
  <label class="form-check-label" for="exampleRadios3">
    New Customer
  </label>
</div>

</div>






       




          <div className="row">

            <div className="col-lg-9 mt-2 mb-2">
              <h4>ALL Account Details</h4>
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

      


       
         

          <table className ="table"> 
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
                      {account.orderId} 
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

        

           
            <button className="btn btn-success"><a href= "/addAcc" style={{textDecoration:'none', color:'white'}}>
            
              Create new </a> &nbsp;
              <i class="far fa-plus-square"></i>

            </button>
           
            


        </div>
        </div>





              











        </div>
        
      
    )
  }
}
