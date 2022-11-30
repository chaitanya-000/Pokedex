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
        overlayOpacity={0.55}
        overlayBlur={3}
        closeOnClickOutside
        size={"60%"}
      >
        <div className="modal_container">
          <h2 style={{ border: "2px solid green" }}>
            {pokemonName?.toUpperCase()}
          </h2>

          <div className="modal_Image_and_info">
            <img
              src={imageapi && imageapi}
              alt=""
              style={{ width: "20%", border: "2px solid red" }}
            />
            <div className="info">
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente consequatur quia nihil labore assumenda facilis, velit
                itaque, magnam excepturi non ea magni voluptatem!
              </h3>
            </div>
          </div>
          <div className="bottom_container">
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              delectus accusantium mollitia quae, ullam eum repellendus nam
              libero. A temporibus qui cum maxime!
            </h3>
          </div>
        </div>
      </Modal>
    )
  );
};

export default InfoModal;
