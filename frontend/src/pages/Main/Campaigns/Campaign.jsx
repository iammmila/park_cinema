import React, { useEffect } from 'react'

//helmet
import { Helmet } from 'react-helmet-async'

//components
import CampaignsGeneral from '../../../components/Main/Campaigns/CampaignsGeneral/CampaignsGeneral'

function Campaign() {
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
        <title>Campaigns | Park Cinema</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
      </Helmet>
      <CampaignsGeneral />
    </>
  )
}

export default Campaign