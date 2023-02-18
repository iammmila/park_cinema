import React from 'react'

//helmet
import { Helmet } from 'react-helmet-async'

//components
import HeroSeciton from './../../../components/Main/Cinemas/HeroSection/HeroSeciton';
import CinemasInfo from './../../../components/Main/Cinemas/CinemasInfo/CinemasInfo';

function Cinemas() {
  return (
    <>
      <Helmet>
        <title>Cinemas | Park Cinema</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
      </Helmet>
      <HeroSeciton />
      <CinemasInfo />
    </>
  )
}

export default Cinemas