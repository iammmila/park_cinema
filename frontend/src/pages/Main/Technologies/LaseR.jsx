import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from './../../../components/Main/Technologies/LaseR/HeroSection/HeroSection';
import InfoSection from './../../../components/Main/Technologies/LaseR/InfoSection/InfoSection';

function LaseR() {
    return (
        <>
            <Helmet>
                <title>LaseR | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <HeroSection />
            <InfoSection />
        </>
    )
}

export default LaseR