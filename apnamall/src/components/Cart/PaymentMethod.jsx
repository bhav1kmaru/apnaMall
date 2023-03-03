import { Box, Button, Flex, Input, Select, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const PaymentMethod = ({setStep,total}) => {
    const [online,setOnline]=useState(false)
    const [cardDetails,setCardDetails]=useState({num:"",name:"",exp:"",cvv:""})
    const [payment,setPayment]=useState(false)
  return (
    <Stack gap="20px">
      <Select
        onChange={(e) => {
          if (e.target.value === "2") {
            setOnline(true);
          } else if(e.target.value==="1"){
            setOnline(false);
            setPayment(true)
          }else{
            setOnline(false);
            setPayment(false)
          }
        }}
      >
        <option>Choose Payment Method</option>
        <option value="1">Cash On Delivery</option>
        <option value="2">Credit Card</option>
      </Select>
      <Button
        display={online ? "none" : "block"}
        isDisabled={!payment}
        onClick={() => {
          setStep((prevStep) => prevStep + 1);
          localStorage.removeItem("cart");
        }}
        bgColor="#dd6b20"
        color="white"
      >
        Next
      </Button>
      <Stack display={online ? "block" : "none"} gap="10px">
        <Text color="red">*All Fields Are Required</Text>
        <Input
          value={cardDetails.num}
          onChange={(e) =>
            setCardDetails({ ...cardDetails, num: e.target.value })
          }
          placeholder="Card Number (16 Digits)"
          type="number"
        />
        <Input
          value={cardDetails.name}
          onChange={(e) =>
            setCardDetails({ ...cardDetails, name: e.target.value })
          }
          placeholder="Name on Card"
          type="text"
        />
        <Flex gap="20px">
          <Input
            value={cardDetails.exp}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, exp: e.target.value })
            }
            placeholder="Expiry Date"
          />
          <Input
            value={cardDetails.cvv}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cvv: e.target.value })
            }
            placeholder="CVV (3 Digits)"
            type="number"
          />
        </Flex>
      </Stack>
      <Text color="red" display={cardDetails.cvv.length > 3 ? "block" : "none"}>
        *CVV should be of 3 digits only.
      </Text>
      <Text
        color="red"
        display={cardDetails.num.length > 16 ? "block" : "none"}
      >
        *Card Number should be of 16 digits only.
      </Text>
      <Button
        display={online ? "block" : "none"}
        isDisabled={
          cardDetails.num.length != 16 ||
          cardDetails.cvv.length != 3 ||
          cardDetails.name == "" ||
          cardDetails.exp == ""
        }
        onClick={() => {
          setStep((prevStep) => prevStep + 1);
          localStorage.removeItem("cart");
        }}
        bgColor="#dd6b20"
        color="white"
      >
        Pay ₹{total + 50}
      </Button>
    </Stack>
  );
}

export default PaymentMethod