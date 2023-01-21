import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Input,
  Select,
  Box,
  Flex,
  Grid,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";
function BasicUsage() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = useState([]);
  const getData = async () => {
    let res = await axios.get("https://apnamallcart.vercel.app/states");
    console.log(res.data);
    setState(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Button
        marginTop={5}
        shadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
        borderRadius={4}
        bgColor={"#FB641B"}
        border={"none"}
        variant="solid"
        onClick={onOpen}
      >
        Proceed to checkout
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delivery Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid gap={4} fontWeight="bold" mb="1rem">
              <Input
                required
                placeholder="Aera and Street"
                onChange={handleInputChange}
              ></Input>
              {!isError ? (
                <FormHelperText>
                  Enter the email youd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
              <Input placeholder="City/District/Town"></Input>
              <Flex gap={2}>
                <Select placeholder="-Select State-">
                  {state.map((ele) => {
                    return <option key={ele.name} value="">{ele.name}</option>;
                  })}
                </Select>
                <Input placeholder="Pincode"></Input>
              </Flex>
            </Grid>
            {/* <Lorem count={2} /> */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" bgColor="#FB641B">
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
