import { Box, Input, Stack } from '@chakra-ui/react'
import React from 'react'

const ShippingForm = () => {
  return (
    <Stack gap='20px' textAlign='center'>
        <Input placeholder='House Number' />
        <Input placeholder='Street Address' />
        <Input placeholder='City' />
        <Input placeholder='State' />
        <Input placeholder='Pincode' type='number' />
    </Stack>
  )
}

export default ShippingForm