import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  auth,
  signInWithFacebookAccount,
  signInWithGoogleAccount,
} from "@/components/auth/firebase";

import InputControl from "@/components/auth/InputControl";

import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Heading,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";


const initState = {
  name: "",
  email: "",
  password: "",
};
const sendData = async (data) => {
  let r = await fetch(`https://apnamallcart.vercel.app/auth`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
};
const Signup = () => {
  const [formData, setFormData] = useState(initState);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmission = () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      setErr("All Fields are required");
      return;
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (res) => {
        // await updateProfile(res.user, { displayName: formData.name });
        console.log(res.user);
        alert("signup sucessfull");
        setErr("");
        setLoading(false);
        // window.location.href='/login'
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
        setErr(err.message);
      });
  };

  return (
    <>
      <Head>
        <title>Signup</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        background="url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80') no-repeat"
        backgroundSize="cover"
      >
        <Center h="100vh">
          <Flex
            p="20px"
            w={{ base: "90%", sm: "80%", md: "70%", lg: "50%" }}
            borderRadius="10px"
            backgroundImage="linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)"
            color="#1c1e21"
            direction="column"
            gap="10px"
            justifyContent="center"
            alignItems="center"
          >
            <Heading as="h2" size={{ base: "md", sm: "md", md: "lg" }}>
              Welcome !
            </Heading>
            {err && <Text color="red">{err}</Text>}
            {/* form */}
            <FormControl>
              <VStack>
                <InputControl
                  placeholder="enter your name"
                  name="name"
                  label="Name"
                  value={formData.name}
                  handleChange={handleChange}
                />
                <InputControl
                  placeholder="enter your email"
                  name="email"
                  label="Email"
                  value={formData.email}
                  handleChange={handleChange}
                />
                <InputControl
                  placeholder="enter password"
                  name="password"
                  label="Password"
                  value={formData.password}
                  handleChange={handleChange}
                />
                <Button
                  w="70%"
                  isLoading={loading}
                  colorScheme="blue"
                  onClick={handleSubmission}
                >
                  Sign up
                </Button>
              </VStack>
            </FormControl>
            <Box py="20px">
              <Text fontSize={{ base: "18px", sm: "18px", md: "16px" }}>
                Already have an account ? <Link href="/login">Login</Link>
              </Text>
            </Box>

            {/* Accounts Login */}
            <Flex gap="15px">
              <Icon
                as={BsGoogle}
                boxSize={6}
                transition="all 0.5s"
                _hover={{ cursor: "pointer", transform: "scale(1.2)" }}
                onClick={() => signInWithGoogleAccount("sign up")}
              />
              <Icon
                as={BsFacebook}
                boxSize={6}
                transition="all 0.5s"
                _hover={{ cursor: "pointer", transform: "scale(1.2)" }}
                onClick={() => signInWithFacebookAccount("sign in")}
              />
              {/* <Icon
                as={BsGithub}
                boxSize={6}
                transition="all 0.5s"
                _hover={{ cursor: "pointer", transform: "scale(1.2)" }}
              /> */}
            </Flex>

            {/* border line at last */}
            <Box width="100%" height="5px" bgColor="orange"></Box>
          </Flex>
        </Center>
      </Box>
    </>
  );
};

export default Signup;
