import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2' 



function AddDriver() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [nic, setNIC] = useState("");
    const [address, setAddress] = useState(0);

    const [nameErr, setNameErr] = useState({});
    const [ageErr, setAgeErr] = useState({});
    const [nicErr, setNICErr] = useState({});
    const [addressErr, setAddressErr] = useState({});


    function sendData(e) {
        e.preventDefault();
        const isValid = formValidation();

        const newDriver = {
            name,
           age,
           nic,
           address
        }

        console.log(newDriver);

        if (isValid) {

            axios.post("http://localhost:8000/driver/save", newDriver).then(() => {
                Swal.fire("ADDED!","New Driver Added Successfully!","success")
            }).catch((err) => {
                alert("error")
            })

            setName("");
            setAge("");
            setNIC("");
            setAddress(0);
        }


    }

    const formValidation = () => {
        const nameErr = {};
        const ageErr = {};
        const nicErr = {};
        const addressErr = {};
        let isValid = true;

      

        if (name.trim().length == 0) {
            nameErr.nameEmpty = "*Name is empty please enter*";
            isValid = false;
        }
        if (!age.toString().trim()) {
            ageErr.ageEmpty = "*Age is empty*";
            isValid = false;
        }
     
        if (nic.trim().length < 9) {
            nicErr.nicShort = "*NIC is too short*";
            isValid = false;
        }

        if (nic.trim().length == 0) {
            nicErr.nicErrEmpty = "*NIC is empty please enter*";
            isValid = false;
        }

       
        if (address.trim().length == 0) {
            addressErr.addressEmpty = "*Address is empty please enter*";
            isValid = false;
        }


        setNameErr(nameErr);
        setAgeErr(ageErr);
        setNICErr(nicErr);
        setAddress(addressErr);
        return isValid;
    }

    return (
        <div style={{
         
        }}>
            <div className="container">
            <h1 className="h3 mb-3 font-weight-normal">ADD NEW Driver</h1>
                <span className="border">
                    <div className="shadow p-3 mb-5 bg-white rounded">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/TMSDash" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>Driver List</a></button>
                    </div> 
                        <form onSubmit={sendData}>
                            <div class="form-group">
                                <label for="name">Driver Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Driver Name"
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }} />
                                {Object.keys(nameErr).map((key) => {
                                    return <div style={{ color: "red" }}>{nameErr[key]}</div>
                                })}
                            </div>

                            <div className="form-group">
                                <label for="category">Age</label>
                                <input type="number" className="form-control" id="age" placeholder="Enter Driver Age"
                                    onChange={(e) => {
                                        setAge(e.target.value);
                                    }} />
                                {Object.keys(ageErr).map((key) => {
                                    return <div style={{ color: "red" }}>{ageErr[key]}</div>
                                })}
                            </div>

                            <div className="form-group">
                                <label for="description">Driver NIC</label>
                                <textarea className="form-control" id="nic" rows="3" placeholder="Enter Driver NIC"
                                    onChange={(e) => {
                                        setNIC(e.target.value);
                                    }}></textarea>
                                {Object.keys(nicErr).map((key) => {
                                    return <div style={{ color: "red" }}>{nicErr[key]}</div>
                                })}
                            </div>

                            <div className="form-group">
                                <label for="price">Driver Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Enter Driver Address"
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }} />
                                {Object.keys(addressErr).map((key) => {
                                    return <div style={{ color: "red" }}>{addressErr[key]}</div>
                                })}
                            </div>

                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" required="true" />
                                <label className="form-check-label" for="exampleCheck1">I've Checked everything is correct</label>
                            </div>
                            <button  className='btn btn-success ' type="submit" style={{marginTop:'15px'}} > <i className="fas fa-plus-circle"></i>&nbsp;Add Driver</button>
                        </form>
                    </div>
                </span>

            </div>
        </div>
    )
}

export default AddDriver