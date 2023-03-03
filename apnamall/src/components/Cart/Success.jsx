import { Button, Center, Link, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'
import order from './ordSuc.png'
// import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <Center>
      <Stack gap="20px">
        <Image src={order} />
        <Text as="b">Your Order has been placed.</Text>
        
          <Link href="/" onClick={() => localStorage.removeItem("cart")}>
            <Button bgColor="#dd6b20" color="white">Continue Shopping</Button>
          </Link>
       
      </Stack>
    </Center>
  );
}

export default Success