import React from "react";
import DropDown from "../../atoms/dopDown/DropDown";
import InputBox from "../../atoms/InputBox/InputBox";
import ShowStatsButton from "../../atoms/ShowstatsButton/ShowStatsButton";
import { Grid, SimpleGrid } from "@mantine/core";
import "./InputSection.css";

const InputSection = () => {
  return (
    <div className="InputSection_container">
      <InputBox />
      <DropDown />
      <ShowStatsButton />
    </div>
  );
};

export default InputSection;
