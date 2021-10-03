import React, { Component } from 'react';
import axios from 'axios';

export default class ShipmentDetails extends Component {
  constructor(props){
      super(props);

      this.state={
          shipment:{}
      };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/shipment/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
                shipment:res.data.shipment
            });

            console.log(this.state.shipment);
        }
    });
  }

    render() {

        const { shipmentID, supplierID, supllierName, materialID ,materialName,quantity, unitPrice,date } = this.state.shipment;

        return (
          <div id="wrapper" className="toggled">
            <div id="page-content-wrapper">
              <div style={{ marginTop: "20px" }}>
                <h4>{shipmentID}</h4>
                <hr />

                <dl className="row">
                  <dt className="col-sm-3">SupplierID</dt>
                  <dd className="col-sm-9">{supplierID}</dd>
                  <br />
                  <br />
                  <br />
                  <dt className="col-sm-3">SupllierName</dt>
                  <dd className="col-sm-9">{supllierName}</dd>
                  <br />
                  <br />
                  <br />
                  <dt className="col-sm-3">MaterialID</dt>
                  <dd className="col-sm-9">{materialID}</dd>
                  <br />
                  <br />
                  <br />
                  <dt className="col-sm-3">MaterialName</dt>
                  <dd className="col-sm-9">{materialName}</dd>
                  <br />
                  <br />
                  <br />
                  <dt className="col-sm-3">Quantity</dt>
                  <dd className="col-sm-9">{quantity}</dd>
                  <br />
                  <br />
                  <br />
                  <dt className="col-sm-3">UnitPrice</dt>
                  <dd className="col-sm-9">{unitPrice}</dd>
                  <br />
                  <br />
                  <br />
                  <dt className="col-sm-3">Date</dt>
                  <dd className="col-sm-9">{date}</dd>
                </dl>
              </div>
            </div>
          </div>
        );
    }
}