import { Text, Box, Input } from "@chakra-ui/react";
import React from "react";

const InputControl = (props) => {
  const { name, value, label, placeholder, handleChange, type } = props;

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box w="70%" fontSize={{ base: "18px", sm: "18px", md: "16px" }}>
      <Text mb="8px">{label}</Text>
      <Input
        type={type || "text"}
        fontSize={{ base: "18px", sm: "18px", md: "16px" }}
        name={name}
        value={value}
        onChange={(e) => handleChange(name, e.target.value)}
        placeholder={placeholder}
        size="sm"
      />
    </Box>
  );
};

export default InputControl;
