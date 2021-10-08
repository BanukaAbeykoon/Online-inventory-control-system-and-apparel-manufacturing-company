import React, { Component } from 'react'
import Driverschedule from './Driverschedule'
import VehicleSchedule from './VehicleSchedule'


export default class TMSSchedule extends Component {
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
        <a class="nav-link" href="/TMSDash">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=""> &#62; Transport Schedule <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 
<br/>

                <Driverschedule />
                <hr/>
                <VehicleSchedule/>
            </div>
            </div>
            </div>
        )
    }
}
