import React from 'react'
import { Helmet } from 'react-helmet-async'
import CinemasInfo from "../../../components/Main/About/CinemasInfo/CinemasInfo"
import HeroSection from '../../../components/Main/About/HeroSection/HeroSection'

function AboutUs() {
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