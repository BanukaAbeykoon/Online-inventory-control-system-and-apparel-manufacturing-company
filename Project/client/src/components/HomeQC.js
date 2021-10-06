import React, { Component } from "react"; 
import axios from 'axios';
import './style.css';
import Swal from 'sweetalert2';

class Home extends Component {

  
  constructor(props){
    super(props);

    this.state = {
      postsqc:[]
    };
  }

  componentDidMount(){
    this.retrivePosts();
  }

  retrivePosts(){
    axios.get("/postsqc").then(res=>{
      if (res.data.success){
        this.setState({
          postsqc:res.data.existingPosts
        });
        console.log(this.state.posts)
      }
      
    });
  }

  onDelete = (id) =>{
    axios.delete(`/post/delete/${id}`).then((res)=>{
      Swal.fire('Deleted','Deleted Successfully','success')
      this.retrivePosts();
    })
  }

  filterData(postsqc,searchKey){
    const result = postsqc.filter((post) =>
    post.OrderID.toLowerCase().includes(searchKey) ||
    post.BuyerID.toLowerCase().includes(searchKey)
    )
    this.setState({postsqc:result})
  }

  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("/postsqc").then(res=>{
      if (res.data.success){
        this.filterData(res.data.existingPosts,searchKey)
      }
    });
  }

  render() {
    return (
        <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
            <div className="container-fluid">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dash"> &#62; Quality Check Manager</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> &#62; Testing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/qcDash">&#62; Check Card</a>
      </li>
    </ul>
  </div>
</nav>

    <div className="container">
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          <h4>All Cards</h4>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control" type="search" placeholder="Search" name="SearchQuery"
            onChange={this.handleSearchArea}>

            </input>
        </div>
      </div>
    </div>
<div className="container" >
<table className ="table">
<thead>
  <tr>
              <th scope="col">#</th>
              <th scope="col">Order ID</th>
              <th scope="col">CHECKED DATE</th>
              <th scope="col">ARRIVAL DATE</th>
              <th scope="col">BuyerId</th>
              <th scope="col">requirement1</th>
              <th scope="col">requirement2</th>
              <th scope="col">Qualityrate</th>
              <th scope="col">Action</th>
</tr>
</thead>
<tbody>
{this.state.postsqc.map((postsqc,index)=>(
 <tr key={index}>
   <th scope="row">{index+1}</th>
   <td>
       <a href={`/post/${postsqc._id}`} style={{textDecoration:'none'}}>
       {postsqc.OrderID}
       </a>
   </td>
   <td>{postsqc.CheckedDate}</td>
   <td>{postsqc.ArrivalDate}</td>
   <td>{postsqc.BuyerID}</td>
   <td>{postsqc.requirment1}</td>
   <td>{postsqc.requirment2}</td>
   <td>{postsqc.Qualityrate}</td>
   <td>
     <a className="btn btn-warning" href={`/edit/${postsqc._id}`}>
       <i className="fas fa-edit"></i>&nbsp;Edit
     </a>
     &nbsp;
     <a className="btn btn-danger" href="#" onClick={() => this.onDelete(postsqc._id)}>
       <i className="fas fa-trash-alt"></i>&nbsp;Delete
     </a>
   </td>
 </tr>
))}
</tbody>
</table>
<button className="btn btn-success">
<a href="/add" style={{textDecoration:'none', color:'white'}}>Add
</a>
</button>
</div>
</div>
</div>
<div class="footer">


<div class="contain">

  <br/>
<div class="col">
  <h1>ABOUT US</h1>

  
  <ul>
 
    <li><i class="fas fa-phone-square"></i>&nbsp; &nbsp; Contact us</li>
    <li><i class="fas fa-comment-alt"></i>&nbsp; &nbsp;Suggestion</li>
    
  </ul>
  
  
</div>
<div class="col">
  <h1></h1>
  <ul>
    <li></li>
  </ul>
</div>
<div class="col">
<div class="position-absolute top-50 start-50 translate-middle">
<br/>

<img src="%PUBLIC_URL%../../white.jpg" class="rounded-circle" width="40" height="40"  alt=""/>
<a href="/matDash" style={{textDecoration:'none'}}><h1>CASANOVA</h1></a>
  
  <ul>
    <li>@ Copyright reserved</li>
  </ul>
  </div>
</div>
<div class="col">
  <h1></h1>
  <ul>
  </ul>
  </div>

  <div class="position-absolute top-50 end-0 translate-middle-y">
<div class="col social">
  <h1>Help</h1>
  
  <ul>
  
    <li><i class="fas fa-envelope"></i>&nbsp; &nbsp; <i class="fas fa-map-marker-alt"></i>&nbsp; &nbsp;<i class="fas fa-star"></i></li>
    
  </ul>
  
  </div>
</div>
<div class="clearfix">


</div>
</div>
</div>
</div>
    );
  }
}

export default Home;
