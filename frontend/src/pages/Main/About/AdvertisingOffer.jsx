import React, { useEffect } from 'react'

//helmet
import { Helmet } from 'react-helmet-async'

//components
import HeroSection from '../../../components/Main/Advertising/HeroSection/HeroSection';
import Advantages from '../../../components/Main/Advertising/Advantages/Advantages';

function AdvertisingOffer() {
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
                <title>AdvertisingOffer | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <HeroSection />
            <Advantages />
        </>
    )
}

export default AdvertisingOffer