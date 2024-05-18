import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import RegistrationPage from './RegistrationPage/RegistrationPage.js';
import Menu from './Menu/Menu.js';
import Background from './Background/Background';

export const App = () => {
  return (
    <Router>
      <div className="container">
        <Background />
        <Menu />
        <Routes>
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </div>
    </Router>
  );
};
