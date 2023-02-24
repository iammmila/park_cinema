import React from 'react'

//helmet
import { Helmet } from 'react-helmet-async'
import HeroSection from '../../../components/Main/Advertising/HeroSection/HeroSection';
import Advantages from '../../../components/Main/Advertising/Advantages/Advantages';

function AdvertisingOffer() {
    return (
        <>
            <Helmet>
                <title>AdvertisingOffer | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <HeroSection />
            <Advantages />
        </>
    )
}

export default AdvertisingOffer