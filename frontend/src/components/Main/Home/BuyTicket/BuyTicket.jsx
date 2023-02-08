import React from 'react'
import "./style.scss"
import buyTicket from "../../../../assets/images/img.png"
import BuyTicketButton from './Button/BuyTicketButton'



function BuyTicket() {
  return (
    <section className='buy_ticket_section'>
      <div className='container'>
        <div className="buy_ticket_section_wrapper">
          <div className='info_of_ticket'>
            <h1>Fast booking</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt harum quaerat cumque ipsum pariatur vitae adipisci fugiat maxime eveniet corporis incidunt, suscipit quisquam vero illum esse voluptas molestiae dolores beatae!</p>
            {/* <button>Buy Ticket</button> */}
            <BuyTicketButton />
          </div>
          <div>
            <img src={buyTicket} alt="img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuyTicket