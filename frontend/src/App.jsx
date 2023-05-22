import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, CssVarsProvider } from "@mui/joy";
import CssBaseline from "@mui/joy/CssBaseline";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import Navbar, { NAVBAR_HEIGHT } from "./components/Navbar";
import { storage } from "./utils/storage";
import { pseudoData } from "./utils/pseudo_restaurant_data";

function App() {
  /* to be removed */
  if (Object.keys(storage.load()).length === 0) storage.addNewRes(pseudoData);

  // initialise storage area for restaurants
  return (
    <CssVarsProvider>
      <CssBaseline></CssBaseline>
      <BrowserRouter>
        <Navbar />
        <Box sx={{ height: NAVBAR_HEIGHT }}></Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurant/:resName" element={<RestaurantPage />} />
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;
