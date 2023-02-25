import React, { useEffect } from 'react'

//helmet
import { Helmet } from 'react-helmet-async'

//components
// import HeroSeciton from './../../../components/Main/Cinemas/HeroSection/HeroSeciton';
import CinemasInfo from './../../../components/Main/Cinemas/CinemasInfo/CinemasInfo';

function Cinemas() {
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
        <title>Cinemas | Park Cinema</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
      </Helmet>
      {/* <HeroSeciton /> */}
      <CinemasInfo />
    </>
  )
}

export default Cinemas