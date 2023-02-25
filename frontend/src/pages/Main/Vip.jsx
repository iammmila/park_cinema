import React, { useEffect } from 'react'

//helmet
import { Helmet } from 'react-helmet-async'

//components
import HeroSection from './../../components/Main/VIP/HeroSectionVip/HeroSection';
import Information from './../../components/Main/VIP/InfoHall/Information';
// import Schedule from './../../components/Main/VIP/VIPSchedule/Schedule';

function Vip() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])

    return (
        <>
            <Helmet>
                <title>Vip | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <HeroSection />
            {/* <Schedule /> */}
            <Information />
        </>
    )
}

export default Vip