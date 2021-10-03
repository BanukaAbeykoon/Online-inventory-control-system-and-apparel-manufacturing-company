import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AddDriver from "./components/AddDriver";
import Editdriver from "./components/Editdriver";
import DriHome from "./components/DriHome";
import schedule from "./components/schedule";
import AddVehicle from "./components/AddVehicle";
import EditVehicle from "./components/EditVehicle";
import vehicleDash from "./components/vehicleDash";
import DriNav from "./components/DriNav";
import Driverschedule from "./components/Driverschedule";
import VehicleSchedule from "./components/VehicleSchedule";
import Vehischedule from "./components/Vehischedule";
import TMSDash from "./components/TMSDash";
import AllMain from "./components/AllMain";
import TMSSchedule from "./components/TMSSchedule";







import Adashboard from "./components/Adashboard";
import AccountCreate from "./components/AccountCreate";
import AccountEdit from "./components/AccountEdit";
import AccountHome from "./components/AccountHome";
import AccountNavBar from "./components/AccountNavBar";
import AccountDetails from "./components/AccountDetails";
import AccountJournal from "./components/AccountJournal";
import AccountReport from "./components/AccountReport";
import AccountplanHome from "./components/AccountplanHome";
import AccountplanCreate from "./components/AccountplanCreate";
import AccountplanEdit from "./components/AccountplanEdit";
import AccountplanDetails from "./components/AccountplanDetails";
import mainhome from "./components/mainhome";









import CreateFactory from "./components/CreateFactory";
import EditFactory from "./components/EditFactory";
import pmHome from "./components/pmHome";
import PMNavBar from "./components/PMNavBar";
import FactoryDetails from "./components/FactoryDetails";
import PMDashboard from "./components/PMDashboard";



import RawFactoryHome from "./components/RawFactoryHome";
import CreateRawFactory from "./components/CreateRawFactory";
import EditRawFactory from "./components/EditRawFactory";
import RawFactoryDetails from "./components/RawFactoryDetails";
import searchFactory from "./components/searchFactory";
import neworder from "./components/neworder";
import neworderdetail from "./components/neworderdetail";
import MagicTool from "./components/MagicTool";



import CreatePacking from './components/CreatePacking';
import EditPacking from "./components/EditPacking";
import packingHome from "./components/packingHome";
import NavBar from "./components/RMNavBar";
import RMDashbord from './components/RMDashbord';
import PackingDetails from './components/PackingDetails';
import RMReport from './components/RMReport';

import ShipmentCreate from "./components/ShipmentCreate";
import ShipmentEdit from './components/ShipmentEdit';
import ShipmentHome from "./components/ShipmentHome";
import ShipmentNavBar from "./components/ShipmentNavBar";
import ShipmentDetails from "./components/ShipmentDetails";
import SHdashboard from './components/SHdashboard';

import CreateLSmaterial from "./components/CreateLSmaterial";
import EditLSmaterial from "./components/EditLSmaterial";
import HomeLSmaterial from "./components/HomeLSmaterial";
import DetailsLSmaterial from "./components/DetailsLSmaterial";






