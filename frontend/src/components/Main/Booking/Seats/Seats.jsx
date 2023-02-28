import React from 'react'

//general scss
import "./Seats.scss"

//components
import Seat from './../Seat/Seat';
import InformationSeat from './../InformationSeats/InformationSeat';

function Seats() {
    
    return (
        <div className='seats_wrapper'>
            <div className="container_screen">
                <div className='screen'></div>
                <div className='seats'>
                    <Seat />
                </div>
                <div className='info_seats'>
                    <InformationSeat />
                </div>
            </div>
        </div>
    )
}

export default Seats