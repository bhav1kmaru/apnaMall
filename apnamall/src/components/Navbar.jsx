import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import Draw from './Drawer'
import styles from './Navbar.module.css'
import { Box, Button, Link } from '@chakra-ui/react'
import Hamburger from './Hamburger'

import UserDisplayComponent from './UserDisplayComponent'
import { BsBag } from 'react-icons/bs'
import { MdNotes } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'
import { CartContext } from '../contexts/CartContext'


const Navbar = () => {
  const {cartLength}=useContext(CartContext)
  const [searchInput,setSearchInput]=useState("")
  const [data,setData]=useState([])

  // const searchFunc=()=>{
  //   let id;
  //   if(id){
  //     clearTimeout(id)
  //   }
  //   id=setTimeout(()=>{
  //     handleSearch()
  //   },3000)
  // }

  // const handleSearch=()=>{
  //   console.log(searchInput)
  // }
  const getSearchData=async(value)=>{
    const response = await axios.get(`https://apnamallproducts.vercel.app/allproducts?_limit=10`);
    console.log(response.data)
    const data2=response.data
    
    const filteredData=data2.filter((el)=>el.title.includes(value) || el.brand.includes(value))
    setData(filteredData)
    console.log(filteredData)
  }
 
  useEffect(()=>{
     if(searchInput!=""){
      const getData = setTimeout(() => {
        getSearchData(searchInput[0].toUpperCase()+searchInput.substring(1));
      }, 1000);

      return () => clearTimeout(getData);
     };

    
  },[searchInput])
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
            placeholder="Search for a Product"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <Box
            display={data.length > 0 ? "block" : "none"}
            overflowY="scroll"
            w="45%"
            bgColor="white"
            position="absolute"
            // left="440px"
            // top="60px"
            // zIndex="10"
            m='auto'
          >
            {data.map((item) => (
              <Link key={item.id} href={`/products/${item.id}`}>
                <h1>{item.title}</h1>
              </Link>
            ))}
          </Box>
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
