import React from 'react'
import "./style.scss"
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