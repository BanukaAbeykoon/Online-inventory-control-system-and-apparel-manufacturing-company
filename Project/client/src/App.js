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
import AccountSaleJournal from "./components/AccountSaleJournal";
import AccountPurchaseJournal from "./components/AccountPurchaseJournal";









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
import packingtrasport from "./components/packingtrasport";


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





import MaterialCreate from './components/MaterialCreate';
import MaterialEdit from './components/MaterialEdit';
import LmoMatCreate from './components/LmoMatCreate';
import MaterialDash from './components/MaterialDash';
import MaterialDetails from './components/MaterialDetails';
import LmoMatMain from './components/LmoMatMain';
import LmoMatEdit from './components/LmoMatEdit';
import MatMain from './components/MatMain';
import MatReportMain from './components/MatReportMain';
import MatReportEdit from './components/MatReportEdit';
import MatReportAdd from './components/MatReportAdd';
import MatNotification from './components/MatNotification';
import MatIns from "./components/MatIns";
import ReportDetails from './components/ReportDetails';
import MatInsTwo from './components/MatInsTwo';
import MatDis from "./components/MatDis";










import orderCreate from './components/orderCreate';
import orderEdit from "./components/orderEdit";
import orderHome from "./components/orderHome";
import orderDetails from './components/orderDetails'





import EditPostQC from "./components/EditPostQC";
import HomeQC from "./components/HomeQC";
import PostDetailsQC from "./components/PostDetailsQC";
import QualityDash from "./components/QualityDash";

import DefectCard from "./components/DefectCard";
import CreatepostQC from "./components/CreatepostQC";
import orderDashboard from "./components/orderDashboard";






export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {window.location.pathname !== "/"  && <AccountNavBar />}
        
        <Route path="/" exact component={AllMain}></Route>

       

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
        <Route path="/AccountplanDetails/:id" component={AccountplanDetails}></Route>
        <Route path="/salejournal" component={AccountSaleJournal}></Route>
        <Route path="/purchasejournal" component={AccountPurchaseJournal}></Route>




        {/*Factory create--inventory*/}
        <Route path="/pmHome" component={pmHome}></Route>
        <Route path="/rawfacHome" component={RawFactoryHome}></Route>
        <div class="container-fluid">
          <Route path="/PMDashboard" component={PMDashboard}></Route>
          <Route path="/pmadd" component={CreateFactory}></Route>
          <Route path="/pmedit/:id" component={EditFactory}></Route>
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

        <div className="comtainer-fluid">
          <Route path="/addph" component={CreatePacking}></Route>
          <Route path="/editph/:id" component={EditPacking}></Route>

          <Route path="/packing/:id" component={PackingDetails}></Route>
          <Route path="/RMDashbord" exact component={RMDashbord}></Route>
          <Route path="/packingHome" exact component={packingHome}></Route>
          <Route path="/RMReport" component={RMReport}></Route>
          <Route path="/packingtrasport" component={packingtrasport}></Route>
        </div>

        <Route path="/ShipmentHome" component={ShipmentHome}></Route>
        <div className="container">
          <Route path="/addSh" component={ShipmentCreate}></Route>
          <Route path="/editSh/:id" component={ShipmentEdit}></Route>
          <Route path="/shipment/:id" component={ShipmentDetails}></Route>
          <Route path="/SHdashboard" component={SHdashboard}></Route>

          <Route path="/CreateLSmaterial" component={CreateLSmaterial}></Route>
          <Route path="/HomeLSmaterial" component={HomeLSmaterial}></Route>
          <Route path="/EditLSmaterial/:id" component={EditLSmaterial}></Route>
          <Route path="/DetailsLSmaterial/:id" component={DetailsLSmaterial}
          ></Route>
        </div>


   
		
		
		
		
		
		<div className="page-content-wrapper">
     
         <Route path="/qcDash" exact component={HomeQC}></Route>
         <Route path="/add" component={CreatepostQC}></Route>
         <Route path="/edit/:id" component={EditPostQC}></Route>
         <Route path="/post/:id" component={PostDetailsQC}></Route>
         <Route path="/dash" component={QualityDash}></Route>
         <Route path="/defect" component={DefectCard}></Route>
         <Route path="/rep" component={PostDetailsQC}></Route>

      </div>
		

		
		
		
		      <div className="page-content-wrapper">
        
         
        <Route path="/matDash" exact component={MatMain}></Route>
        <Route path="/matRet" component={MaterialDash}></Route>
        <Route path="/matadd" component={MaterialCreate}></Route>
        <Route path="/matedit/:id" component={MaterialEdit}></Route>
        <Route path="/matpost/:id" component={MaterialDetails}></Route>
        <Route path="/lmo" component={LmoMatMain}></Route>
        <Route path="/lmoadd" component={LmoMatCreate}></Route>
        <Route path="/lmoedit/:id" component={LmoMatEdit}></Route>
        <Route path="/matreport" component={MatReportMain}></Route>
        <Route path="/matreportedit/:id" component={MatReportEdit}></Route>
        <Route path="/matreportadd" component={MatReportAdd}></Route>
        <Route path="/matreportone/:id" component={ReportDetails}></Route>
        <Route path="/matNotification" component={MatNotification}></Route>
        <Route path="/matins" component={MatIns}></Route>
        <Route path="/matinstwo" component={MatInsTwo}></Route>
        <Route path="/matdis" component={MatDis}></Route>
        
      
        
        
    
       </div>

    <div className="page-content-wrapper">
    
    <Route path="/orderDashboard" exact component={orderDashboard}></Route>
       <Route path="/orderHome" exact component={orderHome}></Route>
        <Route path="/addOrder" component={orderCreate}></Route>
        <Route path="/editOrder/:id" component={orderEdit}></Route>
        <Route path="/order/:id" component={orderDetails}></Route>
	   </div>
	 
	 
	 
	 

        <div className="page-content-wrapper">
          <Route path="/qcDash" exact component={HomeQC}></Route>
          <Route path="/add" component={CreatepostQC}></Route>
          <Route path="/edit/:id" component={EditPostQC}></Route>
          <Route path="/post/:id" component={PostDetailsQC}></Route>
          <Route path="/dash" component={QualityDash}></Route>
          <Route path="/defect" component={DefectCard}></Route>
          <Route path="/rep" component={PostDetailsQC}></Route>
        </div>

        <div className="page-content-wrapper">
          <Route path="/orderHome" exact component={orderHome}></Route>
          <Route path="/addOrder" component={orderCreate}></Route>
          <Route path="/editOrder/:id" component={orderEdit}></Route>
          <Route path="/order/:id" component={orderDetails}></Route>
        </div>
      </BrowserRouter>
    );
  }
}
