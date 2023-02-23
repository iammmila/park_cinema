import React from 'react'

//general scss
import "./Video.scss"

//video
import videoBcg from "../../../assets/videos/mppp.mp4"

function Video() {
  return (
    <video autoPlay="autoplay" loop="loop" muted id="myVideo">
      <source src={videoBcg} type="video/mp4" />
    </video>
  )
}

export default Video