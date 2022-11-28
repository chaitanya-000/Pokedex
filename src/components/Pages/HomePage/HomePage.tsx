import { CardSection } from "@mantine/core";
import React from "react";
import Card from "../../molecules/Card/Card";
import CardContainer from "../../organisms/CardContainer/CardSection";
import InputSection from "../../organisms/InputSection/InputSection";
import Navbar from "../../organisms/Navbar/Navbar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage_container">
      <Navbar />
      <InputSection />
      <CardContainer />
    </div>
  );
};

export default HomePage;
