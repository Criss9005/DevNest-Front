import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import MainPage from '../pages/MainPage/MainPage';

import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import CalculatorPage from 'pages/CalculatorPage/CalculatorPage';
import Diary from '../pages/DiaryPage/DiaryPage';

const App = () => {

  // mientras hago pruebas para que no setear
  //localStorage.removeItem('USER')
  //localStorage.removeItem('CAL_NO_USER')

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
