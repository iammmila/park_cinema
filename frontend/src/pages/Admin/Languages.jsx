import React from 'react'
import { Helmet } from 'react-helmet-async';

//COMPONENTS
import Table from '../../components/Admin/Languages/Table';

function Languages() {
  return (
    <>
      <Helmet>
        <title>General Languages | Park Cinema</title>
        <meta name='description' content="It is about General Languages of Park Cinema's films" />
      </Helmet>
      <Table />
    </>
  )
}

export default Languages