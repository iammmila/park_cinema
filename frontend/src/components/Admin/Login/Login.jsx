import React from 'react'

//general scss
import "./Login.scss"

function Login() {
  return (
    <div className='login_section'>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form className='login_form'>
        <h3>Login Here</h3>

        <label for="email">Email</label>
        <input type="text" placeholder="Email" id="email" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
      </form>
    </div>
  )
}

export default Login