import { Text } from "@mantine/core";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import "./Card.css";

const Card = () => {
  const fetchData = async () => {
    const apidata = await axios.get("https://pokeapi.co/api/v2/pokemon");
    return apidata;
  };
  const { data, isLoading, isError, error, isSuccess, isLoadingError } =
    useQuery("pokemons", fetchData);

  const pokemonmArray = data?.data.results;
  console.log(pokemonmArray);

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
