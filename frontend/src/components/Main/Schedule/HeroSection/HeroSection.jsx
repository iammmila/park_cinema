import React, { useContext } from 'react'

//context
import { MainContext } from '../../../../context/ContextProvider';

//buttons
import ButtonToday from '../ButtonToday/ButtonToday'
import ButtonSoon from './../ButtonSoon/ButtonSoon';
import ButtonSchedule from './../ButtonSchedule/ButtonSchedule';

//General schedules
import CardsToday from '../CardsToday/CardsToday';
import CardsSoon from './../CardsSoon/CardsSoon';
import TableSchedule from './../Table/TableSchedule';

//general component's scss
import "./style.scss"

function HeroSection() {
    const { isActive } = useContext(MainContext)

    return (
        <section className='hero-schedule'>
            {/* <Video /> */}
            <div className="container">
                <div className='wrapper-schedule'>
                    <div className='main_part'>
                        {/* today button */}
                        <ButtonToday />

                        {/* soon button */}
                        <ButtonSoon />

                        {/* schedule button */}
                        <ButtonSchedule />
                    </div>
                    <div className='movies'>
                        {/* //! today cards component */}
                        {isActive.id === 'today' && (<CardsToday />)}
                        
                        {/* //! soon cards component */}

                        {isActive.id === "soon" && (<CardsSoon />)}
                        
                        {/* //! tabel component  */}
                        {isActive.id === "schedule" && (<TableSchedule />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection