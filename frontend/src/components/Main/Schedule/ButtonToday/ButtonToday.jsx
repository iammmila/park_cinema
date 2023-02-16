import React, { useContext } from 'react'

//context
import { MainContext } from '../../../../context/ContextProvider'

//button's scss
import "./style.scss"

function ButtonToday() {
    const { showComponent } = useContext(MainContext)

    return (
        <button id="today" onClick={(e) => { showComponent(e) }} className='glowing-btn1'>
            <span id="today" onClick={(e) => { showComponent(e) }} className='glowing-txt'>T
                <span id="today" onClick={(e) => { showComponent(e) }} className='faulty-letter'>O
                </span>DAY
            </span>
        </button>
    )
}

export default ButtonToday