import { Button, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
// import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <Stack>
      <Text as="b">Your Order has been placed.</Text>
      <Button bgColor="#e40980" color="white">
        <Link href="/" onClick={()=>localStorage.removeItem('cart')}>Continue Shopping</Link>
      </Button>
    </Stack>
  );
}

export default Success