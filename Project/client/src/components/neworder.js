// import React, { Component } from "react";
// import axios from "axios";

// export default class neworder extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       orders: [],
//     };
//   }

//   componentDidMount() {
//     this.retrieveOrders();
//   }

//   retrieveOrders() {
//     axios.get("/orders").then((res) => {
//       if (res.data.success) {
//         this.setState({
//           orders: res.data.existingOrders,
//         });

//         console.log(this.state.orders);
//       }
//     });
//   }


//   filterData(orders, searchKey) {
//     const result = orders.filter(
//       (orders) =>
//         orders.orderid.toLowerCase().includes(searchKey) ||
//         orders.cusid.toLowerCase().includes(searchKey) ||
//         orders.product.toLowerCase().includes(searchKey) ||
//         orders.quantity.toLowerCase().includes(searchKey)
//     );
//     this.setState({ orders: result });
//   }

//   handleSearchArea = (e) => {
//     const searchKey = e.currentTarget.value;

//     axios.get("/orders").then((res) => {
//       if (res.data.success) {
//         this.filterData(res.data.existingOrders, searchKey);
//       }
//     });
//   };

//   render() {
//     return (
//       <div id="wrapper" className="toggled">
//         <div id="page-content-wrapper">
//           <div className="container-fluid">
//             <div class="d-grid gap-2 d-md-flex justify-content-md-end">
//               <a
//                 href="/PMDashboard"
//                 class="btn btn-primary me-md-2"
//                 type="button"
//               >
//                 Production Dashboard
//               </a>
//             </div>
//             <div className="row"></div>

//             <br />
//             <div className="col-lg-9 mt-2 mb-2">
//               <h4>All orders</h4>
//             </div>
//             <table class="table table-bordered border-primary">
//               <thead class="blue">
//                 <tr>
//                   <th scope="col">#</th>
//                   <th scope="col">orderid</th>
//                   <th scope="col">cusid</th>
//                   <th scope="col">product</th>
//                   <th scope="col">Quantity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.state.orders.map((orders, index) => (
//                   <tr>
//                     <th scope="row">{index + 1}</th>
//                     <td>
//                       <a href={`/orders/${orders._id}`}>{orders.orderid}</a>
//                     </td>
//                     <td>{orders.cusid}</td>
//                     <td>{orders.product}</td>
//                     <td>{orders.quantity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <button className="btn btn-primary btn-lg">
//               <a
//                 href="/magictool"
//                 style={{
//                   textDecoration: "none",
//                   color: "white",
//                   width: "232rem",
//                   transition: "0.3s",
//                   opacity: "10",
//                   hover: "#006db9",
//                 }}
//               >
//                 Go TO Magic Tool
//               </a>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
