import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssVarsProvider, ThemeProvider } from "@mui/joy";
import CssBaseline from "@mui/joy/CssBaseline";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import { appTheme } from "./themes";

function App() {
  // initialise storage area for restaurants
  return (
    <CssVarsProvider>
      <CssBaseline></CssBaseline>
      <BrowserRouter>
        <ThemeProvider theme={appTheme}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurant" element={<RestaurantPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;
