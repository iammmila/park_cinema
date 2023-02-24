import React from 'react'

//helmet
import { Helmet } from 'react-helmet-async'
import HeroSection from './../../../components/Main/Cookies/HeroSection/HeroSection';
import Advantages from './../../../components/Main/Cookies/Advantages/Advantages';

function Cookies() {
    return (
        <>
            <Helmet>
                <title>Cookies | Park Cinema</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <HeroSection />
            <Advantages />
        </>
    )
}

export default Cookies