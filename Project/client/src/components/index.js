import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import './style.css';

class ComponentToPrint extends React.Component {
  render() {

    const {OrderID,CheckedDate,ArrivalDate,BuyerID,requirment1,requirment2,Qualityrate} = this.state.post;

      return (
          <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
            <div className="container-fluid">
          <div class="card text-center">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <div style={{margineTop:'20px'}}>
       <dt className="col-sm-3">Order ID</dt>
         <h4>{OrderID}</h4>
         <hr/>

        <dl className="row">
          <dt className="col-sm-3">CheckedDate</dt>
          <dd className="col-sm-9">{CheckedDate}</dd>
  
          <dt className="col-sm-3">ArrivalDate</dt>
          <dd className="col-sm-9">{ArrivalDate}</dd>
  
          <dt className="col-sm-3">BuyerID</dt>
          <dd className="col-sm-9">{BuyerID}</dd>
  
          <dt className="col-sm-3">requirment1</dt>
          <dd className="col-sm-9">{requirment1}</dd>
  
          <dt className="col-sm-3">requirment2</dt>
          <dd className="col-sm-9">{requirment2}</dd>
  
          <dt className="col-sm-3">Quality rate</dt>
          <dd className="col-sm-9">{Qualityrate}</dd>
        </dl>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div class="footer">
  <div class="contain">
  <div class="col">
    <h1>Company</h1>
    <ul>
      <li>Contact us</li>
      <li>Suggestion</li>
    </ul>
  </div>
  <div class="col">
    <h1></h1>
    <ul>
      <li></li>
    </ul>
  </div>
  <div class="col">
    <h1></h1>
    <ul>
      <li>@ Copyright reserved</li>
    </ul>
  </div>
  <div class="col">
    <h1></h1>
    <ul>
    </ul>
    </div>
  <div class="col social">
    <h1>Social</h1>
    <ul>
      <li>Discription goes to here</li>
    </ul>
  </div>
<div class="clearfix"></div>
</div>
</div>
  </div>
    );
  }
}

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

render(<Example />, document.querySelector("#root"));