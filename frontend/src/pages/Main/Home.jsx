import React from 'react'
import { Helmet } from 'react-helmet-async';
import Slider from "../../components/Main/Home/Slider/Slider"
import Subscribe from "../../components/Main/Home/Subscribe/Subscribe"
import Soon from "../../components/Main/Home/Soon/Soon"
import BuyTicket from "../../components/Main/Home/BuyTicket/BuyTicket"
import Campaigns from "../../components/Main/Home/Campaigns/Campaigns"

function Home() {
  return (
    <>
      <Helmet>
        <title>Ana Səhifə | Park Cinema</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
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