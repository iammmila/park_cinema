import React from 'react'
import { Helmet } from 'react-helmet-async'
import Information from "../../../components/Main/About/AboutUs/Information"
import CinemasInfo from "../../../components/Main/About/CinemasInfo/CinemasInfo"

function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us | Park Cinema</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
      </Helmet>
      About Us
      <Information />
      <CinemasInfo/>
    </>
  )
}

export default AboutUs