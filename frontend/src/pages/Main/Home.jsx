import React, { useEffect } from 'react'

//helmet
import { Helmet } from 'react-helmet-async';

// components
import Slider from "../../components/Main/Home/Slider/Slider"
import Subscribe from "../../components/Main/Home/Subscribe/Subscribe"
import Soon from "../../components/Main/Home/Soon/Soon"
import BuyTicket from "../../components/Main/Home/BuyTicket/BuyTicket"
import Campaigns from "../../components/Main/Home/Campaigns/Campaigns"

function Home() {
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
        <title>Home | Park Cinema</title>
        <meta name='description' content='It is about Home page of Park Cinema' />
      </Helmet>
      <Slider />
      <BuyTicket />
      <Soon />
      <Campaigns />
      <Subscribe />
    </>
  )
}

export default Home