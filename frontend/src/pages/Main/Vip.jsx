import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from './../../components/Main/VIP/HeroSectionVip/HeroSection';
import Information from './../../components/Main/VIP/InfoHall/Information';
import Schedule from './../../components/Main/VIP/VIPSchedule/Schedule';
// import SliderHall from './../../components/Main/VIP/SliderHall/SliderHall';

function Vip() {
    return (
        <>
            <Helmet>
                <title>Vip | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <HeroSection />
            <Schedule />
            <Information />
            {/* <SliderHall /> */}
        </>
    )
}

export default Vip