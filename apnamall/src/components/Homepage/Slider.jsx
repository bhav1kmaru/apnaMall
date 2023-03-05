import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "../../styles/slider.extra.module.css";
import Image from "next/image";
import { Skeleton, SkeletonCircle } from "@chakra-ui/react";

import Link from "next/link";


var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = ({ DataArray }) => {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        navSpeed: 300,
        dotsSpeed: 500,
        slideBy: 3,
        smartSpeed: 500,
        navClass: ["owl-prev", "owl-next"],
        navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            100: {
                items: 1,
            },
            200: {
                items: 2,
            },
            300: {
                items: 3,
            },

            400: {
                items: 4,
            },
            500: {
                items: 5,
            },

            600: {
                items: 6,
            },
            700: {
                items: 7,
            },
            800: {
                items: 8,
            },
            900: {
                items: 9,
            },

            1000: {
                items: 10,
            },
            1050: {
                items: 10,
            },
            1200: {
                items: 10,
            },
        },
    };
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 3000);
    }, [])

    return isLoaded ? (
        <div>
            <div
                id="owl-carousel-products" className="owl-carousel owl-loaded owl-drag"
            >
                <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag" >
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={0}
                        nav={true}
                        navText={[
                            '<img src="/images/Arrow_left.png" />',
                            '<img src="/images/Arrow_right.png" />',
                        ]}
                        dots={false}
                        animateIn={true}
                        {...options}
                    >
                        {DataArray && DataArray.length > 0
                            ? DataArray.map((product) => (

                                <div
                                    id="featuredProducts"
                                    key={"img" + Date.now() + Math.random().toString()}
                                >
                                    {/* <SkeletonCircle
                                        height='100px'
                                        width='100px'
                                        // isLoaded={isLoaded}
                                        // bg='lightskyblue'
                                        color='white'
                                        fadeDuration={1}
                                    > */}
                                    <div className={styles.round_image_cr}>

                                        <span >
                                            <img className={styles.small_slider_items}
                                                id={"img" + Date.now()}
                                                src={product.image}
                                                alt={product.text}
                                            // title={product.text}
                                            // width={10}
                                            // height={10}
                                            ></img>
                                        </span>
                                        <p className={styles.title_text}>
                                            {product.text}
                                        </p>
                                    </div>
                                    {/* </SkeletonCircle> */}
                                </div>
                            ))
                            : ""}
                    </OwlCarousel>
                </ul>
            </div>
        </div>
    ) : (
        // <div>
            <div

            >
                <ul>
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={0}
                        nav={true}
                        navText={[
                            '<img src="/images/Arrow_left.png" />',
                            '<img src="/images/Arrow_right.png" />',
                        ]}
                        dots={false}
                        animateIn={true}
                        {...options}
                    >
                        {DataArray && DataArray.length > 0
                            ? DataArray.map((product) => (

                                <div
                                    id="featuredProducts"
                                    key={"img" + Date.now() + Math.random().toString()}
                                >
                                    <SkeletonCircle
                                        height='100px'
                                        width='100px'
                                        // isLoaded={isLoaded}
                                        // bg='lightskyblue'
                                        color='white'
                                        fadeDuration={1}
                                    >
                                        <div className={styles.round_image_cr}>

                                            <span >
                                                <img className={styles.small_slider_items}
                                                    id={"img" + Date.now()}
                                                    src={product.image}
                                                    alt={product.text}
                                                // title={product.text}
                                                // width={10}
                                                // height={10}
                                                ></img>
                                            </span>
                                            <p className={styles.title_text}>
                                                {product.text}
                                            </p>
                                        </div>
                                    </SkeletonCircle>
                                </div>
                            ))
                            : ""}
                    </OwlCarousel>
                </ul>
            </div>
        // </div>
    )
 
};
export default Slider;
