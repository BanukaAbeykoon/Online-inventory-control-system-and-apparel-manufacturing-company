import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const generatePDF = (factory) => {
  const doc = new jsPDF();
  const tableColumn = [
    "Orderid",
    "Rawproduct",
    "Matone",
    "Matoneqty",
    "Mattwo",
    "Mattwoqty",
    "Matthree",
    "Matthreeqty",
  ];
  const tableRows = [];

  factory.map((factory) => {
    const factorydata = [
      factory.orderid,
      factory.rawproduct,
      factory.matone,
      factory.matoneqty,
      factory.mattwo,
      factory.mattwoqty,
      factory.matthree,
      factory.matthreeqty,
    ];
    tableRows.push(factorydata);
  });
  doc.text("WOOF PET CARE", 70, 8).setFontSize(13);
  doc.text("Employee Detail Report", 14, 16).setFontSize(13);
  doc.autoTable(tableColumn, tableRows, {
    styles: { fontSize: 8 },
    startY: 35,
  });
  doc.save("Factory details.pdf");
};

export default class adminproduction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      factory: [],
    };
  }

  componentDidMount() {
    this.retrieveFactory();
  }

  retrieveFactory() {
    axios.get("/factory").then((res) => {
      if (res.data.success) {
        this.setState({
          factory: res.data.existingFactory,
        });

        console.log(this.state.factory);
      }
    });
  }

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              
            </div>

            <br />
            <br />

            

              <table id="excelreport" className="table">
                <thead>
                  <tr>
                    <th scoop="col">#</th>
                    <th scoop="col">Order ID</th>
                    <th scoop="col">Product</th>
                    <th scoop="col">Material 1</th>
                    <th scoop="col">Material 1 Quantity</th>
                    <th scoop="col">Material 2</th>
                    <th scoop="col">Material 2 Quantity</th>
                    <th scoop="col">Material 3</th>
                    <th scoop="col">Material 3 Quantity</th>
                   
                  </tr>
                </thead>

                <tbody>
                  {this.state.factory.map((factory, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <a
                          href={`/factory/${factory._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {factory.orderid}
                        </a>
                      </td>
                      <td>{factory.rawproduct}</td>
                      <td>{factory.matone}</td>
                      <td>{factory.matoneqty}</td>
                      <td>{factory.mattwo}</td>
                      <td>{factory.mattwoqty}</td>
                      <td>{factory.matthree}</td>
                      <td>{factory.matthreeqty}</td>

                      
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
