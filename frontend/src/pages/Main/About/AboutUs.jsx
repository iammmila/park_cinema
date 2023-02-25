import React, { useEffect } from 'react'

//helmet
import { Helmet } from 'react-helmet-async'

//components
import CinemasInfo from "../../../components/Main/About/CinemasInfo/CinemasInfo"
import HeroSection from '../../../components/Main/About/HeroSection/HeroSection'

function AboutUs() {
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
        <title>About Us | Park Cinema</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
      </Helmet>
      <HeroSection />
      <CinemasInfo />
    </>
  )
}

export default AboutUs