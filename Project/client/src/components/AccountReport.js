import React, { Component } from 'react'
import axios from 'axios';

export default class AccountReport extends Component {

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
                    <h4>Account Reports</h4>
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
                      
                    </tr>
                  </thead>
                  <tbody>
                   {this.state.account.map((account,index)=>(
                      <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>
                            <a href={`/post/${account._id}`} style={{textDecoration:'none'}}>
                            {account.orderId} 
                            </a>
                            </td>
                        <td> {account.cusName}</td>
                        <td>{account.cusStatus}</td>
                        <td> Rs {account.pjournal}</td>
                        <td>Rs {account.sjournal}</td>
                        <td>Rs {account.gjournal}</td>
                        <td>{account.other}</td>
                        <td>Rs {Number( account.sjournal)-(Number(account.pjournal)+Number(account.gjournal)) }</td>
      
                        
                      </tr>  
                        
      
                    ))}
                  </tbody>
            
                  </table>
      
              
      
                 
                  <button className="btn btn-success"><a href= "#" style={{textDecoration:'none', color:'white'}}>
                  
                    Download Report </a> &nbsp;
                    <i class="fas fa-download"></i>
      
                  </button>
                 
                  
      
      
              </div>
              </div>


              


                  
 


                      







              </div>
              
        )
    }
}
