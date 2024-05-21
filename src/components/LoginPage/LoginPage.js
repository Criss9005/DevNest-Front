import React, { useState } from 'react';
import '../StyleComponents.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ButtonLink({ to, children }) {
  return <Link to={to}><button>{children}</button></Link>;
}

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post(`https://devnest-back-1.onrender.com/api/auth/login`, {
      email: email,
      password: password
    })
      .then(response => {
        const data = response.data
       console.log(data)
        
      })
      .catch(e => { 
        console.log(e)
      })
    
  };

  return (
    <div className="login-container">
      <h1>LOG IN</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email *
          <br />
          <input type="email" value={email} onChange={handleEmailChange} required/>
        </label>
        <br />
        <label>
          Password *
          <br />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>

        <div className="div_button">
          <button type="submit">Log in</button>
          <ButtonLink className="register-button" to="/register">Register</ButtonLink>
          
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
