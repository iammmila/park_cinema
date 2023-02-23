import React from 'react'

//helmet
import { Helmet } from 'react-helmet-async'

//componennts
import Features from '../../../components/Main/Technologies/IMAX/FeaturesImax/Features'
import HallImax from '../../../components/Main/Technologies/IMAX/HallImax/HallImax'
import HeroSection from "../../../components/Main/Technologies/IMAX/HeroSection/HeroSection"

function Imax() {
  return (
    <>
      <Helmet>
        <title>IMAX | Park Cinema</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
      </Helmet>
      <HeroSection />
      <Features />
      <HallImax />
    </>
  )
}

export default Imax