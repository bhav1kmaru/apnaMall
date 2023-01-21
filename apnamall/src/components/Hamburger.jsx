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
} from '@chakra-ui/react'
import Draw from './Drawer'
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
        <Image src="/th.jpg" alt="broken" width="80" height="80"></Image>
      </div>
      <Button colorScheme="blue" onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            {' '}
            <div style={{ height: '50px' }}>
              <Image src="/th.jpg" alt="broken" width="80" height="80"></Image>
            </div>
          </DrawerHeader>
          <DrawerBody>
            <div style={{ width: '100%' }}>
              <Draw />
            </div>
            <div style={{ width: '100%' }}>
              <input
                className={styles.search}
                placeholder="Search for a Product, Brand or Category"
              />
            </div>
            <div style={{ width: '100%' }}>
              {' '}
              <Button w={'100%'} colorScheme="teal" variant="outline">
                My Orders
              </Button>
            </div>
            <div style={{ width: '100%' }}>
              <Button w={'100%'} colorScheme="teal" variant="outline">
                cart
              </Button>
            </div>
            <div style={{ width: '100%' }}>
              <Button w={'100%'} colorScheme="teal" variant="outline">
                Log In/Sign Up
              </Button>
            </div>
            <div style={{ width: '100%' }}>
              <Button w={'100%'} colorScheme="teal" variant="outline">
                Team Info
              </Button>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Hamburger
