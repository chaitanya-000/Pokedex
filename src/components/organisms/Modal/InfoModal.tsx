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
  const [pokemonInfo, setPokemonInfo] = useState([]);

  const getimgSrc = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${selectedIndex}`)
      .then((response) => {
        setPokemonType(response.data.types);
        setImageApi(response.data?.sprites?.other?.dream_world?.front_default);
        setPokemonName(response.data?.name);
      });
  };

  const infoText = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${selectedIndex}`)
      .then((response) => {
        const filteredFlavourTextArray =
          response.data.flavor_text_entries.filter((eachObj: any) => {
            return eachObj.language.name === "en";
          });

        setPokemonInfo(filteredFlavourTextArray);
      });
  };

  const arrayofDuplicateTexts = pokemonInfo.map((eachObj: any) => {
    return eachObj.flavor_text;
  });

  const filteredArray: Array<string> = arrayofDuplicateTexts.filter(
    (eachElement, index, arrayofDuplicateTexts) => {
      return arrayofDuplicateTexts.indexOf(eachElement) === index;
    }
  );
  console.log(
    filteredArray.map((eachObject) => {
      console.log(eachObject);
    })
  );

  useEffect(() => {
    openModal && getimgSrc();
    infoText();
  }, [openModal]);

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
              {}
              <div className="pokemon_type">
                <h2>Type</h2>
                {pokemonType.map(
                  (eachObj: { type: { name: string } }, index: number) => {
                    return <h3 key={index}>{eachObj.type.name}</h3>;
                  }
                )}
              </div>
            </div>
          </div>
          <div className="bottom_container">
            {filteredArray.map((eachObject) => {
              return <span style={{}}>{eachObject}</span>;
            })}
          </div>
        </div>
      </Modal>
    )
  );
};

export default InfoModal;
