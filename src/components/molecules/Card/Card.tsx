import { Text } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { allPokemonUrlArray } from "../../../promises";
import CardImage from "../../atoms/cardImage/CardImage";
import "./Card.css";

const Card = () => {
  const [pokemonArray, setPokemonArray] = useState<any>([]);

  useEffect(() => {
    const myFunc = async () => {
      const myArray = await allPokemonUrlArray();
      // console.log(myArray);
      setPokemonArray(myArray);
    };
    myFunc();
  }, []);

  console.log(pokemonArray);
  // const fetchData = async () => {
  //   const apidata = await axios.get(
  //     "https://pokeapi.co/api/v2/pokemon?offset=0&limit=24"
  //   );
  //   return await apidata;
  // };
  // const { data, isLoading, isError, error, isSuccess, isLoadingError } =
  //   useQuery("pokemons", fetchData);

  // const pokemonArray = data && data.data && data.data.results;

  // if (pokemonArray) {
  //   const arrayOfUrl = pokemonArray.map((eachObj: any) => {
  //     return eachObj.url;
  //   });
  //   // console.log(arrayOfUrl);
  // }
  return (
    pokemonArray &&
    pokemonArray.map((eachObj: any, index: number) => {
      return (
        <div className="Card_container" key={index}>
          <img
            src={`${eachObj?.data?.sprites?.other?.dream_world?.front_default}`}
            // src="https://picsum.photos/200/300"
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
