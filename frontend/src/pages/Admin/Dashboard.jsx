import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

function Dashboard() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const navigate = useNavigate();

  // // Check if the user is logged in
  // const isLoggedIn = false; // replace with your actual login check

  // // Redirect to the login page if the user is not logged in
  // React.useEffect(() => {
  //   if (!isLoggedIn) {
  //     // navigate.push('/admin/login');
  //   }
  // }, [isLoggedIn, navigate]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch('/api/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, password }),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Invalid credentials');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // save the token in localStorage
  //       localStorage.setItem('token', data.token);
  //       // redirect to the home page or dashboard
  //       window.location.href = '/dashboard';
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  return (
    <></>
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Username:
    //     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    //   </label>
    //   <br />
    //   <label>
    //     Password:
    //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //   </label>
    //   <br />
    //   <button type="submit">Login</button>
    // </form>

  )
}

export default Dashboard