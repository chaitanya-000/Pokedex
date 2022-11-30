import React, { useState } from "react";
import CardContainer from "../../organisms/CardContainer/CardSection";
import InputSection from "../../organisms/InputSection/InputSection";
import InfoModal from "../../organisms/Modal/InfoModal";
import Navbar from "../../organisms/Navbar/Navbar";
import "./HomePage.css";

const HomePage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // const [pokemonName, setPokemonName] = useState<string>();

  return (
    <div className="HomePage_container">
      <Navbar />
      <InputSection />
      <CardContainer
        setOpenModal={setOpenModal}
        openModal={openModal}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        // pokemonName={pokemonName}
        // setPokemonName={setPokemonName}
      />
      <InfoModal
        setOpenModal={setOpenModal}
        openModal={openModal}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        // pokemonName={pokemonName}
        // setPokemonName={setPokemonName}
      />
    </div>
  );
};

export default HomePage;
