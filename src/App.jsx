import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Navbar from "./pages/Navbar/Index";
import HomeHero from "./pages/HomeHero/Index";
import Section from "./pages/section/Index";

function App() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <Section />
    </>
  );
}

export default App;
