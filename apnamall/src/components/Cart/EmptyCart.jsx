import { Box, Button, Center, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
// import { Link, Navigate } from 'react-router-dom'

const EmptyCart = () => {
    

  return (
    <Center mt="100px">
      <Stack gap="40px" textAlign="center">
        <Image src="https://media4.ppl-media.com/mediafiles/ecomm/webengage/1456403495_empty-bag-25022016.png" />
        <Text>There are no items in the cart.</Text>
        <Link href="/" onClick={() => localStorage.removeItem("cart")}>
          <Button bgColor="#dd6b20" color="white">
            Continue Shopping
          </Button>
        </Link>
      </Stack>
    </Center>
  );
}

export default EmptyCart