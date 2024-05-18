import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registration({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    handleLogin(username);
    navigate('/');
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            name="username"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