export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={AllMain}></Route>

        <Route path="/TMSDash" component={DriNav}></Route>

        <Route path="/DriHome" component={DriNav}></Route>
        <Route path="/Driverschedule" component={DriNav}></Route>

        <Route path="/vehicleDash" component={DriNav}></Route>
        <Route path="/VehicleSchedule" component={DriNav}></Route>
        <Route path="/TMSSchedule" component={TMSSchedule}></Route>

        <Route path="/TMSDash" component={TMSDash}></Route>
        <Route path="/DriHome" component={DriHome}></Route>
        <Route path="/Driverschedule" component={Driverschedule}></Route>

        <Route path="/AddDriver" component={AddDriver}></Route>
        <Route path="/DriHome/Editdriver/:id" component={Editdriver}></Route>
        <Route path="/DriHome/schedule/:id" component={schedule}></Route>

        <Route path="/vehicleDash" component={vehicleDash}></Route>
        <Route path="/VehicleSchedule" component={VehicleSchedule}></Route>
        <Route
          path="/vehicleDash/Vehischedule/:id"
          component={Vehischedule}
        ></Route>
        <Route path="/AddVehicle" component={AddVehicle}></Route>
        <Route
          path="/vehicleDash/EditVehicle/:id"
          component={EditVehicle}
        ></Route>


        <AccountNavBar />

     



        <Route path="/accountHome" component={AccountHome}></Route>
        <Route path="/addAcc" component={AccountCreate}></Route>
        <Route path="/editAcc/:id" component={AccountEdit}></Route>
        <Route path="/postAcc/:id" component={AccountDetails}></Route>
        <Route path="/Accountdashboard" component={Adashboard}></Route>
        <Route path="/journal" component={AccountJournal}></Route>
        <Route path="/reporte" component={AccountReport}></Route>
        <Route path="/accountPlanHome" component={AccountplanHome}></Route>
        <Route path="/addAccountPlan" component={AccountplanCreate}></Route>
        <Route path="/editAccountPlan/:id" component={AccountplanEdit}></Route>
        <Route
          path="/AccountplanDetails/:id"
          component={AccountplanDetails}
        ></Route>

	 
		




        {window.location.pathname !== "/" && <PMNavBar />}

        <Route path="/" exact component={AllMain}></Route>

        {/*Factory create--inventory*/}
        <Route path="/pmHome" component={pmHome}></Route>
        <Route path="/rawfacHome" component={RawFactoryHome}></Route>
        <div class="container-fluid">
          <Route path="/PMDashboard" component={PMDashboard}></Route>
          <Route path="/add" component={CreateFactory}></Route>
          <Route path="/edit/:id" component={EditFactory}></Route>
          <Route path="/inventory/:id" component={FactoryDetails}></Route>

          {/*Raw Materials Send--Factory*/}

          <Route path="/searchfac" component={searchFactory}></Route>
          <Route path="/createrawfac" component={CreateRawFactory}></Route>
          <Route path="/editrawfac/:id" component={EditRawFactory}></Route>
          <Route path="/factory/:id" component={RawFactoryDetails}></Route>
          <Route path="/clientneworder" component={neworder}></Route>
          <Route path="/order/:id" component={neworderdetail}></Route>
          <Route path="/magictool" component={MagicTool}></Route>

        </div>
	 
	 

	  <NavBar/>
          
         <Route path="/ph" exact component={packingHome}></Route>
           <div className="comtainer-fluid">
              
          <Route path="/add" component={CreatePacking}></Route>
          <Route path="/edit/:id" component={EditPacking}></Route>
    
          <Route path="/packing/:id" component={PackingDetails}></Route>
           <Route path="/RMDashbord" exact component={RMDashbord}></Route>
            <Route path="/packingHome" exact component={packingHome}></Route>
            <Route path="/RMReport" component={RMReport}></Route>
          </div>

	 
	       
	 


	  <ShipmentNavBar />

        <Route path="/ShipmentHome" component={ShipmentHome}></Route>
        <div className="container">
          <Route path="/add" component={ShipmentCreate}></Route>
          <Route path="/edit/:id" component={ShipmentEdit}></Route>
          <Route path="/shipment/:id" component={ShipmentDetails}></Route>
          <Route path="/SHdashboard" component={SHdashboard}></Route>

          <Route path="/CreateLSmaterial" component={CreateLSmaterial}></Route>
          <Route path="/HomeLSmaterial" component={HomeLSmaterial}></Route>
          <Route path="/EditLSmaterial/:id" component={EditLSmaterial}></Route>
          <Route path="/DetailsLSmaterial" component={DetailsLSmaterial}></Route>

        </div>
	 
	 
	 
	 
	 


	 

      </BrowserRouter>
    );
  }
}
