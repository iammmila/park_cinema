import React from 'react'
import { Helmet } from 'react-helmet-async';
import Details from '../../components/Admin/Dashboard/Details';

function Dashboard() {

  return (
    <>
      <Helmet>
        <title>Dashboard | Park Cinema</title>
        <meta name='description' content="It is about Admin's Dashboard of Park Cinema" />
      </Helmet>
      <Details />
    </>
  )
}

export default Dashboard