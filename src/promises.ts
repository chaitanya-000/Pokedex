import axios from "axios";
const API_POKEMON = "https://pokeapi.co/api/v2/pokemon";

const API_TYPES = "https://pokeapi.co/api/v2/type";
const colors = [
  "#DDCBD0",
  "#FCC1B0",
  "#B2D2E8",
  "#CFB7ED",
  "#F4D1A6",
  "#C5AEA8",
  "#C1E0C8",
  "#D7C2D7",
  "#C2D4CE",
  "#EDC2C4",
  "#CBD5ED",
  "#C0D4C8",
  "#E2E200",
  "#DDC0CF",
  "#C7D7DF",
  "#CADCDF",
  "#C6C5E3",
  "#E4C0CF",
  "#C0DFDD",
  "#CACACA",
];

export const allPokemonUrlArray = async () => {
  const response = await axios.get(`${API_POKEMON}?limit=24`);
  const pokemonsArray = await response.data.results;

  const promises = await pokemonsArray.map((eachObj: { url: string }) => {
    return axios.get(`${eachObj.url}`);
  });

  const allPokemons = await Promise.all(promises).then((result: any) => {
    return result;
  });
  return allPokemons;
};

export const pokemonTypes = async () => {
  const response = await axios.get(`${API_TYPES}`);
  // console.log(response.data.results);
  const result = await response.data.results;

  const types = result.map((eachObj: { name: string }) => {
    const typeOfPokemon = eachObj.name;
    return typeOfPokemon;
  });

  const values = types.map((eachObj: string, index: any) => {
    let abc: any = {};
    abc[`${eachObj}`] = colors[index];
    return abc;
  });
  // console.log(values);
  return { values, types };
};
