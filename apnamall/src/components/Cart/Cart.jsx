import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import CartComponents from './CartComponents'
import { dummy } from './data'
import EmptyCart from './EmptyCart'

const Cart = () => {
    const [data, setData] = useState([]);
  return (
    <Box w='80%' m='auto'>
        {<CartComponents data={data} />}
    </Box>
  )
}

export default Cart