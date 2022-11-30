import { Modal } from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";
import "./InfoModal.css";

const InfoModal = ({
  setOpenModal,
  openModal,
  selectedIndex,
  setSelectedIndex,
}: any) => {
  const [imageapi, setImageApi] = useState<string>();
  const [pokemonName, setPokemonName] = useState<string>();

  const getimgSrc = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${selectedIndex}`)
      .then((response) => {
        console.log(response.data.name);
        setImageApi(response.data?.sprites?.other?.dream_world?.front_default);
        setPokemonName(response.data?.name);
      });
  };
  if (openModal) {
    getimgSrc();
  }

  return (
    openModal && (
      <Modal
        className="modal"
        opened={openModal}
        onClose={() => setOpenModal(false)}
        title="Introduce yourself!"
        overlayOpacity={0.55}
        overlayBlur={3}
        closeOnClickOutside
        size={"60%"}
      >
        <img src={imageapi && imageapi} alt="" style={{ width: "39%" }} />
        <h2>{pokemonName}</h2>
      </Modal>
    )
  );
};

export default InfoModal;
