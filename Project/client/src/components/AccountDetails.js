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

        const {_id,cusName,cusStatus,pjournal,sjournal,gjournal,other} = this.state.account;
        const id = this.props.match.params.id;

        return (
          
            <div class="card bg-info text-left col-lg-7 mt-2 mb-2">
            <div class="card-body">
            <div id="wrapper" className="toggled">
            <div id="page-content-wrapper">
            <div style={{marginTop:'20px'}}>
            <h2> {cusName} </h2>
            <hr/>

            

            <dl className = "row">
                <dt className="col-sm-3"><i class="fas fa-circle"/>&nbsp;Order ID</dt>
                <dt className="col-sm-9">  {`OID${id.substr(0,5)}`} </dt>

                <dt className="col-sm-3"><i class="fas fa-circle"/>&nbsp;Customer Name</dt>
                <dt className="col-sm-9"> {cusName} </dt>

                <dt className="col-sm-3"><i class="fas fa-circle"/>&nbsp;Customer Status</dt>
                <dt className="col-sm-9"> {cusStatus} </dt>

                <dt className="col-sm-3"><i class="fas fa-circle"/>&nbsp;Purchase Journal</dt>
                <dt className="col-sm-9">Rs {pjournal} </dt>

                <dt className="col-sm-3"><i class="fas fa-circle"/>&nbsp;Sale Journal</dt>
                <dt className="col-sm-9">Rs {sjournal} </dt>

                <dt className="col-sm-3"><i class="fas fa-circle"/>&nbsp;General Journal</dt>
                <dt className="col-sm-9">Rs {gjournal} </dt>

                <dt className="col-sm-3"><i class="fas fa-circle"/>&nbsp;Other</dt>
                <dt className="col-sm-9"> {other} </dt>

                <dt className="col-sm-3"><i class="fas fa-circle"/>&nbsp;Profit</dt>
                <dt className="col-sm-9">Rs {Number(sjournal)-(Number(pjournal)+Number(gjournal)) } </dt>






            </dl>

            
            </div>
            </div>
            </div>
            </div>


            








            </div>

        )
    }
}
