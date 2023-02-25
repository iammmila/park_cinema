import React, { useEffect } from 'react'

//components
import IsNotFound from "../../components/Main/NotFound/IsNotFound"

function NotFound() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])
  return (
    <IsNotFound />
  )
}

export default NotFound