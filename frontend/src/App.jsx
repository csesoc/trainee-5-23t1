import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy";
import CssBaseline from "@mui/joy/CssBaseline";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import Navbar from "./components/Navbar";
import { storage } from "./utils/storage";

// pseudo test restaurant info
const dummyData = {
  name: "Spice Alley",
  image: "",
  location: "Sydney Kensington",
  embed: "https://www.tiktok.com/embed/7165992284994014466",
  priceRange: "$",
  rating: 0,
  tags: {
    suburb: "Kensington",
    cuisine: "Asian",
    other: ["Xiao long bai", "Wontons", "Thai"],
  },
  descriptions:
    "The fresh, nourishing and delicious food you’ve come to love from Spice Alley is available from 11am daily (kitchens close 9:30pm Sunday to Thursday, and 10pm on Friday & Saturday). For takeaway, order online or by phone and pick up from Kensington Street.",
  elements: [],
};

function App() {
  /* to be removed */
  if (Object.keys(storage.load()).length === 0) storage.addNewRes(dummyData);

  // initialise storage area for restaurants
  return (
    <CssVarsProvider>
      <CssBaseline></CssBaseline>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurant/:resName" element={<RestaurantPage />} />
        </Routes>
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;
