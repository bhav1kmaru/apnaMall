import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "../../styles/slider.extra.module.css"
import Image from "next/image";

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

const Slider1 = ({ DataArray }) => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        loop: false,
        rewind: false,
        autoplay: false,
        navSpeed: 300,
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
            200: {
                items: 1,
            },
            400: {
                items: 2,
            },
            600: {
                items: 3,
            },
            800: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        }
    }
    // style = {{ backgroundColor: "none" }}
    return (
        <div className={styles.slider1_cmn_div}>
            <h1 className={styles.h1_title} > Grocery & Home Furnishing</h1>
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
                            ? DataArray.map((product) => {
                                return (
                                    <div
                                        id="featuredProducts"
                                        key={"img" + Date.now() + Math.random().toString()}
                                    >
                                        <div className={styles.round_image_cr}>

                                            <span >
                                                <img
                                                    id={"img" + Date.now()}
                                                    src={product.image}
                                                    alt={product.text}
                                                // title={product.text}
                                                // width={10}
                                                // height={10}
                                                ></img>
                                            </span>
                                            <span>
                                                <p className={styles.title_text1}>
                                                    {product.text}
                                                </p>

                                            </span>

                                        </div>
                                    </div>
                                );
                            })
                            : ""}
                    </OwlCarousel>
                </ul>
            </div>
        </div>
    )
};
export default Slider1;