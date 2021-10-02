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

//accounts

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
        <Route path="/add" component={AccountCreate}></Route>
        <Route path="/edit/:id" component={AccountEdit}></Route>
        <Route path="/post/:id" component={AccountDetails}></Route>
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
      </BrowserRouter>
    );
  }
}
