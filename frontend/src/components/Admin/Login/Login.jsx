import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//general scss
import "./Login.scss"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5196/api/Acounts/Login', { email, password });
      localStorage.setItem('token', response.data.token);
      history.push('/');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className='login_section'>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      {error && <div>{error}</div>}
      <form className='login_form' onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <label htmlFor="email">Email</label>
        <input type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          id="email" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          id="password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default Login