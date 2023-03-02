import {
  Box,
  Button,
  Flex,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
// import styles from "./ProductCard.css";

const ProductCard = ({ image, name, price,id }) => {
  const [qty, setQty] = useState(1);
  const { setCartLength } = useContext(CartContext);
  // const handleRemove = (name) => {
   
  // };

    const hanldeDeleteInCart = (id) => {
      const data=JSON.parse(localStorage.getItem('cart'))
      let filteredData = data.filter((el) => el.id!=id);
      setCartLength((prevLength)=>prevLength-1)
      localStorage.setItem("cart", JSON.stringify(filteredData));
        
    };
  return (
    <Box className="product" p="10px">
      <Flex gap="20px">
        <Box>
          <Image h="75px" src={image} />
        </Box>
        <Stack>
          <Text>{name}</Text>
          <Text>
            Qty:
            <select value={qty} onChange={(e)=>{
                setQty(+(e.target.value))
                }}>
              <option value='1'>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </Text>
          <hr />
          <Button onClick={() => {
            hanldeDeleteInCart(id)
            }} w="80px">
            Remove
          </Button>
        </Stack>
        <Box>
          <Text>₹{price}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductCard;
