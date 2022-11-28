import { Button, Text } from "@mantine/core";
import React from "react";
import "./ShowStatsButton.css";

const ShowStatsButton = () => {
  return (
    <Button
      size="md"
      radius="md"
      variant="outline"
      color="cyan"
      sx={{ backgroundColor: " yellow", width: "10%", fontSize: "1.2em" }}
    >
      Stats
    </Button>
  );
};

export default ShowStatsButton;

// <Text
//   sx={{ fontFamily: "revert", fontSize: "1em" }}
//   ta="center"
//   fz="xl"
//   fw={700}
// >
// </Text>
