import React from 'react'
import { DataArray1, DataArray2, DataArray3, GroceryHomeFurnishing, Jewellery_Brands, topFlyer } from './data'
import Slider from './Slider'
import styles from '../../styles/slider.extra.module.css'
import Slider1 from './Slider1'
import { Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import NoSlider from './NoSlider'
import TopSlider from './TopSlider'
const HomePage = () => {
  return (
    <div >
      <TopSlider DataArray={topFlyer} />
      <Slider DataArray={DataArray1} />
      <Slider DataArray={DataArray2} />
      <Slider DataArray={DataArray3} />
      <Slider1 DataArray={GroceryHomeFurnishing} />
      <NoSlider DataArray={Jewellery_Brands}/>
    </div>
  )
}

export default HomePage

  // < div >

  // < Heading as='h1' size = 'md' fontSize = '25px' > Jewellery Brands</ >
  //   <Grid templateColumns='repeat(4, 1fr)' gap={9} w='95%' m="auto" textAlign='center'>
  //     {Jewellery_Brands.map((item) => (
  //       <GridItem key={"img" + Date.now() + Math.random().toString()}>
  //         <Image src={item.image} alt={item.text}></Image>
  //         <Heading as='h1' size='md' fontSize='25px'>{item.text}</Heading>
  //       </GridItem>
  //     ))}
  //   </Grid>
  //     </div >