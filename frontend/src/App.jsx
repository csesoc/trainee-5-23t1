import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/joy";
import CssBaseline from "@mui/joy/CssBaseline";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import Navbar, { NAVBAR_HEIGHT } from "./components/Navbar";

import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";

const materialTheme = materialExtendTheme();

function App() {
  // initialise storage area for restaurants
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <CssBaseline></CssBaseline>
        <BrowserRouter>
          <Navbar />
          <Box sx={{ height: NAVBAR_HEIGHT }}></Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurant/:resName" element={<RestaurantPage />} />
          </Routes>
        </BrowserRouter>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
}

export default App;
