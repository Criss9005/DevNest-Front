import React, { useState } from 'react';
import '../StyleComponents.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h1>LOG IN</h1>
      <form onSubmit={handleSubmit}>
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
          <button className="buttonp" type="submit">
            Log in
          </button>
          <button className="buttonp">Register</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

/* import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../StyleComponents.css';

const LoginPage = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    handleLogin(email.split('@')[0]); // Usa el nombre de usuario antes del '@' del email
    navigate('/'); // Redirige al usuario después de iniciar sesión
  };

  return (
    <div className="login-container">
      <h1>LOG IN</h1>
      <form onSubmit={handleSubmit}>
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
          <button className="buttonp" type="submit">
            Log in
          </button>
          <button className="buttonp" onClick={() => navigate('/registration')}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage; */
