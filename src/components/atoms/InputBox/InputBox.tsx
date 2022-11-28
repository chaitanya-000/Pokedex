import { TextInput } from "@mantine/core";
import React from "react";
import "./InputBox.css";

const InputBox = () => {
  return (
    <TextInput
      sx={{ width: "40%" }}
      placeholder="Name or Number"
      withAsterisk
      className="input"
      size="lg"
      radius="lg"
      variant="filled"
    />
  );
};

export default InputBox;
