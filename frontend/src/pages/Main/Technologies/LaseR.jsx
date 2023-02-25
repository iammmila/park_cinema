import React, { useEffect } from 'react'

// helmet
import { Helmet } from 'react-helmet-async'

//components
import HeroSection from './../../../components/Main/Technologies/LaseR/HeroSection/HeroSection';
import InfoSection from './../../../components/Main/Technologies/LaseR/InfoSection/InfoSection';

function LaseR() {
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
                <title>LaseR | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <HeroSection />
            <InfoSection />
        </>
    )
}

export default LaseR