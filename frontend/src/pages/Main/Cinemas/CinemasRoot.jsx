import React from 'react'
import { Outlet } from 'react-router-dom'

// import ScrollTopButton from '../../../components/Main/ScrollTop/ScrollTopButton'

function CinemasRoot() {
  return (
    <>
      <Outlet />
      {/* //!scroll top button */}
      {/* <ScrollTopButton /> */}
    </>
  )
}

export default CinemasRoot