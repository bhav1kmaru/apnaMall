import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  RadioGroup,
  Stack,
  Radio,
  Button,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { GiClothes } from "react-icons/gi";

function Draw() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  const brands=['peterengland','uspolo','jacknjones','levis','ucb','only','pantaloons']


  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        {/* <Stack direction="row" mb="4">
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack> */}
      </RadioGroup>
      <Button
        w={"100%"}
        variant="outline"
        colorScheme="blue"
        onClick={onOpen}
        style={{ display: "flex", gap: "10px" }}
      >
        <GiClothes /> Shop By Category
      </Button>
      <Drawer mt="100" placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Brands & Categories</DrawerHeader>
          <DrawerBody>
            <Stack>
              {brands.map((el) => (
                <Link key={el} href={`/brands/${el}`}>
                  {el}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Draw;
