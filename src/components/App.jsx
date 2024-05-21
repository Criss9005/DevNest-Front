import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage.js';
import RegistrationPage from './RegistrationPage/RegistrationPage.js';
import Menu from './Menu/Menu.jsx';
import BackgroundM from './BackgroundM/BackgroundM';
import MainPage from '../pages/MainPage/MainPage';

export const App = () => {
  return (
    <Router>
      <div className="container">
        <BackgroundM />
        <Menu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// src/components/App.jsx
/* import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../components/LoginPage/LoginPage.jsx';
import RegistrationPage from '../components/RegistrationPage/RegistrationPage.jsx';
import Menu from '../components/Menu/Menu.jsx';
import BackgroundM from '../components/BackgroundM/BackgroundM';
import MainPage from '../pages/MainPage/MainPage.js';
import Loader from '../components/Loader/loader.jsx';
import {
  loaderReducer,
  initialLoaderState,
} from '../components/Loader/loaderReducer.js';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [loaderState, dispatchLoader] = useReducer(
    loaderReducer,
    initialLoaderState
  );

  const handleLogin = username => {
    dispatchLoader({ type: 'START_LOADING' });
    setTimeout(() => {
      setIsAuthenticated(true);
      setUsername(username);
      dispatchLoader({ type: 'STOP_LOADING' });
    }, 1000); 
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <Router>
      <div className="container">
        <BackgroundM />
        <Menu
          isAuthenticated={isAuthenticated}
          username={username}
          handleLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/login"
            element={
              loaderState.isLoading ? (
                <Loader />
              ) : (
                <LoginPage handleLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/registration"
            element={
              loaderState.isLoading ? (
                <Loader />
              ) : (
                <RegistrationPage handleLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App; */
