import React from 'react'

//general scss
import "./Information.scss"

function Information() {
  return (
    <div className='information-section' style={{ zIndex: 2 }}>
      <div style={{ width: "18%" }} className='line' ></div>
      <h1>About Us</h1>
      <div className='information-brief'>
        <p>Park Cinema is the largest prestigious chain of cinemas with 4 locations. Cinemas that meet the most technical requirements, Park Bulvar, MetroPark, Park Zagulba AVM, the high-class shopping center of Flame Towers, the new symbol of Baku.x</p>
        <p>Apart from the legendary comfort and quality of the halls, Park Cinema is the only representative of the magnificent IMAX format in Azerbaijan. The network's repertoire includes the most popular premieres, in addition to festival films and arthouse. Every year, film festivals are held in the Park Cinema chain, gala-premieres and press screenings, large actions for loyal viewers and charity screenings of films are organized regularly. The network became famous for its activity on Facebook and Instagram social networks, creative approach to content and communication with users, and received the status of the most discussed and popular group of cinema fans in Azerbaijan (according to the information of Socialbakers*). It should also be noted that the brand is a partner of many important events in the life of Baku, which is a symbol of Park Cinema's high status.</p>
        <span>*Socialbakers is the most popular reporting and statistics service in social networks. The Park Cinema page received a certificate for answering 98% of users' queries.</span>
        <ul>
          <h5 style={{ color: "red" }}>FLAME CINEMA MMC</h5>
          <li>AZER MANAFOV house 14, m.54, Nizami district, Baku region, AZ1060</li>
          <li>AZ1006, Baku region, Sabail district, M. Huseyn street, 1A</li>
        </ul>
      </div>
    </div>
  )
}

export default Information