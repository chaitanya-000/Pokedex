import { TextInput } from "@mantine/core";
import React from "react";
import "./InputBox.css";

const InputBox = () => {
  return (
    <TextInput
      sx={{ width: "40%" }}
      placeholder="Your name"
      withAsterisk
      className="input"
      size="lg"
      radius="lg"
      variant="filled"
    />
  );
};

export default InputBox;
