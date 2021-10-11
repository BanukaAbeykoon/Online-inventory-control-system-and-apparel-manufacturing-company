import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import "./vehicleDash.css";

export default class vehicleDash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicle: [],
    };
  }
  componentDidMount() {
    this.getvehicle();
  }

  getvehicle() {
    axios.get("http://localhost:8000/vehicle/vehicleDash").then((res) => {
      if (res.data.success) {
        this.setState({
          vehicle: res.data.existingPosts,
        });
        console.log(this.state.vehicle);
      }
    });
  }

  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            
         

            <div class="row justify-content-evenly">
                <div class="col-9">
       
                

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Registration NO</th>
                      <th scope="col">Engine NO</th>
                      <th scope="col">Brand Name </th>
                      <th scope="col">Date of Manufacture</th>
                   
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.vehicle.map((vehicle, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{vehicle.regno}</td>
                        <td>{vehicle.engno}</td>
                        <td>{vehicle.brandname}</td>
                        <td>{vehicle.manuyear}</td>
                        

                      </tr>
                    ))}
                  </tbody>
                </table>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
