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
      shipID,
      supplierID,
      supllierName,
      lessmaterialID,
      lessmaterialName,
      quantity,
      unitPrice,
      date ,
    } = this.state.lmocard;
    /* details */
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div style={{ marginTop: "20px" }}>
              <h4> {shipID} </h4>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p>
                <a href="/HomeLSmaterial">All shipments</a>
              </p>
              <hr />
              <dl className="row">
                <dt className="col-sm-3">shipID</dt>
                <dd className="col-sm-9"> {shipID} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">supplierID</dt>
                <dd className="col-sm-9"> {supplierID} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">supllierName</dt>
                <dd className="col-sm-9"> {supllierName} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">lessmaterialID</dt>
                <dd className="col-sm-9">{lessmaterialID} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">lessmaterialName</dt>
                <dd className="col-sm-9">{lessmaterialName} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">quantity</dt>
                <dd className="col-sm-9">{quantity} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">unitPrice</dt>
                <dd className="col-sm-9"> {unitPrice} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">date</dt>
                <dd className="col-sm-9"> {date} </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
