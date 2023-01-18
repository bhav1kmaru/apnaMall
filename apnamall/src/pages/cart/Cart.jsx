import {
  Badge,
  Divider,
  Flex,
  GridItem,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/layout";
import {
  Box,
  Grid,
  Icon,
  Text,
  Button,
  Image,
  Input,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

const Cart = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const hanldeDeleteInCart = (id) => {
    axios
      .delete(`https://apnamallcart.vercel.app/cart/${id}`)

      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e));
  };

  const getData = async () => {
    let res = await axios.get("https://apnamallcart.vercel.app/cart");
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, [data]);

  useEffect(() => {
    let sum = 0;
    for (let i of data) {
      sum += i.price;
    }
    console.log(sum);
    setSubTotal(Math.ceil(sum));
    setTotal(Math.ceil(sum));
  });
  return (
    <Flex gap={20}>
      {/* cart items */}
      <Box border={"0px black solid"} w="70%" p={10}>
        {data.map(({ id, title, image, price, rating, description, year }) => {
          return (
            <Flex
              key={id}
              gap={10}
              p={20}
              border={"0px solid red"}
              borderRadius={10}
              m={20}
              shadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
            >
              <Box border={"0px solid green"} w="20%" h="120px">
                <Image src={image} w="100%" h="100%" />
              </Box>
              <Box border={"0px solid teal"} w="55%">
                <Text>{title}</Text>
                <Text fontSize={16} fontWeight="bold">
                  ₹ {price}
                </Text>
                <ReactStars {...rating} />
              </Box>
              <Box margin="50">
                <Button
                  h={40}
                  border="none"
                  borderRadius={4}
                  bg="black"
                  color={"#ffffff"}
                  onClick={() => hanldeDeleteInCart(id)}
                >
                  Remove From Cart
                </Button>
              </Box>
            </Flex>
          );
        })}
      </Box>

      <Box border={"0px solid red"} w="30%">
        <Box
          shadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
          border={"0px solid red"}
          borderRadius={10}
          p={10}
          h="350"
        >
          <Flex padding={20} border={"0px solid teal"}>
            <Box w="75%" border={"0px solid black"}>
              <Heading paddingLeft={10}>Subtotal</Heading>
              {promoApplied === false ? (
                <Flex
                  paddingLeft={10}
                  alignItems={"center"}
                  textAlign="center"
                  bgColor={"#ccc"}
                  b
                  border={"0px solid black"}
                  h={40}
                  justifyContent="space-between"
                >
                  <Input
                    border={"none"}
                    h="25px"
                    w="75%"
                    placeholder="Promo code"
                  ></Input>
                </Flex>
              ) : (
                <Flex
                  paddingLeft={10}
                  bgColor={"#ccc"}
                  border={"0px solid red"}
                  h="40px"
                  alignItems={"center"}
                  justifyContent="space-between"
                >
                  <Text fontWeight="bold">PAYTM20</Text>
                </Flex>
              )}
              <Heading paddingLeft={10} colSpan={2} fontWeight="bold">
                Total ( {data.length} )
              </Heading>
            </Box>
            <Box textAlign={"center"} w="25%" border={"0px solid black"}>
              <Heading paddingLeft={10}>₹ {subTotal}</Heading>
              {promoApplied === false ? (
                <Flex
                  margin="auto"
                  bgColor={"#ccc"}
                  justifyContent={"center"}
                  alignItems="center"
                  border={"0px solid black"}
                  h={40}
                  w={"100%"}
                >
                  <Button
                    h={20}
                    w="1000%"
                    textAlign={"center"}
                    onClick={() => setPromoApplied(true)}
                    mr="20px"
                    borderRadius="4px"
                  >
                    Apply
                  </Button>
                </Flex>
              ) : (
                <Flex
                  bgColor={"#ccc"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  h="40px"
                  border={"0px solid red"}
                >
                  <Text color={"green"} fontWeight="bold">
                    - ₹ {(20 * total) / 100}
                  </Text>
                </Flex>
              )}
              <Heading colSpan={"1 , 3"} fontWeight="bold">
                ₹ {promoApplied ? Math.ceil(total - (20 * total) / 100) : total}
              </Heading>
            </Box>
          </Flex>
          <Flex borderTop={"1px dashed black"}>
            <Text paddingLeft={20} color={"green"} alignItems={""} colSpan={2}>
              You will save ₹ {(20 * total) / 100} on this order
            </Text>
          </Flex>
          <Grid justifyContent={"center"}>
            <Button
              margin={10}
              shadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
              borderRadius={4}
              bgColor={"#fb641b"}
              mr="20px"
              h="40px"
              border={"none"}
              variant="solid"
            >
              Proceed to checkout
            </Button>
          </Grid>
        </Box>
        <Flex color={"gray"} alignItems={"center"} border={"0px solid red"}>
          <Icon padding={10} as={WarningIcon} />
          <Text>
            Safe and Secure Payments.Easy returns.100% Authentic products.
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Cart;
