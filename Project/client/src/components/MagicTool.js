import React, { Component } from "react";


export default class MagicTool extends Component {
  calculate() {
    let product = document.getElementById("product").value;
    let qty = document.getElementById("Qty").value;

    let fabric, buttons, zippers;

    console.log(product);
    console.log(qty);

    if (product == "Trousers") {
      zippers = Number(1 * Number(qty));

      fabric = Number(7 * Number(qty));

      buttons = Number(1 * Number(qty));
    } else if (product == "Shorts") {
      zippers = Number(1 * Number(qty));

      fabric = Number(4 * Number(qty));

      buttons = Number(1 * Number(qty));
    } else if (product == "T-Shirts") {
      zippers = Number(0 * Number(qty));

      fabric = Number(5 * Number(qty));

      buttons = Number(7 * Number(qty));
    } else if (product == "Skirts") {
      zippers = Number(1 * Number(qty));

      fabric = Number(3 * Number(qty));

      buttons = Number(0 * Number(qty));
    } else {
      zippers = Number(0 * Number(qty));

      fabric = Number(5 * Number(qty));

      buttons = Number(0 * Number(qty));
    }

    console.log(zippers);
    console.log(buttons);
    console.log(fabric);

    document.getElementById("zippers").value = zippers;
    document.getElementById("buttons").value = buttons;
    document.getElementById("fabric").value = fabric;
  }

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container">
            <form>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <a
                  href="/PMDashboard"
                  class="btn btn-primary me-md-2"
                  type="button"
                >
                  Production Dashboard
                </a>
              </div>
              <div className="row"></div>
              <br />
              <br />
              <br />
              <h1 class="display-2">
                <center>Magic Tool</center>
              </h1>
              <div class="form-group">
                <label for="exampleFormControlSelect1">product</label>
                <select class="form-control" id="product">
                  <option>Trousers</option>
                  <option>Shorts</option>
                  <option>T-Shirts</option>
                  <option>Skirts</option>
                  <option>Blouses</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Quantity</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Quantity"
                  id="Qty"
                  onChange={this.calculate.bind(this)}
                ></input>
              </div>
              <br /> <br />
              <br /> <br />
              <h1 class="display-7">
                <center>Magic Tool Result</center>
              </h1>
              <div class="form-group">
                <label for="exampleFormControlInput1">Fabric (Meters)</label>
                <input
                  type="number"
                  class="form-control"
                  id="fabric"
                  placeholder="Magic Fabrics"
                ></input>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Zippers</label>
                <input
                  type="number"
                  class="form-control"
                  id="zippers"
                  placeholder="Magic Zippers"
                ></input>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Buttons</label>
                <input
                  type="number"
                  class="form-control"
                  id="buttons"
                  placeholder="Magic Buttons"
                ></input>
              </div>
            </form>

            <br />
            <br />
            <br />

            <button className="btn btn-primary btn-lg">
              <a
                href="/createrawfac"
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "232rem",
                  transition: "0.3s",
                  opacity: "10",
                  hover: "#006db9",
                }}
              >
                Send To A Factory
              </a>
            </button>
          </div>
        </div>
      </div>
    );

  
    
  }
}
