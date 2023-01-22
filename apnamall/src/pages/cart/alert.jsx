import React, { useState, useEffect } from "react";
import axios from "axios";
const {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  AlertIcon,
  Alert,
  Text,
  Flex,
  Box,
  AlertTitle,
} = require("@chakra-ui/react");

export default function NotPay() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await axios.get("https://apnamallcart.vercel.app/cart");
    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    let sum = 0;
    for (let i of data) {
      sum += i.price;
    }
    setTotal(Math.ceil(sum));
  }, [data]);
  return (
    <>
      <Button marginTop={5} onClick={onOpen} colorScheme="orange">
        Pay {Math.ceil(total - (total * 20) / 100)}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Alert status="error">
            <ModalBody>
              <Flex>
                <AlertIcon />
                <Text>Please Enter Correct Card Details</Text>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Ok
              </Button>
            </ModalFooter>
          </Alert>
        </ModalContent>
      </Modal>
    </>
  );
}
export const Pay = () => {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await axios.get("https://apnamallcart.vercel.app/cart");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let sum = 0;
    for (let i of data) {
      sum += i.price;
    }
    console.log(sum);
    setTotal(Math.ceil(sum - (sum * 20) / 100));
  }, [data]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button marginTop={5} onClick={onOpen} colorScheme="orange">
        Pay {total}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent color={"#2d3748"} bgColor={"#c6f6d5"}>
          <Alert status="success">
            <ModalBody>
              <Flex alignItems={"center"}>
                <Box>
                  <AlertIcon boxSize="30px" />
                </Box>
                <Box border={"0px solid"}>
                  <AlertTitle mt={4} mb={1} fontSize="lg">
                    Payment Successful !
                  </AlertTitle>
                  <Text>Your order is placed</Text>
                </Box>
              </Flex>
            </ModalBody>
          </Alert>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
