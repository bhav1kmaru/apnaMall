import { Box, Button, Input, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const ShippingForm = ({setStep}) => {
  const [address,setAddress]=useState({house:"",street:"",city:"",state:"",pincode:""})
  return (
    <Stack gap="20px" textAlign="center">
      <Text color="red">*All Fields Are Required</Text>
      <Input
        value={address.house}
        onChange={(e) => setAddress({ ...address, house: e.target.value })}
        placeholder="House Number"
      />
      <Input
        value={address.street}
        onChange={(e) => setAddress({ ...address, street: e.target.value })}
        placeholder="Street Address"
      />
      <Input
        value={address.city}
        onChange={(e) => setAddress({ ...address, city: e.target.value })}
        placeholder="City"
      />
      <Input
        value={address.state}
        onChange={(e) => setAddress({ ...address, state: e.target.value })}
        placeholder="State"
      />
      <Input
        value={address.pincode}
        onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
        placeholder="Pincode"
        type="number"
      />
      <Button
      isDisabled={address.state=="" || address.city=="" || address.house=="" || address.street=="" || address.pincode==""}
        onClick={() => {
          setStep((prevStep) => prevStep + 1);
        }}
        bgColor="#dd6b20"
        color="white"
      >
        Next
      </Button>
    </Stack>
  );
}

export default ShippingForm