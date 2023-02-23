import React from 'react'

//general scss
import "./CinemasInfo.scss"

//components
import Accordion from "./../Accordion/Accordion"

function CinemasInfo() {
  return (
    <section className='cinemas-info-brief'>
      <div className="container">
        <div className="wrapper-cinemas">
          <Accordion />
        </div>
      </div>
    </section>
  )
}

export default CinemasInfo