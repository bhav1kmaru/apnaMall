import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
// import { Link, Navigate } from 'react-router-dom'

const Protected = () => {
  return (
    <Center mt="100px">
      <Stack gap="40px" textAlign="center">
        <Image src="https://media4.ppl-media.com/mediafiles/ecomm/webengage/1456403495_empty-bag-25022016.png" />
        <Heading size='md'>You are not Logged In, Please Login First</Heading>
        <Button bgColor="#dd6b20" color="white">
          <Link href="/login">Login</Link>
        </Button>
      </Stack>
    </Center>
  );
};

export default Protected;
