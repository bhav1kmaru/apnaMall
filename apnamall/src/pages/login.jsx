import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/components/auth/firebase";
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
} from "@chakra-ui/react";

const initState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initState);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmission = () => {
    if (formData.email === "" || formData.password === "") {
      setErr("All Fields are required");
      return;
    }
    setLoading(true);
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (res) => {
        await updateProfile(res.user, { displayName: formData.name });
        // console.log(res.user);
        alert("Login sucessfull");
        setErr("");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErr(err.message);
      });
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        background="url('https://png.pngtree.com/background/20210710/original/pngtree-shopping-mall-supermarket-selection-merchandise-poster-background-material-picture-image_1048684.jpg') no-repeat"
        backgroundSize="cover"
      >
        <Center h="100vh">
          <Flex
            p="20px"
            w="40%"
            borderRadius="10px"
            backgroundImage="linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)"
            color="#1c1e21"
            direction="column"
            gap="10px"
            justifyContent="center"
            alignItems="center"
          >
            <Heading as="h2" size="lg">
              Hey ! Welcome Back
            </Heading>
            {err && <Text color="red">{err}</Text>}
            {/* form */}
            <FormControl>
              <VStack>
                <InputControl
                  placeholder="enter your email"
                  name="email"
                  label="Email"
                  value={formData.email}
                  handleChange={handleChange}
                />
                <InputControl
                  placeholder="enter your password"
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
                  Log in
                </Button>
              </VStack>
            </FormControl>
            <Box py="20px">
              <Text>
                Don't have an account ? <Link href="/signup">SignUp</Link>
              </Text>
            </Box>
            {/* border line at last */}
            <Box width="100%" height="5px" bgColor="orange"></Box>
          </Flex>
        </Center>
      </Box>
    </>
  );
};

export default Login;