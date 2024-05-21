
import { Routes, Route  } from "react-router-dom";
import { Suspense } from 'react';
import MainPage from '../pages/MainPage/MainPage';
import BackgroundM from './BackgroundM/BackgroundM';
import Menu from './Menu/Menu';
import LoginPage from "./LoginPage/LoginPage";
import RegistrationPage from "./RegistrationPage/RegistrationPage";


const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container">
      <BackgroundM/>
      
      <Menu />
        <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={ <LoginPage/> } />
        <Route path='/register' element={ <RegistrationPage/> } />
       
      </Routes>
     </div>
    </Suspense>
    
     
        
    
  );
};

export default App;
