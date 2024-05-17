import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';



const MainPage = lazy(() => import('./pages/MainPage'));

const ErrorBoundary = () => {
  return <h3>An error occurred while loading the component.</h3>;
};

export const App = () => {
  return (
    <Suspense fallback={<ErrorBoundary />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Suspense>
  );
};
