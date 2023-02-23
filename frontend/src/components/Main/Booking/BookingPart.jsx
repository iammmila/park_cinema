import React from 'react'

//general scss
import "./BookingPart.scss"

//components
import Ticket from './Ticket/Ticket';
import Seats from './Seats/Seats';
import Buttons from './Buttons/Buttons';

function BookingPart() {
  return (
    <div className='main_container'>
      <div className="container">
        <div className="wrapper_booking">
          <Seats />
          <div className='booking_section'>
            <Ticket />
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPart