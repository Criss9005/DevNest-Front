import React, { useState } from 'react';
import HeaderComponent from './components/Header/headerComponent.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import Login from './components/Auth/Login.jsx';
import Registration from './components/Auth/Registration.jsx';

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = username => {
    setIsAuthenticated(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <Router>
      <div>
        <HeaderComponent
          isAuthenticated={isAuthenticated}
          username={username}
          handleLogout={handleLogout}
        />
        <Routes>
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/registration" element={<Registration handleLogin={handleLogin} />}
          />
        </Routes>
      </div>
    </Router>
  );
};
