import React, { Component } from "react";
import axios from "axios";

export default class FactoryDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/inventory/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          inventory: res.data.inventory,
        });

        console.log(this.state.inventory);
      }
    });
  }

  render() {
    const {
      facname,
      factelephone,
      facemail,
      facwebsite,
      ceoname,
      fconame,
      product,
      units,
    } = this.state.inventory;

    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div style={{ marginTop: "20px" }}>
              <h4> {facname} </h4>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <p>
                <a href="/pmHome">All Factories</a>
              </p>
              <hr />
              <dl className="row">
                <dt className="col-sm-3">Factory Name</dt>
                <dd className="col-sm-9"> {facname} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">Factory Telephone</dt>
                <dd className="col-sm-9"> {factelephone} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">Factory Email</dt>
                <dd className="col-sm-9"> {facemail} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">Factory Website</dt>
                <dd className="col-sm-9">{facwebsite} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">CEO Name</dt>
                <dd className="col-sm-9">{ceoname} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">FCO Name</dt>
                <dd className="col-sm-9">{fconame} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">Product</dt>
                <dd className="col-sm-9"> {product} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">Units</dt>
                <dd className="col-sm-9"> {units} </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
