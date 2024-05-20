import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h1>REGISTER</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name *
          <br />
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email *
          <br />
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password *
          <br />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <div className="div_button">
          <button type="submit">Register</button>
          
          <button className="login-button"><Link to="/login">Log in</Link></button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
