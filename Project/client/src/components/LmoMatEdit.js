import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';

export default class LmoMatEdit extends Component {


    constructor(props){
        super(props);
        this.state={
            lmoID:"",
            matID:"",
            matName:"",
            qty:"",
            category:"",
            description:""

       }
    } 

    handleInputChange = (e) =>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

    } 
    
    onSubmit =(e) =>{
        e.preventDefault();

        const id =this.props.match.params.id;

        const {lmoID,matID,matName,qty,category,description} = this.state;

        const data = {
            lmoID:lmoID,
            matID:matID,
            matName:matName,
            qty:qty,
            category:category,
            description:description

        }

        console.log(data)

        axios.put(`http://localhost:8000/lmomat/updatelmomat/${id}`, data).then((res) =>{
            if(res.data.success){
                Swal.fire('Updated','LMO Card Updated Successfilly','success')
                this.setState(
                    {
                     lmoID:"",   
                     matID:"",
                     matName:"",
                     
                     qty:"",
                     category:"",
                     description:""
                    }
                )
            }
        })


    }

    componentDidMount(){

        const id =this.props.match.params.id;

        axios.get(`http://localhost:8000/lmomat/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    lmoID:res.data.lmomat.lmoID,
                   matID:res.data.lmomat.matID,
                   matName:res.data.lmomat.matName,
                   
                   qty:res.data.lmomat.qty,
                   category:res.data.lmomat.category,
                   description:res.data.lmomat.description
                });

                console.log(this.state.lmomat);
            }
        });
    }




    render() {
        return (

            <div id="wrapper" className="toggled">
            <div id="page-content-wrapper">
            <div className="container-fluid">



           
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark  rounded-3">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/matDash">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/lmo"> &#62; LMO Card </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href=""> &#62; Update LMO Card  <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 

<hr/>

<div class="p-3 mb-2 bg-info text-dark rounded-3">
            <div className="col-md-8 mt-4 mx-auto">
              <center>
            <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>EDIT LMO CARD</b></h1>
            </center>
            <hr/>
                <form className="needs-validation" noValidate>





                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >LMO ID</label>
                        <input type="text"
                        className="form-control"
                        name="lmoID"
                        placeholder="Enter LMO ID"
                        value={this.state.lmoID}
                        readOnly
                        onChange={this.handleInputChange}/>
                        </div>


 

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Material ID</label>
                        <input type="text"
                        className="form-control"
                        name="matID"
                        placeholder="Enter Material ID"
                        value={this.state.matID}
                      
                        onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Material Name</label>
                        <input type="text"
                        className="form-control"
                        name="matName"
                        placeholder="Enter Material Name"
                        value={this.state.matName}
                        
                        onChange={this.handleInputChange}/>
                        </div>

                        

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Qty</label>
                        <input type="number"
                        className="form-control"
                        name="qty"
                        placeholder="Enter Qty"
                        value={this.state.qty}
                        onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Category</label>
                        <input type="text"
                        className="form-control"
                        name="category"
                        placeholder="Enter Category"
                        value={this.state.category}
                       
                        onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Description</label>
                        <textarea 
                        className="form-control"
                        name="description"
                        placeholder="Enter Description"
                        value={this.state.description}
                        onChange={this.handleInputChange}/>
                        </div>

                        <hr/>

                        <button className="btn btn-success" type="submit"  style={{backgroundColor: "#0E3662"}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Update Card
                        </button>

                    </form>   
                    </div>
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
  <h1>CASANOVA</h1>
  
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
        )
    }
}
