import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

function IsNotFound() {
  return (
    <div class="container" >
      <div class="copy-container center-xy">
        <p>
          404, page not found.
        </p>
        <Link to="/">Go to Home...</Link>
      </div>
    </div>
  )
}

export default IsNotFound