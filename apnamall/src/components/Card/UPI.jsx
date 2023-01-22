import NotPay, { Pay } from "@/pages/cart/alert";
import { Box, Button, Grid, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const UPI = () => {
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
        <Text marginBottom={3}>UPI ID</Text>
        <Input
          marginBottom={3}
          placeholder="example@upi"
          onChange={handleChange}
          value={cardNo}
        />
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

export default UPI;
