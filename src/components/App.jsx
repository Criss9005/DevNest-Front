import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import MainPage from '../pages/MainPage/MainPage';
import BackgroundM from './BackgroundM/BackgroundM';
import Menu from './Menu/Menu';
import LoginPage from './LoginPage/LoginPage';
import RegistrationPage from './RegistrationPage/RegistrationPage';
import Diary from '../components/diary/Diary';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container">
        <BackgroundM />
        <Menu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
