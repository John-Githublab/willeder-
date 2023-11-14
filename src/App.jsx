import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Navbar from "./pages/Navbar/Index";
import HomeHero from "./pages/HomeHero/Index";
import Section from "./pages/section/Index";
import Box from "./components/Logo/Box";
import Footer from "./pages/Footer/Index";

function App() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <Section />
      <Box />
      <Footer />
    </>
  );
}

export default App;
