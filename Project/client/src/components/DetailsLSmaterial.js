import React, { Component } from "react";
import axios from "axios";

export default class DetailsLSmaterial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lmocard: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/lmocard/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          lmocard: res.data.lmocard,
        });

        console.log(this.state.lmocard);
      }
    });
  }

  render() {
    const {
      ShipID,
      SupplierID,
      SupllierName,
      LessmaterialID,
      LessmaterialName,
      Quantity,
      UnitPrice,
      Date,
    } = this.state.lmocard;

    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div style={{ marginTop: "20px" }}>
            <h4>{ShipID}</h4>
            <hr />

            <dl className="row">
              <dt className="col-sm-3">SupplierID</dt>
              <dd className="col-sm-9">{SupplierID}</dd>
              <br />
              <br />
              <br />
              <dt className="col-sm-3">SupllierName</dt>
              <dd className="col-sm-9">{SupllierName}</dd>
              <br />
              <br />
              <br />
              <dt className="col-sm-3">LessmaterialID</dt>
              <dd className="col-sm-9">{LessmaterialID}</dd>
              <br />
              <br />
              <br />
              <dt className="col-sm-3">LessmaterialName</dt>
              <dd className="col-sm-9">{LessmaterialName}</dd>
              <br />
              <br />
              <br />
              <dt className="col-sm-3">Quantity</dt>
              <dd className="col-sm-9">{Quantity}</dd>
              <br />
              <br />
              <br />
              <dt className="col-sm-3">UnitPrice</dt>
              <dd className="col-sm-9">{UnitPrice}</dd>
              <br />
              <br />
              <br />
              <dt className="col-sm-3">Date</dt>
              <dd className="col-sm-9">{Date}</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}
