import Image from 'next/image'
import React from 'react'
import Draw from './Drawer'
import styles from './Navbar.module.css'
import { Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div className={styles.red}>
      <div>
        <Image src="/apnaMallLogo.png" alt="broken" width="120" height="120" />
      </div>
      <div>
        <Draw />
      </div>
      <div style={{ width: '45%' }}>
        <input
          className={styles.search}
          placeholder="Search for a Product, Brand or Category"
        />
      </div>
      <div>
        {' '}
        <Button colorScheme="teal" variant="outline">
          My Orders
        </Button>
      </div>
      <div>
        <Button colorScheme="teal" variant="outline">
          cart
        </Button>
      </div>
      <div>
        <Button colorScheme="teal" variant="outline">
          Log In/Sign Up
        </Button>
      </div>
    </div>
  )
}

export default Navbar
