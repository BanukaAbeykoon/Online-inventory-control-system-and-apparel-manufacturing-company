import React, { Component } from 'react'
import axios from  'axios';

export default class AccountDetails extends Component {

    constructor(props){
        super(props);

        this.state={

            account:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/account/${id}`).then((res) =>{

        if(res.data.success){

            this.setState({
                account:res.data.account
            });
            console.log(this.state.account);
        }

        });
    }

    render() {

        const {orderId,cusName,cusStatus,pjournal,sjournal,gjournal,other} = this.state.account;
        return (
          
           
            <div id="wrapper" className="toggled">
            <div id="page-content-wrapper">
            <div style={{marginTop:'20px'}}>
            <h4> {cusName} </h4>
            <hr/>

            <dl className = "row">
                <dt className="col-sm-3">Order ID</dt>
                <dt className="col-sm-9"> {orderId} </dt>

                <dt className="col-sm-3">Customer Name</dt>
                <dt className="col-sm-9"> {cusName} </dt>

                <dt className="col-sm-3">Customer Status</dt>
                <dt className="col-sm-9"> {cusStatus} </dt>

                <dt className="col-sm-3">Purchase Journal</dt>
                <dt className="col-sm-9">Rs {pjournal} </dt>

                <dt className="col-sm-3">Sale Journal</dt>
                <dt className="col-sm-9">Rs {sjournal} </dt>

                <dt className="col-sm-3">General Journal</dt>
                <dt className="col-sm-9">Rs {gjournal} </dt>

                <dt className="col-sm-3">Other</dt>
                <dt className="col-sm-9"> {other} </dt>

                <dt className="col-sm-3">Profit</dt>
                <dt className="col-sm-9">Rs {Number(sjournal)-(Number(pjournal)+Number(gjournal)) } </dt>






            </dl>

            
            </div>
            </div>


            








            </div>

        )
    }
}
