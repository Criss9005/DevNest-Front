import React from 'react';
import HeaderComponent from './components/Header/headerComponent.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login.jsx';
import Registration from './components/Auth/Registration.jsx';
/* import Loader from './components/Loader/loader'; */

export const App = () => {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
};
