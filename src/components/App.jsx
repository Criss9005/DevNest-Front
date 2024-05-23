import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import MainPage from '../pages/MainPage/MainPage';

import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import Calculator from 'pages/Calculator/Calculator';
import Diary from './Calculate/DiaryAddCalculate';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
