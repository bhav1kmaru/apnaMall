import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { BsBag, BsFillBagFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};



function Rating({ rating, numReviews }) {
  return (
    <Flex d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Flex>
  );
}

function ProductsCard({title,image,brand,price,striked_price,rating,discount,totalRatings,addToCart,key,id}) {

  const [added,setAdded]=useState(false)
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.200"
        />

        <Link href={`/products/${id}`}>
          <Image src={image} alt={`Picture of ${title}`} roundedTop="lg" />
        </Link>

        <VStack w="100%">
          <Box>
            <Rating rating={rating} numReviews={totalRatings} />
          </Box>
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="purple">
              {brand}
            </Badge>
          </Box>
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>
          <Flex gap="5px">
            <Text as="span" color={"gray.600"} fontSize="lg">
              ₹{price}
            </Text>
            <Text color="red" as="del">
              ₹{striked_price}
            </Text>
            <Text color="red">{discount}</Text>
          </Flex>

          <Flex
            onClick={() => {
              addToCart({ image, title, price,id });
              setAdded(true);
            }}
            p="10px"
            w="100%"
            justifyContent="center"
            gap="10px"
            backgroundColor="orange"
            color="black"
            _hover={{
              cursor: "pointer",
              backgroundColor: "#e85718",
              color: "black",
            }}
          >
            <Icon as={BsBag} h={7} w={7} alignSelf={"center"} />
            <Text fontSize="lg">{added ? "Added" : "Add to Bag"}</Text>
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
}

export default ProductsCard;

