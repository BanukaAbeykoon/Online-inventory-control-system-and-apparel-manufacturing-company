import React, { Component } from 'react'
import axios from 'axios';
import jsPDF from "jspdf";
import "jspdf-autotable";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const generatePDF = (packing) => {
  const doc = new jsPDF();
  const tableColumn = [
    "customer name",
    "Order Id",
    "Category",
    "Payment",
    "Quantity",
    "Weight",
    "Due Date",
    "Address"
  ];
  const tableRows = [];

  packing.map((packing) => {
    const packingdata = [
      packing.customer,
      packing.orderId,
      packing.category,
      packing.payment,
      packing.quantity,
      packing.weight,
      packing.dueDate,
      packing.address,
    ];
    tableRows.push(packingdata);
  });
  doc.text("CASANOVA", 70, 8).setFontSize(13);
  doc.text("Packing Details Report", 14, 16).setFontSize(13);
  doc.autoTable(tableColumn, tableRows, {
    styles: { fontSize: 8 },
    startY: 35,
  });
  doc.save("Employee details.pdf");
};

export default class RMReport extends Component {

    constructor(props){
        super(props);
    
        this.state={
          packing:[]
        };
      }
    
      componentDidMount(){
        this.retrievePost();
      }
    
      retrievePost(){
         axios.get("http://localhost:8000/packing").then(res =>{
          if(res.data.success){ 
           this.setState({
             packing:res.data.existingPosts
           });
    
           console.log(this.state.packing);
    
          }
         
         
          });
     }

     filterData(packing,searchKey){

    const result = packing.filter((packing) =>
        packing.customer.toLowerCase().includes(searchKey)||
        packing.orderId.toLowerCase().includes(searchKey)||
        packing.category.toLowerCase().includes(searchKey)||
        packing.payment.toLowerCase().includes(searchKey)||
        packing.quantity.toLowerCase().includes(searchKey)||
        packing.weight.toLowerCase().includes(searchKey)||
        packing.dueDate.toLowerCase().includes(searchKey)||
        packing.address.toLowerCase().includes(searchKey)
    )
    this.setState({packing:result})
}

handleSearchArea = (e) =>{

    const searchKey= e.currentTarget.value;

    axios.get("http://localhost:8000/packing").then((res) => {
      if (res.data.success) 
      {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
}
    



    render() {
        return (
          <div id="wrapper" className="toggled">
            <div id="page-content-wrapper">
              <div className="container-fluid">
                {/* newbar */}

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

                        <div
                          className="collapse navbar-collapse"
                          id="navbarNav"
                        >
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                aria-current="page"
                                href="/"
                              >
                                Home -
                              </a>
                            </li>

                            <li className="nav-item d-none d-sm-inline-block">
                              <a href="/RMDashbord" className="nav-link">
                                Readymade Dashboard -
                              </a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                              <a href="/RMReport" className="nav-link">
                                Packing Report -
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
                    <h4>Packing Detail Report</h4>
                  </div>
                  <div
                    className="col-lg-3 mt-2 mb-2"
                    style={{ float: "right" }}
                  >
                    <input
                      className="form-control"
                      style={{
                        backgroundColor: "#e3f2fd",
                        width: "20",
                        border: " solid #5f9ea0",
                        padding: "px",
                      }}
                      type="search"
                      placeholder="Search..."
                      name="searchQuery"
                      onChange={this.handleSearchArea}
                    ></input>
                  </div>
                </div>
                <br />
                <table id="ptable" className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Customer</th>
                      <th scope="col">OrderId</th>
                      <th scope="col">Category</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">weight</th>
                      <th scope="col">DueDate</th>
                      <th scope="col">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.packing.map((packing, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <a
                            href={`/packing/${packing._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            {packing.orderId}
                          </a>
                        </td>
                        <td>{packing.orderId}</td>
                        <td>{packing.category}</td>
                        <td>{packing.payment}</td>
                        <td>{packing.quantity}</td>
                        <td>{packing.weight}</td>
                        <td>{packing.dueDate}</td>
                        <td>{packing.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div style={{ float: "left" }}>
                  <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-warning"
                    table="ptable"
                    filename="Inventory Summary"
                    sheet="tablexls"
                    buttonText="Download As Excel"
                  />
                </div>

                <div style={{ float: "left" }}>
                  <button
                    type="button"
                    style={{ backgroundColor: "#228B22", padding: "8px" }}
                    class="btn btn-secondary btn-sm"
                    onClick={() => generatePDF(this.state.packing)}
                  >
                    Downloard As PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}