import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "../../styles/slider.extra.module.css"
import { Image } from "@chakra-ui/react";

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

const TopSlider = ({ DataArray }) => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        // autoplayTimeout: 3000,
        navSpeed: 500,
        slideBy: 1,
        animateIn: 'wobble',
        animateOut: 'wobble',
        smartSpeed: 1000,
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
                items: 1,
            },
            600: {
                items: 1,
            },
            800: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        }
    }
    // style = {{ backgroundColor: "none" }}
    return (
        <div className={styles.top_slider_main_div}>
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
                                        <div>

                                            <span >
                                                <Image

                                                    id={"img" + Date.now()}
                                                    src={product.image}
                                                    alt={product.text}
                                                    // title={product.text}
                                                    width=''
                                                    height=""
                                                />
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
export default TopSlider;
