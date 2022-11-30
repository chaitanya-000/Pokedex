import { Modal } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./InfoModal.css";

const InfoModal = ({
  setOpenModal,
  openModal,
  selectedIndex,
  setSelectedIndex,
}: any) => {
  const [imageapi, setImageApi] = useState<string>();
  const [pokemonName, setPokemonName] = useState<string>();
  const [pokemonType, setPokemonType] = useState([]);

  const getimgSrc = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${selectedIndex}`)
      .then((response) => {
        // console.log("Pokemon TYpes", response.data.types);
        setPokemonType(response.data.types);
        setImageApi(response.data?.sprites?.other?.dream_world?.front_default);
        setPokemonName(response.data?.name);
      });
  };

  useEffect(() => {
    openModal && getimgSrc();
  }, [openModal]);
  console.log(pokemonType);

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
        radius="lg"
      >
        <div className="modal_container">
          <h3 style={{ border: "2px solid green" }}>
            {selectedIndex}: {pokemonName?.toUpperCase()}
          </h3>

          <div className="modal_Image_and_info">
            <img
              src={imageapi && imageapi}
              alt=""
              style={{ width: "20%", border: "2px solid red" }}
            />
            <div className="info">
              <h2>Type</h2>
              {pokemonType.map(
                (eachObj: { type: { name: string } }, index: number) => {
                  return <h3 key={index}>{eachObj.type.name}</h3>;
                }
              )}
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
