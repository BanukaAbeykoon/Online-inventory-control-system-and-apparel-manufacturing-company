import React, { Component } from 'react'
import axios from 'axios';
import jsPDF from 'jspdf';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import "jspdf-autotable";





const generatePDF = (account) => {
  const doc = new jsPDF();
  const tableColumn = [
    "Order ID", "Customer Name", "Customer Status", "Purchase Journal(Rs)", "Sale Journal(Rs)","General Journal(Rs)","Other","Profit(Rs)",
  ];
  const tableRows = [];

  account.map((account) => {
    const accountdata = [
      account.orderId,
      account.cusName,
      account.cusStatus,
      account.pjournal,
      account.sjournal,
      account.gjournal,
      account.other,
      Number( account.sjournal)-(Number(account.pjournal)+Number(account.gjournal)) ,
    ];
    tableRows.push(accountdata);
  });
  doc.text("CASANOVA", 70, 8).setFontSize(13);
  doc.text("Account Detail Report", 14, 16).setFontSize(13);
  doc.autoTable(tableColumn, tableRows, {
    styles: { fontSize: 8 },
    startY: 35,
  });
  doc.save("account details.pdf");
};




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
      
              
      
                  <div className="col-lg-9 mt-2 mb-2">
                    <h4>Account Reports</h4>
                    <hr/>
                  </div>



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


                
                <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="btn btn-danger"
                        table="reportTB"
                        filename="tablexls"
                        sheet="tablexls"
                       
                        buttonText="Download as Excel file"
                         />

                 &nbsp; &nbsp; &nbsp;

                 <button
                  type="button"
                  style={{  padding: "10px" }}
                  class="btn btn-success btn-sm"
                  onClick={() => generatePDF(this.state.account)}
                >
                  Download as PDF file
                </button>     
      
            
      
      
             
               
      
                <table id ="reportTB" className ="table"> 
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
                        <td>{account.orderId} </td>
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
                  
      
              
      
                 
                
                 
                  
      
      
              </div>
              </div>


              


                  
 


                      







              </div>
              
        )
    }
}
