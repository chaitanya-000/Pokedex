import React from "react";
import Card from "../../molecules/Card/Card";
import "./CardContainer.css";

const CardContainer = ({
  setOpenModal,
  openModal,
  selectedIndex,
  setSelectedIndex,
}: any) => {
  return (
    <div
      className="CardContainer_container"
      onClick={() => {
        setOpenModal(!openModal);
      }}
    >
      <Card selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    </div>
  );
};

export default CardContainer;
