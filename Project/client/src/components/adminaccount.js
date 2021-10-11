import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

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
    "Address",
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

export default class adminaccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      packing: [],
    };
  }

  componentDidMount() {
    this.retrievePost();
  }

  retrievePost() {
    axios.get("http://localhost:8000/packing").then((res) => {
      if (res.data.success) {
        this.setState({
          packing: res.data.existingPosts,
        });

        console.log(this.state.packing);
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
                
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <h4>Packing Detail Report</h4>
              </div>
              
            </div>
            <br />
            <table id="ptable" className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Order ID</th>
                  <th scope="col">Customer</th>
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

                    <td>{`OID${packing._id.substr(0, 5)}`}</td>
                    <td>{packing.customer}</td>
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

            
            
          </div>
        </div>
      </div>
    );
  }
}
