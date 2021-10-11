import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const generatePDF = (postsqc) => {
  const doc = new jsPDF();
  const tableColumn = [
    "Order ID",
    "Checked Date",
    "ARRIVAL DATE",
    "Buyer ID",
    "Requirement 1",
    "Requirement 2",
    "Qualityrate",
  ];
  const tableRows = [];

  postsqc.map((postsqc) => {
    const postsqcdata = [
      postsqc.OrderID,
      postsqc.CheckedDate,
      postsqc.ArrivalDate,
      postsqc.BuyerID,
      postsqc.requirment1,
      postsqc.requirment2,
      postsqc.Qualityrate,
    ];
    tableRows.push(postsqcdata);
  });
  doc.text("CASANOVA", 70, 8).setFontSize(13);
  doc.text("Quality SUMMURY", 14, 16).setFontSize(13);
  doc.autoTable(tableColumn, tableRows, {
    styles: { fontSize: 8 },
    startY: 35,
  });
  doc.save("QualitySUMMARY.pdf");
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postsqc: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("/postsqc").then((res) => {
      if (res.data.success) {
        this.setState({
          postsqc: res.data.existingPosts,
        });
        console.log(this.state.posts);
      }
    });
  }


  //nav bar
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            

            

          

            <div className="container">
              <table id="tableeeee" className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Order ID</th>
                    <th scope="col">CHECKED DATE</th>
                    <th scope="col">ARRIVAL DATE</th>
                    <th scope="col">BuyerId</th>
                    <th scope="col">requirement1</th>
                    <th scope="col">requirement2</th>
                    <th scope="col">Qualityrate</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {this.state.postsqc.map((postsqc, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <a
                          href={`/post/${postsqc._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {postsqc.OrderID}
                        </a>
                      </td>
                      <td>{postsqc.CheckedDate}</td>
                      <td>{postsqc.ArrivalDate}</td>
                      <td>{postsqc.BuyerID}</td>
                      <td>{postsqc.requirment1}</td>
                      <td>{postsqc.requirment2}</td>
                      <td>{postsqc.Qualityrate}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Home;
