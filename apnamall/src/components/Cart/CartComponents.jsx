import { Box, Button, Center, Flex, Image, Input, Link, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data123 } from './data'
// import { Link } from 'react-router-dom'

import PaymentModal from './PaymentModal'
import ProductCard from './ProductCard'
import { useMediaQuery } from './useMediaQuery'



const CartComponents = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [coupon, setCoupon] = useState(false);
  const isMd = useMediaQuery(960);

  const getData = async () => {
    // let res = await axios.get("https://apnamallcart.vercel.app/cart");
    // // console.log(res.data);
    // setData(res.data);
    // let data2=res.data
    setData(JSON.parse(localStorage.getItem('cart')) || [])
    let sum = 0;
    data.forEach((el) => {
      sum += el.price;
    });
    setTotal(sum);
    console.log(sum)
    console.log(total)
  };
  
  

  useEffect(() => {
    getData();
  }, [data]);
  return (
    <Center mt="100px" p="20px">
      <Stack direction={isMd ? "column" : "row"} gap="20px">
        <Stack gap="20px">
          <Flex
            justifyContent="space-between"
            bgColor="white"
            p="20px"
            borderRadius="7px"
            border="1px solid pink"
          >
            <img src="https://img.icons8.com/ios-glyphs/30/dd6b20/shopping-cart--v1.png" />
            <Text>Offers Available(1)</Text>
            <Link>View All</Link>
          </Flex>
          <hr />
          <Text fontSize="xl">My Cart ({data.length})</Text>
          {data.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.title}
              price={item.price}
            />
          ))}
        </Stack>
        <Stack gap="10px">
          <Flex gap="10px" p="10px" border="1px solid #bfc6c9">
            <img src="https://img.icons8.com/external-gradient-flat-deni-mao/50/null/external-Secure-payment-online-shopping-gradient-flat-deni-mao.png" />
            <Stack>
              <Text>100% Safe Payments</Text>
              <Text>Genuine Products | Easy Returns</Text>
            </Stack>
          </Flex>
          <Flex gap="10px">
            <Input placeholder="Coupon Code" />
            <Button
              onClick={() => setCoupon(true)}
              bgColor="#dd6b20"
              color="white"
            >
              Apply
            </Button>
          </Flex>
          <hr />

          <Text as="b">Price</Text>
          <Flex gap="40px">
            <Stack>
              <Text as="b">Total</Text>
              <Text as="b">Shipping Charges</Text>
            </Stack>
            <Stack>
              <Text as="b">₹{total}</Text>
              <Text as="b">₹50</Text>
            </Stack>
          </Flex>
          <hr />
          <Flex gap="40px">
            <Stack>
              <Text as="b">Order Total</Text>
              <Text as="b" display={coupon ? "block" : "none"}>
                You Save
              </Text>
              <Text as="b" display={coupon ? "block" : "none"}>
                Grand Total
              </Text>
            </Stack>
            <Stack>
              <Text as="b">₹{total + 50}</Text>
              <Text as="b" display={coupon ? "block" : "none"}>
                ₹100
              </Text>
              <Text as="b" display={coupon ? "block" : "none"}>
                ₹{total + 50 - 100}
              </Text>
            </Stack>
          </Flex>
          <PaymentModal total={total} />
        </Stack>
      </Stack>
    </Center>
  );
}

export default CartComponents