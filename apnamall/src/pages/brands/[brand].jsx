import { Box, Flex, HStack, Select, SimpleGrid, Skeleton } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import Filters from '../../components/productsPage/Filters'
import ProductsCard from '../../components/productsPage/ProductsCard'
import { CartContext } from '../../contexts/CartContext'

const Brand = () => {
  
    const router=useRouter()
    const {query:{brand},}=router
    const [data,setData]=useState([])
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(5000);
    const [minDiscount,setMinDiscount]=useState(0)
    const [loading,setLoading]=useState(false)
    const {setCartLength}=useContext(CartContext)
    
   
    
    const minDiscountSlider=(value)=>{
      setMinDiscount(value)
    }
    const minSlider=(value)=>{
      setMinPrice(value)
    }
    const maxSlider=(value)=>{
      setMaxPrice(value)
    }
    const addToCart=async(data)=>{
      // let r =await fetch(`https://apnamallcart.vercel.app/cart`,{
      //   method: 'POST',
      //   body: JSON.stringify(data),
      //   headers: { 'Content-Type': 'application/json'}
      // });
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(data)
      setCartLength((prevLength)=>prevLength+1)
      localStorage.setItem('cart',JSON.stringify(cart))
      
    }
  
    const getData=async()=>{
      setLoading(true)
        let r = await fetch(`https://apnamallproducts.vercel.app/${brand}`);
        let data=await r.json()
        console.log(data)
        let data2=data.filter((el)=>{
          if(el.price>=minPrice && el.price<=maxPrice){
            return el
          }
        })
        if(minDiscount>0){
          let data3=data2.filter((el)=>{
            let temp=el.discount.trim().split("").map(Number)
            let temp2 = `${temp[1]}${temp[2]}`
            if(Number(temp2)>=minDiscount){
              return el
            }
          })
          setData(data3)
          return
          setLoading(false)
        }
        console.log(data)
        setData(data2)
        setLoading(false)
    }
    useEffect(()=>{
        getData()
    },[minPrice,maxPrice,minDiscount])

    if(loading){
      return (
        <Flex>
          <Box w="10%">
            <Filters
              minDiscountSlider={minDiscountSlider}
              minDiscount={minDiscount}
              minPrice={minPrice}
              maxPrice={maxPrice}
              maxSlider={maxSlider}
              minSlider={minSlider}
            />
          </Box>
          <SimpleGrid m="auto" columns={[1, 2, null, 3]} gap="10px" mt="100px">
            <Skeleton height="400px" width="300px" />
            <Skeleton height="400px" width="300px" />
            <Skeleton height="400px" width="300px" />
          </SimpleGrid>
        </Flex>
      );
    }
  return (
    <>
      <Flex>
        <Box w="10%">
          <Filters
            minDiscountSlider={minDiscountSlider}
            minDiscount={minDiscount}
            minPrice={minPrice}
            maxPrice={maxPrice}
            maxSlider={maxSlider}
            minSlider={minSlider}
          />
        </Box>
        <SimpleGrid m="auto" columns={[1, 2, null, 3]} gap="10px" mt="50px">
          {data.map((el) => (
           
              <ProductsCard
                addToCart={addToCart}
                key={el.id}
                image={el.image}
                title={el.title}
                price={el.price}
                rating={el.rating}
                brand={el.brand}
                striked_price={el.striked_price}
                discount={el.discount}
                totalRatings={el.totalratings}
                id={el.id}
              />
           
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default Brand