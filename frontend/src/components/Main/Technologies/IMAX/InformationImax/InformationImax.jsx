import React from 'react'

//components
import InfoImage from '../InfoImage/InfoImage'

//general scss
import "./InformationImax.scss"

function InformationImax() {
  return (
    <div className='information-imax-section'>
      <div className='line' ></div>
      <h1>IMAX TECHNOLOGY</h1>
      <div className='information-brief'>
        <p>Content that is broadcasted in IMAX cinemas, surpasses the content reproduced in usual format in all respects. The secret ingredient is a digitally remastering or DMR. This method allows to convert excellent film in breathtaking blockbuster with unique sound features and unsurpassed image quality. The creators of this format work on the stage and mounting for months, plan each shot, perform the sound remix, work at saturation, contrast, brightness, and many other details in order to present the movie at cinema in the best way. Effects are applied often after the shooting, but now leading producers include the IMAX effect from the very beginning of filmmaking. Increasing number of Hollywood movies is shot by using this technology. This means that film, conceived in such format, requires close cooperation of producer and IMAX company. It is necessary to decide which part should be shot with a special camera, which techniques are suitable for sound and image processing, how to show all the advantages of large size and wealth of colors during the work.</p>
        <InfoImage />
      </div>
    </div>
  )
}

export default InformationImax