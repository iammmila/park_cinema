import React, { useContext } from 'react'
//context
import { MainContext } from '../../../../context/ContextProvider';

// background side
import Video from '../../Video/Video'

//buttons
import ButtonToday from '../ButtonToday/ButtonToday'
import ButtonSoon from './../ButtonSoon/ButtonSoon';
import ButtonSchedule from './../ButtonSchedule/ButtonSchedule';

//General schedules
import Cards from './../CardsToday/Cards';
import CardsSoon from './../CardsSoon/CardsSoon';
import TableSchedule from './../Table/TableSchedule';

//general component's scss
import "./style.scss"

function HeroSection() {
    const { isActive } = useContext(MainContext)

    return (
        <section className='hero-schedule'>
            <Video />
            <div className="container">
                <div className='wrapper-schedule'>
                    <div className='main_part'>
                        <ButtonToday />
                        <ButtonSoon />
                        <ButtonSchedule />
                    </div>
                    <div className='movies'>
                        {isActive.id === 'today' && (<Cards />)}
                        {isActive.id === "soon" && (<CardsSoon />)}
                        {isActive.id === "schedule" && (<TableSchedule />)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection