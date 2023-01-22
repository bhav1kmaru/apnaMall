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
  Input,
  Select,
  Flex,
  Grid,
  FormHelperText,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";
import axios from "axios";

function CheckOut() {
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
        bgColor={"#fb641b"}
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
          <FormControl>
            <ModalBody>
              <Grid gap={4} fontWeight="bold" mb="1rem">
                <Input
                  required
                  placeholder="Aera and Street"
                  onChange={handleInputChange}
                ></Input>
                {!isError ? (
                  <FormHelperText>
                    Enter the email you'd like to receive the newsletter on.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
                <Input placeholder="City/District/Town"></Input>
                <Flex gap={2}>
                  <Select placeholder="-Select State-">
                    {state.map((ele) => {
                      return <option value="">{ele.name}</option>;
                    })}
                  </Select>
                  <Input placeholder="Pincode"></Input>
                </Flex>
              </Grid>
            </ModalBody>
          </FormControl>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" bgColor="#fb641b">
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default CheckOut;
