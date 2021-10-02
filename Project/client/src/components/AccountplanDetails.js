import React, { Component } from 'react'
import axios from  'axios';

export default class AccountplanDetails extends Component {

    constructor(props){
        super(props);

        this.state={

            accountplan:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/accountplan/${id}`).then((res) =>{

        if(res.data.success){

            this.setState({
                accountplan:res.data.accountplan
            });
            console.log(this.state.accountplan);
        }

        });
    }

    render() {

        const {plan,section,deci,requr,time} = this.state.accountplan;
        return (
          
           
            <div id="wrapper" className="toggled">
            <div id="page-content-wrapper">
            <div style={{marginTop:'20px'}}>
            <h4> {plan} </h4>
            <hr/>

            <dl className = "row">
                <dt className="col-sm-3">Section</dt>
                <dt className="col-sm-9"> {section} </dt>

                <dt className="col-sm-3">Description</dt>
                <dt className="col-sm-9"> {deci} </dt>

                <dt className="col-sm-3">Requirment</dt>
                <dt className="col-sm-9"> {requr} </dt>

                <dt className="col-sm-3"> Time </dt>
                <dt className="col-sm-9"> {time} </dt>

                






            </dl>

            
            </div>
            </div>

   





            </div>

        )
    }
}
