
import { Routes, Route  } from "react-router-dom";
import { Suspense } from 'react';
import MainPage from '../pages/MainPage/MainPage';
import BackgroundM from './BackgroundM/BackgroundM';
import Menu from './Menu/Menu';
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import Calculator from "pages/Calculator/Calculator";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container">
      <BackgroundM/>
      
      <Menu/>
        <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/calculator' element={<Calculator/>} />
          
       
      </Routes>
     </div>
    </Suspense>
    
     
        
    
  );
};

export default App;
