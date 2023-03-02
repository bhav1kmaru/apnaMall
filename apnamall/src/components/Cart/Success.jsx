import { Button, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
// import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <Stack>
      <Text as="b">Your Order has been placed.</Text>
      <Button bgColor="#dd6b20" color="white">
        <Link href="/" onClick={() => localStorage.removeItem("cart")}>
          Continue Shopping
        </Link>
      </Button>
    </Stack>
  );
}

export default Success