import NotPay, { Pay } from "@/pages/cart/alert";
import { Box, Button, Grid, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const DebitCard = () => {
  const [cardNo, setCardNo] = useState();
  const handleChange = (e) => {
    console.log("handleChange", e.target.value);
    setCardNo(e.target.value);
  };
  return (
    <>
      <Box
        fontWeight={"semibold"}
        margin={"auto"}
        w="35%"
        border={"0px solid "}
      >
        <Text marginBottom={3}>Card Holder Name</Text>
        <Input marginBottom={3} placeholder="Name" />
        <Text marginBottom={3}>Enter your card Number</Text>
        <Input
          marginBottom={3}
          placeholder="Enter Card Number"
          type="number"
          onChange={handleChange}
          value={cardNo}
        ></Input>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={10}>
          <Box>
            <Text marginBottom={3}>MM/YYYY</Text>
            <Input marginBottom={3} type="month" name="foo" placeholder="foo" />
          </Box>
          <Box>
            <Text marginBottom={3}>CVV</Text>
            <Input marginBottom={3} type="number" placeholder="CVV" />
          </Box>
        </Grid>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={10}>
          <Button
            marginTop={5}
            shadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
            colorScheme="blue"
          >
            Cancle
          </Button>
          {cardNo ? <Pay /> : <NotPay />}
        </Grid>
      </Box>
    </>
  );
};
export default DebitCard;
