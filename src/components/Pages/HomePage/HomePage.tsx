import React, { useState } from "react";
import { pokemonTypes } from "../../../promises";
import CardContainer from "../../organisms/CardContainer/CardSection";
import InputSection from "../../organisms/InputSection/InputSection";
import InfoModal from "../../organisms/Modal/InfoModal";
import Navbar from "../../organisms/Navbar/Navbar";
import "./HomePage.css";

const HomePage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const result = pokemonTypes().then((response) => {
    response.values.map((eachObj: any) => {
      return eachObj;
    });
  });

  return (
    <div className="HomePage_container">
      <Navbar />
      <InputSection />
      <CardContainer
        setOpenModal={setOpenModal}
        openModal={openModal}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <InfoModal
        setOpenModal={setOpenModal}
        openModal={openModal}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </div>
  );
};

export default HomePage;
