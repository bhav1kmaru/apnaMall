import React from "react";
import {
  DataArray1,
  DataArray2,
  DataArray3,
  GroceryHomeFurnishing,
  Jewellery_Brands,
  topFlyer,
} from "./data";
import Slider from "./Slider";
import styles from "../../styles/slider.extra.module.css";
import Slider1 from "./Slider1";
import NoSlider from "./NoSlider";
import TopSlider from "./TopSlider";
import { Image } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <div>
      <TopSlider DataArray={topFlyer} />
      <div>
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-freedel-allorders.jpg"
          alt="freedel"
          w={"90%"}
          m="auto"
          boxShadow="md"
        />
      </div>
      <div className={styles.slider_cmn_div}>
        <h1 className={styles.h1_title}>Fashion Brands</h1>
      </div>
      <Slider DataArray={DataArray1} />
      <Slider DataArray={DataArray2} />
      <Slider DataArray={DataArray3} />
      <Slider1 DataArray={GroceryHomeFurnishing} />
      <NoSlider DataArray={Jewellery_Brands} />
    </div>
  );
};

export default HomePage;
