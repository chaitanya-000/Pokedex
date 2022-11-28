import { Text } from "@mantine/core";
import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="Card_container">
      <img src="https://picsum.photos/120/150" className="img" />
      <Text fz={22} fw={700} mt={21}>
        Pokemon Name
      </Text>
      <Text fz="xl">001</Text>
    </div>
  );
};

export default Card;
