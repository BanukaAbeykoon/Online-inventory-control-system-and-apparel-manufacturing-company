import React, { Component } from "react";
import axios from "axios";
import "./buttonload.css";

export default class RawFactoryDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      factory: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/factory/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          factory: res.data.factory,
        });

        console.log(this.state.factory);
      }
    });
  }

  render() {
    const {
      orderid,
      rawproduct,
      matone,
      matoneqty,
      mattwo,
      mattwoqty,
      matthree,
      matthreeqty,
    } = this.state.factory;

    const id = this.props.match.params.id;

    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div style={{ marginTop: "20px" }}>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <a
                  href="/rawfacHome"
                  class="btn btn-primary me-md-2"
                  type="button"
                >
                  BACK
                </a>
              </div>
              <h4>
                <tr>
                  <div>Order ID:&nbsp;</div> {orderid}{" "}
                </tr>
              </h4>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <hr />
              <dl className="row">
                <dt className="col-sm-3">Order ID</dt>
                <dd className="col-sm-9">{orderid}</dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">Product</dt>
                <dd className="col-sm-9"> {rawproduct} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">Material 1</dt>
                <dd className="col-sm-9"> {matone} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">Material 1 Quantity</dt>
                <dd className="col-sm-9">{matoneqty} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">Material 2</dt>
                <dd className="col-sm-9">{mattwo} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">Material 2 Quantity</dt>
                <dd className="col-sm-9">{mattwoqty} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">Material 3</dt>
                <dd className="col-sm-9"> {matthree} </dd>
                <br />
                <br />
                <br />
                <dt className="col-sm-3">Material 3 Quantity</dt>
                <dd className="col-sm-9"> {matthreeqty} </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
