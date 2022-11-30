import { Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { allPokemonUrlArray } from "../../../promises";
import "./Card.css";

const Card = ({
  selectedIndex,
  setSelectedIndex,
}: // pokemonName,
// setPokemonName,
any) => {
  const [pokemonArray, setPokemonArray] = useState<any>([]);

  useEffect(() => {
    const myFunc = async () => {
      const myArray = await allPokemonUrlArray();
      // console.log(myArray);
      setPokemonArray(myArray);
      // setPokemonName()
    };
    myFunc();
  }, []);
  // console.log("Selected Index ", selectedIndex);
  return (
    pokemonArray &&
    pokemonArray.map((eachObj: any, index: number) => {
      return (
        <div
          className="Card_container"
          key={index}
          onClick={() => setSelectedIndex(index + 1)}
        >
          <img
            src={`${eachObj?.data?.sprites?.other?.dream_world?.front_default}`}
            alt="Pokemon"
            className="CardImage_image"
          />
          <Text fz={17} fw={700} mt={21}>
            {eachObj.data.name.toUpperCase()}
          </Text>

          <Text fz="xl">{index + 1}</Text>
        </div>
      );
    })
  );
};

export default Card;
