
import React from 'react'
import { DataArray1, DataArray2, DataArray3, GroceryHomeFurnishing, Jewellery_Brands, topFlyer } from './data'
import Slider from './Slider'
import styles from '../../styles/slider.extra.module.css'
import Slider1 from './Slider1'
import NoSlider from './NoSlider'
import TopSlider from './TopSlider'
import { Box, Image, Skeleton } from '@chakra-ui/react'


const HomePage = () => {
  // const [isLoaded, setIsLoaded] = React.useState(false)
  return (

    <div >
      <Box m='auto' mt='80px' mb='-30px'>
        <Image className={styles.ipd_offer} src='https://assets.ajio.com/cms/AJIO/WEB/UHP-D-Urgency74Hrs-LiveNow-1440x128.jpg' alt='independent_day offer' />
      </Box>
      <TopSlider DataArray={topFlyer} />
      <div>
        <Image className={styles.ipd_offer} src='https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-freedel-allorders.jpg'
          alt="freedel"
          w={"90%"}
          m='auto'
          boxShadow='md' />
      </div>
      <div className={styles.slider_cmn_div}>
        <h1 className={styles.h1_title} >Fashion Brands</h1>
      </div>
      {/* <Skeleton
        height='40px'
        isLoaded={isLoaded}
        bg='green.500'
        color='white'
        fadeDuration={1}
      > */}
        <Slider DataArray={DataArray1} />

      {/* </Skeleton> */}

      <Slider DataArray={DataArray2} />
      <Slider DataArray={DataArray3} />
      <Slider1 DataArray={GroceryHomeFurnishing} />
      <NoSlider DataArray={Jewellery_Brands} />
      <Image className={styles.ipd_offer} src='https://slimages.macysassets.com/is/image/McomMedia/media/061021INTLHOMEPAGETEAMPLATEBANNER10301_1433052.png?scl=1&fmt=webp&wid=1750' alt='service' />

    </div>
  );
};

export default HomePage


