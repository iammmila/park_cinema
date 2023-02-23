import React, { useContext } from 'react'

//context
import { MainContext } from '../../../../context/ContextProvider'

// button's scss
import "./ButtonSchedule.scss"

function ButtonSchedule() {
  const { showComponent } = useContext(MainContext)

  return (
    <button id='schedule' onClick={(e) => { showComponent(e) }} className='glowing-btn3'>
      <span id='schedule' onClick={(e) => { showComponent(e) }} className='glowing-txt'>SC
        <span id='schedule' onClick={(e) => { showComponent(e) }} className='faulty-letter'>HED
        </span>ULE
      </span>
    </button>
  )
}

export default ButtonSchedule