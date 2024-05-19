import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import RegistrationPage from './RegistrationPage/RegistrationPage.js';
import Menu from './Menu/Menu.js';
//import Background from './Background/Background';
import BackgroundM from './BackgroundM/BackgroundM';
import MainPage from '../pages/MainPage'; 

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
}

export default App;