import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Icon,
  RadioGroup,
  Radio,
  HStack,
  SkeletonCircle,
  SkeletonText
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import Reviews from "../../components/productsPage/Reviews";
import { BsBag, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import Link from "next/link";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

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

export default function ProductPage() {
  const [added, setAdded] = useState(false);
    const [product,setProduct]=useState({})
    const router=useRouter()
    const [size,setSize]=useState("M")
    const [loading,setLoading]=useState(false)
    const { setCartLength } = useContext(CartContext);
    const {query:{
        id
    }}=router
    const getData=async()=>{
      
        let r = await fetch(`https://apnamallproducts.vercel.app/allproducts/${id}`);
        let data = await r.json()
        setProduct(data)
       
    }
     const addToCart = async (data) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(data);
        setCartLength((prevLength) => prevLength + 1);
        localStorage.setItem("cart", JSON.stringify(cart));
     };
    useEffect(()=>{
        getData()
    },[product])

    if(loading){
      return (
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
      );
    }
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.brand} {product.title}
            </Heading>
            <Text
              color='black'
              fontWeight={300}
              fontSize={"2xl"}
            >
              ₹{product.price}
            </Text>
            <Text color="red" as="del">
              ₹{product.striked_price}
            </Text>
            <Text>{product.discount}</Text>
            <Link href='#reviews'>
              <Rating
                rating={product.rating}
                numReviews={product.totalratings}
              />
            </Link>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor='black'
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color='black'
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize={"lg"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text>
              <Flex gap="10px">
                <Text>Size:</Text>
                <RadioGroup onChange={setSize} value={size}>
                  <HStack gap="10px">
                    <Radio value="S">S</Radio>
                    <Radio value="M">M</Radio>
                    <Radio value="L">L</Radio>
                    <Radio value="XL">XL</Radio>
                  </HStack>
                </RadioGroup>
              </Flex>
              <Button
              isDisabled={added}
                onClick={() =>{
                  addToCart({
                    title: product.title,
                    image: product.image,
                    brand: product.brand,
                    price: product.price,
                  })
                  setAdded(true)
                }
                }
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg='black'
                color='white'
                backgroundColor="orange"
                textTransform={"uppercase"}
                display='flex'
                gap='10px'
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                <Icon as={BsBag} h={7} w={7} alignSelf={"center"} />{" "}
                {added?"Added":"Add to Bag"}
              </Button>
              <Text color='red' display={added?"block":"none"}>Product already in bag</Text>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
      <SimpleGrid columns={1}>
        <Box>
          <Text
            fontSize={{ base: "16px", lg: "18px" }}
            color="orange"
            fontWeight={"500"}
            textTransform={"uppercase"}
            mb={"4"}
          >
            Features
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <List spacing={2}>
              <ListItem>Chronograph</ListItem>
              <ListItem>Master Chronometer Certified</ListItem>{" "}
              <ListItem>Tachymeter</ListItem>
            </List>
            <List spacing={2}>
              <ListItem>Anti‑magnetic</ListItem>
              <ListItem>Chronometer</ListItem>
              <ListItem>Small seconds</ListItem>
            </List>
          </SimpleGrid>
        </Box>
        <Box>
          <Text
            fontSize={{ base: "16px", lg: "18px" }}
            color="orange"
            fontWeight={"500"}
            textTransform={"uppercase"}
            mb={"4"}
          >
            Product Details
          </Text>

          <List spacing={2}>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Between lugs:
              </Text>{" "}
              20 mm
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Bracelet:
              </Text>{" "}
              leather strap
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Case:
              </Text>{" "}
              Steel
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Case diameter:
              </Text>{" "}
              42 mm
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Dial color:
              </Text>{" "}
              Black
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Crystal:
              </Text>{" "}
              Domed, scratch‑resistant sapphire crystal with anti‑reflective
              treatment inside
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Water resistance:
              </Text>{" "}
              5 bar (50 metres / 167 feet){" "}
            </ListItem>
          </List>
        </Box>
        <Box id="reviews">
          <Reviews />
        </Box>
      </SimpleGrid>
    </Container>
  );
}
