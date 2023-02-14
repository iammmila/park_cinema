import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from './../../../components/Main/Technologies/GeneralTechnologies/HeroSection/HeroSection';
import InfoTechnologies from './../../../components/Main/Technologies/GeneralTechnologies/InfoTechnologies/InfoTechnologies';

function Technologies() {
    return (
        <>
            <Helmet>
                <title>Technologies | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <HeroSection />
            <InfoTechnologies />
        </>
    )
}

export default Technologies