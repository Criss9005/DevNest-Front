import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    handleLogin(username);
    navigate('/');
  };

  return (
    <div>
      <h1>Login Page</h1>
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
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
