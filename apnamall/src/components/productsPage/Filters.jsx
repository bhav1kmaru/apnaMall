import { Box, Checkbox, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'


const Filters = ({minPrice,maxPrice,minSlider,maxSlider,minDiscount,minDiscountSlider}) => {
    
    
  return (
    <Box mt="200px" p="10px" border="1px solid #eaeaec">
      <VStack>
        <h1>Sory By:</h1>
        <select>
          <option>Select an option</option>
          <option value="price_l2h">Price (low to high)</option>
          <option value="price_h2l">Price (hight to low)</option>
          <option value="discount">Highest Discount</option>
          <option value="rating">Rating</option>
        </select>
        <h1>Price Range</h1>
        <label>Min. Price ₹{minPrice}</label>
        <input
          type="range"
          min="1"
          max="5000"
          value={minPrice}
          onChange={(e) => minSlider(e.target.value)}
        />
        <label>Max. Price ₹{maxPrice}</label>
        <input
          type="range"
          min="1"
          max="5000"
          value={maxPrice}
          onChange={(e) => maxSlider(e.target.value)}
        />
        <label>Min. Discount {minDiscount}%</label>
        <input
          type="range"
          min="0"
          max="80"
          value={minDiscount}
          onChange={(e) => minDiscountSlider(e.target.value)}
        />
        <h1>Brand</h1>

        <ul style={{ listStyle: "none" }}>
          <li>
            <Checkbox>Levi{"'"}s</Checkbox>
          </li>
          <li>
            <Checkbox>BIBA</Checkbox>
          </li>
          <li>
            <Checkbox>UCB</Checkbox>
          </li>
          <li>
            <Checkbox>FBB</Checkbox>
          </li>
          <li>
            <Checkbox>ONLY</Checkbox>
          </li>
        </ul>
        <h1>Rating</h1>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Checkbox>2 Stars</Checkbox>
          </li>
          <li>
            <Checkbox>3 Stars</Checkbox>
          </li>
          <li>
            <Checkbox>4 Stars</Checkbox>
          </li>
          <li>
            <Checkbox>5 Stars</Checkbox>
          </li>
        </ul>
      </VStack>
    </Box>
  );
}

export default Filters