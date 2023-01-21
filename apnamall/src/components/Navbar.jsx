import Image from 'next/image'
import React from 'react'
import Draw from './Drawer'
import styles from './Navbar.module.css'
import { Button } from '@chakra-ui/react'
import Hamburger from './Hamburger'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <div style={{ paddingRight: '10%' }} className={styles.invisible}>
        <Hamburger />
      </div>
      <div className={styles.red}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/th.jpg" alt="broken" width="80" height="80"></Image>
          </Link>
        </div>
        <div>
          <Draw />
        </div>
        <div className={styles.mall}>
          <input
            className={styles.search}
            placeholder="Search for a Product, Brand or Category"
          />
        </div>
        <div>
          {' '}
          <Button colorScheme="blue" variant="outline">
            My Orders
          </Button>
        </div>
        <div>
          <Button colorScheme="blue" variant="outline">
            <Link href="/cart"> Bag</Link>
          </Button>
        </div>
        <div>
          <Button colorScheme="blue" variant="outline">
            <Link href="/login"> Log In/Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
