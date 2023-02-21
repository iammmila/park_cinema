import React from 'react'

//general scss
import "./BookingPart.scss"

//components
import Ticket from './Ticket/Ticket';
import Seats from './Seats/Seats';
import Submit from './Submit/Submit';

function BookingPart() {
  return (
    <div className='main_container'>
      <div className="container">
        <div className="wrapper_booking">
          <Seats />
          <div>
            <Ticket />
            <Submit />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPart