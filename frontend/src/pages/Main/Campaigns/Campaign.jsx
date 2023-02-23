import React from 'react'

//helmet
import { Helmet } from 'react-helmet-async'
import CampaignsGeneral from '../../../components/Main/Campaigns/CampaignsGeneral/CampaignsGeneral'

function Campaign() {
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