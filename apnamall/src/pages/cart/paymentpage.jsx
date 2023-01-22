import { Box, Checkbox, Image, Flex, Grid, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import DebitCard from "@/components/Card/DebitCard";
import CrebitCard from "@/components/Card/CreditCard";
import UPI from "@/components/Card/UPI";

const Paymentpage = () => {
  const [card, setCard] = useState("Debit Card");
  return (
    <>
      <Flex>
        <Image src="https://cdn.logo.com/hotlink-ok/logo-social.png" w={100} h={100}/>
        <Heading p={4}>Payment Info</Heading>
      </Flex>
      <Flex
        p={4}
        gap={10}
        marginTop={10}
        justifyContent={"space-between"}
        border={"0px solid red"}
      >
        <Box fontWeight={"bold"} colSpan={1} border={"0px solid Black"} w="20%">
          <Box
            p={8}
            borderRadius={10}
            shadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
          >
            <Grid gap={3}>
              <Checkbox
                colorScheme="green"
                size="lg"
                isChecked={card === "Debit Card"}
                onChange={() => setCard("Debit Card")}
              >
                Debit Card
              </Checkbox>
              <Checkbox
                size="lg"
                colorScheme="green"
                isChecked={card === "Credit Card"}
                onChange={() => setCard("Credit Card")}
              >
                Credit Card
              </Checkbox>
              <Checkbox
                size="lg"
                colorScheme="green"
                isChecked={card === "UPI"}
                onChange={() => setCard("UPI")}
              >
                UPI
              </Checkbox>
              <Checkbox
                size="lg"
                colorScheme="green"
                isChecked={card === "Net Banking"}
                onChange={() => setCard("Net Banking")}
              >
                Net Banking
              </Checkbox>
            </Grid>
          </Box>
        </Box>
        <Box w="80%" colSpan={3} border={"0px solid teal"}>
          <Heading fontSize={20} marginBottom="8">
            Please Enter Your {card} details
          </Heading>

          <Flex justifyContent={"center"} border={"0px solid "}>
            {card === "Net Banking" ? (
              <h1>Net Banking</h1>
            ) : card === "UPI" ? (
              <UPI />
            ) : card === "Credit Card" ? (
              <CrebitCard />
            ) : card === "Debit Card" ? (
              <DebitCard />
            ) : null}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Paymentpage;
