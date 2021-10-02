import React, { Component } from 'react'
import Driverschedule from './Driverschedule'
import VehicleSchedule from './VehicleSchedule'


export default class TMSSchedule extends Component {
    render() {
        return (
            <div>
                <Driverschedule />
                <hr/>
                <VehicleSchedule/>
            </div>
        )
    }
}
