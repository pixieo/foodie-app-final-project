import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Login from './components/Login';
import Signin from './components/Signup';
import UserDashboard from './components/UserDashboard';

import reportWebVitals from './reportWebVitals';
import ForgotPassword from './components/ForgotPassword';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signin />}></Route>
        <Route path="/user-dashboard" element={<UserDashboard />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      </Routes>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
      <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
