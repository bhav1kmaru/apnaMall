import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CartComponents from './CartComponents'
import { dummy } from './data'
import EmptyCart from './EmptyCart'
import { useToast } from "@chakra-ui/react";
import Protected from './Protected'

const Cart = () => {
    const [data, setData] = useState([]);
     const [userInfo, setUserInfo] = useState({});
     const toast = useToast();
    useEffect(()=>{
      const cart=JSON.parse(localStorage.getItem('cart')) || []
      setData(cart)
       const userInfoTemp =
         JSON.parse(localStorage.getItem("userInfo")) || null;
       if (userInfoTemp) {
         setUserInfo(userInfoTemp);
       }

    },[])

    if(!userInfo.email){
      // toast({
      //    position:"top",
      //    description: "Please login to access Bag",
      //    status: "error",
      //    duration: 9000,
      //    isClosable: true,
      //  });
      //  return
      return <Protected />
    }
  return (
    <Box w='80%' m='auto'>
        {data.length==0?<EmptyCart />:<CartComponents data={data} />}
       
    </Box>
  )
}

export default Cart