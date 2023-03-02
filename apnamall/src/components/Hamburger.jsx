import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
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
} from '@chakra-ui/react'
import Draw from './Drawer'
import UserDisplayComponent from './UserDisplayComponent'
const Hamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('top')

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
      <div>
        <Image
          src="/apnaLogoFinal.png"
          alt="broken"
          width="80"
          height="80"
        ></Image>
      </div>
      <div>
        <UserDisplayComponent />
      </div>
      <Button colorScheme="blue" onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            {" "}
            <div style={{ height: "50px" }}>
              <Image
                src="/apnaLogoFinal.png"
                alt="broken"
                width="80"
                height="80"
              ></Image>
            </div>
          </DrawerHeader>
          <DrawerBody>
            <div style={{ widht: "100%", marginBottom: "10px" }}>
              <Draw />
            </div>
            {/* <div style={{ widht: "100%" }}>
              <input
                className={styles.search}
                placeholder="Search for a Product, Brand or Category"
              />
            </div> */}
            <div style={{ widht: "100%", marginBottom: "10px" }}>
              {" "}
              <Button w={"100%"} colorScheme="blue" variant="outline">
                My Orders
              </Button>
            </div>
            <div style={{ widht: "100%", marginBottom: "10px" }}>
              <Link href="/cart">
                <Button w={"100%"} colorScheme="blue" variant="outline">
                  Bag
                </Button>
              </Link>
            </div>
            <div style={{ widht: "100%", marginBottom: "10px" }}>
              <Link href="/login">
                <Button w={"100%"} colorScheme="blue" variant="outline">
                  Log In/Sign Up
                </Button>
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Hamburger
