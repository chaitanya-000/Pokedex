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
  const [abilities, setAbilities] = useState([]);
  const [eggType, setEggGroup] = useState([]);

  const dataFromApi = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${selectedIndex}`)
      .then((response) => {
        setPokemonType(response.data.types);
        setImageApi(response.data?.sprites?.other?.dream_world?.front_default);
        setPokemonName(response.data?.name);
        setAbilities(response.data.abilities);
      });
  };

  const infoText = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${selectedIndex}`)
      .then((response) => {
        setEggGroup(response.data.egg_groups);
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

  useEffect(() => {
    openModal && dataFromApi();
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
        sx={{
          background: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: " 1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <div
          className="modal_container"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: " 1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <h2>
            {selectedIndex}: {pokemonName?.toUpperCase()}
          </h2>

          <div className="modal_Image_and_info">
            <img
              src={imageapi && imageapi}
              alt=""
              style={{ width: "20%" }}
              className="img"
            />
            <div className="info">
              <div className="pokemon_type">
                <h2>Type</h2>
                {pokemonType.map(
                  (eachObj: { type: { name: string } }, index: number) => {
                    return <li key={index}>{eachObj.type.name}</li>;
                  }
                )}
              </div>
              <div
                className="pokemon_abilities"
                // style={{ border: "3px dotted blue" }}
              >
                <h2>Abilities</h2>
                {abilities.map(
                  (
                    eachObj: {
                      ability: {
                        name: string;
                      };
                    },
                    index: number
                  ) => {
                    return <li key={index}>{eachObj.ability.name}</li>;
                  }
                )}
              </div>
              <div className="pokemon_eggType">
                <h2>Egg Type</h2>
                {eggType.map((eachObj: { name: string }, index) => {
                  return <li key={index}>{eachObj.name}</li>;
                })}
              </div>
            </div>
          </div>
          <div className="bottom_container">
            {filteredArray.map((eachObject, index) => {
              return <span key={index}>{eachObject}</span>;
            })}
          </div>
        </div>
      </Modal>
    )
  );
};

export default InfoModal;
