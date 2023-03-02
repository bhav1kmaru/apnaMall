import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import Draw from './Drawer'
import styles from './Navbar.module.css'
import { Button } from '@chakra-ui/react'
import Hamburger from './Hamburger'
import Link from 'next/link'
import UserDisplayComponent from './UserDisplayComponent'
import { BsBag } from 'react-icons/bs'
import { MdNotes } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
import { CartContext } from '../contexts/CartContext'


const Navbar = () => {
  const {cartLength}=useContext(CartContext)
 
  useEffect(()=>{
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
  })
  return (
    <div>
      <div style={{ paddingRight: "10%" }} className={styles.invisible}>
        <Hamburger />
      </div>
      <div className={styles.red}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/apnaLogoFinal.png"
              alt="broken"
              width="140"
              height="140"
              style={{ margin: "10px" }}
            ></Image>
          </Link>
        </div>
        <div>
          <Draw />
        </div>
        <div className={styles.mall}>
          <input
            className={styles.search}
            placeholder="Search for a Product,Brand or Category"
          />
        </div>
        <div>
          {" "}
          <Button size="sm" colorScheme="blue" variant="outline">
            <MdNotes /> My Orders
          </Button>
        </div>
        <div>
          <Button colorScheme="blue" size="sm" variant="outline">
            <Link
              href="/cart"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textAlign: "center",
              }}
            >
              <BsBag /> Bag ({cartLength})
            </Link>
          </Button>
        </div>
        <div>
          <UserDisplayComponent />
        </div>
      </div>
    </div>
  );
}

export default Navbar
