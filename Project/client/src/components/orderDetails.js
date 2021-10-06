import React, { Component } from 'react';
import axios from 'axios';

export default class orderDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            order:{}

        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/order/${id}`).then((res) => {
          if(res.data.success) {
            this.setState({
              order: res.data.order,
            });
            console.log(this.state.order);
          }
        });
    }
    
    render() {


        const {topic,description,postCategory} = this.state.order;
        return (

            <div id="page-content-wrapper">
          <div className="container-fluid"></div>
            <div style={{marginTop:'20px'}}>
            <h4>{topic}</h4>
            <hr/>
            
            <dl className="row">
           
                <dt className="col-sm-3">Description</dt>
                <dd className="col-sm-9">{description}</dd>

                <dt className="col-sm-3">Post Category</dt>
                <dd className="col-sm-9">
                     {postCategory}
                </dd>
            </dl>    



            </div>
            </div>
        )
    }
}
