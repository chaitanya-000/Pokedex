import React from "react";
import "./App.css";
import Card from "./components/molecules/Card/Card";
import InputSection from "./components/organisms/InputSection/InputSection";
import Navbar from "./components/organisms/Navbar/Navbar";
import HomePage from "./components/Pages/HomePage/HomePage";
import { allPokemonUrlArray, pokemonTypes } from "./promises";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
