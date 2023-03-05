// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Flex, GridItem, Heading } from "@chakra-ui/layout";
// import { Box, Grid, Icon, Text, Button, Image, Input } from "@chakra-ui/react";
// import { WarningIcon } from "@chakra-ui/icons";
// import ReactStars from "react-rating-stars-component";
// // import BasicUsage from '../components/BasicUsage'


// const Cart = () => {
//   const [data, setData] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [subTotal, setSubTotal] = useState(0);
//   const [promoApplied, setPromoApplied] = useState(false);

//   const hanldeDeleteInCart = (id) => {
//     axios
//       .delete(`https://apnamallcart.vercel.app/cart/${id}`)

//       .then((res) => {
//         // console.log(res.data);
//         setData(res.data);
//       })
//       .catch((e) => console.log(e));
//   };

//   const getData = async () => {
//     let res = await axios.get("https://apnamallcart.vercel.app/cart");
//     // console.log(res.data);
//     setData(res.data);
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     let sum = 0;
//     for (let i of data) {
//       sum += i.price;
//     }
//     // console.log(sum);
//     setSubTotal(Math.ceil(sum));
//     setTotal(Math.ceil(sum));
//   },[]);
//   return (
//     <Flex
//       templateColumns={"repeat(3, 1fr)"}
//       display={{ md: "flex" }}
//       border={"0px solid red"}
//       gap={10}
//       padding={10}
//     >
//       {/* Cart items */}

//       <GridItem
//         mt={{ base: 4, md: 0 }}
//         ml={{ md: 6 }}
//         border={"0px black solid"}
//         w="70%"
//         p={0}
//       >
//         {data.map(({ id, title, image, price, rating }) => {
//           return (
//             <Flex
//               key={id}
//               gap={5}
//               alignItems={"center"}
//               p={2}
//               justifyContent="center"
//               border={"0px solid red"}
//               marginBottom={10}
//               borderRadius={10}
//               shadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
//             >
//               <Box
//                 h={100}
//                 alignItems="center"
//                 textAlign="center"
//                 w="20%"
//                 border={"0px solid blue"}
//               >
//                 <Image
//                   margin="auto"
//                   src={image}
//                   border={"0px solid green"}
//                   h="80px"
//                   w="80px"
//                 />
//               </Box>
//               <Box w="50%" border={"0px solid green"}>
//                 <Text>{title}</Text>
//                 <Text fontSize={16} fontWeight="bold">
//                   ₹ {price}
//                 </Text>
//                 <ReactStars {...rating} />
//               </Box>
//               <Box w="18%" border={"0px solid green"}>
//                 <Flex
//                   borderRadius="30px"
//                   bgColor={"#ccc"}
//                   marginBottom="10px"
//                   h="30px"
//                   border={"0px solid red"}
//                   justifyContent="space-between"
//                 >
//                   <Button borderRightRadius="none" h="100%">
//                     +
//                   </Button>
//                   <Text> 0 </Text>
//                   <Button borderLeftRadius="none" h="100%">
//                     -
//                   </Button>
//                 </Flex>
//                 <Button
//                   borderRadius={4}
//                   onClick={() => hanldeDeleteInCart(id)}
//                   color={"#ffffff"}
//                   bgColor={"black"}
//                   fontSize={"10px"}
//                   h="30px"
//                   w="100%"
//                 >
//                   Remove From Cart
//                 </Button>
//               </Box>
//             </Flex>
//           );
//         })}
//       </GridItem>

//       <GridItem p={1} border={"0px solid red"} w="30%">
//         <Box
//           shadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
//           border={"0px solid green"}
//           borderRadius={10}
//           padding={5}
//         >
//           <Box border={"0px solid teal"}>
//             <Flex
//               h="40px"
//               fontSize={22}
//               fontWeight="bold"
//               alignItems="center"
//               marginBottom={5}
//               justifyContent={"space-between"}
//               border={"0px solid teal"}
//             >
//               <Text>Subtotal</Text>
//               <Text>₹ {subTotal}</Text>
//             </Flex>

//             {promoApplied === false ? (
//               <Flex
//                 h="40px"
//                 marginBottom={5}
//                 justifyContent={"space-between"}
//                 border={"0px solid teal"}
//               >
//                 <Input border={"1px solid gray"} placeholder="Promo code" />
//                 <Button
//                   onClick={() => setPromoApplied(true)}
//                   borderRadius="4px"
//                 >
//                   Apply
//                 </Button>
//               </Flex>
//             ) : (
//               <Flex
//                 alignItems="center"
//                 marginBottom={5}
//                 h="40px"
//                 justifyContent={"space-between"}
//                 border={"0px solid teal"}
//               >
//                 <Text>PAYTM20</Text>
//                 <Text fontWeight="bold" color={"green"}>
//                   - ₹ {(20 * total) / 100}
//                 </Text>
//               </Flex>
//             )}
//             <Flex
//               alignItems="center"
//               justifyContent={"space-between"}
//               border={"0px solid teal"}
//             >
//               <Text fontSize={22} fontWeight="bold">
//                 Total
//               </Text>
//               <Heading colSpan={"1 , 3"} fontWeight="bold">
//                 ₹ {promoApplied ? Math.ceil(total - (20 * total) / 100) : total}
//               </Heading>
//             </Flex>
//             <Flex borderTop={"1px dashed black"}>
//               <Text paddingTop={2} color={"green"} alignItems={""} colSpan={2}>
//                 {promoApplied
//                   ? `You will save ₹ ${(20 * total) / 100} on this order`
//                   : null}
//               </Text>
//             </Flex>

//             <Grid justifyContent={"center"}>
//               <Box>
//                 {/* <BasicUsage /> */}
//               </Box>
//             </Grid>
//           </Box>
//         </Box>
//         <Flex color={"gray"} alignItems={"center"} border={"0px solid red"}>
//           <Icon padding={10} as={WarningIcon} />
//           <Text>
//             Safe and Secure Payments.Easy returns.100% Authentic products.
//           </Text>
//         </Flex>
//       </GridItem>
//     </Flex>
//   );
// };

// export default Cart;

import React from 'react'
import Cart from '../components/Cart/Cart'

const cart = () => {
  return (
    <div>
      <Cart />
    </div>
  )
}

export default cart
