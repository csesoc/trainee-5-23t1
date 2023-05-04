import './App.css';

import { storage } from './utils/storage.ts';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';


function App() {
  // initialise storage area for restaurants
  return (
    <CssVarsProvider>
      <CssBaseline></CssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/restaurant' element={<RestaurantPage />} />
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;
