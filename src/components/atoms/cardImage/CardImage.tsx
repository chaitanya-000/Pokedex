import React from "react";
import "./CardImage.css";

const CardImage = ({ pokemonArray }: any): any => {
  pokemonArray.map((eachObj: any) => {
    console.log(eachObj.data.sprites.other.dream_world?.front_default);
    return (
      <img
        // src={`${eachObj?.data?.sprites?.other?.dream_world?.front_default}`}
        src="https://picsum.photos/200/300"
        alt="Pokemon"
        className="CardImage_image"
      />
    );
  });
};

export default CardImage;

// [0].data.sprites.other.dream_world.front_default;
