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

  const getimgSrc = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${selectedIndex}`)
      .then((response) => {
        // console.log(response.data?.sprites?.other?.dream_world?.front_default);
        setImageApi(response.data?.sprites?.other?.dream_world?.front_default);

        // return response.data?.sprites?.other?.dream_world?.front_default;
      });
  };
  if (openModal) {
    getimgSrc();
    console.log(imageapi);
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
      </Modal>
    )
  );
};

export default InfoModal;

// return result.data?.sprites?.other?.dream_world?.front_default;

//     .get(`https://pokeapi.co/api/v2/pokemon/${selectedIndex}`)
//     .then((response) => {
//       //   console.log(response.data?.sprites?.other?.dream_world?.front_default);
//       return response.data?.sprites?.other?.dream_world?.front_default;
//     });
//   console.log(imgSrc);
