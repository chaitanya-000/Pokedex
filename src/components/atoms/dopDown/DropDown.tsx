import { MultiSelect } from "@mantine/core";
import "./DropDown.css";

const data = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "riot", label: "Riot" },
  { value: "next", label: "Next.js" },
  { value: "blitz", label: "Blitz.js" },
];

const DropDown = () => {
  return (
    <MultiSelect
      clearable
      className="DropDown"
      radius="lg"
      data={data}
      size="md"
      placeholder="Pokemon type"
    />
  );
};
export default DropDown;
