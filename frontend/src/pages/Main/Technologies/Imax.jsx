import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from "../../../components/Main/Technologies/IMAX/HeroSection/HeroSection"

function Imax() {
  return (
    <>
      <Helmet>
        <title>IMAX | Park Cinema</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
      </Helmet>
      <HeroSection />
    </>
  )
}

export default Imax