import { Box, Flex, Input, Select, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'

const PaymentMethod = () => {
    const [online,setOnline]=useState(false)
  return (
    <Stack gap="20px">
      <Select
        onChange={(e) => {
          if (e.target.value === "2") {
            setOnline(true);
          } else {
            setOnline(false);
          }
        }}
      >
        <option>Choose Payment Method</option>
        <option value="1">Cash On Delivery</option>
        <option value="2">Credit Card</option>
      </Select>
      <Stack display={online?"block":"none"} gap='10px'>
        <Input placeholder="Card Number" type="number" />
        <Input placeholder="Name on Card" type="text" />
        <Flex gap="20px">
          <Input placeholder="Expiry Date" />
          <Input placeholder="CVV" type="number" />
        </Flex>
      </Stack>
    </Stack>
  );
}

export default PaymentMethod