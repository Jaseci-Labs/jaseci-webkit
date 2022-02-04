import { Input } from "./Input";

export const generated = ({ placeholder }) => {
  return <Input css={{ width: "50%" }} placeholder={placeholder} name="test" />;
};

export const withLabel = ({ placeholder }) => {
  return (
    <>
      <Input css={{ width: "50%" }} placeholder={placeholder} name="test" />;
    </>
  );
};

export default {
  title: "Components/UI/Input",
  args: { placeholder: "Enter something..." },
};
